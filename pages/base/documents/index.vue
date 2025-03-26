<script setup lang="ts">
import DocumentContent from "~/components/documents/DocumentContent.vue";
import DocumentHeader from "~/components/documents/DocumentHeader.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import DocumentInfo from "~/components/documents/DocumentInfo.vue";
import {useDocumentStore} from "~/stores/documents";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";

const document = useDocumentStore()

onMounted(()=>{
  document.loadAllDocument({page: 1, limit: 15})
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
   <DocumentHeader class="w-6/12 mx-auto max-md:w-full"></DocumentHeader>
   <div class="flex gap-x-10 justify-center">
     <TheContentBlock class="w-9/12">
      <DocumentContent/>
     </TheContentBlock>
     <TheContentBlock>
      <DocumentInfo/>
     </TheContentBlock>
   </div>
 </div>
</template>

<style scoped lang="scss">

</style>