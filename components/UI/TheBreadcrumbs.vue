<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

defineProps({
  breadcrumbLink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>

    <NuxtLink
        class="text-[15px] !bg-transparent border-none font-light transition-all"
        :class="{
          'dark:hover:text-gray-200 hover:text-gray-500 hover:underline text-mediumGray' : breadcrumbLink.length,
          'text-darkJungle' : breadcrumbLink.length === 0
        }"
        :to="breadcrumbLink"
    >
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>