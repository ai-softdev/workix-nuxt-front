<script setup lang="ts">

import {downloadWithAxios} from "~/hooks/ElemUI";
import {useAuthStore} from "~/stores/auth";

const router = useRouter()
const domain = useAuthStore()
defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div
       class="py-5 px-6 border rounded-3xl bg-whiteLilia dark:hover:bg-gray-700 hover:bg-gray-100 transition-all">
    <div
        @click.stop="router.push(`/base/documents/${item.id}`)"
        class="cursor-pointer mb-4 pb-4 border-b hover:!text-golden text-black transition-all ease-in-out duration-300 flex items-center gap-3 justify-between"
    >
      <div class="flex items-center gap-3">
        <div class="rounded-lg bg-white shadow-sm p-2 w-8 h-8 flex items-center justify-center">
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <slot name="documentTitle"/>
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999999 8L15 8M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
<!--    <div-->
<!--      class="flex items-center gap-x-4 my-6 hover:bg-blueSemiLight cursor-pointer p-2 rounded-lg transition-all hover:text-white"-->
<!--    >-->
<!--&lt;!&ndash;      @click.stop="downloadWithAxios(item)"&ndash;&gt;-->
<!--      <div v-if="item.file_name.substr(-3) === 'pdf'">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg"-->
<!--             width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve">-->
<!--          <g>-->
<!--            <path fill="#8C181A"-->
<!--                  d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>-->
<!--            <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>-->
<!--            <path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>-->
<!--          </g>-->
<!--                    <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7-->
<!--            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z-->
<!--             M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1-->
<!--            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7-->
<!--            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7-->
<!--            C42.2,42.8,41.9,43.1,41.5,43.1z"/>-->
<!--        </svg>-->
<!--      </div>-->
<!--      <div v-if="item.file_name.substr(-3) === 'doc' || item.file_name.substr(-4) === 'docx'">-->
<!--        <svg width="50px" height="50px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">-->

<!--          <g fill-rule="evenodd">-->

<!--            <path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad"/>-->

<!--            <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"/>-->

<!--            <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"/>-->

<!--          </g>-->

<!--          <path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff"/>-->

<!--        </svg>-->
<!--      </div>-->
<!--      <p>-->
<!--        <slot name="documentFileName"/>-->
<!--      </p>-->
<!--    </div>-->
    <p class="text-center mb-4">
      {{ $t('Пользователь') }}:
    </p>
    <div class="flex items-center justify-center gap-x-2 ">
      <div class="w-6 h-6">
        <img class="rounded-full w-full" :src="domain.get_server_domain + item.author.photo" alt="">
      </div>
      <p class="text-mediumGray text-sm">
        <slot name="documentUserName"/>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>