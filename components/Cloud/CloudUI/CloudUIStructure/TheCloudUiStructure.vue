<script setup lang="ts">
import TheInput from "~/components/UI/TheInput.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheModal from "~/components/UI/TheModal.vue";
import {useCloudStore} from "~/stores/cloud";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import TheCloudUIStructureFolder from "~/components/Cloud/CloudUI/CloudUIStructure/TheCloudUIStructureFolder.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";

const nuxtStore = nuxtStorage
const {x, y} = useMouse()
const {y: windowY} = useWindowScroll()
const isOpen = ref(false)
const virtualElement = ref({getBoundingClientRect: () => ({})})

function onContextMenu() {
  const top = unref(y) - unref(windowY)
  const left = unref(x)
  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })
  isOpen.value = true
}


const loadCloud = useCloudStore()
const createFolderForm = ref({
  name: '',
  parent_id: loadCloud.folder.id,
})
const props = defineProps({
  showFolder: {
    type: Array,
    default: () => [],
  },
  showCreateFolder: {
    type: Boolean,
    default: false
  },
  activeStructure: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
 <div class="max-[840px]:hidden h-full" :class="{'max-[840px]:!block' : activeStructure === true}">
   <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
     <div class="">
       <div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
         <div>
           <svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
             <path
                 d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path
                 d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </div>
         <p>{{ $t('Переименовать') }}</p>
       </div>
       <div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
         <div>
           <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
             <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round"></path>
             <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round"></path>
             <path data-v-965c8b16=""
                   d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                   stroke-width="2"></path>
           </svg>
         </div>
         <p>{{ $t('Создать папку') }}</p>
       </div>
       <div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
         <div>
           <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
             <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </div>
         <p>{{ $t('Убрать в корзину') }}</p>
       </div>
     </div>
   </UContextMenu>
   <div class="max-[840px]:!bg-white max-[840px]:shadow max-[840px]:p-6 max-[840px]:w-[320px] max-[400px]:w-[280px]">
     <div @click="this.$emit('activeStructures')">
       <div class="absolute w-10 h-10 shadow cursor-pointer border rounded-3xl px-2 bg-white hidden max-[840px]:block right-5 top-0"
            :class="{'max-[840px]:hidden': activeStructure === false}">
         <svg class="mt-2" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
               d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951"
               stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg>
       </div>
     </div>
<!--     <button-->
<!--         :class="{'max-[840px]:hidden' : !activeStructure}" @click="showCreateFolder = true"-->
<!--         class="w-full flex cursor-pointer p-2 bg-golden rounded-full font-bold dark:hover:bg-gray-500 transition-all duration-200 items-center gap-x-4 my-4 justify-center mx-auto"-->
<!--     >-->
<!--       + {{ $t('Создать папку') }}-->
<!--     </button>-->
     <TheModal v-if="showCreateFolder" @showModal="showCreateFolder = !showCreateFolder">
       <p class="text-3xl font-bold text-center mb-10">
         {{ $t('Создание папки') }}
       </p>
       <form @submit.prevent="loadCloud.create_folder(createFolderForm)">
         <div class="flex flex-col gap-6">
           <TheInput class="w-full" :label="$t('Название')" v-model="createFolderForm.name"></TheInput>
           <div class="w-full flex flex-col gap-y-2">
             <p class="dark:text-white">{{ $t('Расположение папки') }}</p>
             <select class="w-full p-2.5 bg-whiteSmoke border rounded-full dark:bg-gray-300">
               <option value="">
                 {{ $t('Наименование') }}
               </option>
             </select>
           </div>
         </div>
         <div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10 max-sm:flex-col mt-10">
           <TheButton
               class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300"
               t="button"
               @click="showCreateFolder = false"
           >
             {{ $t('Отменить') }}
           </TheButton>
           <TheButton
               class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300"
               t="submit"
               type="success"
           >
             {{ $t('Создать') }}
           </TheButton>
         </div>
       </form>
     </TheModal>
     <div :class="{'max-[840px]:hidden': !activeStructure}">
       <div>
         <TheCloudUIStructureFolder>
           <template v-slot:structureName>
             {{ $t('Недавние') }}
           </template>
           <template v-slot:structureSvg>
             <img src="/icons/recent.svg" alt="recent">
           </template>
         </TheCloudUIStructureFolder>
         <TheCloudUIStructureFolder>
           <template v-slot:structureName>
             {{ $t('Избранные') }}
           </template>
           <template v-slot:structureSvg>
             <img src="/icons/favourite.svg" alt="favourite">
           </template>
         </TheCloudUIStructureFolder>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>