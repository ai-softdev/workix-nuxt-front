<script lang="ts" setup>
  defineProps({
    to: {
      type: String,
    }
  })
</script>

<template>
  <NuxtLink :to="to" class="header-link flex select-none items-center gap-x-2 hover:text-golden rounded-lg transition-all duration-200 cursor-pointer">
    <div class="dark:fill-white link-icon w-10 h-10 border rounded-lg flex items-center justify-center bg-porcelain">
      <slot name="headerContentIcon"/>
    </div>
    <p class="dark:text-white text-sm"><slot name="headerContentText"/></p>
  </NuxtLink>
</template>

<style>
.router-link-active.header-link {
  color: #F4C107;
}

.router-link-active.header-link svg {
  stroke: #F4C107;
}

.router-link-active.header-link .link-icon {
  border-color: #F4C107;
}

.header-link:hover {
  color: #F4C107 !important;
}

.header-link:hover svg {
  stroke: #F4C107 !important;
}

.header-link:hover .link-icon {
  border-color: #F4C107 !important;
}
</style>