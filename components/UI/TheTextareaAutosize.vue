<script setup lang="ts">
import autosize from "autosize";
import {setFocus} from "~/hooks/ElemUI";

const el = ref()

onMounted(() => {
  autosize.destroy(el.value)
  setFocus(el.value)

})
onUpdated(()=>{
  autosize(el.value)
  console.log(12312312)
})
onBeforeUnmount(() => {
  autosize.destroy(el.value)
})

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

</script>

<template>
 <textarea
   @input="$emit('update:modelValue', $event.target.value)"
   :v-model="modelValue"
   :value="modelValue"
   ref="el"
   class="bg-whiteLilia placeholder-style p-4 resize-none example break-words dark:bg-gray-700 w-full max-h-[300px] items-center outline-none text-sm"
   placeholder="Написать сообщение..."/>
</template>

<style scoped lang="scss">
.example::-webkit-scrollbar {
  display: none;
}

.example {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>