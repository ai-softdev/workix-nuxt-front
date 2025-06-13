<template>
  <div class="w-full grid grid-cols-3 gap-x-5 max-[1150px]:!grid-cols-1"
       :class="{'max-[1150px]:grid-cols-2' : activeNav, 'max-[1150px]:grid-cols-3' : !activeNav}"
  >
    <ProfileContentUserInfo/>
    <div
      class="w-full col-span-2 p-6 bg-white dark:border-t dark:border-t-gray-500 dark:shadow-md shadow-cards dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200">
      <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
        <img src="/icons/statistic.svg" alt="statistic">
        <h2 class="dark:text-white">{{ $t('Личная статистика') }}</h2>
      </div>
      <ProfileContentChart/>
    </div>
  </div>
  <div class="grid grid-cols-3 max-[1150px]:!grid-cols-1 gap-x-5 mt-5">
    <TheContentBlock
        class="bg-white shadow-cards hover:transform hover:-translate-y-2 transition-all duration-200"
    >
      <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
        <img src="/icons/tasks.svg" alt="tasks">
        <h2 class="dark:text-white">{{ $t('Последние задания') }}</h2>
      </div>
      <ProfileTasks></ProfileTasks>
    </TheContentBlock>
    <TheContentBlock
        class="bg-white shadow-cards hover:transform hover:-translate-y-2 transition-all duration-200"
    >
      <div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8">
        <img src="/icons/notifications.svg" alt="tasks">
        <h2 class="dark:text-white">{{ $t('Уведомления') }}</h2>
      </div>
      <ProfileContentNotification/>
    </TheContentBlock>
  </div>
</template>

<script setup lang="ts">
import ProfileContentChart from "~/components/Profile/ProfileUI/ProfileContentChart.vue";
import ProfileContentUserInfo from "~/components/Profile/ProfileUI/ProfileContentUserInfo.vue";
import ProfileContentNotification from "~/components/Profile/ProfileUI/ProfileContentNotification.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ProfileTasks from "~/components/Profile/ProfileUI/ProfileTasks.vue"

import {useMediaQuery, useParallax} from '@vueuse/core'
import TheContentBlock from "~/components/UI/TheContentBlock.vue";

const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const cardStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
    parallax.tilt * 1
  }deg)`,
}))

const parallaxContainer = ref(null)
const {tilt, roll, source} = useParallax(parallaxContainer)


const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>

</style>




