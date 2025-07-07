<template>
  <div>
    <div class="flex items-center gap-4 justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5">
      <p
          class="dark:text-white text-3xl font-bold"
      >
        {{ $t('Задания') }}
      </p>
    </div>
    <div class="mt-8 flex max-[1170px]:flex-col max-lg:items-center justify-between">
      <div class="flex flex-col w-full max-xl:flex-wrap gap-y-10 max-xl:items-center">
        <div class="w-full mx-auto">
          <TasksReport></TasksReport>
        </div>
        <div class="w-full">
          <TaskContent></TaskContent>
        </div>
      </div>
      <div class="flex flex-col w-4/12 max-[1170px]:w-full gap-y-10" >
        <div v-if="chartData.datasets[0].data[0]!=undefined" class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full bg-blue-5" :class="{'h-[400px]' : statsList.get_tasks.count > 0}">
          <Pie class="tracking-wider cursor-pointer" v-if="statsList.get_tasks.count > 0" :data="chartData" :options="chartOptions"/>
          <p v-else class="text-2xl break-words dark:text-white tracking-widest text-center">{{$t('Статистика отсутствует')}}</p>
        </div>
        <div class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full">
          <TasksNotification class=""></TasksNotification>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksReport from "../../../components/Tasks/TasksReport.vue";
import TaskContent from "~/components/Tasks/TasksContent"
import TasksNotification from "~/components/Tasks/TasksNotification.vue";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import {Pie} from 'vue-chartjs'
import {useTaskList} from "~/stores/tasks";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
const statsList = useTaskList()
ChartJS.register(ArcElement, Tooltip, Legend)
Chart.defaults.color = '#b6b6b6'

const STATUS_CONFIG = {
  completed: { label: 'Выполненые', color: '#41B883' },
  performing: { label: 'В процессе', color: '#E46651' },
  watching: { label: 'На рассмотрении', color: '#3b82f6' },
  rejected: { label: 'Отмененные', color: '#DD1B16' },
  returned: { label: 'Возвращенные', color: '#FFA500' },
  expired: { label: 'Истёкшие', color: '#808080' },
}

const chartStats = computed(() => {
  const labels: string[] = []
  const data: number[] = []
  const backgroundColor: string[] = []

  const stats = statsList?.stats

  if (Array.isArray(stats)) {
    stats.forEach((item) => {
      const config = STATUS_CONFIG[item.status as keyof typeof STATUS_CONFIG]
      if (config) {
        labels.push(config.label)
        data.push(item.count)
        backgroundColor.push(config.color)
      }
    })
  }

  return { labels, data, backgroundColor }
})

const chartData = computed(() => ({
  labels: chartStats.value.labels,
  datasets: [
    {
      backgroundColor: chartStats.value.backgroundColor,
      data: chartStats.value.data
    }
  ]
}))

// const chartData = ref({
//   labels:['Выполненые', 'В процессе', 'На расмотрении', 'Отмененные'],
//   datasets: [
//     {
//       backgroundColor: ['#41B883', '#E46651', '#3b82f6', '#DD1B16'],
//       data: [statsList?.get_stats[2]?.count, statsList?.get_stats[0]?.count, statsList?.get_stats[4]?.count, statsList?.get_stats[3]?.count]
//     }
//   ]
// });
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});

const router = useRouter()
const loadAuthStore = useAuthStore()
const company = useCompanies()

watch(() => loadAuthStore.user, (newValue) => {
  if(loadAuthStore?.user?.role?.name_en === 'admin'){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})
watch(() => company.company, (newValue) => {
  let permission = company.company.modules?.find(item => item.name_en === 'tasks')
  if(!permission){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Задания',
  description: 'Страница с заданиями пользователей платформы'
})

</script>

<style lang="scss" scoped>

</style>