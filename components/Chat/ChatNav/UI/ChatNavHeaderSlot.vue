<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div
      class="p-2 cursor-pointer flex flex-col items-center justify-center gap-2.5 rounded-xl transition-all ease-in-out duration-300"
      :class="{'bg-azure bg-opacity-10': active}"
  >
    <div>
      <slot name='ChatNavHeaderSvg'/>
    </div>
    <p class="text-[12px] text-center">
      <slot name="ChatNavHeaderText"></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>