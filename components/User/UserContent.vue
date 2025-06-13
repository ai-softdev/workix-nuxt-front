<script setup>
import TheFilter from "~/components/UI/TheFilter.vue"
import TheUserStats from "~/components/User/UserUI/TheUserStats.vue"
import {useUserStore} from "~/stores/users";
import {useAuthStore} from "~/stores/auth";
import TheModal from "~/components/UI/TheModal.vue";
import TheSearch from "~/components/UI/TheSearch.vue";

import Paginate from 'vuejs-paginate-next';
import {useRoute, useRouter} from "vue-router";

const loadCurrentUser = useAuthStore()
const userList = useUserStore()
const phone = ref('')

const route = useRoute();
const router = useRouter();

const page = ref(Number(route.query.page) || 1);
const limit = ref(Number(route.query.limit) || 10);
const pageCount = ref(0)
const limitItems = ref([5, 10, 20, 30, 50])

const params = {
  page: 1,
  limit: 10,
  query: ref(''),
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

const clickCallback = (pageNum) => {
  page.value = pageNum;
  updateQueryParams();
};

const changePageLimit = () => {
  updateQueryParams();
};

const searchByName = () => {
  page.value = 1;
  updateQueryParams();
};

const updateQueryParams = () => {
  router.push({
    query: {
      page: page.value,
      limit: limit.value,
      itemName: params.query.value || undefined,
    }
  });
};

watch(() => route.query, (newQuery) => {
  page.value = Number(newQuery.page) || 1;
  limit.value = Number(newQuery.limit) || 10;
  params.query.value = newQuery.itemName || '';
  userList.loadUserList({page: page.value, limit: limit.value, query: params.query.value})
});

watch(() => userList.user, (newValue) => {
  pageCount.value = Math.ceil(userList.user.count / limit.value);
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
    userList.loadAdminList({page: params.page, limit: params.limit, query: params.query.value})
  } else if(loadCurrentUser.user.role?.name_en === 'company_admin') {
    userList.loadUserList({
      page: params.page,
      limit: params.limit,
      query: params.query.value
    })
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
        class="flex items-center justify-between gap-10 max-[768px]:flex-col max-[768px]:items-start"
        :class="{'flex items-center justify-between' :['company_admin', 'admin'].includes( loadCurrentUser.user.role?.name_en )}"
    >
      <div class="text-lg flex gap-x-10">
        <p
            class="dark:text-white text-3xl font-bold"
            v-if="loadCurrentUser.user.role?.name_en === 'admin'"
        >
          {{ $t('Список администраторов компании') }}
        </p>
        <p
            class="dark:text-white text-3xl font-bold"
            v-else
        >
          {{ $t('Список всех пользователей компании') }}
        </p>
      </div>
      <div
          :class="{'flex items-center justify-evenly' : loadCurrentUser.user.role?.name_en === 'admin', 'w-2/12 max-lg:w-4/12 max-sm:w-full max-sm:mb-6 max-sm:mx-auto' : loadCurrentUser.user.role_en !== 'admin'}"
      >
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
    <div class="w-full mt-4 max-[636px]:mt-0">
      <div class="flex items-center justify-between max-[636px]:flex-col gap-x-10 max-lg:flex-wrap max-md:justify-center">
        <p class="text-mediumGray w-5/12 max-[636px]:w-full">
          {{ $t('Данная страница хранит информацию о пользователях данной платформы') }}
        </p>
        <div class="w-5/12 max-[636px]:w-full max-[636px]:mt-5 flex items-center gap-3 h-10">
          <TheSearch
              class="w-full"
              v-model:model-value="params.query"
              @search="searchByName"
          />
<!--          @search="userList.loadUserList(params)"-->
<!--          <TheFilter></TheFilter>-->
        </div>
      </div>
      <div class="mt-8 grid grid-cols-4 max-[1350px]:grid-cols-2 max-[636px]:grid-cols-1 gap-5 max-md:mt-10">
          <UserContentList
              v-for="userItem in userList?.get_user_list.results"
              v-if="userList?.get_user_list.count > 0"
              :user-item="userItem"
              class="max-md:w-full"/>
      </div>
      <div v-if="!userList?.get_user_list?.results?.length">
        <p class="text-center">
          {{ $t('По вашему запросу никого не найдено.') }}
        </p>
      </div>
    </div>
<!--    <div class="flex flex-wrap justify-center gap-x-4 mt-10">-->
<!--      <div v-if="userList.get_user_list.count > 5" v-for="(page, id) in userList?.get_user_list?.links" :key="id"-->
<!--           class="px-4 py-2 rounded-full cursor-pointer"-->
<!--           :class="{'bg-blue-400 text-white' : page.active, 'bg-gray-200 text-black' : !page.active}"-->
<!--           @click="loadPage(page.label); userList?.loadUserList({page: params.page, limit: params.limit, user_type: loadCurrentUser.user.role_en !== 'admin' ? 'user-list/my-company' : userChecked, query: params.query})">-->
<!--        {{ page.label }}-->
<!--      </div>-->
<!--    </div>-->
    <div class="w-full flex items-center justify-end border-t gap-4 pr-10 pb-5 pt-5 max-md:pr-3 max-md:flex-col max-md:items-end">
      <paginate
          :page-count="pageCount"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :force-page="page"
      >
      </paginate>
      <div class="flex items-center gap-3">
        <p>Строк на странице:</p>
        <select
            v-model="limit"
            @change="changePageLimit"
            class="w-fit p-2.5 rounded-md border bg-white dark:bg-bgWhite text-black"
        >
          <option
              v-for="item in limitItems"
              :value="item"
          >
            {{item}}
          </option>
        </select>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>