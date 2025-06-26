import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import type {Router} from "vue-router";

type TClickTimeout = NodeJS.Timeout | null
export const useChat = defineStore('chat', {
  state: () => ({
    chatList: {},
    userChat: {
      messages: [],
      name: '',
      description: ''
    },
    messageLimit: null,
    messagesMakeRead: [],
    messageUpdate: {},
    messageReplied: {},
    messageText: '',
    searchElem: '',
    messageForwarded: {},
    showForwardInfo: false,
    checkboxForwarded: true,
    showSendWindow: false,
    messagePinned: {},
    arrayPin: [],
    activeChatNav: true,
    windowWidth: 0,
    showPinnedWindow: false,
    showGroupCreate: false,
    showGroupCreateChoice: false,
    showVoiceInfo: false,
    showChatInfo: false,
    showSettingChat: false,
    showChatChangeInfo: false,
    showChatChangeInfoModal: false,
    showChatCropper: false,
    showImageChange: false,
    chatChangeInfo: {
      name: '',
      img: '',
      description: '',
    },
    showChangeWindowChat: false,
    showChatGallery: false,
    showDragInfo: false,
    showUploadWindow: false,
    updateChatName: '',
    updateDescription: '',
    voiceTimer: 0,
    recordingVoice: false,
    isGroup: false,
    clickerTimeout: null as TClickTimeout,
    flag: true,
    displayChat: 'all',
    file: '',
    src: '',
    signature: '',
    fileSizeInfo : false,
    fileReadInfo: false,
    fileChecked: false,
    fileUpload: null,
    results: {
      coordinates: null,
      image: null,
    },
    focusInput: null,
  }),
  getters: {
    get_chat_list: (state) => state.chatList,
    get_user_chat: (state) => state.userChat,
    get_pinned_list: (state) => state.arrayPin
  },
  actions: {
    async loadChatList(params: { page?: number, limit?: number }) {
      await axios.get(`chat/chat-list?page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.chatList = res.data
      })
    },
    async loadUserChat(params: { id: number, limit: number, page: number }) {
      await axios.get(`chat/${params.id}?limit=${params.limit}&page=${params.page}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.messageLimit = res.data.messages.length
        if (res.data.messages) {
          this.userChat = res.data
          let new_array = res.data.messages.reverse()
          let temp = [...new_array]
          new_array = new_array.map((el: any) => {
            return new Date(el.created_at).toLocaleDateString()
          })
          new_array = [...new Set(new_array)]
          let new_messages = new_array.map((el: string) => {
            return {
              messages: temp.filter(e => {
                return new Date(e.created_at).toLocaleDateString() == el
              }),
              date: el
            }
          })
          this.userChat.messages = new_messages
        }
        // else {
        //   this.userChat.messages = [...res.data.messages.reverse(), ...this.userChat.messages]
        // }
      })
    },
    async loadPinnedList(params: {id: number, page: number, limit: number }) {
      await axios.get(`chat/message/pinned-list/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.arrayPin = res.data
      })
    },

    async chatUpdate(params: {
      id: any; update: {
        name: any,
        description: any,
        photo: any
      }
    }) {
      let fd = new FormData();
      if(this.updateChatName !== this.userChat.name){
        fd.set('name', params.update.name)
      }
      if(this.updateDescription !== this.userChat.description) {
        fd.set('description', params.update.description)
      }
      if(this.fileUpload) {
        fd.append('photo', params.update.photo, 'image.webp')
      }
      await axios.patch(`chat/update/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      })
    },
    async chatDelete(params: { id: number }) {
      await axios.delete(`chat/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {

      })
    },

    async createMessage(params: { id: number, text: string, message_id?: number, file?: any }) {
      let fd = new FormData();
      if (!this.messageForwarded.id && !this.file) {
        fd.set('text', params.text)
      } else if(!this.signature && !this.messageForwarded.id){
        fd.set('file', params.file)
      } else if(this.signature && this.file){
        fd.set('text', params.text)
        fd.set('file', params.file)
      } else {
        fd.set('text', params.text)
        fd.set('message_id', params.message_id)
      }
      await axios.post(`chat/message/create/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=>{
        this.messageForwarded = {id: null}
      })
    },
    async updateMessage(params: { id: number, text: any }) {
      await axios.patch(`chat/message/update/${params.id}`, {
        text: params.text
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
      })
    },
    async deleteMessage(params: { id: number }) {
      await axios.delete(`chat/message/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
      })
    },
    async createChatUser(params: { users: any, user_id: any, name: string, photo: any }, router: Router) {
      let fd = new FormData()
      if (this.isGroup) {
        fd.set('name', params.name)
        fd.set('users', params.users)
        if (typeof params.photo !== 'string') {
          fd.set('photo', params.photo)
        }
      } else {
        fd.set('user_id', params.user_id)
      }
      await axios.post(`chat/create/private`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        router.push(`/base/chat/${res.data.id}`)
        console.log(res.data.id)
        this.loadChatList()
      })
    },
    async createChatGroup(params: { users_str: string, name: string, photo: any }, router: Router) {
      console.log(params.users_str)
      let fd = new FormData()
      fd.set('name', params.name)
      fd.set('users_str', params.users_str)
      if (params.photo) {
        fd.set('photo', params.photo)
      }
      await axios.post(`chat/create/group`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        router.push(`/base/chat/${res.data.id}`)
        console.log(res.data.id)
        this.loadChatList()
      })
    },



    async makeRead(params: { messages: any }) {
      await axios.post(`chat/message/make-read`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.loadChatList()
      })
    },
    async makePinned(params: { messages: any }) {
      await axios.post(`chat/message/make-pinned`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      })
    },
  }
})
