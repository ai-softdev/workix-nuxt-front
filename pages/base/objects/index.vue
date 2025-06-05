<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ObjectContent from "~/components/Objects/ObjectContent.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
import ObjectCreate from "~/components/Objects/ObjectCreate.vue";
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
  let permission = company.company.modules?.find(item => item.name_en === 'objects')
  if(!permission){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Объекты',
  description: 'Объекты компании'
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <p
          class="dark:text-white text-3xl font-bold"
      >
        {{$t('Страница с объектами')}}
      </p>
      <ObjectCreate></ObjectCreate>
    </div>
<!--    <div class="flex items-center gap-x-6">-->
<!--      <TheSearch class="w-8/12"></TheSearch>-->
<!--      <TheFilter></TheFilter>-->
<!--    </div>-->
    <ObjectContent />
  </div>

</template>

<style scoped lang="scss">

</style>