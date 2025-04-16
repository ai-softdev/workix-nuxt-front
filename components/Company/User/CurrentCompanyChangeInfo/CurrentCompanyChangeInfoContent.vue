<script setup lang="ts">

import TheInput from "~/components/UI/TheInput.vue";
import {useCompanies} from "~/stores/companies";

const companies = useCompanies()
const form = reactive({
  title: '',
  description: '',
  email: '',
  address: '',
  file: null as File | null,
  phones: [''] // массив номеров
})

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    form.file = target.files[0]
  }
}

const addPhone = () => {
  form.phones.push('')
}

const removePhone = (index: number) => {
  if (form.phones.length > 1) {
    form.phones.splice(index, 1)
  }
}

onMounted(() => {
  const company = companies.company

  if (company) {
    form.title = company.name || ''
    form.description = company.description || ''
    form.email = company.email || ''
    form.address = company.address || ''
    form.phones = Array.isArray(company.phones) && company.phones.length > 0
        ? [...company.phones]
        : ['']
  }
})

const handleSubmit = async () => {
  const fd = new FormData()
  fd.append('title', form.title)
  fd.append('description', form.description)
  fd.append('email', form.email)
  fd.append('address', form.address)

  // Добавим телефоны как массив
  form.phones.forEach((phone, index) => {
    fd.append(`phones[${index}]`, phone)
  })

  // Файл, если выбран
  if (form.file) {
    fd.append('file', form.file)
  }

  try {
    await companies.editCompany({ form: fd })
    // alert('Компания успешно обновлена!')
  } catch (e) {
    console.error('Ошибка при сохранении компании:', e)
  }
}
</script>

<template>
  <div class="mt-10 flex flex-col gap-4">
    <TheInput label="Название" v-model="form.title" />
    <TheInput label="Описание" v-model="form.description" />
    <TheInput label="Email" v-model="form.email" />
    <TheInput label="Адрес" v-model="form.address" />

    <div>
      <label class="font-medium mb-2 block">Мобильный телефон(ы)</label>
      <div v-for="(phone, index) in form.phones" :key="index" class="flex items-center gap-2 mb-2">
        <TheInput
            :label="`Телефон #${index + 1}`"
            v-model="form.phones[index]"
        />
        <button @click="removePhone(index)" v-if="form.phones.length > 1" class="text-red-500 text-sm">Удалить</button>
      </div>
      <button @click="addPhone" class="text-blue-500 text-sm">+ Добавить номер</button>
    </div>

    <TheInput
        type="file"
        id="upload-file"
        @input="handleFileChange"
    />

    <button @click="handleSubmit" class="bg-blue-600 text-white px-4 py-2 rounded w-fit mt-4">
      Сохранить компанию
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>