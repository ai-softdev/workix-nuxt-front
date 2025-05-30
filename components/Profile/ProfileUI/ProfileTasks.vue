<script setup>

import {useTaskList} from "~/stores/tasks";

const tasksList = useTaskList()

onMounted(() => {
  tasksList.loadTasksLists({page: 1, limit: 15, query: ''})
})
</script>

<template>
  <div class="gap-3 flex items-center flex-col justify-center">
    <div
        v-if="!tasksList?.get_tasks.results"
        class="text-center"
    >
      {{ $t('Задач пока нет') }}
    </div>

    <template v-else>
      <div
          v-for="task in tasksList?.get_tasks.results"
          :key="task.id"
          class="p-4 border flex items-center justify-between gap-3 !bg-whiteSmoke rounded-lg w-full"
      >
        <div class="flex flex-col gap-4 w-full">
          <p class="font-bold text-md">
            {{ task.title }}
          </p>
          <p class="text-sm">
            {{ task.author_name }}
          </p>
          <p class="text-sm">
            {{ new Date(task.created_at).toLocaleDateString() }}
          </p>
        </div>
        <img class="w-6 block" src="/icons/mini-task.svg" alt="task">
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>