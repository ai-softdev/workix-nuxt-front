<script setup lang="ts">
defineProps({
  textType: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <p class="text-center dark:text-white text-black text-lg " :class="{'mb-10' : textType === 'pageTitle'}"><slot/></p>
</template>

<style scoped lang="scss">

</style>