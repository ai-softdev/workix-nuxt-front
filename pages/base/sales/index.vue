<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import Paginate from 'vuejs-paginate-next';
import {useSales} from "~/stores/sales";
import ThePreloader from "~/components/UI/ThePreloader.vue";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import TheInput from "~/components/UI/TheInput.vue";
import TheModal from "~/components/UI/TheModal.vue";
const loadAuthStore = useAuthStore()
const company = useCompanies()

const route = useRoute();
const router = useRouter();
const sales = useSales();

const showFiltersModal = ref(false);

const page = ref(Number(route.query.page) || 1);
const limit = ref(Number(route.query.limit) || 5);
const itemName = ref(route.query.itemName || '');
const min_price = ref(Number(route.query.min_price) || '');
const max_price = ref(Number(route.query.max_price) || '');
const min_count = ref(Number(route.query.min_count) || '');
const max_count = ref(Number(route.query.max_count) || '');
const limitItems = ref([5, 10, 20, 30, 50])
const orderBy = ref([]);
const orderString = ref('')

const updateQueryParams = () => {
  router.push({
    query: {
      page: page.value,
      limit: limit.value,
      itemName: itemName.value || undefined,
      min_price: min_price.value || '',
      max_price: max_price.value || '',
      min_count: min_count.value || '',
      max_count: max_count.value || '',
      order_by: orderString.value || '',
    }
  });
};

const clickCallback = (pageNum: number) => {
  page.value = pageNum;
  updateQueryParams();
};

const changePageLimit = () => {
  updateQueryParams();
};

const searchByName = () => {
  page.value = 1;
  updateQueryParams();
};

const openFiltersModal = () => {
  showFiltersModal.value = !showFiltersModal.value
}

const submitFilters = () => {
  console.log('submit')
  updateQueryParams();
}

const pageCount = ref(0)

const toggleSort = (field) => {
  const index = orderBy.value.findIndex((item) => item === field || item === `-${field}`);

  if (index !== -1) {
    orderBy.value[index] = orderBy.value[index].startsWith('-') ? field : `-${field}`;
  } else {
    orderBy.value.push(field);
  }

  updateQueryParams()
};

const getSortDirection = (field) => {
  if (orderBy.value.includes(field)) return 'rotate-0';
  if (orderBy.value.includes(`-${field}`)) return 'rotate-180';
  return 'rotate-180';
};

const downloadFile = () => {
  sales.loadSalesListFile()
}

onMounted(()=> {
  sales.loadSalesList({page: page.value, limit: limit.value, name: itemName.value, min_price: min_price.value, max_price: max_price.value, min_count: min_count.value, max_count: max_count.value, order_by: orderString.value})
})

watch(orderBy.value, (newVal) => {
  orderString.value = newVal.join(',');
});

watch(() => sales.sales, (newValue) => {
  pageCount.value = Math.ceil(sales.sales.count / limit.value);
})

watch(() => route.query, (newQuery) => {
  page.value = Number(newQuery.page) || 1;
  limit.value = Number(newQuery.limit) || 5;
  itemName.value = newQuery.itemName || '';
  sales.loadSalesList({page: page.value, limit: limit.value, name: itemName.value, min_price: min_price.value, max_price: max_price.value, min_count: min_count.value, max_count: max_count.value, order_by: orderString.value})
});

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
  let permission = company.company.modules?.find(item => item.name_en === 'sales')
  if(!permission){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between max-[789px]:flex-col max-[789px]:items-start max-[789px]:gap-5">
      <p
          class="dark:text-white text-3xl font-bold"
      >
        {{ $t('Страница продаж') }}
      </p>
      <div class="ml-auto max-[789px]:ml-0 flex items-center gap-6 max-[465px]:flex-col">
        <button
            @click="downloadFile"
            class="flex items-center gap-3"
        >
          <img src="/icons/export.svg" alt="export">
          <p class="text-azure font-medium">
            {{ $t('Экспортировать в файл') }}
          </p>
        </button>
        <NuxtLink
            to="/base/sales/item-create"
            class="ml-auto"
        >
          <UITheButton
              class="border border-golden bg-golden py-3 px-10 rounded-full !text-black dark:!text-white"
          >
            + Добавить товар
          </UITheButton>
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="flex mt-10 max-[789px]:mt-4 items-center gap-x-4 max-md:flex-col max-md:items-start max-md:gap-y-4">
<!--        <div class="flex items-center gap-x-4">-->
<!--          <TheBreadcrumbs :breadcrumb-link="'/base/profile'">-->
<!--            {{ $t('Профиль') }}-->
<!--          </TheBreadcrumbs>-->
<!--          <div>-->
<!--            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path class="dark:stroke-white stroke-black"-->
<!--                    d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"-->
<!--                    stroke-width="2" stroke-linecap="round"/>-->
<!--            </svg>-->
<!--          </div>-->
<!--          <TheBreadcrumbs>-->
<!--            {{ $t('Продажи') }}-->
<!--          </TheBreadcrumbs>-->
<!--        </div>-->
      </div>
      <div class="w-fit sales-up-table rounded-lg overflow-hidden">
        <div class="flex items-center justify-between gap-3 mb-4 max-[465px]:flex-col max-[465px]:items-start">
          <UITheButton
              @click="openFiltersModal"
              class="border bg-white flex items-center gap-1 p-3 rounded-full !text-black dark:!text-white max-md:shrink-0"
          >
            <img src="/icons/filters.svg" alt="filters">
            Фильтры
          </UITheButton>
          <div class="w-4/12 max-md:w-full relative flex items-center">
            <div class="absolute rotate-90 ml-3">
              <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <input
                v-model="itemName"
                @input="searchByName"
                type="text"
                class="w-full rounded-full border dark:bg-gray-500 outline-none pl-12 h-[50px]"
                placeholder="Найти товар..."
            />
          </div>
        </div>
        <div class="w-full sales-table rounded-3xl bg-white overflow-hidden">
          <table v-if="sales.sales?.results?.length">
            <thead class="bg-gray-200 dark:bg-bgWhite">
            <tr>
              <th>
                №
              </th>
              <th>
                <button @click="toggleSort('name')" class="flex items-center gap-3">
                  Наименование
                  <img :class="getSortDirection('name')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('sales_count')" class="flex items-center gap-3">
                  Кол-во продаж
                  <img :class="getSortDirection('sales_count')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('price_per_count')" class="flex items-center gap-3">
                  Цена за единицу
                  <img :class="getSortDirection('price_per_count')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('total')" class="flex items-center gap-3">
                  Сумма
                  <img :class="getSortDirection('total')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('vat')" class="flex items-center gap-3">
                  НДС
                  <img :class="getSortDirection('vat')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('total_with_vat')" class="flex items-center gap-3">
                  Сумма с НДС
                  <img :class="getSortDirection('total_with_vat')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('company_sale_to')" class="flex items-center gap-3">
                  Наименование компании
                  <img :class="getSortDirection('company_sale_to')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
              <th>
                <button @click="toggleSort('agent')" class="flex items-center gap-3">
                  Агент
                  <img :class="getSortDirection('agent')" src="/icons/table-arrow.svg" alt="table-arrow" />
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in sales.sales.results">
              <td>{{ limit * (page -1) + index+1 }}</td>
              <td>{{item.name}}</td>
              <td>{{ item.sales_count }}</td>
              <td>{{ item.price_per_count }}</td>
              <td>{{ item.total }}</td>
              <td>{{ item.vat }}</td>
              <td>{{ item.total_with_vat }}</td>
              <td>{{ item.company_sale_to }}</td>
              <td>{{ item.agent.last_name + ' ' + item.agent.first_name + ' ' + item.agent.patronymic }}</td>
            </tr>
            </tbody>
          </table>
          <div
              v-if="sales.sales?.results?.length === 0"
              class="min-h-[300px] min-w-[89vw] bg-gray-200 dark:bg-bgWhite text-center flex items-center justify-center"
          >
            Товаров пока нет
          </div>
          <div v-if="!sales.sales?.results" class="relative min-h-[400px] min-w-[89vw]">
            <div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>
            <ThePreloader></ThePreloader>
          </div>
        </div>
        <div class="w-full flex items-center justify-end gap-4 pr-10 pb-5 pt-5 max-md:pr-3 max-md:flex-col max-md:items-end">
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
          >
          </paginate>
          <div class="flex items-center gap-3">
            <p>Строк на странице:</p>
            <select
                v-model="limit"
                @change="changePageLimit"
                class="w-fit p-2.5 rounded-md border bg-white dark:bg-bgWhite text-black"
            >
              <option
                  v-for="item in limitItems"
                  :value="item"
              >
                {{item}}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <TheModal
        :type="'resize'"
        v-if="showFiltersModal"
        @showModal=""
    >
      <button class="absolute top-3 right-3" @click="openFiltersModal">
        x
      </button>
      <div
          class="flex flex-col gap-5"
      >
        <p>
          Фильтры:
        </p>
        <form @submit.prevent="updateQueryParams(); showFiltersModal = false" class="flex items-center gap-5 flex-col">
          <TheInput
              v-model="min_price"
              class="bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full"
              type="number"
              label="Минимальная цена"
          />
          <TheInput
              v-model="max_price"
              class="bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full"
              type="number"
              label="Максимальная цена"
          />
          <TheInput
              v-model="min_count"
              class="bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full"
              type="number"
              label="Минимальное количество"
          />
          <TheInput
              v-model="max_count"
              class="w-full bg-transparent bg-opacity-0 rounded-lg outline-none"
              type="number"
              label="Максимальное количество"
          />
          <UITheButton
              class="mt-2 bg-golden rounded-full !p-3 !text-black dark:!text-white"
          >
            Сохранить
          </UITheButton>
        </form>
      </div>
    </TheModal>
  </div>
</template>

<style>
.sales-table th, td {
  padding: 20px;
}

.sales-table th {
  text-align: start;
}

.sales-table tr:nth-child(even) {
  background-color: #8881;
}



@media (max-width: 2100px) {
  .sales-up-table {
    max-width: 85vw;
  }
  .sales-table {
    overflow: auto;
    max-width: 85vw;
  }
  .sales-table table {
    width: 2000px;
  }
}
@media (max-width: 1800px) {
  .sales-up-table {
    max-width: 77vw;
  }
  .sales-table {
    overflow: auto;
    max-width: 77vw;
  }
  .sales-table table {
    width: 2000px;
  }
}
@media (max-width: 1150px) {
  .sales-up-table {
    max-width: 93vw;
  }
  .sales-table {
    overflow: auto;
    max-width: 93vw;
  }
  .sales-table table {
    width: 2000px;
  }
}

@media (max-width: 920px) {
  .sales-up-table {
    width: 95vw !important;
  }
  .sales-table {
    max-width: 95vw !important;
  }
  .pagination {
    flex-wrap: wrap;
  }
}
</style>