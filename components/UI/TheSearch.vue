<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  mode: {
    type: String,
    default: ''
  }
})
const focusInput = ref()
const timer = ref<number | null>(null)
watchSyncEffect(() => {
  if (props.mode === 'scan') {
    nextTick(() => {
      focusInput.value.focus()
    })
  }
})
</script>

<template>
  <div class="relative">
    <input ref="focusInput"
      class="w-full px-4 py-3 pr-10 border rounded-full bg-white focus:border-golden text-black dark:focus:opacity-100 transition-all dark:opacity-40 outline-none"
      :class="{ '': mode === 'scan' }" type="text" :placeholder="mode === 'scan' ? $t('Сканирование') : $t('Найти')"
      @input="$emit('update:modelValue', $event.target.value); $emit('search', $event.target.value)">
    <img class="absolute top-3.5 right-4 z-10" src="/icons/search.svg" alt="search">
  </div>
</template>

<style scoped lang="scss"></style>