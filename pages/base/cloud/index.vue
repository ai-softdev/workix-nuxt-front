<script setup lang="ts">
import CloudContent from "~/components/Cloud/CloudContent.vue";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
const router = useRouter()
const loadAuthStore = useAuthStore()
const company = useCompanies()

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
  let permission = company.company.modules?.find(item => item.name_en === 'file_manager')
  if(!permission){
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
    <p
        class="dark:text-white text-3xl font-bold"
    >
      {{$t('Структура файлов')}}
    </p>
    <CloudContent/>
  </div>
</template>

<style scoped lang="scss">

</style>