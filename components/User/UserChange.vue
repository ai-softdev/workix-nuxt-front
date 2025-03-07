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
    class="mt-10">
    <div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6">
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Имя')" :placeholder="userStore.user.first_name"
                  v-model="userEdit.first_name"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Фамилия')" :placeholder="userStore.user.last_name"
                  v-model="userEdit.last_name"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6">
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Email')" :placeholder="userStore.user.email" v-model="userEdit.email"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <TheInput type="tel" :label="$t('Номер')" :placeholder="userStore.user.phone"
                  v-model="userEdit.phone"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6">
      <div class="w-5/12 max-sm:w-full">
        <TheInput type="password" :label="$t('Пароль')" :placeholder="userStore.user.password"
                  v-model="userEdit.password"></TheInput>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Паспорт')" :placeholder="userStore.user.passport"
                  v-model="userEdit.passport"></TheInput>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6">
      <div class="w-5/12 max-sm:w-full">
        <p>{{ $t('Департаменты') }}</p>
        <select class="w-full dark:bg-gray-300 py-2 px-4 rounded-lg text-black" type="password"
                v-model="userEdit.department.id">
          <option v-for="department in companyStore?.get_all_department.results" :value="department.id">
            {{ department.name }}
          </option>
        </select>
      </div>
      <div class="w-5/12 max-sm:w-full">
        <TheInput :label="$t('Зароботная плата')" v-model="userEdit.salary"></TheInput>
      </div>
    </div>
    <div class="mb-6">
      <div class="w-full mx-auto text-center">
        <label class="w-full">
          <span class="text-lg tracking-widest">Фото</span>
          <p class="flex justify-center items-center my-2">
            <img class="rounded-full h-20 w-20"
                 :src="userStore.user.photo" alt="">
            <!--<TheInput class="" type="file" v-model="userEdit.photo"></TheInput>-->
          </p>
        </label>
      </div>
    </div>
    <div class="flex items-center justify-around gap-x-10 mb-6">
      <div class="w-10/12">
        <p class="tracking-widest">{{ $t('Возможности') }}</p>
        <div class="flex flex-wrap justify-center mt-4">
          <TheCheckbox
            v-for="permission in userEdit.permissions"
            :item="permission"
          >
          </TheCheckbox>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10">
      <TheButton class="py-2 px-6 rounded-full max-[450px]:w-full" t="button" @click="$emit('showChange')"
                 type="danger">
        {{ $t('Отменить') }}
      </TheButton>
      <TheButton class="py-2 px-6 rounded-full max-[450px]:w-full" type="success">{{ $t('Изменить') }}</TheButton>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>