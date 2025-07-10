<template>
  <div
      class="w-full h-fit flex gap-4 max-[400px]:w-400px transition-all hover:-translate-y-3 p-6 rounded-3xl shadow-objectDescription bg-white"
      :task="task"
  >
    <slot name="TaskReportSvg"/>
    <div class="flex flex-col gap-4">
      <p class="font-bold text-lg">
        <slot name="TaskReportTitle"/>
      </p>
      <p class="text-md rounded-full border px-3 py-1 w-fit">
        <slot name="TaskReportSubtitle"/>
      </p>
      <div>
        <slot name="TaskSceleton"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTaskList} from "~/stores/tasks";
import TheSceleton from "~/components/UI/TheSceleton.vue";

const taskList = useTaskList()

defineProps({
  task: {
    type: Number,
    default: null,
  }
})
</script>

<style lang="scss" scoped>

</style>