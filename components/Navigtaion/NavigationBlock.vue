<script setup lang="ts">

import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  activeNav: {
    type: Boolean,
  },
  navId: {
    type: Number,
    default: null
  },
  hoverActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <button
        @click="active = !active"
        class="block w-full text-start transition-all rounded-lg px-4 py-2"
        :class="{
              'bg-golden' : active
          }"
    >
      <div
          class="items-center justify-between flex gap-4 max-sm:!justify-start"
      >
        <div class="flex items-center">
          <div class="bg-white w-10 h-10 rounded-lg border flex items-center justify-center mr-2">
            <slot name="navTitleIcon"/>
          </div>
          <span v-if="authStore.activeNav" class="dark:text-white text-black"><slot name="navTitle"/></span>
        </div>
        <div :class="{'rotate-180 transition-all' : active, '-rotate-0 transition-all' : !active}">
          <svg class="dark:fill-white fill-black" width="15px" height="15px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"/>
          </svg>
        </div>
      </div>
    </button>
    <Transition name="slide-down">
      <div class="flex flex-col gap-y-1" v-if="active">
        <slot name="navContent"/>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>