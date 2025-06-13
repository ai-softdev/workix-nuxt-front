<script setup lang="ts">
import {useRoute} from "vue-router";
import {useUserStore} from "~/stores/users";
import {useChat} from "~/stores/chat";
import ChatNavHeaderElem from "~/components/Chat/ChatNav/UI/ChatNavHeaderElem.vue";
import TheButton from "~/components/UI/TheButton.vue";
import ChatGroupCreate from "~/components/Chat/ChatGroup/ChatGroupCreate.vue";

const userStore = useUserStore()
const chat = useChat()
const route = useRoute()
defineProps({
  activeNav: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div class="px-4 pt-4">
    <form
        @submit.prevent="userStore.searchUser({search: chat.searchElem})"
        class="relative"
    >
      <label
          @click="userStore.searchUser({search: chat.searchElem})"
          for="search-chat"
          class="absolute top-2.5 right-3"
      >
        <img src="/icons/chat-search.svg" alt="chat-search">
      </label>
      <input
          id="search-chat"
          v-model="chat.searchElem"
          class="w-full hover:bg-gray-50 focus:border-golden px-4 py-2.5 border rounded-full max-md:w-9/12 max-md:mx-auto block text-sm bg-white focus:bg-gray-50 text-black dark:focus:opacity-100 transition-all dark:bg-gray-600 dark:text-white outline-none"
          type="text"
          placeholder="Поиск..."
          :class="{'max-md:hidden' : !chat.activeChatNav && route.path !== '/base/chat'}"
      >
    </form>
    <div class="mt-6" v-if="chat.windowWidth < 768 || chat.windowWidth > 768">
      <ChatGroupCreate/>
      <ChatNavHeaderElem/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>