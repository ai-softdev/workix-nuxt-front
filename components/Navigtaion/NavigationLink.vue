<template>
  <div>
    <NuxtLink :to="to" @click="authUser.openSettings = false; authUser.openNotification = false;"
              class="router-link flex pl-6 transition-all rounded-lg border-lg py-2 w-full items-center gap-x-3 text-black px-4"
              :class="{'rounded-lg' : !authUser.activeNav}"
    >
      <div class="link-icon dark:fill-white fill-black transition-all w-10 h-10 rounded-lg flex items-center justify-center border bg-white">
        <slot name="navIcon"/>
      </div>
      <div class="text-sm max-sm:text-base" v-if="authUser.activeNav">
        <slot name="navLink"/>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authUser = useAuthStore()
const props = defineProps({
  to: String,
  activeNav: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.router-link-active {
  position: relative;
  color: #F4C107;
  //background-color: rgba(244, 193, 7, 1);
}

.router-link-active svg {
  stroke: #F4C107;
}

.router-link-active .link-icon {
  border-color: #F4C107;
}

.router-link:hover {
  color: #F4C107 !important;
}

.router-link:hover svg {
  stroke: #F4C107 !important;
}

.router-link:hover .link-icon {
  border-color: #F4C107 !important;
}

.router-link-active::after {
  content: "";
  position: absolute;
  top: 40%;
  right: 10px;
  bottom: 0;
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #F4C107;
}

//a.nuxt-link-active {
//  color: blue;
//}

/* exact link will show the primary color for only the exact matching link */
//a.nuxt-link-exact-active {
//  color: #00c58e;
//}
</style>