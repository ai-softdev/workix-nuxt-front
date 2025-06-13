<script setup lang="ts">
import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <div
    class="my-auto mt-20 h-20 items-center flex justify-center w-4/12 max-lg:w-6/12 max-md:w-10/12 max-ms:w-full mx-auto"
    v-if="chat.userChat.messages.length === 0">
    <p class="bg-black bg-opacity-5 px-10 py-2 rounded-full">
      {{ $t('Пока тут ничего нет') }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>