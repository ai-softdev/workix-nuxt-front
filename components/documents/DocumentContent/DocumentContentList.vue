<script setup lang="ts">
import {useDocumentStore} from "~/stores/documents";
import DocumentContentListElem from "~/components/documents/DocumentContent/DocumentContentList/DocumentContentListElem.vue";
import TheSearch from "~/components/UI/TheSearch.vue";

import Paginate from 'vuejs-paginate-next';
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const documentStore = useDocumentStore()
const pageCount = ref(0)
const limitItems = ref([5, 10, 20, 30, 50])
const page = ref(Number(route.query.page) || 1)
const limit = ref(Number(route.query.limit) || 5)
const query = ref(route.query.query || '')
const type = ref((route.query.type as string) || 'from-me')

const clickCallback = (pageNum: number) => {
  page.value = pageNum;
  updateQueryParams();
};

const changePageLimit = () => {
  page.value = 1;
  updateQueryParams();
};

const changeType = (newType: string) => {
  type.value = newType;
  page.value = 1;
  updateQueryParams();
};

const updateQueryParams = () => {
  router.push({
    query: {
      page: page.value,
      limit: limit.value,
      query: query.value || undefined,
      type: type.value || undefined,
    }
  });
  documentStore.loadAllDocument({
    page: page.value,
    limit: limit.value,
    query: query.value,
    type: type.value,
  });
};

watch(() => documentStore.documentList, (newValue) => {
  if (newValue && newValue.count && limit.value) {
    pageCount.value = Math.ceil(newValue.count / limit.value);
  }
}, { immediate: true });


  // documentStore.loadAllDocument({page: 1, limit: 5, type: "from-me"})
</script>

<template>
  <div>
    <div class="p-6 rounded-3xl shadow-cards bg-white mb-8 max-[680px]:p-3">
      <div class="flex items-center gap-10 justify-between max-[680px]:flex-col">
        <div class="flex items-center gap-x-3 p-2 rounded-full border w-fit max-[680px]:gap-1">
          <button
              class="text-sm max-[680px]:p-3"
              @click="changeType('from-me')"
              :class="['py-3 px-10 rounded-full font-medium', type === 'from-me' ? 'bg-golden' : '']"
          >
            {{ $t('Мои документы') }}
          </button>
          <button
              class="text-sm max-[680px]:p-3"
              @click="changeType('through-me')"
              :class="['py-3 px-10 rounded-full font-medium', type === 'through-me' ? 'bg-golden' : '']"
          >
            {{ $t('Ожидающие подтверждения') }}
          </button>
        </div>
        <TheSearch
            class="w-4/12 max-[680px]:w-full"
            :model-value="query"
            @update:model-value="query = $event"
            @search="updateQueryParams"
        />
      </div>
      <div class="flex gap-x-2 gap-y-2 flex-wrap mt-6">
        <DocumentContentListElem v-for="item in documentStore.get_all_document.results" :item="item">
          <template v-slot:documentTitle>
            {{item.title}}
          </template>
          <template v-slot:documentFileName>
            {{item.file_name}}
          </template>
          <template v-slot:documentUserName>
            {{item.author.first_name + ' ' + item.author.last_name}}
          </template>
        </DocumentContentListElem>
        <div v-if="!documentStore.documentList.results?.length" class="flex items-center justify-center text-center">
          <p class="text-gray-500 text-center w-full py-10">
            Документов пока нет
          </p>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-end gap-4 pr-10 pb-5 max-md:pr-3 max-md:flex-col max-md:items-end">
      <paginate
          :page-count="pageCount"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :force-page="page"
      />
      <div class="flex items-center gap-3">
        <p>Строк на странице:</p>
        <select
            v-model="limit"
            @change="changePageLimit"
            class="w-fit p-2.5 rounded-md border bg-white dark:bg-bgWhite text-black"
        >
          <option v-for="item in limitItems" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>