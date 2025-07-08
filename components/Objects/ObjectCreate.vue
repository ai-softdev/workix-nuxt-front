<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ObjectContentCreateElems from "~/components/Objects/ObjectUI/ObjectContentCreateElems.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useObjects} from "~/stores/objects";
import {useAuthStore} from "~/stores/auth";

const objects = useObjects()
const currentUser = useAuthStore()
const createForm = ref({
  name: '',
  files: '',
  address: ''
})

defineProps({
  showCreate: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div>
    <button
        v-if="currentUser.user.permissions?.find(e=>e.name_en === 'object.create')"
        class="font-bold bg-golden rounded-full py-2.5 px-10"
        @click="showCreate = true"
    >
      + {{ $t('Создать объект') }}
    </button>
    <TheModal
        v-if="showCreate"
        @showModal="showCreate = !showCreate"
    >
      <p class="font-bold text-center text-xl max-sm:text-sm">
        {{ $t('Создание объекта') }}
      </p>
      <form
          @submit.prevent="objects.createObject(createForm)"
          class="mt-10"
      >
        <div class="flex flex-col gap-6">
          <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"></TheInput>
          <TheInput type="text" :label="$t('Адрес')" v-model="createForm.address"></TheInput>
        </div>
        <div class="flex flex-wrap gap-y-3 items-center mt-14 justify-center gap-x-10 max-sm:flex-col">
          <TheButton
              class="w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300"
              t="button"
              @click="showCreate = false"
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
  </div>
</template>

<style scoped lang="scss">

</style>