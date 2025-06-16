<script setup lang="ts">
import {useUserStore} from "~/stores/users";
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import ChatNav from "~/components/Chat/ChatNav.vue"
import ChatCropper from "~/components/Chat/UI/ChatCropper.vue";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";

const windowWidth = ref(0)
const activeNav = ref(true)
const route = useRoute()
const router = useRouter()
const chatStore = useChat()
const userStore = useUserStore()
const loadAuthStore = useAuthStore()
const company = useCompanies()

chatStore.loadChatList({page: 1, limit: 100})
userStore.loadUserList({query: '', user_type: 'user-list', page: 1, limit: 10000})
onMounted(() => {
  windowWidth.value = window.innerWidth
  if (route.path === '/base/chat') {
    activeNav.value = true
  } else if (route.path === `/base/chat/${chatStore.userChat?.id}`) {
    activeNav.value = false
  }
})
onUnmounted(() => {
  chatStore.showGroupCreateChoice = false;
  chatStore.showGroupCreate = false;
  chatStore.file = '';
  chatStore.src = '';
  chatStore.fileUpload = null;
  chatStore.results = {coordinates: null, image: null}
})


watch(() => loadAuthStore.user, (newValue) => {
  if(loadAuthStore?.user?.role?.name_en === 'admin'){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})
watch(() => company.company, (newValue) => {
  let permission = company.company.modules?.find(item => item.name_en === 'chat')
  if(!permission){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Чат',
  description: 'Интерактивный чат для пользователей'
})
</script>


<template>
  <div class="!mx-0 !p-10 max-[768px]:!p-0">
    <div
      class="bg-white border flex w-full border-t border-t-gray-100 dark:text-white rounded-3xl shadow-chat overflow-hidden">
      <div
        class="max-md:absolute h-screen overflow-hidden relative z-[12] rounded-l-3xl dark:bg-gray-700 border-r bg-white transition-all duration-300 w-[320px]"
        :class="{'max-md:w-0' : !chatStore.activeChatNav || route.path === `/base/chat/${route.params.id}`, 'max-md:w-full ' : route.path === `/base/chat`, 'w-[320px]' : !userStore.get_user_list.results || !chatStore.activeChatNav}">
        <ChatNav/>
      </div>
      <div class="w-11/12 relative overflow-hidden max-lg:w-9/12 max-md:w-full h-screen">
        <ClientOnly>
          <NuxtPage></NuxtPage>
          <ChatCropper></ChatCropper>
        </ClientOnly>
        <div v-if="route.path === '/base/chat'"
             class="flex items-center justify-center my-auto w-full h-full text-center rounded-full px-2">
          <p class="bg-black bg-opacity-5 px-10 py-2 rounded-full">
            {{ $t('Выберите контакт для сообщения') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>