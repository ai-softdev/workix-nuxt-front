<script setup lang="ts">
defineProps({
  object: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <NuxtLink
      :to="`/base/objects/${object.id}`"
      class="block rounded-3xl shadow-cards bg-white p-6"
  >
    <!--      <img-->
    <!--          class="w-[50px] h-[50px]" src="/img/logo-company.png"-->
    <!--          alt=""-->
    <!--      >-->
    <h1
        class="font-bold mb-6 pb-6 border-b"
    >
      {{object.name}}
    </h1>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/icons/address.svg" alt="address">
        <p>
          {{$t('Адрес')}}:
        </p>
      </div>
      <p class="text-mediumGray">
        {{object.address}}
      </p>
    </div>
    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-2">
        <img src="/icons/workers-count.svg" alt="workers-count">
        <p>
          {{$t('Кол-во участников')}}:
        </p>
      </div>
      <p class="text-mediumGray">
        {{object.participants_count || 0}}
      </p>
    </div>
    <button
        class="flex items-center gap-2.5 py-2.5 px-5 rounded-full border bg-porcelain hover:bg-golden mx-auto mt-6 font-bold transition-all ease-in-out duration-300"
    >
      <img src="/icons/download.svg" alt="download">
      {{$t('Скачать документ')}}
    </button>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>