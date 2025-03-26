<script setup lang="ts">

import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useSales} from "~/stores/sales";
const sales = useSales();

let salesForm = ref({
  name: '',
  sales_count: '',
  price_per_count: '',
  vat: '',
  company_sale_to: '',
  agent: {
    first_name: '',
    last_name: '',
    patronymic: '',
  }
})

const createItem = () => {
  sales.createItem({ form: salesForm })
      .then(() => clearForm())
      .catch((error) => console.error("Ошибка при создании товара:", error));
};

const clearForm = () => {
  salesForm.value = {
    name: "",
    sales_count: "",
    price_per_count: "",
    vat: "",
    company_sale_to: "",
    agent: {
      first_name: "",
      last_name: "",
      patronymic: "",
    },
  };
};

</script>

<template>
  <div>
    <TheTextContent>
      {{ $t('Страница создания товара') }}
    </TheTextContent>
    <div class="flex items-center gap-x-4 max-lg:mt-5">
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
      <TheBreadcrumbs :breadcrumb-link="'/base/sales'">
        {{ $t('Продажи') }}
      </TheBreadcrumbs>
      <div>
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="dark:stroke-white stroke-black"
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <TheBreadcrumbs>
        {{ $t('Создание товара') }}
      </TheBreadcrumbs>
    </div>
    <div class="mt-10 w-6/12 flex flex-col gap-4 max-lg:w-full">
      <p class="font-medium text-xl mb-3">
        Создание товара:
      </p>
      <form
          @submit.prevent="createItem"
          class="grid grid-cols-2 gap-4 max-lg:grid-cols-1"
      >
        <TheInput
            :label="$t('Название товара')"
            :placeholder="salesForm.name"
            v-model="salesForm.name"
            type="text"
        />
        <TheInput
            :label="$t('Количество продаж')"
            :placeholder="salesForm.sales_count"
            v-model="salesForm.sales_count"
            type="number"
        />
        <TheInput
            :label="$t('Цена за единицу')"
            :placeholder="salesForm.price_per_count"
            v-model="salesForm.price_per_count"
            type="number"
        />
        <TheInput
            :label="$t('НДС')"
            :placeholder="salesForm.vat"
            v-model="salesForm.vat"
            type="number"
        />
        <TheInput
            :label="$t('Контрагент')"
            :placeholder="salesForm.company_sale_to"
            v-model="salesForm.company_sale_to"
            type="text"
        />
        <TheInput
            :label="$t('Имя агента')"
            :placeholder="salesForm.agent.first_name"
            v-model="salesForm.agent.first_name"
            type="text"
        />
        <TheInput
            :label="$t('Фамилия агента')"
            :placeholder="salesForm.agent.last_name"
            v-model="salesForm.agent.last_name"
            type="text"
        />
        <TheInput
            :label="$t('Отчество агента')"
            :placeholder="salesForm.agent.patronymic"
            v-model="salesForm.agent.patronymic"
            type="text"
        />
        <UITheButton
            type="submit"
            class="mb-2 border p-3 rounded-lg !text-black dark:!text-white"
        >
          Добавить
        </UITheButton>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>