<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import ChatContentUser from "~/components/Chat/ChatContent/ChatContentUser.vue";
import TheChatPreloader from "~/components/UI/ThePreloader.vue";
import TheTextareaAutosize from "~/components/UI/TheTextareaAutosize.vue";
import TheChatContentPinned from "~/components/Chat/ChatNav/UI/TheChatContentPinned.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheCheckbox from "~/components/UI/TheCheckbox.vue";
import TheButton from "~/components/UI/TheButton.vue";
import ChatUploadInfo from "~/components/Chat/UI/Upload/ChatUploadInfo.vue";
import ChatUploadFile from "~/components/Chat/UI/Upload/ChatUploadFile.vue";
import ChatVoiceContent from "~/components/Chat/UI/Voice/ChatVoiceContent.vue";
import {clearTimer} from "~/hooks/ElemUI";
import AudioRecorder from "~/components/Chat/UI/Voice/AudioRecorder.vue";

const route = useRoute()
const chat = useChat()
const voiceMessageContainer = ref<HTMLElement | null>(null)
defineProps({
  messageId: {
    type: Number,
    default: null
  },
  showArrowBtn: {
    type: Boolean,
    default: false
  },
  showForwardedSetting: {
    type: Boolean,
    default: false
  },
  check: {
    type: Boolean,
    default: true
  },

})
const handleKeyDown = (event: KeyboardEvent) => {
  // if (event.key === 'Enter') {
  //   if (event.shiftKey) {
  //     chat.messageText += '\n'
  //     event.preventDefault()
  //   } else {
  //     handleSubmit()
  //   }
  // }
}
const handleKeyDownUpdate = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    if (event.shiftKey) {
      chat.messageUpdate.updateText += '\n'
      event.preventDefault()
    } else {
      handleUpdate()
    }
  }
}
const handleSubmit = () => {
  if (chat.messageText?.length > 0 && chat.messageText?.trim() !== '' || chat.messageForwarded.id) {
    chat.createMessage({id: chat.get_user_chat.id, text: chat.messageText, message_id: chat.messageForwarded.id})
    chat.messageText = ''
  } else {
    chat.messageForwarded = {};
    chat.messageText = '';
  }
}

const handleUpdate = () => {
  if (chat.messageUpdate.updateText?.length > 0 && chat.messageUpdate.id) {
    chat.updateMessage({id: chat.messageUpdate.id, text: chat.messageUpdate.updateText}).then(res => {
      chat.messageUpdate = {}
    })
  } else {
    chat.messageUpdate = {}
  }
}


</script>

<template>
  <div class="w-full relative h-[92%]" @mouseup.stop="clearTimer(chat.recordingVoice = false, chat.clickerTimeout)">
    <TheChatPreloader v-if="!chat.userChat.id"></TheChatPreloader>
    <div v-else class="flex relative h-full flex-col" :class="{'z-20' : chat.showDragInfo}">
      <TheChatContentPinned/>
      <ChatContentUser></ChatContentUser>
      <form class="flex mt-auto relative" @submit.prevent>
        <div class="flex flex-col h-full w-full">
          <Transition name="slide-up">
            <div v-if="chat.messageUpdate.id || chat.messageForwarded.id || chat.messageReplied.id"
                 class="dark:bg-gray-700 flex justify-between items-center bg-gray-200 border-l border-black dark:border-opacity-20 border-opacity-10  w-full h-[50px] max-sm:h-[70px]">
              <div class="flex items-center">
                <div class="ml-2">
                  <svg v-if="chat.messageUpdate.id" class="fill-semiCyan" width="25px" height="25px"
                       viewBox="0 0 16 16"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"/>
                  </svg>
                  <svg v-if="chat.messageForwarded.id" @click="showForwardedSetting = true" class="stroke-semiCyan"
                       width="25px" height="25px"
                       viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z"
                      stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg v-if="chat.messageReplied.id" width="25px" height="25px" viewBox="-0.5 0 28 28" version="1.1"
                       xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g class="fill-semiCyan" id="Icon-Set-Filled" transform="translate(-102.000000, -1195.000000)">
                        <path
                          d="M113.983,1202.01 L113.983,1196.11 C114.017,1195.81 113.936,1195.51 113.708,1195.28 C113.312,1194.89 112.67,1194.89 112.274,1195.28 L102.285,1206.24 C102.074,1206.45 101.984,1206.72 101.998,1207 C101.984,1207.27 102.074,1207.55 102.285,1207.76 L112.219,1218.65 C112.59,1218.97 113.271,1219.15 113.708,1218.71 C113.935,1218.49 114.035,1218.29 114,1218 L114,1212 C120.6,1212 126.569,1216.75 127.754,1223.01 C128.552,1221.17 129,1219.15 129,1217.02 C129,1208.73 122.276,1202.01 113.983,1202.01"
                          id="reply"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="py-2 px-4 text-sm tracking-widest">
                  <div v-if="chat.messageUpdate.id">
                    <p class="text-semiCyan">{{ $t('Редактирование') }}</p>
                  </div>
                  <div v-if="chat.messageForwarded.id">
                    <p class="text-semiCyan">
                      {{ chat.checkboxForwarded ? chat.messageForwarded.sender.first_name + ' ' + chat.messageForwarded.sender.last_name : $t('Имя отправителя скрыто')
                      }}</p>
                  </div>
                  <div v-if="chat.messageReplied.id">
                    <p class="text-semiCyan text-[12px]">
                      {{ $t('В ответ') + ' ' + chat.messageReplied.sender.first_name + ' ' + chat.messageReplied.sender.last_name }}</p>
                    <p class="">
                      {{ chat.messageReplied.text.length > 20 ? chat.messageReplied.text.slice(0, 20) + '...' : chat.messageReplied.text
                      }}</p>
                  </div>
                  <div>
                    <p v-if="chat.messageUpdate.id"><span v-if="chat.messageUpdate.file_name"
                                                          class="text-[12px] text-gray-400">{{ chat.messageUpdate.file_name.slice(0, 20) + '...' + chat.messageUpdate.file_name.substr(-6) + ',' }}</span>
                      {{ chat.messageUpdate.text?.length > 50 ? chat.messageUpdate?.text.slice(0, 50) + '...' : chat.messageUpdate?.text }}
                    </p>
                    <p v-else>
                      {{ chat.messageForwarded.text?.length > 50 ? chat.messageForwarded?.text.slice(0, 50) + '...' : chat.messageForwarded?.text }}</p>
                  </div>

                </div>
              </div>
              <div class="mr-4 cursor-pointer"
                   @click="chat.messageUpdate = {}; chat.messageForwarded = {}; chat.messageReplied = {}">
                <svg class="fill-gray-500" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"/>
                </svg>
              </div>
            </div>
          </Transition>
<!--          <AudioRecorder></AudioRecorder>-->
          <div class="border rounded-full m-3 overflow-hidden">
<!--            <div id="voiceMessageContainer" class="z-0 absolute h-8 w-10/12 bg-semiCyan mx-auto rounded-full overflow-hidden top-0 left-2 right-10 mb-1 mt-2"/>-->
            <TheTextareaAutosize
              v-if="chat.messageUpdate.id"
              v-model:modelValue="chat.messageUpdate.updateText"
              @keydown="handleKeyDownUpdate"
              class="h-[50px] -mb-2 pr-24 pl-5"
              :class="{'!pl-12' : chat.messageUpdate.id}"
              placeholder="Написать сообщение..."/>
            <TheTextareaAutosize
              v-else-if="!chat.messageUpdate.id"
              v-model:modelValue="chat.messageText"
              @keydown="handleKeyDown"
              class="h-[50px] -mb-2 pr-24 pl-5 "
              placeholder="Написать сообщение..."
             />
            <ChatUploadFile v-if="!chat.messageUpdate.id || !chat.messageForwarded.id"/>
            <Transition name="fade">
              <button
                v-if="chat.messageText?.length > 0 && chat.messageText?.trim() !== '' || chat.messageForwarded.id "
                @click=" chat.messageText?.length > 0 || chat.messageForwarded.id ? chat.createMessage({id: chat.get_user_chat.id, text: chat.messageText, message_id: chat.messageForwarded.id}).then(res=> {chat.messageText = ''}): chat.messageText"
                class="absolute right-6 bottom-4">
                <img src="/icons/send-message.svg" alt="send-message">
              </button>
              <button
                @click="chat.updateMessage({id: chat.messageUpdate.id, text: chat.messageUpdate.updateText}).then(res=>{ chat.messageUpdate = {}})"
                v-else-if="chat.messageUpdate.updateText?.length > 0 && chat.messageUpdate.updateText?.trim() !== '' || chat.messageUpdate.file"
                class="absolute right-2 bottom-4">
                <div>
                  <svg class="fill-semiCyan" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>
                  </svg>
                </div>
              </button>
              <ChatVoiceContent  v-else/>
            </Transition>
          </div>
        </div>
      </form>
      <ChatUploadInfo @dragleave.stop="chat.showDragInfo = false"/>
    </div>
    <TheModal v-if="showForwardedSetting" :type="'resizeInfoWindow'" class="p-4"
              @showModal="showForwardedSetting = false">
      <div class="my-2">
        <TheTextContent>{{ $t('Переслать сообщение') }}</TheTextContent>
        <div class="px-4 py-2 !font-light">
          <div>
            <p>{{ $t('Вы можете убрать имя отправителя. В этом случае сообщение будет выглядеть как Ваше.') }}</p>
            <div>
              <TheCheckbox :t="'checkboxChat'" :checked="check"/>
            </div>
            <button class="text-sm font-light text-semiCyan hover:underline tracking-wider"
                    @click="showForwardedSetting = false; chat.showSendWindow = true">
              {{ $t('Изменить получателя') }}
            </button>
          </div>
          <div class="flex justify-end">
            <TheButton :type="'chat'" @click="showForwardedSetting = false;">{{ $t('Готово') }}</TheButton>
          </div>
        </div>
      </div>
    </TheModal>

  </div>
</template>

<style scoped lang="scss">

</style>