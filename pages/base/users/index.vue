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
    <TheTextContent :text-type="'pageTitle'">{{ $t('Страница с пользователями') }}</TheTextContent>
    <p class="dark:text-gray-300 tracking-widest text-sm">
      {{ $t('Данная страница хранит информацию о пользователях данной платформы') }}</p>
    <div>
      <UserContent></UserContent>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>