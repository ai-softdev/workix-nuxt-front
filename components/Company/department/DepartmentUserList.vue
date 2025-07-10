<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const loadCurrentUser = useAuthStore()
defineProps({
  userItem: {
    type: Object,
    required: true,
  },
})

function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

</script>

<template>
  <NuxtLink
      :to="`/base/users/${userItem.id}`"
      class="department__item w-full transition-all grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 gap-4 hover:shadow-departmentCard border bg-whiteLilia hover:bg-white hover:border-golden dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-5 rounded-3xl cursor-pointer"
  >
    <div class="flex items-center gap-x-4 border-r max-sm:border-none max-sm:justify-center">
      <img class="w-14 h-14 rounded-full shadow" :src="userItem.photo">
      <h2 class="font-bold max-xl:text-center">{{ userItem.first_name + ' ' + userItem.last_name }}</h2>
    </div>
    <div class="flex flex-col items-center justify-center border-r max-[900px]:border-none">
      <p class="text-lg font-medium mb-2" v-if="loadCurrentUser.user.role?.name_en === 'admin'">{{$t('Роль | Должность')}}</p>
      <p class="text-lg font-medium mb-2" v-else>{{$t('Должность')}}</p>
      <div class="text-center flex flex-col gap-y-2">
        <h2 class="text-sm text-mediumGray" v-if="loadCurrentUser.user.role?.name_en === 'admin'">({{ userItem.role }})</h2>
        <h2 class="text-mediumGray text-sm">{{ userItem.position }}</h2>
      </div>
    </div>
    <div class="flex items-center justify-between gap-5 max-[900px]:justify-start max-[900px]:border-r max-sm:border-none max-sm:justify-center">
      <div class="text-center pr-6 pl-8 max-[900px]:pr-0">
        <h2 class="font-medium">{{$t('Дата регистрации')}}</h2>
        <h2 class="text-mediumGray text-sm">{{ formatDate(userItem.created_at) }}</h2>
      </div>
      <div class="max-[900px]:hidden h-full border-l flex items-center justify-center pl-8">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="hidden h-full max-[900px]:flex items-center justify-center">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </NuxtLink>
</template>

<style>
.department__item:hover svg path{
  stroke: #EAB70A;
}
</style>