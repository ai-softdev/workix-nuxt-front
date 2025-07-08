<script setup lang="ts">
import {useUserStore} from "~/stores/users";
import {useRoute} from "vue-router";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue"
import TheUserChart from "~/components/User/UserUI/TheUserChart.vue";

import {useMediaQuery, useParallax} from '@vueuse/core'
import TheInput from "~/components/UI/TheInput.vue";
import TheCheckbox from "~/components/UI/TheCheckbox.vue";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import ThePreloader from "~/components/UI/ThePreloader.vue";
import UserChange from "~/components/User/UserChange.vue";

const route = useRoute()

const company = useCompanies()
const loadCurrentUser = useAuthStore()
const currentUser = useUserStore()

const router = useRouter()

defineProps({
  userEdit: {
    type: Object,
    default: () => ({})
  },
  showWarning: Boolean,
  showChange: Boolean,
  activeImg: Boolean,
});

function goBack() {
  router.back()
}

watchEffect(() => {
  currentUser.loadUser({id: route.params.slug})
  if (loadCurrentUser.user.role?.name_en === 'company_admin' || loadCurrentUser.user.role?.name_en === 'admin') {
    company.loadDepartmentList()
    currentUser.loadPermissions()
  } else if (loadCurrentUser.user.role_en === 'admin') {
    company.loadCompanyList({page: 1, limit: 100000, query: ''})
  }
})
onUpdated(() => {
  useSeoMeta({
    title: `${currentUser.user.first_name + ' ' + currentUser.user.last_name}`,
  })
})
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
        <TheBreadcrumbs :breadcrumb-link="`/base/users`">
          {{ $t('Компания') }}
        </TheBreadcrumbs>
        <div>
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ currentUser.user.first_name + ' ' + currentUser.user.last_name }}
        </TheBreadcrumbs>
      </div>
    </div>
    <div
        class="mt-8 flex items-center gap-4 justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5"
    >
      <p
          class="dark:text-white text-3xl font-bold"
      >
        {{ $t('Профиль пользователя') }}
      </p>
      <div class="flex items-center gap-3 max-sm:flex-col max-sm:items-start">
        <p class="dark:text-white">
          {{ $t('Последняя активность') }}
        </p>
        <div class="flex items-center gap-2">
          <p class="dark:text-white text-mediumGray">
            {{ new Date().toLocaleDateString() }}
          </p>
          <p class="dark:text-white text-mediumGray">
            {{ new Date().toLocaleTimeString() }}
          </p>
        </div>
      </div>
    </div>
    <div class="my-10 grid grid-cols-3 max-[1150px]:!grid-cols-1 gap-5">
      <div class="bg-white p-6 rounded-3xl shadow-profileCard">
        <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3">
          <img src="/icons/profile.svg" alt="profile">
          <h2 class="dark:text-white">{{ $t('Информация') }}</h2>
        </div>
        <div class="my-6 mx-auto flex flex-col ">
          <div v-if="!currentUser.user.id" class="flex flex-col items-center gap-y-2">
            <TheSceleton width="5rem" height="5rem" border-radius="100%"></TheSceleton>
            <div class="flex flex-col justify-center items-center gap-y-2">
              <TheSceleton width="150px" height="20px" border-radius="20px"></TheSceleton>
              <TheSceleton width="130px" height="15px" border-radius="20px"></TheSceleton>
            </div>
          </div>
          <div v-else class="flex flex-col">
            <div class="flex text-gray-600 gap-x-2 border-b pb-6">
              <img class="block w-[60px] h-[60px] border-2 border-golden rounded-full shadow-lg dark:shadow-none"
                   :src="currentUser.user.photo" alt="logo">
              <div class="my-2 mx-2">
                <h3 class="text-md font-bold dark:text-white select-none">
                  {{ currentUser.user.first_name }}
                  {{ currentUser.user.last_name }}
                </h3>
                <p class="dark:text-white text-sm text-mediumGray">
                  {{
                    Math.trunc((new Date() - new Date(loadCurrentUser.user.date_of_birth)) / 1000 / 3600 / 24 / 365) + ' лет'
                  }}
                </p>
              </div>
            </div>
          </div>
          <TheSceleton
              v-if="!currentUser.user.id"
              class="my-2"
              width="150px"
              height="15px"
              border-radius="20px"
          ></TheSceleton>
          <div
              v-else
              class="flex flex-col gap-4 w-full h-fit mt-6"
          >
            <div class="text-sm flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img src="/icons/mail.svg" alt="mail">
                <p class="dark:text-white font-bold">
                  {{ $t('Email') }}:
                </p>
              </div>
              <a
                  :href="`mailto:${currentUser.user.email}`"
                  class="cursor-pointer hover:text-blueSemiLight hover:underline dark:hover:text-gray-200"
              >
                {{
                  currentUser.user.email
                }}
              </a>
            </div>
            <div class="text-sm flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img src="/icons/post.svg" alt="post">
                <p class="dark:text-white font-bold">
                  {{ $t('Должность') }}:
                </p>
              </div>
              <p v-if="loadCurrentUser.user.role_en === 'admin'"
                 class="dark:text-white"
              >
                {{ currentUser.user.role }}
                {{ currentUser.user.position }}
              </p>
              <p v-else
                 class="dark:text-white"
              >
                {{ currentUser.user.position }}
              </p>
            </div>
            <div class="text-sm flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img src="/icons/phone.svg" alt="phone">
                <p class="dark:text-white font-bold">
                  {{ $t('Телефон') }}:
                </p>
              </div>
              <a
                  class="flex items-center gap-x-2 hover:underline"
                  :href="`tel:${currentUser.user.phone}`"
              >
                <p>{{ currentUser.user.phone }}</p>
              </a>
            </div>
            <div class="text-sm flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img src="/icons/stag.svg" alt="stag">
                <p class="dark:text-white font-bold">
                  {{ $t('Стаж') }}:
                </p>
              </div>
              <p
                  class="flex items-center gap-x-2 hover:underline"
              >
                {{ currentUser.user.phone }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2 bg-white p-6 rounded-3xl shadow-profileCard">
        <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
          <img src="/icons/statistic.svg" alt="statistic">
          <h2 class="dark:text-white">{{ $t('Личная статистика') }}</h2>
        </div>
        <div>
          <TheUserChart></TheUserChart>
        </div>
      </div>
      <div class="bg-white p-6 rounded-3xl shadow-profileCard">
        <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
          <img src="/icons/info.svg" alt="info">
          <h2 class="dark:text-white">{{ $t('Информация об отделе') }}</h2>
        </div>
        <div class="flex flex-col gap-4 w-full">
          <div class="text-sm flex items-center justify-between">
            <p class="dark:text-white font-bold">
              {{ $t('Департамент') }}:
            </p>
            <p
                class="flex items-center gap-x-2 hover:underline"
            >
              {{ currentUser.user.department?.name }}
            </p>
          </div>
          <div class="text-sm flex items-center justify-between">
            <p class="dark:text-white font-bold">
              {{ $t('Руководитель') }}:
            </p>
            <p
                class="flex items-center gap-x-2 hover:underline"
            >
              {{ currentUser.user.department?.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed flex gap-x-4 bottom-6 left-1/2 -translate-x-1/2">
      <button
          @click="showChange = !showChange; userEdit={...currentUser.user};
        userEdit.permissions=currentUser.get_permission_list.map(e=>{e.value = userEdit.permissions.filter(i=>i.id == e.id).length != 0
          return e}); "
          @showModal="(el : any) => {showChange = true}"
          class="w-12 h-12 bg-white border hover:transition-all duration-200 hover:scale-95 rounded-xl relative"
      >
        <svg class="absolute top-3 right-2.5" width="25" height="25" viewBox="0 -0.05 20.109 20.109"
             xmlns="http://www.w3.org/2000/svg">
          <g class="stroke-black" id="edit-user" transform="translate(-2 -2)">
            <path id="primary"
                  d="M20.71,16.09,15.8,21H13V18.2l4.91-4.91a1,1,0,0,1,1.4,0l1.4,1.4A1,1,0,0,1,20.71,16.09ZM11,3a4,4,0,1,0,4,4A4,4,0,0,0,11,3Z"
                  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path id="primary-2" data-name="primary" d="M11,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H9" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </g>
        </svg>
      </button>
      <button @click="showWarning = !showWarning"
              class="w-12 h-12 bg-white border hover:transition-all duration-200 hover:scale-95 rounded-xl relative">
        <svg class="absolute top-3 right-2 fill-redOrange" height="26px" width="26px" version="1.1" id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 473 473" xml:space="preserve">
          <g>
            <path d="M324.285,215.015V128h20V38h-98.384V0H132.669v38H34.285v90h20v305h161.523c23.578,24.635,56.766,40,93.477,40
              c71.368,0,129.43-58.062,129.43-129.43C438.715,277.276,388.612,222.474,324.285,215.015z M294.285,215.015
              c-18.052,2.093-34.982,7.911-50,16.669V128h50V215.015z M162.669,30h53.232v8h-53.232V30z M64.285,68h250v30h-250V68z M84.285,128
              h50v275h-50V128z M164.285,403V128h50v127.768c-21.356,23.089-34.429,53.946-34.429,87.802c0,21.411,5.231,41.622,14.475,59.43
              H164.285z M309.285,443c-54.826,0-99.429-44.604-99.429-99.43s44.604-99.429,99.429-99.429s99.43,44.604,99.43,99.429
              S364.111,443,309.285,443z"/>
            <polygon points="342.248,289.395 309.285,322.358 276.323,289.395 255.11,310.608 288.073,343.571 255.11,376.533 276.323,397.746
              309.285,364.783 342.248,397.746 363.461,376.533 330.498,343.571 363.461,310.608 	"/>
          </g>
        </svg>
      </button>
      <TheModal v-if="showWarning" @showModal="showWarning = !showWarning;">
        <p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto">
          {{ $t('Вы действительно хотите удалить пользователя?') }}
        </p>
        <p class="text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full">
          <span
            class="font-bold text-red-500">{{ $t('Предупреждение') }}</span>:
          {{ $t('после удаления данного пользователя вся информация пропадёт и не будет подлежать восстановлению') }}
        </p>
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
              @click="currentUser.deleteUser({user_id: currentUser.user.id}, $router)"
          >
            {{ $t('Удалить') }}
          </TheButton>
        </div>
      </TheModal>
      <TheModal v-if="showChange" @showModal="showChange = !showChange">
        <p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto">
          {{ $t('Редактирование пользователя') }}
        </p>
        <UserChange :user-edit="userEdit" @showChange="showChange = false"/>
      </TheModal>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>