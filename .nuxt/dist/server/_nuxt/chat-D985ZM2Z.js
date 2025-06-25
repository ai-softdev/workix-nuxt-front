import { k as defineStore } from "../server.mjs";
import { a as axios } from "./axios-Q2E2Xj-P.js";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
const useChat = defineStore("chat", {
  state: () => ({
    chatList: {},
    userChat: {
      messages: [],
      name: "",
      description: ""
    },
    messageLimit: null,
    messagesMakeRead: [],
    messageUpdate: {},
    messageReplied: {},
    messageText: "",
    searchElem: "",
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
      name: "",
      img: "",
      description: ""
    },
    showChangeWindowChat: false,
    showChatGallery: false,
    showDragInfo: false,
    showUploadWindow: false,
    updateChatName: "",
    updateDescription: "",
    voiceTimer: 0,
    recordingVoice: false,
    isGroup: false,
    clickerTimeout: null,
    flag: true,
    displayChat: "all",
    file: "",
    src: "",
    signature: "",
    fileSizeInfo: false,
    fileReadInfo: false,
    fileChecked: false,
    fileUpload: null,
    results: {
      coordinates: null,
      image: null
    },
    focusInput: null
  }),
  getters: {
    get_chat_list: (state) => state.chatList,
    get_user_chat: (state) => state.userChat,
    get_pinned_list: (state) => state.arrayPin
  },
  actions: {
    async loadChatList(params) {
      await axios.get(`chat/chat-list?page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.chatList = res.data;
      });
    },
    async loadUserChat(params) {
      await axios.get(`chat/${params.id}?limit=${params.limit}&page=${params.page}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.messageLimit = res.data.messages.length;
        if (res.data.messages) {
          this.userChat = res.data;
          let new_array = res.data.messages.reverse();
          let temp = [...new_array];
          new_array = new_array.map((el) => {
            return new Date(el.created_at).toLocaleDateString();
          });
          new_array = [...new Set(new_array)];
          let new_messages = new_array.map((el) => {
            return {
              messages: temp.filter((e) => {
                return new Date(e.created_at).toLocaleDateString() == el;
              }),
              date: el
            };
          });
          this.userChat.messages = new_messages;
        }
      });
    },
    async loadPinnedList(params) {
      await axios.get(`chat/message/pinned-list/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.arrayPin = res.data;
      });
    },
    async chatUpdate(params) {
      let fd = new FormData();
      if (this.updateChatName !== this.userChat.name) {
        fd.set("name", params.update.name);
      }
      if (this.updateDescription !== this.userChat.description) {
        fd.set("description", params.update.description);
      }
      if (this.fileUpload) {
        fd.append("photo", params.update.photo, "image.webp");
      }
      await axios.patch(`chat/update/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      });
    },
    async chatDelete(params) {
      await axios.delete(`chat/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
      });
    },
    async createMessage(params) {
      let fd = new FormData();
      if (!this.messageForwarded.id && !this.file) {
        fd.set("text", params.text);
      } else if (!this.signature && !this.messageForwarded.id) {
        fd.set("file", params.file);
      } else if (this.signature && this.file) {
        fd.set("text", params.text);
        fd.set("file", params.file);
      } else {
        fd.set("text", params.text);
        fd.set("message_id", params.message_id);
      }
      await axios.post(`chat/message/create/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.messageForwarded = { id: null };
      });
    },
    async updateMessage(params) {
      await axios.patch(`chat/message/update/${params.id}`, {
        text: params.text
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
      });
    },
    async deleteMessage(params) {
      await axios.delete(`chat/message/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
      });
    },
    async createChatUser(params, router) {
      let fd = new FormData();
      if (this.isGroup) {
        fd.set("name", params.name);
        fd.set("users", params.users);
        if (typeof params.photo !== "string") {
          fd.set("photo", params.photo);
        }
      } else {
        fd.set("user_id", params.user_id);
      }
      await axios.post(`chat/create/private`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        router.push(`/base/chat/${res.data.id}`);
        console.log(res.data.id);
        this.loadChatList();
      });
    },
    async makeRead(params) {
      await axios.post(`chat/message/make-read`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.loadChatList();
      });
    },
    async makePinned(params) {
      await axios.post(`chat/message/make-pinned`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      });
    }
  }
});
export {
  useChat as u
};
//# sourceMappingURL=chat-D985ZM2Z.js.map
