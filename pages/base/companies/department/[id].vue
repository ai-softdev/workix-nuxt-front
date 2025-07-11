<script setup lang="ts">
import TheTitle from "~/components/UI/TheTitle.vue"
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import {useCompanies} from "~/stores/companies";
import {useRoute} from "vue-router";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
import DepartmentUserList from "~/components/Company/department/DepartmentUserList.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import DocumentContentHeaderCreate from "~/components/documents/DocumentContent/DocumentContentHeaderCreate.vue";
import {useUserStore} from "~/stores/users";

const currentDepartment = useCompanies()
const route = useRoute()
const router = useRouter()
const query = ref('')
const department = ref({})

const userStore = useUserStore();

defineProps({
  showWarning: {
    type: Boolean,
    default: false
  }
})

function goBack() {
  router.back()
}

watchEffect(() => {
  currentDepartment.loadDepartment({id: route.params.id})
})
watchSyncEffect(() => {
  useSeoMeta({
    title: `${currentDepartment.current_department.name}`
  })
})
watch(
    () => userStore.user,
    (newVal) => {
      if (newVal) {
        department.value.participants = [...newVal.results]
        console.log('User пришёл:', newVal)
      }
    },
    { immediate: false }
)
watch(
    () => currentDepartment.current_department,
    (newVal) => {
      if (newVal) {
        department.value = newVal
        console.log('department пришёл:', newVal)
      }
    },
    { immediate: false }
)
</script>

<template>
  <div>
    <div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
      <button
          @click="goBack"
          class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        {{ $t('Назад') }}
      </button>
      <div class="flex items-center flex-wrap gap-x-3">
        <TheBreadcrumbs :breadcrumb-link="`/base/companies`">
          {{ $t('Компания') }}
        </TheBreadcrumbs>
        <div>
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"/>
          </svg>
        </div>
        <TheBreadcrumbs :breadcrumb-link="`/base/companies/department`">
          {{ $t('Департаменты') }}
        </TheBreadcrumbs>
        <div>
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ currentDepartment.get_department.name }}
        </TheBreadcrumbs>
      </div>
    </div>
    <div
        class="mt-8 flex items-center gap-4 justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5">
      <p
          class="dark:text-white text-3xl font-bold"
      >
        {{ currentDepartment.get_department.name }}
      </p>
      <TheButton
          v-if="!currentDepartment.get_department?.participants?.length"
          type="danger"
          class="px-10 py-2 !bg-whiteSmoke !border !border-gainsboro rounded-full flex items-center gap-3 !text-sunset"
          @click="showWarning = true"
      >
        <img src="/icons/delete.svg" alt="delete-button">
        {{ $t('Удалить отдел') }}
      </TheButton>
    </div>
    <div class="flex items-center gap-x-10 mt-8">
      <div class="flex items-center w-11/12 max-sm:w-full gap-x-10">
        <TheSearch
            class="w-3/12 max-[900px]:w-full"
            v-model:model-value="query"
            @search="userStore.loadUserList({ query: query, page: 1, limit: 1e4, department_id: currentDepartment?.get_department?.id })"
        ></TheSearch>
      </div>
      <TheModal
          v-if="showWarning"
          @showModal="showWarning = !showWarning"
      >
        <div>
          <p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto">
            {{ $t('Вы действительно хотите удалить департамент?') }}
          </p>
          <div class="text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full">
            <p class="text-redOrange">{{ $t('Предупреждение!') }}</p>
            <p class="!text-base nt-2">{{ $t('Удалённые департаменты восстановке не подлежат') }}</p>
          </div>
        </div>
        <div class="flex justify-center gap-3 max-sm:flex-col">
          <TheButton
              class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300"
              t="button"
              @click="showWarning = false"
          >
            {{ $t('Отменить') }}
          </TheButton>
          <TheButton
              class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-white gap-3 py-2 !bg-redOrange !border transition-all ease-in-out duration-300"
              t="submit"
              @click="currentDepartment.deleteDepartment({id: currentDepartment.get_department.id}, $router)"
          >
            {{ $t('Удалить') }}
          </TheButton>
        </div>
      </TheModal>
    </div>
    <div class="flex gap-x-10 w-full mt-8 max-[1200px]:flex-col max-[1200px]:gap-3">
      <div
          v-if="!currentDepartment.get_department?.id"
          class="flex max-[1200px]:order-1 w-full gap-y-4 flex-col"
      >
        <TheSceleton
            v-for="i in 5"
            border-radius="10px"
            width="90%"
            height="80px"
        ></TheSceleton>
      </div>
      <div
          v-else
          class="w-full max-[1200px]:order-1 flex flex-col items-center justify-center gap-4 p-6 rounded-3xl shadow-departmentInfo bg-white"
      >
        <template v-if="department?.participants?.length">
          <DepartmentUserList
              v-for="userItem in department.participants"
              :key="userItem.id"
              :user-item="userItem"
          />
        </template>
        <p v-else class="text-gray-500 text-center py-4">
          {{ $t('Пользователей пока нет') }}
        </p>
      </div>
      <div class="w-3/12 max-[1200px]:w-full bg-white p-6 rounded-3xl h-fit shadow-departmentInfo">
        <TheTextContent>
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 15.5V11.5M11 7.5H11.01M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z"
                stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ $t('Информация') }}
        </TheTextContent>
        <div class="flex items-center justify-between mt-8">
          <p>
            {{ $t('Сотрудников') }}:
          </p>
          <p>
            {{ currentDepartment.get_department.participants?.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>