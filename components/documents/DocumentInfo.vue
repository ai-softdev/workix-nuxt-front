<script setup lang="ts">

import DocumentInfoElem from "~/components/documents/DocumentInfo/DocumentInfoElem.vue";
import {useDocumentStore} from "~/stores/documents";
const documentStore = useDocumentStore()

</script>

<template>
  <div class="w-full h-fit bg-white px-5 py-6 rounded-3xl shadow-cards">
    <div class="w-full p-2 flex items-center gap-2 justify-center border rounded-full mb-8">
      <img src="/icons/info.svg" alt="info">
      <p>
        {{$t('Информация')}}
      </p>
    </div>
   <div class="flex flex-col gap-y-4">
     <DocumentInfoElem>
       <template v-slot:infoText>{{$t('Количество')}}</template>
       <template v-slot:infoCount>{{documentStore.documentList.count || 0}}</template>
     </DocumentInfoElem>
     <DocumentInfoElem>
       <template v-slot:infoIcon>
         <img src="/icons/tick.svg" alt="tick">
       </template>
       <template v-slot:infoText>{{$t('Одобренные')}}</template>
       <template v-slot:infoCount>{{documentStore.documentList.approved_count || 0}}</template>
     </DocumentInfoElem>
     <DocumentInfoElem>
       <template v-slot:infoIcon>
         <img src="/icons/processed.svg" alt="processed">
       </template>
       <template v-slot:infoText>{{$t('На рассмотрении')}}</template>
       <template v-slot:infoCount>{{documentStore.documentList.waiting_count || 0 }}</template>
     </DocumentInfoElem>
   </div>
  </div>
</template>

<style scoped lang="scss">

</style>