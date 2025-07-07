<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useCompanies} from "~/stores/companies";
import TaskContentCreateElems from "~/components/Tasks/TaskUI/TaskContentCreateElems.vue";
import TheInput from "~/components/UI/TheInput.vue";
import VueDatePicker from "@vuepic/vue-datepicker";

const department = useCompanies()
const props = defineProps({
  showCreate: {
    type: Boolean,
    default: false
  },

})
const createForm = ref({
  name: '',
  email: '',
  address: '',
})
</script>

<template>
  <div>
    <TheButton
        class="w-full mr-auto !rounded-full !bg-golden !text-black"
        type="signIn"
        @click="showCreate = true"
    >
      + {{ $t('Создать департамент') }}
    </TheButton>
    <TheModal v-if="showCreate" @showModal="showCreate = !showCreate">
      <p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto">
        {{ $t('Создать департамент') }}
      </p>
      <form @submit.prevent="department.createDepartment({department: createForm}); showCreate = false; createForm.name = ' ' ">
        <TaskContentCreateElems>
            <div class="w-full ">
              <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"/>
            </div>
        </TaskContentCreateElems>
        <div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10 max-sm:flex-col">
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
              @click="department.loadDepartmentList()"
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