<script setup>
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TreeContent from "~/components/Tree/TreeContent.vue";
import {useCompanies} from "~/stores/companies";
import {useTreeStore} from "~/stores/tree";
import {useAuthStore} from "~/stores/auth";
const treeStore = useTreeStore()
const companies = useCompanies()
companies.loadCurrentCompany()
defineProps({
  treeFullScreen: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const loadAuthStore = useAuthStore()

watch(() => loadAuthStore.user, (newValue) => {
  if(loadAuthStore?.user?.role?.name_en === 'admin'){
    if (window.history.length > 1) {
      router.push('/base/profile');
    } else {
      router.push('/');
    }
  }
})

useSeoMeta({
  title: 'Дерево',
  description: `Древовидная структура компании ${companies.company.name}`
})
</script>
<template>
  <div>
    <p
        class="dark:text-white text-3xl font-bold mb-6"
    >
      {{$t('Дерево ' + companies.company.name )}}
    </p>
    <TreeContent />
  </div>
</template>

<style scoped>

</style>