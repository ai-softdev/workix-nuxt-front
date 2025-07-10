<script setup lang="ts">
defineProps({
  item: {
    type: Object,
  },
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="border hover:bg-gray-100 transition-all w-full px-6 py-5 rounded-2xl bg-whiteLilia">
      <p class="text-md font-medium">
        {{ item.text }}
      </p>
    </div>
    <p class="text-romance text-end">
      {{ $t('Дата уведомления: ') + new Date(item.created_at).toLocaleDateString() }}
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>