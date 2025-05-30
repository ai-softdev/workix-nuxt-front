<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useAuthStore} from "~/stores/auth";


const currentUser = useAuthStore()

useSeoMeta({
  title: 'Пользователи',
  description: 'Список пользователей данной платформы'
})

onMounted(()=> {
  currentUser.loadCurrentUserWorker()
})
</script>

<template>
  <div>
      <UserContent></UserContent>
  </div>
</template>

<style scoped lang="scss">

</style>