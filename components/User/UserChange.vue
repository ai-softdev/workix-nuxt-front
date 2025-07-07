<script setup lang="ts">

import TheCheckbox from "~/components/UI/TheCheckbox.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheButton from "~/components/UI/TheButton.vue";
import {useAuthStore} from "~/stores/auth";
import {useUserStore} from "~/stores/users";
import {useCompanies} from "~/stores/companies";
import {toast} from "vue3-toastify";

const userStore = useUserStore()
const companyStore = useCompanies()
const currentUser = useUserStore()
const route = useRoute()

const emit = defineEmits(['showChange'])

const props = defineProps({
  userEdit: {
    type: Object,
    default: () => {}
  },
  showChange: Boolean
})


const userEdit = ref({...props.userEdit});

const handleSubmit = async() => {
  try {
    await userStore.update_user({user: userEdit.value, id: userEdit.value.id})
    if(userEdit.value.permissions !== userStore.user.permissions) {
       await userStore.change_permissions({
        permissions: userEdit.value.permissions.filter((e : any) => e.value).map((e : any) => e.id),
        id: userEdit.value.id,
      })
    }
    emit("showChange")
    await currentUser.loadUser({id: route.params.slug})
  } catch (error) {
    toast.error('Ошибка при обновлении пользователя или прав', {autoClose: 1500, theme:'auto'});
  }
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="mt-10"
  >
    <div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6">
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Имя')" :placeholder="userStore.user.first_name"
                  v-model="userEdit.first_name"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Фамилия')" :placeholder="userStore.user.last_name"
                  v-model="userEdit.last_name"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6">
      <div class="w-5/12 max-sm:w-full flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <img src="/icons/mail.svg" alt="mail">
          <p class="dark:text-white font-medium">
            {{ $t('Почта') }}:
          </p>
        </div>
        <TheInput
            :placeholder="userStore.user.email"
            v-model="userEdit.email"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <img src="/icons/phone.svg" alt="phone">
          <p class="dark:text-white font-medium">
            {{ $t('Номер телефона') }}:
          </p>
        </div>
        <TheInput
            type="tel"
            :placeholder="userStore.user.phone"
            v-model="userEdit.phone"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6">
      <div class="w-5/12 max-sm:w-full flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <img src="/icons/password.svg" alt="password">
          <p class="dark:text-white font-medium">
            {{ $t('Пароль') }}:
          </p>
        </div>
        <TheInput
            type="password"
            :placeholder="userStore.user.password"
            v-model="userEdit.password"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <img src="/icons/pasport.svg" alt="pasport">
          <p class="dark:text-white font-medium">
            {{ $t('Паспорт') }}:
          </p>
        </div>
        <TheInput
            :placeholder="userStore.user.passport"
            v-model="userEdit.passport"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6">
      <div class="w-5/12 max-sm:w-full">
        <div class="flex items-center gap-2">
          <img src="/icons/salary.svg" alt="salary">
          <p class="dark:text-white font-medium">
            {{ $t('Заработная плата') }}:
          </p>
        </div>
        <TheInput
            v-model="userEdit.salary"
        ></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <p class="mb-2 font-bold">{{ $t('Департаменты') }}</p>
        <select
            class="w-full text-black rounded-3xl p-2.5 bg-whiteSmoke border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
            v-model="userEdit.department.id"
        >
          <option v-for="department in companyStore?.get_all_department.results" :value="department.id">
            {{ department.name }}
          </option>
        </select>
      </div>
    </div>
<!--    <div class="mb-6">-->
<!--      <div class="w-full mx-auto text-center">-->
<!--        <label class="w-full">-->
<!--          <span class="text-lg tracking-widest">Фото</span>-->
<!--          <p class="flex justify-center items-center my-2">-->
<!--            <img class="rounded-full h-20 w-20"-->
<!--                 :src="userStore.user.photo" alt="">-->
<!--            &lt;!&ndash;<TheInput class="" type="file" v-model="userEdit.photo"></TheInput>&ndash;&gt;-->
<!--          </p>-->
<!--        </label>-->
<!--      </div>-->
<!--    </div>-->
    <div class="flex items-center justify-around gap-x-10 mb-6 pt-8 mt-8 border-t">
      <div class="w-full">
        <p class="font-bold text-lg">{{ $t('Возможности') }}</p>
        <div class="flex flex-wrap mt-4 gap-2">
          <TheCheckbox
            v-for="permission in userEdit.permissions"
            :item="permission"
          >
          </TheCheckbox>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10 max-sm:flex-col">
      <TheButton
          class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300"
          t="button"
          @click="$emit('showChange')"
      >
        {{ $t('Отменить') }}
      </TheButton>
      <TheButton
          class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300"
          t="submit"
          type="success"
      >
        {{ $t('Изменить') }}
      </TheButton>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>