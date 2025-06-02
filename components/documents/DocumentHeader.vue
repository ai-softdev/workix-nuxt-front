<script setup lang="ts">

import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
</script>

<template>
  <div class="flex items-center gap-x-10">
    <p
        class="dark:text-white text-3xl font-bold"
    >
      {{ $t('Страница продаж') }}
    </p>
    <TheSearch class="w-full"></TheSearch>
<!--    <TheFilter/>-->
  </div>
</template>

<style scoped lang="scss">

</style>