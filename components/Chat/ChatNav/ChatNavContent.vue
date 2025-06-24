<script setup lang="ts">
import TheSceleton from "~/components/UI/TheSceleton.vue";
import {useUserStore} from "~/stores/users";
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {useRoute} from "vue-router";
import ChatNavContentUser from "~/components/Chat/ChatNav/ChatNavContentUser.vue";
import {setFocus} from "~/hooks/ElemUI";

const userStore = useUserStore()
const chatStore = useChat()
const user = useAuthStore()
const route = useRoute()

</script>


<template>
  <div class="h-[80%] max-md:h-[80%] overflow-y-auto mt-4 max-md:w-full">
    <div
        v-if="chatStore.searchElem === ''"
        class="flex flex-col mb-20"
    >
      <ChatNavContentUser
          v-if="userStore.get_user_list.results"
      />
      <div v-for="i in 4" v-else class="flex justify-center relative flex-col items-center mb-2">
        <TheSceleton class="dark:opacity-20 opacity-60" width="90%" height="70px" border-radius="10px">
        </TheSceleton>
        <div class="absolute left-6 max-md:left-10 flex items-center">
          <TheSceleton class="dark:opacity-20" width="50px" height="50px" border-radius="100%"></TheSceleton>
          <div class="ml-4 flex flex-col dark:opacity-20 gap-y-2">
            <TheSceleton class="" width="150px" height="10px" border-radius="4px"></TheSceleton>
            <TheSceleton class="" width="150px" height="10px" border-radius="4px"></TheSceleton>
          </div>

        </div>
      </div>
    </div>
    <div v-if="chatStore.searchElem !== ''" class="">
      <NuxtLink
          v-for="userSearchList in userStore.get_user_search.results"
          :to="`/base/chat/${userSearchList.id}`"
          @click="userSearchList.id !== chatStore.get_user_chat.user?.id ? chatStore.createChatUser({user_id: userSearchList.id}) : ()=>{
                  chatStore.flag = false;
                  nextTick(()=>{
                    chatStore.flag = true
                  })
                }; chatStore.showPinnedWindow = false; chatStore.searchElem = '' ; chatStore.activeChatNav = false"
          class="flex items-center px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-azure !bg-opacity-10 cursor-pointer transition-all duration-200 p-1"
          :class="{'dark:hover:!bg-semiCyan' : route.path === `/base/chat/${userSearchList.id}`, 'hover:!bg-cyan' : route.path === `/base/chat/${userSearchList.id}`}"
      >
<!--        :to="`/base/chat/${chatStore.get_user_chat?.id}`"-->
        {{ userSearchList.id !== chatStore.get_user_chat.user?.id }}
        <img class="w-[50px] h-[50px] rounded-full" :src="userSearchList.photo" alt="use-photo">
        <p class="text-sm break-words font-bold">{{ userSearchList.first_name + ' ' + userSearchList.last_name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>