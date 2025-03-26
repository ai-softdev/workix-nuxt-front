<script setup lang="ts">
import { useCompanies } from '~/stores/companies';
import {useRoute} from "vue-router";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import ChatWindowSettingContent from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheCheckbox from "~/components/UI/TheCheckbox.vue";
import TheInput from "~/components/UI/TheInput.vue";

const route = useRoute()
const currentCompany = useCompanies();
const params = {
  page: 1,
  limit: 1,
}

const showModuleModal = ref(false)
const showAdminModal = ref(false)
const companyModules = ref([])
let adminForm = ref({
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  patronymic: '',
  phone: '',
  company_id: ''
})

const openModuleModal = () => {
  showModuleModal.value = !showModuleModal.value
}
const openAdminModal = () => {
  showAdminModal.value = !showAdminModal.value
}

const changeModules = () => {
  openModuleModal()
  let array = []
  companyModules.value.forEach((item) => {
    if(item.value){
      array.push(item.id)
    }
  })
  currentCompany.editModules({id: route.params.id, data: array})
}

const createAdministrator = () => {
  openAdminModal()
  adminForm.value.company_id = route.params.id
  currentCompany.createAdministrator({data: adminForm.value, company_id: route.params.id})
}

watchEffect(() => {
  currentCompany.loadCompany({id: route.params.id})
  currentCompany.loadModules()
  currentCompany.loadCompanyAdministrators({company_id: route.params.id})
})

watch(() => currentCompany.modules, (newModules) => {
  companyModules.value = [];

  currentCompany.modules.forEach((module) => {
    const isModuleExists = currentCompany.company.modules.some(companyModule => companyModule.id === module.id);

    companyModules.value.push({
      ...module,
      value: isModuleExists
    });
  });
});

watchSyncEffect(() => {
  useSeoMeta({
    title: `${currentCompany.company.name}`
  })
})
</script>

<template>
  <div>
    <TheTextContent>
      {{ $t('Страница компании ' + currentCompany.company.name) }}
    </TheTextContent>
    <div>
      <div class="flex items-center gap-x-4">
        <TheBreadcrumbs :breadcrumb-link="'/base/companies'">
          {{ $t('Список компаний') }}
        </TheBreadcrumbs>
        <div>
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="dark:stroke-white stroke-black"
                  d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                  stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ currentCompany.company.name }}
        </TheBreadcrumbs>
      </div>
      <div class="flex items-start gap-10 w-full max-md:flex-col">
        <div class="flex flex-col gap-4 mt-10 w-8/12 max-md:w-full">
          <div class="flex flex-col gap-2">
            <p>
              {{ $t('Описание') }}:
            </p>
            <p>
              {{ currentCompany.company.description }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              {{ $t('Email') }}:
            </p>
            <p>
              {{ currentCompany.company.email }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              {{ $t('Адрес') }}:
            </p>
            <p>
              {{ currentCompany.company.address }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              {{ $t('Администраторы компании') }}:
            </p>
            <div class="bg-bgWhite p-3 rounded-lg flex flex-col gap-3 items-start">
              <UITheButton
                  @click="openAdminModal"
                  class="mb-2 border p-3 rounded-lg !text-black dark:!text-white"
              >
                Добавить
              </UITheButton>
              <div
                  v-for="(item, index) in currentCompany.company_administrators"
                  class="bg-bgWhite p-3 w-full border rounded-lg"
              >
                {{ item.last_name + ' ' + item.first_name }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-4/12 max-md:w-full">
          <p>
            {{ $t('Модули компании') }}:
          </p>
          <div
              class="flex flex-col gap-3 bg-bgWhite p-3 rounded-lg max-h-[400px] min-h-[400px] h-full overflow-y-scroll">
            <UITheButton
                @click="openModuleModal"
                class="mb-2 border p-3 rounded-lg !text-black dark:!text-white"
            >
              Изменить
            </UITheButton>
            <div
                v-for="(item, index) in currentCompany.company.modules"
                class="bg-bgWhite p-3 w-full border rounded-lg"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <TheModal
        :type="'resize'"
        v-if="showModuleModal"
        @showModal=""
    >
      <button class="absolute top-3 right-3" @click="openModuleModal">
        x
      </button>
      <div
          class="flex flex-col gap-2 min-h-[400px] min-w-[400px] max-md:min-w-full"
      >
        <p>
          {{ $t('Модули') }}:
        </p>
        <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          <div
              v-for="(item, index) in companyModules"
              class="bg-[#8881] p-3 w-full border rounded-lg"
          >
            <TheCheckbox
                :item="item"
            />
          </div>
        </div>
        <UITheButton
            class="mt-2 !text-black dark:!text-white"
            @click="changeModules"
        >
          Сохранить
        </UITheButton>
      </div>
    </TheModal>
    <TheModal
        :type="'resize'"
        v-if="showAdminModal"
        @showModal=""
    >
      <button class="absolute top-3 right-3" @click="openAdminModal">
        x
      </button>
      <div
          class="flex flex-col gap-5"
      >
        <p>
          Создание администратора:
        </p>
        <div class="flex items-center gap-5 max-md:flex-col">
          <TheInput
              :type="'default'"
              v-model="adminForm.first_name"
              class="bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full"
              type="text"
              placeholder="Имя"
          />
          <TheInput
              :type="'default'"
              v-model="adminForm.last_name"
              class="bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full"
              type="text"
              placeholder="Фамилия"
          />
          <TheInput
              :type="'default'"
              v-model="adminForm.patronymic"
              class="bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full"
              type="text"
              placeholder="Отчество"
          />
        </div>
        <div class="grid grid-cols-2 items-center gap-5 max-md:grid-cols-1">
          <TheInput
              :type="'default'"
              v-model="adminForm.email"
              class="w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none"
              type="email"
              placeholder="Email"
          />
          <TheInput
              :type="'default'"
              v-model="adminForm.password"
              class="w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none"
              type="password"
              placeholder="Пароль"
          />
        </div>
        <TheInput
            :type="'default'"
            v-model="adminForm.phone"
            class="w-[300px] max-md:w-full mx-auto bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none"
            type="phone"
            placeholder="Номер телефона"
        />
        <UITheButton
            class="mt-2 !text-black dark:!text-white"
            @click="createAdministrator"
        >
          Сохранить
        </UITheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>