<script setup lang="tsx">
import {useCloudStore} from "~/stores/cloud";
import TheCloudUIStructureSubFolder from "~/components/Cloud/CloudUI/CloudUIStructure/TheCloudUIStructureSubFolder.vue";

defineProps({
  showFolder: {
    type: Object,
    default: () => {
    },
  },
})
</script>

<template>
  <div class="folder-box p-2 flex items-center text-black hover:text-golden gap-x-4 transition-all duration-200 cursor-pointer rounded-lg ">
    <div class="rounded-lg border folder-border p-1 shrink-0">
      <slot name="structureSvg"/>
    </div>
    <p class="text-sm text-current">
      <slot name="structureName"/>
    </p>
  </div>
</template>

<style scoped>
.folder-box:hover .folder-border {
  border-color: #F4C107;
}
</style>