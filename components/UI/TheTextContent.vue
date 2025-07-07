<script setup lang="ts">
defineProps({
  textType: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <div
        class="text-center dark:text-white text-black text-[18px] border rounded-full flex items-center justify-center gap-2 py-2 px-3"
        :class="{'mb-10' : textType === 'pageTitle'}"
    >
      <slot/>
    </div>
</template>

<style scoped lang="scss">

</style>