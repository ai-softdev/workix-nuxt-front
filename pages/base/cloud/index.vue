<script setup lang="ts">
import CloudContent from "~/components/Cloud/CloudContent.vue";
import {useAuthStore} from "~/stores/auth";
const router = useRouter()
const loadAuthStore = useAuthStore()

watch(() => loadAuthStore.user, (newValue) => {
  if(loadAuthStore?.user?.role?.name_en === 'admin'){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Файл менеджер',
  description: 'Файловый менеджер для хранения или взаимодействия с файлами'
})
</script>

<template>

  <div class="h-screen">
    <CloudContent/>
  </div>
</template>

<style scoped lang="scss">

</style>