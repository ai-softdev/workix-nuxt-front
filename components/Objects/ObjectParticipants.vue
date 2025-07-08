<script setup lang="ts">
import {useObjects} from "~/stores/objects";
import {useAuthStore} from "~/stores/auth";
const url = useAuthStore()
const currentObject = useObjects()
defineProps({
  user: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
  <NuxtLink
      class="flex dark:hover:bg-gray-700 p-2 rounded-3xl bg-whiteSmoke items-center gap-x-2 hover:shadow-sm transition-all ease-in-out duration-300"
      :to="`/base/users/${user.id}`"
  >
    <div class="w-[50px] h-[50px] rounded-full bg-white shadow">
      <img
          :src="user.photo"
          alt="user-img"
      >
    </div>
    <p>
      {{user.first_name + ' ' + user.last_name}}
    </p>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>