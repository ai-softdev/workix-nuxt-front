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

onMounted(()=> {
  sales.loadSalesList({page: page.value, limit: limit.value, name: itemName.value, min_price: min_price.value, max_price: max_price.value, min_count: min_count.value, max_count: max_count.value})
})

watch(() => sales.sales, (newValue) => {
  pageCount.value = Math.ceil(sales.sales.count / limit.value);
})

watch(() => route.query, (newQuery) => {
  page.value = Number(newQuery.page) || 1;
  limit.value = Number(newQuery.limit) || 3;
  itemName.value = newQuery.itemName || '';
  sales.loadSalesList({ page: page.value, limit: limit.value, name: itemName.value, min_price: min_price.value, max_price: max_price.value, min_count: min_count.value, max_count: max_count.value });
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
    <TheTextContent>
      {{ $t('Страница продаж') }}
    </TheTextContent>
    <div>
      <div class="flex items-center gap-x-4 max-md:mt-10 max-md:flex-col max-md:items-start max-md:gap-y-4">
        <div class="flex items-center gap-x-4">
          <TheBreadcrumbs :breadcrumb-link="'/base/profile'">
            {{ $t('Профиль') }}
          </TheBreadcrumbs>
          <div>
            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="dark:stroke-white stroke-black"
                    d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <TheBreadcrumbs>
            {{ $t('Продажи') }}
          </TheBreadcrumbs>
        </div>
        <NuxtLink
            to="/base/sales/item-create"
            class="ml-auto"
        >
          <UITheButton
              class="border p-3 rounded-lg !text-black dark:!text-white"
          >
            Добавить товар
          </UITheButton>
        </NuxtLink>
      </div>
      <div class="w-fit sales-up-table rounded-lg border mt-10 overflow-hidden">
        <div class="p-4 flex items-center gap-3">
          <UITheButton
              @click="openFiltersModal"
              class="border p-3 rounded-lg !text-black dark:!text-white"
          >
            Фильтры
          </UITheButton>
          <div class="w-4/12 max-md:w-full relative flex items-center">
            <div class="absolute rotate-90 ml-2">
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
                class="w-full rounded-lg dark:bg-gray-500 outline-none pl-10 h-[50px]"
                placeholder="Найти товар..."
            />
          </div>
        </div>
        <div class="w-full sales-table">
          <table v-if="sales.sales?.results?.length">
            <thead class="bg-gray-200 dark:bg-bgWhite">
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Кол-во продаж</th>
              <th>Цена за единицу</th>
              <th>Сумма</th>
              <th>НДС</th>
              <th>Сумма с НДС</th>
              <th>Наименование компании</th>
              <th>Агент</th>
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
        <div class="w-full flex items-center justify-end border-t gap-4 pr-10 pb-5 pt-5 max-md:pr-3 max-md:flex-col max-md:items-end">
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
                class="w-fit p-2.5 rounded-md bg-[#8881] dark:bg-bgWhite text-black"
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
              class="mt-2 !text-black dark:!text-white"
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

.pagination {
  display: flex;
  align-content: center;
  justify-content: end;
  gap: 10px;
}

.page-item {
  padding: 10px 15px !important;
  border: 1px solid #ddd !important;
  border-radius: 8px;
  background: #8881;
}
.dark .page-item.active {
  border: 1px solid rgba(255,255,255, 0.3) !important;
  background: rgba(255,255,255, 0.3) !important;
}
.page-item.active{
  background: #E5E7EB !important;
}
.page-item.disabled{
  opacity: 0.5 !important;
}

@media (max-width: 1500px) {
  .sales-up-table {
    max-width: 80vw;
  }
  .sales-table {
    overflow: auto;
    max-width: 80vw;
  }
  .sales-table table {
    width: 2000px;
  }
}
@media (max-width: 1150px) {
  .sales-up-table {
    max-width: 86vw;
  }
  .sales-table {
    overflow: auto;
    max-width: 86vw;
  }
  .sales-table table {
    width: 2000px;
  }
}

@media (max-width: 920px) {
  .sales-up-table {
    width: 80vw !important;
  }
  .sales-table {
    max-width: 80vw !important;
  }
  .pagination {
    flex-wrap: wrap;
  }
}
@media (max-width: 650px) {
  .sales-up-table {
    width: 70vw !important;
  }
  .sales-table {
    max-width: 70vw !important;
  }
}
</style>