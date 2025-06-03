<script setup lang="ts">

</script>

<template>
  <div class="p-6 bg-white dark:shadow-md dark:shadow-gray-500 dark:border-t-gray-500 shadow-cards dark:text-white text-black bg-opacity-80 rounded-3xl">
    <div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit">
      <slot name="blockTitle"/>
    </div>
    <div class="mt-8">
      <slot name="blockContent"></slot>
    </div>
  </div>
</template>

<style scoped >

</style>