<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const domain = useAuthStore()
defineProps({
  chat: {
    type: Object,
    default: ()=>{}
  },
})
</script>

<template>
  <div class="">
    <div class="w-[50px]" v-if="chat.user?.id !== domain.user.id && chat.user?.id">
      <img  class="w-[50px] h-[50px] rounded-full"
           :src="domain.get_server_domain + chat.user.photo" alt="">
    </div>
    <div v-else-if="chat.is_group">
      <img v-if="chat?.photo_url" :src="domain.get_server_domain + chat?.photo_url" class="w-[50px] h-[50px] rounded-full" alt="">
      <div v-else class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]">
        <p class="uppercase font-bold" v-for="chatName in chat.name.split(' ').slice(0,2)" @click="console.log(chatName[0])">{{chatName[0]}}</p>
      </div>
    </div>
    <div
        v-else-if="!chat.user?.id && !chat.is_group"
        class="rounded-full bg-azure flex items-center justify-center w-[50px] h-[50px]"
    >
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H10.2C11.8802 1 12.7202 1 13.362 1.32698C13.9265 1.6146 14.3854 2.07354 14.673 2.63803C15 3.27976 15 4.11984 15 5.8V19L8 15L1 19V5.8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>