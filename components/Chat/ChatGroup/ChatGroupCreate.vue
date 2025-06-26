<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import TheFileInput from "~/components/UI/TheFileInput.vue";
import {Preview} from "vue-advanced-cropper";
import ChatUserCheckbox from "~/components/Chat/UI/ChatUserCheckbox.vue";
import {toast} from "vue3-toastify";

const userCount = ref([])
const groupName = ref<HTMLElement | null>(null)
const groupTitle = ref('')
const titleChecked = false
const chat = useChat()
const router = useRouter()
const currentUser = useAuthStore()
const setFocus = () => {
  nextTick(() => {
    groupName.value?.focus()
  })
}
if (chat.get_chat_list.results && Array.isArray(chat.get_chat_list.results)) {
  chat.get_chat_list.results = chat.get_chat_list.results.map(e => ({
    ...e,
    value: false
  }))
}
const selectedIds = computed(() =>
    chat.get_chat_list.results
        .filter(e => e.value)
        .map(e => e.user.id)
        .join(',')
)
onMounted(() => {
  groupTitle.value.trim()
})


</script>

<template>
  <div>
    <TheButton
        class="mb-6 !flex !items-center !justify-center gap-x-4 !p-2.5 hover:!bg-golden text-center w-full border !border-gainsboro rounded-full !text-black !transition-all ease-in-out duration-300"
        @click="chat.showGroupCreate = true; setFocus()"
    >
      + {{ $t('Создать группу') }}
    </TheButton>
    <TheModal @click="setFocus()" v-if="chat.showGroupCreate"
              @showModal="chat.showGroupCreate = false; chat.showGroupCreateChoice = false;  groupTitle = ''; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}"
              :type="'resize'">
      <div @click="setFocus()" class="flex select-none gap-x-6 items-center">
        <div class="relative" @mouseenter="chat.showImageChange = true" @mouseleave="chat.showImageChange = false">
          <Transition name="fade">
            <TheFileInput :toward="'chat'"/>
          </Transition>
          <div v-if="chat.results.image">
            <preview class="w-[80px] h-[80px] rounded-full" :image="chat.results.image"
                     :coordinates="chat.results.coordinates"/>
          </div>
        </div>
        <div>
          <p class="text-sm tracking-wider text-semiCyan transition-all"
             :class="{'!text-red-400 transition-all' : titleChecked}">{{ $t('Название группы') }}</p>
          <input ref="groupName" v-model="groupTitle"
                 class="border-b-2 bg-transparent border-b-semiCyan !outline-none transition-all"
                 :class="{'border-b-red-400 transition-all' : titleChecked}" @change="titleChecked = false"
                 type="text"/>
        </div>
      </div>
      <div class="flex select-none text-sm justify-end gap-x-4 ">
        <TheButton type="chat"
                   @click="chat.showGroupCreate = false; chat.showGroupCreateChoice = false; chat.isGroup = false; chat.file = ''; chat.src = '';  groupTitle = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton type="chat" @click="()=>{
          if(!groupTitle.length || !groupTitle.trim()) {
           toast.error('Заполните поле', {autoClose: 1500, theme: 'auto'})
           titleChecked = true
          } else {
            chat.showGroupCreate = false
            chat.showGroupCreateChoice = true
          }
        }">
          {{ $t('Далее') }}
        </TheButton>
      </div>
    </TheModal>
    <TheModal
        :type="'resizeSendWindow'"
        class=""
        v-if="chat.showGroupCreateChoice"
        @showModal="chat.showGroupCreateChoice = false; chat.showGroupCreate = false; groupTitle = ''; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}">
      <p class="tracking-wider px-4 pt-4">{{ $t('Добавить участников') }} <span
          class="text-sm text-gray-400 ml-2">{{ userCount.length + '/1000' }}</span></p>
      <div class="w-full px-4 relative flex items-center">
        <div class="absolute rotate-90 ml-2">
          <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="Поиск..."/>
      </div>
      <ChatUserCheckbox
          v-for="item in chat.get_chat_list.results.filter(e => !e.is_group)"
          :key="item.user.id"
          :item="item"
          @update="handleUpdate"
      />
      <div class="w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4">
        <TheButton v-if="!chat.showSettingChat" type="chat"
                   @click="chat.showGroupCreateChoice = false; chat.showGroupCreate = true; setFocus()">
          {{ $t('Назад') }}
        </TheButton>
        <TheButton v-else type="chat" @click="chat.showGroupCreateChoice = false;">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton
            type="chat"
            v-if="!chat.showSettingChat"
            @click="
    chat.showGroupCreateChoice = false;
    chat.isGroup = true;
    chat.createChatGroup(
      {
        name: groupTitle,
        users_str: selectedIds,
        photo: chat.fileUpload,
      },
      router
    ).then(() => {
      chat.isGroup = false;
    })
  "
        >
          {{ $t('Создать') }}
        </TheButton>
        <TheButton v-else type="chat"
                   @click="">
          {{ $t('Добавить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>