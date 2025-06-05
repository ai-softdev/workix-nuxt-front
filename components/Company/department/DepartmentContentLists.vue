<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
defineProps({
  departmentItem: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div
      @click="router.push(`/base/companies/department/${departmentItem.id}`)"
      class="transition-all px-5 py-6 rounded-3xl cursor-pointer border bg-white shadow-cards"
  >
    <div
        class="items-center gap-x-4 max-lg:w-full max-md:justify-center font-medium max-sm:w-full max-sm:text-center mb-4 pb-4 border-b">
      {{ departmentItem.name }}
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <p
            class="text-sm dark:text-gray-400"
        >
          {{ $t('Руководитель') }}
        </p>
        <p
            class="mt-2 text-mediumGray text-sm"
        >
          {{ departmentItem.department_director_name || $t('Отсутствует') }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p
            class="text-sm dark:text-gray-400"
        >
          {{ $t('Заместитель') }}
        </p>
        <p
            class="mt-2 text-mediumGray text-sm"
        >
          {{ departmentItem.vice_department_director_name || $t('Отсутствует') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>