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
    <button v-if="currentUser.user.permissions?.find(e=>e.name_en === 'object.create')" class="font-bold tracking-widest text-white bg-blue-400 mx-auto py-4 rounded-xl w-full px-4 text-sm"
            @click="showCreate = true">{{ $t('Создать объект') }}
    </button>
    <TheModal v-if="showCreate" @showModal="showCreate = !showCreate">
      <TheTextContent>{{ $t('Создание объекта') }}</TheTextContent>
      <form @submit.prevent="objects.createObject(createForm)">
        <ObjectContentCreateElems>
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"></TheInput>
          </div>
        </ObjectContentCreateElems>
        <ObjectContentCreateElems class="flex-wrap">
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Адрес')" v-model="createForm.address"></TheInput>
          </div>
        </ObjectContentCreateElems>
        <ObjectContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreate = false">
            {{ $t('Отменить')
            }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success">{{ $t('Создать') }}</TheButton>
        </ObjectContentCreateElems>
      </form>

    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>