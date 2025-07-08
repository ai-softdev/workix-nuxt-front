<script setup lang="ts">
import {useObjects} from "~/stores/objects";
import {useRoute} from "vue-router";
import TheTitle from '~/components/UI/TheTitle.vue'
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import ObjectParticipants from "~/components/Objects/ObjectParticipants.vue";
import ObjectSwiper from "~/components/Objects/ObjectSwiper.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";

const route = useRoute()
const currentObject = useObjects()

const router = useRouter()

function goBack() {
  router.back()
}

watchEffect(() => {
  currentObject.loadObject({id: route.params.id})
})

watchSyncEffect(() => {
  useSeoMeta({
    title: `${currentObject.objects.name}`
  })
})
</script>

<template>
  <div class="text-center">
    <div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
      <button
          @click="goBack"
          class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        {{ $t('Назад') }}
      </button>
      <div class="flex items-center flex-wrap gap-x-3">
        <TheBreadcrumbs :breadcrumb-link="`/base/objects`">
          {{ $t('Объекты') }}
        </TheBreadcrumbs>
        <div>
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ $t('Страница объекта ') }}
        </TheBreadcrumbs>
      </div>
    </div>
    <div class="flex items-center gap-4 my-8 max-sm:flex-col max-sm:items-start">
      <p class="dark:text-white text-3xl font-bold max-sm:text-start">
        {{ $t('Страница объекта ') }}
      </p>
      <div class="font-bold px-8 py-2 shadow-object rounded-full bg-white">
        {{ currentObject.get_objects.name }}
      </div>
    </div>
    <div class="flex mt-6 gap-x-4 max-[1100px]:flex-col max-[1100px]:gap-5">
      <div class="w-9/12 flex flex-col gap-5 max-[1100px]:w-full max-[1100px]:order-2">
        <div class="bg-white p-6 rounded-3xl shadow-objectDescription">
          <p class="px-4 py-2 rounded-full border w-fit mb-6 font-bold">
            {{ $t('Описание') }}
          </p>
          <p class="text-start">
            {{ currentObject.objects.description || $t('Нет описания') }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-objectDescription">
          <p class="px-4 py-2 rounded-full border w-fit mb-6 font-bold">
            {{ $t('Изображение объекта') }}
          </p>
          <div class="flex flex-col items-center gap-4">
            <div
                v-for="(item, index) in currentObject.objects.pictures"
                class="relative w-8/12 max-[656px]:w-full"
            >
              <div class="absolute bg-white rounded-lg shadow font-bold w-8 h-8 top-6 left-6 flex items-center justify-center">
                {{index+1}}
              </div>
              <img
                  class="block w-full h-full object-cover rounded-3xl shadow"
                  :src="item.picture"
                  alt="picture"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/12 flex flex-col gap-5 max-[1100px]:w-full">
        <div class="bg-white p-6 rounded-3xl shadow-objectDescription">
          <div class="mx-auto border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-6">
            <img src="/icons/people.svg" alt="people">
            <h2 class="dark:text-white">{{ $t('Участники') }}</h2>
          </div>
          <div class="flex flex-col gap-3">
            <ObjectParticipants
                v-if="currentObject.get_objects.participants?.length > 0"
                v-for="user in currentObject.get_objects.participants"
                :user="user"
            />
            <div v-else>
              <p>{{ $t('Участники отсутствуют') }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-objectDescription">
          <div class="mx-auto border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-6">
            <img src="/icons/time.svg" alt="time">
            <h2 class="dark:text-white">{{ $t('Дата создания:') }}</h2>
          </div>
          <p class="bg-whiteSmoke px-4 py-2 w-fit rounded-full mx-auto">{{ new Date(currentObject.get_objects.created_at).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>