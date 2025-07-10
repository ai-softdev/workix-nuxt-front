<template>
  <div
      class="grid grid-cols-2 gap-x-5 gap-y-6 max-[1170px]:w-full max-[756px]:grid-cols-1"
  >
    <TasksReportBlock>
      <template
          v-slot:TaskReportSvg
      >
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-azure bg-opacity-10 rounded-3xl">
          <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.0503 18.4853V9.26471C27.0503 6.5468 27.0503 5.18785 26.5214 4.14975C26.0561 3.23661 25.3138 2.49421 24.4006 2.02894C23.3624 1.5 22.0036 1.5 19.2856 1.5H8.93267C6.21477 1.5 4.85582 1.5 3.81772 2.02894C2.90458 2.49421 2.16217 3.23661 1.69691 4.14975C1.16797 5.18785 1.16797 6.5468 1.16797 9.26471V26.0882C1.16797 28.8062 1.16797 30.165 1.69691 31.2032C2.16217 32.1164 2.90458 32.8587 3.81772 33.324C4.85582 33.8529 6.21477 33.8529 8.93267 33.8529H14.1091M17.3444 16.0588H7.63856M10.8739 22.5294H7.63856M20.5797 9.58824H7.63856M18.1533 29L21.3886 32.2353L28.668 24.9559" stroke="#2196F3" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Общие задания') }}
      </template>
      <template v-slot:TaskReportSubtitle v-if="!taskList.get_stats?.count && taskList.get_tasks.results">
        {{ taskList.get_tasks?.count + $t(' заданий') }}
      </template>
      <template v-else v-slot:TaskSceleton>
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#F4C1071F] bg-opacity-10 rounded-3xl">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0013 3.66699L28.6013 10.267C33.0013 -1.28301 45.2846 11.0003 33.7346 15.4003L40.3346 22.0003L33.7346 28.6003C29.3346 17.0503 17.0513 29.3337 28.6013 33.7337L22.0013 40.3337L15.4013 33.7337C11.0013 45.2837 -1.28203 33.0003 10.268 28.6003L3.66797 22.0003L10.268 15.4003C14.668 26.9503 26.9513 14.667 15.4013 10.267L22.0013 3.66699Z" stroke="#EAB70A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('В процессе') }}
      </template>
      <template
          v-if="!performingStat('performing')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template
          v-else
          v-slot:TaskReportSubtitle
      >
        {{ performingStat('performing')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#E5E0FFCC] bg-opacity-10 rounded-3xl">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 31.5L24.25 24.25M14.8333 6.5C19.4357 6.5 23.1667 10.231 23.1667 14.8333M28.1667 14.8333C28.1667 22.1972 22.1972 28.1667 14.8333 28.1667C7.46953 28.1667 1.5 22.1972 1.5 14.8333C1.5 7.46953 7.46953 1.5 14.8333 1.5C22.1972 1.5 28.1667 7.46953 28.1667 14.8333Z" stroke="#8977EA" stroke-width="2.17241" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('На проверке') }}
      </template>
      <template
          v-if="!performingStat('watching')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template
          v-else
          v-slot:TaskReportSubtitle
      >
        {{ performingStat('watching')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#C6EBE873] bg-opacity-10 rounded-3xl">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.66797 18.3333C3.66797 18.3333 3.89039 16.7764 10.334 10.3327C16.7777 3.88909 27.2248 3.88909 33.6686 10.3327C35.9515 12.6157 37.4257 15.4013 38.091 18.3333M3.66797 18.3333V7.33333M3.66797 18.3333H14.668M40.3346 25.6667C40.3346 25.6667 40.1123 27.2235 33.6686 33.6673C27.2248 40.111 16.7777 40.111 10.334 33.6673C8.05103 31.3843 6.5769 28.5987 5.91166 25.6667M40.3346 25.6667V36.6667M40.3346 25.6667H29.3346" stroke="#43B7AD" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Возращенные на доработку') }}
      </template>
      <template
          v-if="!performingStat('returned')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template
          v-else
          v-slot:TaskReportSubtitle
      >
        {{ performingStat('returned')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#D3CFCF66] bg-opacity-10 rounded-3xl">
          <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.69143 26.8258H16.9786M3.97657 1.28613H20.6934C21.5604 1.28613 21.9938 1.28613 22.3249 1.45483C22.6162 1.60324 22.8528 1.84003 23.0013 2.13128C23.17 2.46238 23.17 2.89583 23.17 3.7627V6.97377C23.17 7.73095 23.17 8.10954 23.0844 8.46581C23.0086 8.78169 22.8835 9.08366 22.7138 9.36064C22.5224 9.67304 22.2546 9.94074 21.7192 10.4762L17.182 15.0135C16.569 15.6264 16.2624 15.933 16.1477 16.2864C16.0466 16.5972 16.0466 16.9322 16.1477 17.243C16.2624 17.5964 16.569 17.903 17.182 18.516L21.7192 23.0532C22.2546 23.5886 22.5224 23.8564 22.7138 24.1687C22.8835 24.4458 23.0086 24.7478 23.0844 25.0635C23.17 25.4199 23.17 25.7985 23.17 26.5557V29.7667C23.17 30.6337 23.17 31.0671 23.0013 31.3981C22.8528 31.6895 22.6162 31.9261 22.3249 32.0746C21.9938 32.2433 21.5604 32.2433 20.6934 32.2433H3.97657C3.10969 32.2433 2.67625 32.2433 2.34515 32.0746C2.0539 31.9261 1.81711 31.6895 1.6687 31.3981C1.5 31.0671 1.5 30.6337 1.5 29.7667V26.5557C1.5 25.7985 1.5 25.4199 1.58553 25.0635C1.66136 24.7478 1.78645 24.4458 1.95618 24.1687C2.14762 23.8564 2.41533 23.5886 2.95074 23.0532L7.48809 18.516C8.10107 17.903 8.40755 17.5964 8.52238 17.243C8.62339 16.9322 8.62339 16.5972 8.52238 16.2864C8.40756 15.933 8.10105 15.6264 7.48809 15.0135L2.95074 10.4762C2.41534 9.94076 2.14762 9.67304 1.95618 9.36064C1.78645 9.08366 1.66136 8.78169 1.58553 8.46581C1.5 8.10954 1.5 7.73095 1.5 6.97377V3.7627C1.5 2.89583 1.5 2.46238 1.6687 2.13128C1.81711 1.84003 2.0539 1.60324 2.34515 1.45483C2.67625 1.28613 3.10969 1.28613 3.97657 1.28613Z" stroke="#2A2A2A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Истеченные по сроку') }}
      </template>
      <template
          v-if="!performingStat('expired')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ performingStat('expired')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#F443361F] bg-opacity-10 rounded-3xl">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.03964 9.03866L34.963 34.962M34.9628 9.03864L9.03951 34.962M40.3346 22.0003C40.3346 32.1255 32.1264 40.3337 22.0013 40.3337C11.8761 40.3337 3.66797 32.1255 3.66797 22.0003C3.66797 11.8751 11.8761 3.66699 22.0013 3.66699C32.1264 3.66699 40.3346 11.8751 40.3346 22.0003Z" stroke="#F44336" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Отклоненные') }}
      </template>
      <template
          v-if="!performingStat('rejected')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ performingStat('rejected')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <div class="w-[86px] h-[86px] flex items-center justify-center bg-[#4CAF501F] bg-opacity-10 rounded-3xl">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.3346 20.3241V22.0108C40.3324 25.9642 39.0522 29.8111 36.685 32.9774C34.318 36.1439 30.9907 38.4604 27.1995 39.5813C23.4082 40.7022 19.3563 40.5676 15.6478 39.1975C11.9394 37.8275 8.77316 35.2953 6.62139 31.9788C4.46963 28.6623 3.44758 24.739 3.70771 20.794C3.96782 16.8492 5.49618 13.0941 8.06481 10.0888C10.6334 7.08349 14.1047 4.98903 17.961 4.11776C21.8172 3.24648 25.8518 3.64511 29.463 5.25415M40.3346 7.33366L22.0013 25.6853L16.5013 20.1853" stroke="#4CAF50" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Выполненные') }}
      </template>
      <template
          v-if="!performingStat('completed')"
          v-slot:TaskSceleton
      >
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ performingStat('completed')?.count + ' ' + $t('заданий') }}
      </template>
    </TasksReportBlock>
  </div>
</template>

<script setup lang="ts">
import TasksReportBlock from "~/components/Tasks/TaskUI/TasksReportBlock.vue";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import {useTaskList} from "~/stores/tasks";

const taskList = useTaskList()

const props = defineProps({
  stats: {
    type: Object,
  },
  taskNumber: {
    type: Number,
    default: null
  },
})

function performingStat(status: string) {
  return Array.isArray(taskList.get_stats)
      ? taskList.get_stats.find(stat => stat.status === status)
      : null
}

</script>