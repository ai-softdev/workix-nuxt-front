<script setup lang="ts">
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import {useMediaQuery, useParallax} from '@vueuse/core'
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import Sceleton from "~/components/UI/TheSceleton.vue";
import ThePreloader from "~/components/UI/ThePreloader.vue";
import {useUserStore} from "~/stores/users";

const company = useCompanies()
const loadUserInfo = useAuthStore()
const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const cardStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
      parallax.tilt * 1
  }deg)`,
}))

const container = ref(null)
const {tilt, roll, source} = useParallax(container)

const loadCurrentUser = useAuthStore()
defineProps({
  showInfo: {
    type: Boolean,
    default: false
  },
  getCode: {
    type: Boolean,
    default: false
  },
  userEdit: {
    type: Object,
    default: () => {
    }
  }
})
const birth = new Date(loadCurrentUser.user.date_of_birth).toLocaleDateString()
onMounted(() => {
  loadUserInfo.loadCurrentUserWorker()
})
</script>

<template>
  <div
      class="w-full p-6 relative bg-white shadow-cards max-sm:col-auto dark:shadow-md dark:border-t dark:border-t-gray-500 dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200">
    <div
    >
      <div class="flex items-center justify-between mb-8">
        <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3">
          <img src="/icons/profile.svg" alt="profile">
          <h2 class="dark:text-white">{{ $t('Личные данные') }}</h2>
        </div>
        <button
            @click="showInfo = true; userEdit={...loadCurrentUser.user}"
            class="w-10 h-10 rounded-lg flex items-center justify-center bg-porcelain hover:bg-gray-300 transition-all ease-in-out duration-300"
        >
          <img src="/icons/edit.svg" alt="profile">
        </button>
      </div>
      <div
          :class="{'blur' : !loadCurrentUser.user.id}"
      >
        <div class="flex flex-col">
          <div v-if="loadCurrentUser.user.id"
               class="flex max-sm:flex-wrap max-sm:justify-center select-none text-gray-600 gap-x-2 mb-5 pb-5 border-b">
            <img class="block w-[60px] h-[60px] border-2 border-golden rounded-full shadow-lg dark:shadow-none"
                 :src="loadCurrentUser.user.photo" alt="logo">
            <div class="my-2 mx-2">
              <h3 class="text-md font-bold dark:text-white select-none">{{ loadCurrentUser.user.first_name }}
                {{ loadCurrentUser.user.last_name }}
              </h3>
              <p class="dark:text-white text-sm text-mediumGray">
                {{
                  Math.trunc((new Date() - new Date(loadCurrentUser.user.date_of_birth)) / 1000 / 3600 / 24 / 365) + ' лет'
                }}
              </p>
              <p v-if="loadCurrentUser.user.role.name === 'Администратор сайта'"
                 class="dark:text-white tracking-widest font-bold">{{ loadCurrentUser.user.role.name }}</p>
              <p v-else-if="loadCurrentUser.user.role.name === 'Сотрудник'"
                 class="dark:text-white tracking-widest font-bold">{{ loadCurrentUser.user.position.name }}</p>
            </div>
          </div>
          <div v-else class="flex items-center gap-x-4">
            <sceleton border-radius="100px" width="100px" height="100px"></sceleton>
            <div class="flex flex-col gap-y-2">
              <sceleton width="150px" height="20px" border-radius="5px"></sceleton>
              <sceleton width="60px" height="15px" border-radius="5px"></sceleton>
            </div>
          </div>
          <div class="flex flex-col gap-y-2 ml-2 w-full">
            <div class="text-sm flex items-center justify-between">
              <p class="dark:text-white font-bold">
                {{ $t('Email') }}:
              </p>
              <p v-if="loadCurrentUser.user.id">{{ loadCurrentUser.user.email }}</p>
            </div>
            <div class="text-sm flex items-center justify-between">
              <p class="dark:text-white font-bold">
                {{ $t('Номер') }}:
              </p>
              <p>{{ loadCurrentUser.user.phone?.slice(4, 13) }}</p>
            </div>
            <div class="text-sm flex items-center justify-between">
              <p class="dark:text-white font-bold">
                {{ $t('Заработная плата') }}:
              </p>
              <p v-if="loadCurrentUser.user.salary">{{ loadCurrentUser.user.salary + ' сум' }}</p>
              <p v-else>{{ $t('Не назначена') }}</p>
            </div>
            <div v-if="company.company.name" class="text-sm flex items-center justify-between">
              <p class="dark:text-white font-bold">
                {{ $t('Компания') }}:
              </p>
              <p>{{ company.company.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loadCurrentUser.user.id">
        <div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>
        <ThePreloader></ThePreloader>
      </div>
    </div>
    <Transition name="fade">
      <TheModal
          v-if="showInfo"
          @showModal="showInfo = false; getCode = false"
      >
        <form
            @submit.prevent="loadCurrentUser.update_my({user: userEdit})"
            class="p-6 relative"
        >
          <div>
            <h2 class="text-2xl font-bold dark:text-white">Личная информация</h2>
          </div>
          <div class="w-full mt-8">
            <div class="mt-10 max-[1275px]:flex-col max-[1275px]:gap-10 flex items-center justify-around bg-whiteLilia p-8 rounded-3xl pb-6 border-b mb-6">
              <div class="flex items-center max-[1120px]:flex-col gap-3 dark:text-white border-r pr-10 max-[1275px]:border-none max-[1275px]:pr-0">
                <p class="dark:text-gray-200 font-bold text-md">{{ $t('Должность' + ':') }} </p>
                <p class="bg-white rounded-xl py-2 px-4 shadow max-[1120px]:text-center">{{ userEdit.position.name }}</p>
              </div>
              <div class="flex items-center max-[1120px]:flex-col gap-3 dark:text-white">
                <p class="dark:text-gray-200 font-bold text-md">{{ $t('Заработная плата' + ':') }}</p>
                <p
                    v-if="userEdit.salary"
                    class="bg-white rounded-xl py-2 px-4 shadow"
                >
                  {{ userEdit.salary + ' ' + $t('сум') }}
                </p>
                <p
                    v-else
                    class="bg-white rounded-xl py-2 px-4 shadow"
                >
                  {{ $t('Нет зарплаты') }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5 mb-12 max-[1120px]:grid-cols-1">
              <TheInput
                  class="w-full"
                  type="text"
                  label="Имя:"
                  v-model="userEdit.first_name"
              />
              <TheInput
                  type="date"
                  v-model="userEdit.date_of_birth"
                  label="Дата рождения:"
              />
              <TheInput
                  type="text"
                  v-model="userEdit.last_name"
                  label="Фамилия:"
              />
              <TheInput
                  type="tel"
                  v-model="userEdit.phone"
                  label="Телефон:"
              />
            </div>
            <div
                class="flex items-center justify-center gap-5 max-[1120px]:flex-col"
            >
              <TheButton
                  class="!bg-porcelain !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2"
                  t="button"
                  @click="showInfo = false; getCode = false"
              >
                {{ $t('Отмена') }}
              </TheButton>
              <TheButton
                  class="!bg-golden !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2"
                  t="submit"
              >
                {{ $t('Сохранить') }}
              </TheButton>
            </div>
          </div>
        </form>
      </TheModal>
    </Transition>
  </div>

</template>

<style scoped lang="scss">
</style>