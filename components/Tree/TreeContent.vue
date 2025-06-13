<script setup lang="js">
import VueTree from "@ssthouse/vue3-tree-chart"
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css"
import {useTreeStore} from "~/stores/tree"
import {useAuthStore} from "~/stores/auth"
import {useRoute, useRouter} from "vue-router";
import TheTreeButton from "~/components/UI/TheTreeButton.vue";
import TheButton from "~/components/UI/TheButton.vue";

const authStore = useAuthStore()
const treeStore = useTreeStore()
const route = useRoute()
const router = useRouter()
const richMediaData = ref()
const treeUserInfo = ref()
const props = defineProps({
  treeConfig: {},
  treeFullScreen: {
    type: Boolean,
    default: false,
  },
  treeShowUserInfo: {
    type: Boolean,
    default: false
  },
})

// function normalizeTreeData(data) {
//   return Object.values(data).map(department => ({
//     ...department,
//     children: department.participants?.map(participant => ({
//       ...(participant._custom?.value || participant) // Берем `value`, если есть, иначе сам объект
//     })) || []
//   }));
// }

onMounted(() => {
  treeStore.loadTreeList()
})

</script>

<template>
  <div>
    <div @scroll.prevent @contextmenu.prevent @touchmove.prevent @wheel.prevent="(e)=>{
        if(e.deltaY < 0) {
          this.$refs.scaleTree.zoomIn()
        } else {
          this.$refs.scaleTree.zoomOut()
        }
      }"
         class="relative"
    >
      <div
        class="relative bg-white border w-full h-[80vh] mx-auto rounded-2xl overflow-hidden dark:border-gray-400 shadow dark:shadow-gray-400 transition-all duration-300"
        :class="{'!fixed z-[1000] left-0 top-0 !h-screen !w-screen flex !bg-opacity-60 !rounded-none !border-0 !bg-black justify-center items-center' : treeStore.treeFullScreen === true}"
      >
        <div class="absolute top-10 w-fit h-fit flex items-center gap-4 bg-white rounded-3xl border p-5 max-md:flex max-md:justify-center gap-x-2 right-10 z-[1001]"
             :class="{'!top-8 !right-8' : treeStore.treeFullScreen === true}"
        >
          <TheTreeButton @click="this.$refs.scaleTree.zoomIn()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.zoomOut()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.restoreScale()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="treeStore.treeFullScreen = !treeStore.treeFullScreen">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
        </div>
        <img class="z-[9] w-full h-full absolute top-0 right-0 bottom-0 object-cover block" src="/img/map-bg.png" alt="map-bg">
        <VueTree ref="scaleTree" class="mx-auto select-none relative rounded-2xl w-full h-full z-[1000]"
                 :dataset="richMediaData =  [...treeStore.get_list]"
                 :config="treeConfig = { nodeWidth: 200, nodeHeight: 150, levelHeight: 200, nodeSpacing: 400 }"
        >
        <template v-slot:node="{ node, collapsed }">
            <div
              @dblclick="treeUserInfo = {id: node.id, first_name: node.first_name, last_name: node.last_name, photo_url: node.photo_url, position: node.position, department_id: node.department_id, department: node.department, role: node.role}"
              class="py-5 px-6 bg-porcelain transition-all rounded-3xl border"
              :class="{'shadow-md dark:shadow-gray-400 ' : node.id === treeUserInfo?.id}">
<!--                <img alt="photo" :src="node.photo"-->
<!--                     class="w-[50px] h-[50px] rounded-full mx-auto"/>-->
                <p
                    class="text-center break-words"
                    style="font-weight: bold;"
                >
                  {{ node.name}}
                </p>
                <p
                    class="text-center break-words"
                    style="font-weight: bold;"
                >
                  {{ node.first_name?.length > 10 && node.last_name?.length > 10 ? (node.first_name + ' ' + node.last_name.slice(0, 9)) + '...' : node.first_name + ' ' + node.last_name}}
                </p>
                <p class="text-sm text-center px-4 py-2 rounded-3xl text-mediumGray border bg-white mt-4">
                  {{node.position}}
                </p>
            </div>
          </template>
        </VueTree>
        <div class="absolute max-md:hidden flex select-none gap-x-2 top-10 right-10 z-10">
          <TheTreeButton @click="this.$refs.scaleTree.zoomIn()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.zoomOut()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.restoreScale()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="treeStore.treeFullScreen = !treeStore.treeFullScreen">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
        </div>
        <div
          class="absolute left-0 top-0 rounded-tl-2xl rounded-bl-2xl dark:bg-gray-700 bg-white z-30 h-full transition-all duration-200"
          :class="{'!rounded-none dark:!bg-gray-700' : treeStore.treeFullScreen, '!w-0 ' : !treeUserInfo, '!w-[25%] dark:border-r-gray-400 border-r ' : treeUserInfo}">
          <div class="relative" v-if="treeUserInfo">
            <button @click="treeUserInfo = undefined" class="absolute top-2 right-0 p-1 border-t border-l border-b"
                    :class="{'fixed !top-1 !p-[3px]' : treeStore.treeFullScreen}">
              <svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="mx-auto mt-4 gap-y-2 px-2 flex flex-col justify-center items-center">
              <img class="w-[70px] h-[70px] rounded-full mt-10 dark:border-none border"
                   :src="authStore.get_server_domain + treeUserInfo?.photo_url" alt="">
              <div class="dark:text-white text-black text-center">
                <p class="text-xl break-words">{{ treeUserInfo?.first_name + ' ' + treeUserInfo?.last_name }}</p>
                <p class="text-sm">{{ treeUserInfo?.position }}</p>
              </div>
              <div>
                <p class="break-words text-center">{{ $t('Департамент:') }} <span>{{ treeUserInfo?.department }}</span>
                </p>
              </div>
            </div>
            <div class="px-2 my-6 flex flex-wrap justify-center gap-2">
              <TheButton type="treeBtn" @click="router.push(`/base/users/${treeUserInfo?.id}`)">{{ $t('Перейти') }}
              </TheButton>
              <TheButton type="treeBtn">{{ $t('Департамент') }}</TheButton>
              <TheButton type="treeBtn">{{ $t('Выдать задание') }}</TheButton>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
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
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>