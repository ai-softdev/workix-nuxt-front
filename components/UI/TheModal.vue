<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: ''
  },
  resizeClass: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <teleport to="body">
    <div class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[10000]">
      <div
          class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen z-[9999]"
          @click="$emit('showModal')"
      ></div>
      <div
          class="dark:bg-gray-600 bg-white z-[10000] rounded-3xl w-7/12 max-md:w-10/12 max-sm:w-11/12 max-h-[70%] relative p-5 max-sm:p-3 overflow-y-auto"
          :class="[
            {
              '!w-max dark:!bg-gray-700': type === 'resize',
              '!w-4/12 dark:!bg-gray-700 !p-0': type === 'resizeSendWindow',
              '!min-w-[400px] dark:!bg-gray-700 !p-0': type === 'resizeInfoWindow',
            },
            resizeClass
          ]"
      >
        <button
            type="button"
            class="bg-porcelain cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full absolute top-6 right-6 z-10"
            @click="$emit('showModal')"
        >
          <img src="/icons/modal-exit.svg" alt="modal-exit">
        </button>
        <slot/>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss">
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
