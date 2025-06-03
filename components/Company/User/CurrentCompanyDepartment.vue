<script setup lang="ts">
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";
import {useCompanies} from "~/stores/companies";

const departments = useCompanies()
departments.loadDepartmentList()
defineProps({
  more: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <div>
    <p
        class="dark:text-white text-3xl font-bold mb-6"
    >
      {{ $t('Отделы компании') }}
    </p>
    <div
        class="grid grid-cols-4 max-[1750px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-center gap-x-4 gap-y-4">
      <div
          v-for="department in departments.get_all_department.results"
          class="relative border p-5 rounded-3xl bg-white dark:border-gray-400"
      >
<!--        @mouseenter="more = department.id" @mouseleave="more = null"-->
        <div :class="{'blur-[1px]' : more === department.id}">
          <div class="font-bold pb-6 mb-6 border-b">
            <h2 class="text-md">{{ department.name }}</h2>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between gap-3">
              <p>{{ $t('Руководитель') }}</p>
              <p class="break-words text-mediumGray">
                {{ department.department_director_name ? department.department_director_name : 'Отсутсвует' }}</p>
            </div>
            <div class="flex items-center justify-between gap-3">
              <p>{{ $t('Заместитель') }}</p>
              <p class="break-words text-mediumGray">
                {{ department.vice_department_director_name ? department.vice_department_director_name : 'Отсутсвует' }}</p>
            </div>
            <NuxtLink
                :to="`/base/companies/department/${department.id}`"
                class="block p-2.5 rounded-full bg-golden text-center">
              {{ $t('Подробнее') }}
            </NuxtLink>
          </div>
        </div>
<!--        <Transition name="fade">-->
<!--          <NuxtLink-->
<!--              :to="`/base/companies/department/${department.id}`"-->
<!--              v-if="more === department.id"-->
<!--              class="cursor-pointer absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-3xl"-->
<!--          >-->
<!--            <button class="text-center mt-20 mx-auto uppercase text-sm rounded-full dark:bg-gray-400 bg-white w-4/12">-->
<!--              {{ $t('Подробнее') }}-->
<!--            </button>-->
<!--          </NuxtLink>-->
<!--        </Transition>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>