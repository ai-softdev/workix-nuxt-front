<script setup lang="ts">
import DocumentContent from "~/components/documents/DocumentContent.vue";
import DocumentHeader from "~/components/documents/DocumentHeader.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import DocumentInfo from "~/components/documents/DocumentInfo.vue";
import {useDocumentStore} from "~/stores/documents";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
import DocumentContentHeaderCreate from "~/components/documents/DocumentContent/DocumentContentHeaderCreate.vue";
import TheModal from "~/components/UI/TheModal.vue";

const document = useDocumentStore()

onMounted(()=>{
  document.loadAllDocument({page: 1, limit: 5, type: "from-me"})
})

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
  let permission = company.company.modules?.find(item => item.name_en === 'documents')
  if(!permission){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Документы'
})
</script>

<template>
 <div>
<!--   <DocumentHeader class="w-6/12 mx-auto max-md:w-full"></DocumentHeader>-->
   <div class="flex items-center gap-4 justify-between">
     <p
         class="dark:text-white text-3xl font-bold"
     >
       {{ $t('Документы') }}
     </p>
     <button
         @click="document.showCreateDoc = true"
         class="rounded-full py-3 px-8 font-medium bg-golden flex items-center gap-x-2 transition-all"
     >
       + {{ $t('Добавить документ') }}
     </button>
     <TheModal :type="'resize'" v-if="document.showCreateDoc" @showModal="document.showCreateDoc = false">
       <DocumentContentHeaderCreate/>
     </TheModal>
   </div>
   <div class="flex justify-between gap-5 mt-8">
      <DocumentContent
          class="!w-9/12"
      />
      <DocumentInfo
          class="!w-3/12"
      />
   </div>
 </div>
</template>

<style scoped lang="scss">

</style>