<script setup>
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue"
import UserContentCreateElems from "~/components/User/UserUI/UserContentCreateElems.vue";

import {useUserStore} from "~/stores/users";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";


import VueDatePicker from "@vuepic/vue-datepicker";

const loadCurrentUser = useAuthStore()
const company = useCompanies()
const userList = useUserStore()
const previewUrl = ref(null)
const createForm = ref({
  email: '',
  first_name: '',
  last_name: '',
  patronymic: '',
  password: '',
  phone: '',
  photo: '',
  position: '',
  head_user_id: '',
  date_of_birth: new Date().toDateString(),
  company_id: Number(),
  department_id: Number(),
  department: {},
  role_id: Number(),
  permissions: {}
})

function loads() {
  userList.loadPositionList()
  userList.loadUserList()
  company.loadDepartmentList();
}

defineProps({
  showCreateUser: {
    type: Boolean,
    default: false
  },
})

function createAdmin() {
  if (createForm.value.department?.id) {
    createForm.value.department_id = createForm.value.department.id;
  }
  userList.createAdmin(createForm.value);
  createForm.value = {
    email: '',
    first_name: '',
    last_name: '',
    patronymic: '',
    password: '',
    phone: '',
    photo: '',
    position: '',
    head_user_id: '',
    date_of_birth: new Date().toDateString(),
    company_id: Number(),
    department_id: Number(),
    department: {},
    role_id: Number(),
    permissions: {}
  };
}

function createUser() {
  if (createForm.value.department?.id) {
    createForm.value.department_id = createForm.value.department.id;
  }
  userList.createUser(createForm.value);
  createForm.value = {
    email: '',
    first_name: '',
    last_name: '',
    patronymic: '',
    password: '',
    phone: '',
    photo: '',
    position: '',
    head_user_id: '',
    date_of_birth: new Date().toDateString(),
    company_id: Number(),
    department_id: Number(),
    department: {},
    role_id: Number(),
    permissions: {}
  };
}

const showDropdown = ref(false);
const filteredPositions = ref([]);
const filterPositions = () => {
  if (!createForm.value.position) {
    filteredPositions.value = userList.get_position_list;
  } else {
    filteredPositions.value = userList.get_position_list.filter(position =>
        position.name.toLowerCase().includes(createForm.value.position.toLowerCase())
    );
  }
  showDropdown.value = true;
};

const selectPosition = (name) => {
  createForm.value.position = name;
  showDropdown.value = false;
};

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    createForm.value.photo = file
    previewUrl.value = URL.createObjectURL(file)
  } else {
    createForm.value.photo = null
    previewUrl.value = null
  }
}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
};


</script>

<template>
  <div>
    <TheButton
        class="max-md:w-full w-full text-sm"
        type="golden"
        v-if="loadCurrentUser.current_user.permissions"
        @click="showCreateUser = true; loads(); loadCurrentUser.user.role?.name_en === 'admin' ? company.loadCompanyList({page: 1, limit: 1000, query: ''}) : ''"
    >
      + {{ $t('Создать пользователя') }}
    </TheButton>
    <TheModal
        v-if="showCreateUser"
        @showModal="showCreateUser = !showCreateUser; !showCreateUser ? createForm = {} : createForm = {} "
        :show-create-user="showCreateUser"
    >
      <div class="p-6 !pb-0">
        <TheTextContent class="!text-start font-bold !text-3xl">{{ $t('Создание пользователя') }}</TheTextContent>
        <form
            enctype="multipart/form-data"
            @submit.prevent="loadCurrentUser.user.role?.name_en === 'admin' ? createAdmin() : createUser()"
        >
          <div class="grid grid-cols-2 gap-4 mt-8 pb-6 border-b mb-6">
            <div class="w-full max-lg:w-full">
              <TheInput type="text" :label="$t('Имя')" v-model="createForm.first_name"/>
            </div>
            <div class="w-full max-lg:w-full">
              <TheInput type="text" :label="$t('Фамилия')" v-model="createForm.last_name"/>
            </div>
            <div class="w-full max-lg:w-full">
              <TheInput type="text" :label="$t('Отчество')" v-model="createForm.patronymic"/>
            </div>
            <div class="w-full max-lg:w-full flex flex-col">
              <p class="text-md font-medium dark:text-white">{{ $t('Дата рождения') }}</p>
              <TheInput type="date" class="w-full rounded-lg outline-1"
                        id="date"
                        placeholder="Выбрать"
                        v-model="createForm.date_of_birth"
              />
              <!--            <VueDatePicker v-model="createForm.date_of_birth" :select-text="$t('Выбрать')"-->
              <!--                           :cancel-text="$t('Отменить')" placeholder="Start Typing ..." text-input-->
              <!--                           class="w-full max-lg:hidden rounded-lg p-2 dark:border-none mx-auto outline-semiCyan outline-1"-->
              <!--                           auto-apply-->
              <!--                           multi-calendars-solo/>-->
<!--              <input type="date" v-model="createForm.date_of_birth"-->
<!--                     class="max-lg:block border outline-semiCyan dark:outline-none outline-1 dark:border-none hidden p-4 dark:bg-gray-300 dark:text-black mb-4 rounded-lg">-->
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="w-full">
              <div class="text-md font-medium dark:text-white flex items-center gap-2">
                <img src="/icons/email.svg" alt="email">
                <p>
                  {{ $t('Почта') }}
                </p>
              </div>
              <TheInput type="text" v-model="createForm.email"/>
            </div>
            <div class="w-full flex flex-col">
              <div class="text-md font-medium dark:text-white flex items-center gap-2">
                <img src="/icons/phone.svg" alt="phone">
                <p>
                  {{ $t('Номер телефона') }}
                </p>
              </div>
              <TheInput type="tel" class="w-full"
                        id="phone"
                        placeholder="+998 (__) ___-__-__"
                        v-model="createForm.phone"
              />
            </div>
            <div class="w-full">
              <div class="text-md font-medium dark:text-white flex items-center gap-2">
                <img src="/icons/password.svg" alt="password">
                <p>
                  {{ $t('Пароль') }}
                </p>
              </div>
              <TheInput type="password" v-model="createForm.password"/>
            </div>
          </div>

          <UserContentCreateElems>
            <div class="w-6/12 flex flex-col max-lg:w-full">
              <div v-if="previewUrl" class="mt-4">
                <img
                    :src="previewUrl"
                    alt="Превью"
                    class="mx-auto w-32 h-32 object-cover rounded-lg shadow-icons"
                />
              </div>
              <p class="text-md font-medium dark:text-white">{{ $t('Фото') }}</p>
              <label class="cursor-pointer bg-whiteSmoke hover:bg-gray-100 rounded-lg border-dashed border p-4 transition-all mt-2">
                <input type="file" name="file" :label="'Фото'" class="dark:text-white cursor-pointer"
                       @input="handleImageUpload">
              </label>
            </div>
          </UserContentCreateElems>
          <UserContentCreateElems>
            <div class="w-6/12 max-lg:w-full relative">
              <p class="text-md dark:text-white font-medium">{{ $t('Должность') }}</p>
              <input
                  type="text"
                  v-model="createForm.position"
                  class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1 "
                  @focus="showDropdown = true"
                  @blur="hideDropdown"
                  @input="filterPositions"
              />
              <ul v-if="showDropdown && filteredPositions.length"
                  class="absolute z-10 bg-white dark:bg-gray-800 w-full rounded-lg mt-1 border border-gray-300 dark:border-gray-600 shadow-md max-h-40 overflow-y-auto">
                <li v-for="position in filteredPositions" :key="position.name"
                    @mousedown="selectPosition(position.name)"
                    class="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                  {{ position.name }}
                </li>
              </ul>
            </div>
          </UserContentCreateElems>
          <UserContentCreateElems>
            <!--          <div class="w-full">-->
            <!--            <p v-if="loadCurrentUser.user.role.name_en === 'admin'"-->
            <!--               class="text-md dark:text-white tracking-widest mb-2">{{ $t('Компании') }}</p>-->
            <!--            <p v-else class="text-md dark:text-white tracking-widest mb-2">{{ $t('Компания') }}</p>-->
            <!--            <select type="text" v-model="createForm.company_id"-->
            <!--                    class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"-->
            <!--                    v-if="loadCurrentUser?.user.role.name_en === 'admin'">-->
            <!--              <option class="text-black" v-for="companyItem in company?.get_all_company?.results"-->
            <!--                      :value="companyItem.id">-->
            <!--                {{ companyItem.name }}-->
            <!--              </option>-->
            <!--            </select>-->
            <!--            <div v-else-if="loadCurrentUser.user.role.name_en === 'company_admin'">-->
            <!--              <p class="text-md dark:text-white tracking-widest mb-2">{{ loadCurrentUser.user.company }}</p>-->
            <!--            </div>-->
            <!--          </div>-->
            <div class="w-6/12 max-lg:w-full" v-if="loadCurrentUser.user.role.name_en === 'company_admin'">
              <p class="text-md dark:text-white font-medium">{{ $t('Отдел') }}</p>
              <select type="text" v-model="createForm.department"
                      class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1">
                <option v-for="department in company?.get_all_department.results" :value="department">
                  {{ department.name }}
                </option>
              </select>
            </div>
          </UserContentCreateElems>
          <UserContentCreateElems v-if="createForm.department?.participants?.length">
            <div class="w-6/12 max-lg:w-full">
              <p class="text-md dark:text-white font-medium">{{ $t('Руководитель') }}</p>
              <TheInput v-if="!userList?.get_position_list" type="text" name="text" :label="'Руководитель'" class="dark:text-white cursor-pointer" v-model="createForm.head_user_id"/>
              <select v-model="createForm.head_user_id"
                      class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1 ">
                <option v-for="participant in createForm.department.participants" :key="participant.id" :value="participant.id">
                  {{ participant.first_name }} {{ participant.last_name }}
                </option>
              </select>
            </div>
          </UserContentCreateElems>
          <UserContentCreateElems>
            <TheButton
                class="w-4/12 rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300"
                t="button"
                @click="showCreateUser = false"
            >
              {{ $t('Отменить') }}
            </TheButton>
            <TheButton
                class="w-4/12 rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300"
                t="submit"
                type="success"
            >
              {{ $t('Создать') }}
            </TheButton>
          </UserContentCreateElems>
        </form>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>