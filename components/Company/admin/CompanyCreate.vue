<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue"
import {useCompanies} from "~/stores/companies";
import CompanyContentCreateElems from "~/components/Company/admin/adminUI/CompanyContentCreateElems.vue";

const createCompany = useCompanies()

const createForm = ref({
  name: '',
  logo_file: ''
})

defineProps({
  showCreateCompany: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <TheButton class="w-full h-full" type="signIn" @click="showCreateCompany = true">{{ $t('Создать компанию') }}
    </TheButton>
    <TheModal v-if="showCreateCompany" @showModal="showCreateCompany = !showCreateCompany; !showCreateCompany ? createForm = {} : createForm = {}">
      <form @submit.prevent="createCompany.createCompany(createForm)">
        <TheTextContent>{{ $t('Создание компании') }}</TheTextContent>
        <CompanyContentCreateElems>
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"></TheInput>
          </div>
        </CompanyContentCreateElems>
        <CompanyContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreateCompany = false">
            {{ $t('Отменить')
            }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success">{{ $t('Создать') }}</TheButton>
        </CompanyContentCreateElems>
      </form>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>