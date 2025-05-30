<template>
  <div class="flex flex-col">
    <div class="w-full mx-auto">
      <ProfileContent :activeNav="activeNav"></ProfileContent>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false
  }
})

useSeoMeta({
  title: 'Профиль',
  description: 'Личный кабинет | Текущая информация обо мне'
})
</script>