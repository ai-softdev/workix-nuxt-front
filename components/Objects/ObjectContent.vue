<script setup lang="ts">
import ObjectList from "~/components/Objects/ObjectList.vue";
import {useObjects} from "~/stores/objects";
import TheTextContent from "~/components/UI/TheTextContent.vue";
const objects = useObjects()
objects.loadObjectList()
</script>

<template>
  <div class="mt-8">
    <div class="grid grid-cols-4 gap-5">
      <ObjectList v-for="object in objects.get_objects.results" :object="object" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>