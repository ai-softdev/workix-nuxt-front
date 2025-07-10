<script setup lang="ts">
</script>

<template>
  <div class="flex gap-4 pb-2 border-opacity-5 border-black justify-between max-sm:justify-start max-sm:gap-x-10  my-4 items-center cursor-pointer rounded-lg p-2" @click="this.$emit('activeStatus')">
    <div>
      <slot name="statusColor"></slot>
    </div>
    <p class="text-start">
      <slot name="statusName"></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>