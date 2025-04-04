<script setup>
import TheFilter from "~/components/UI/TheFilter.vue"
import TheUserStats from "~/components/User/UserUI/TheUserStats.vue"
import {useUserStore} from "~/stores/users";
import {useAuthStore} from "~/stores/auth";
import TheModal from "~/components/UI/TheModal.vue";
import TheSearch from "~/components/UI/TheSearch.vue";

const loadCurrentUser = useAuthStore()
const userList = useUserStore()
const phone = ref('')
const params = {
  page: 1,
  limit: 15,
  query: '',
  user_type: 'user-list'
}

defineProps({
  userChecked: {
    type: String,
    default: 'user-list'
  },
  showUserInfo: {
    type: Boolean,
    default: false,
  }
})

function loadPage(page) {
  if (page === '<') {
    if (Number(params.page) > 1) {
      params.page -= 1;
    }
  } else if (page === '>') {
    if (Number(params.page) < userList.user.number_of_pages) {
      params.page = Number(params.page) + 1
    }
  } else {
    if (Number(page) <= userList.user.number_of_pages) {
      params.page = Number(page)
    }
  }
  if (window.innerWidth > 1000) {
    window.scrollTo({top: 600})
  } else if (window.innerWidth < 1000) {
    window.scrollTo({top: 895})
  } else {
    window.scrollTo()
  }
}

onMounted(() => {
  navigateTo({
    params: {
      page: params.page
    }
  })
})
watchSyncEffect(() => {
  if (loadCurrentUser.user.role?.name_en === 'admin') {
    userList.loadAdminList({page: params.page, limit: params.limit, query: params.query})
  } else if(loadCurrentUser.user.role?.name_en === 'company_admin') {
    userList.loadUserList({
      page: params.page,
      limit: params.limit,
      query: params.query
    })
  }
})
</script>

<template>
  <div class="">
    <div :class="{'flex flex-wrap items-center justify-between' :['company_admin', 'admin'].includes( loadCurrentUser.user.role?.name_en )}">
      <div class="mb-10 mt-12 text-lg flex gap-x-10">
        <p class="dark:text-white tracking-widest" v-if="loadCurrentUser.user.role?.name_en === 'admin'">
          {{ $t('Список администраторов компании') }}</p>
        <p class="dark:text-white tracking-widest " v-else>{{ $t('Список всех пользователей компании') }}</p>
      </div>
      <div
        :class="{'flex items-center justify-evenly my-10' : loadCurrentUser.user.role?.name_en === 'admin', 'w-2/12 max-lg:w-4/12 max-sm:w-full max-sm:mb-6 max-sm:mx-auto' : loadCurrentUser.user.role_en !== 'admin'}">
        <div class="flex gap-x-10" v-if="loadCurrentUser?.user.role === 'Администратор сайта'">
          <button class="p-2 rounded-xl dark:text-white tracking-widest font-bold"
                  :class="{'bg-blueDarkSemiLight text-white' : userChecked === 'user-list'}"
                  @click="userChecked = 'user-list'; userList.loadUserList({page: userList.page, limit: params.limit, user_type: userChecked})">
            {{ $t('Все пользователи') }}
          </button>
          <button class="p-2 rounded-xl dark:text-white tracking-widest font-bold"
                  :class="{'bg-blueDarkSemiLight text-white' : userChecked === 'admin-list'}"
                  @click="userChecked = 'admin-list'; userList.loadAdminList({page: userList.page, limit: params.limit})">
            {{ $t('Администраторы компаний') }}
          </button>
        </div>
        <UserCreate></UserCreate>
      </div>
    </div>
    <div class="w-full ">
      <div class="flex gap-x-10 max-lg:flex-wrap max-md:justify-center">
        <div class="flex w-9/12 justify-between max-lg:justify-center gap-x-10 items-center max-md:flex-wrap max-md:mt-10 max-md:justify-center">
          <TheSearch class="w-full" v-model:model-value="params.query" @search="userList.loadUserList(params)"/>
          <TheFilter></TheFilter>
        </div>
      </div>
      <div class="flex max-md:flex-wrap justify-center max-md:mt-10">
        <div class="flex flex-wrap gap-x-6 max-md:order-2 max-lg:justify-center">
          <UserContentList v-if="userList?.get_user_list.count > 0" v-for="userItem in userList?.get_user_list.results" :user-item="userItem" class="max-md:w-full"></UserContentList>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-x-4 mt-10">
      <div v-if="userList.get_user_list.count > 5" v-for="(page, id) in userList?.get_user_list?.links" :key="id"
           class="px-4 py-2 rounded-full cursor-pointer"
           :class="{'bg-blue-400 text-white' : page.active, 'bg-gray-200 text-black' : !page.active}"
           @click="loadPage(page.label); userList?.loadUserList({page: params.page, limit: params.limit, user_type: loadCurrentUser.user.role_en !== 'admin' ? 'user-list/my-company' : userChecked, query: params.query})">
        {{ page.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>