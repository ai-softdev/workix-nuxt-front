<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const loadCurrentUser = useAuthStore()
defineProps({
  userItem: {
    type: Object,
    required: true,
  },
})

</script>

<template>
    <NuxtLink
        :to="`/base/users/${userItem.id}`"
        class="transition-all bg-white shadow-cards hover:shadow-hoverCards border border-white hover:border-golden dark:border-none dark:shadow-none dark:bg-gray-700  dark:hover:bg-gray-800 py-6 px-5 rounded-3xl items-center max-md:flex  max-md:w-full max-sm:flex-col max-sm:gap-y-4"
    >
      <div class="flex items-center max-md:w-4/12 gap-x-2 max-lg:mx-auto pb-4 border-b">
        <div class="flex items-center justify-center rounded-md px-1 w-[33px] h-[33px] shadow-md">
          <img class="w-[22px] h-[22px] rounded-full" :src="userItem.photo" alt="logo">
        </div>
        <h2 class="font-bold text-sm break-words">{{ userItem.first_name + ' ' + userItem.last_name }}</h2>
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <div
            v-if="loadCurrentUser.user.role_en === 'admin'"
            class="flex items-start justify-between gap-10 min-h-10"
        >
          <p class="font-bold">
            {{$t('Роль | Должность')}}:
          </p>
          <p class="text-mediumGray text-right">
            ({{ userItem.role }})
          </p>
        </div>
        <div v-else class="flex items-start justify-between gap-10 min-h-10">
          <p
              class="font-bold"
          >
            {{$t('Должность')}}:
          </p>
          <p
              class="text-mediumGray text-right"
          >
            {{ userItem.position }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between gap-10 mt-2">
<!--        <h2-->
<!--            class="tracking-widest font-bold"-->
<!--            v-if="['company_admin', 'director', 'vice_director'].includes(loadCurrentUser.user.role_en)"-->
<!--        >-->
<!--          {{$t('Дата регистрации')}}-->
<!--        </h2>-->
        <p
            class="font-bold"
        >
          {{$t('Дата регистрации')}}:
        </p>
        <p class="text-mediumGray">
          {{ new Date(userItem.created_at).toLocaleString().slice(0, 10) }}
        </p>
      </div>
    </NuxtLink>
</template>

<style scoped lang="scss">

</style>