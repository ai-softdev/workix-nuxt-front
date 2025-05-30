import { ref } from 'vue';
import { k as defineStore } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useDocumentStore = defineStore("document-store", {
  state: () => ({
    documentList: {},
    documentItem: {},
    userList: ref({}),
    createChainForm: [],
    showDepartment: [],
    showUsersNode: [],
    chainSchedule: {},
    createForm: {
      title: "",
      description: "",
      file: "",
      src: "",
      receiver_id: ""
    },
    draggableUser: null,
    showContext: null,
    showContextDepartment: null,
    showWarn: false,
    showCreateDoc: false,
    showRejectedWarn: false
  }),
  getters: {
    get_all_document: (state) => state.documentList
  },
  actions: {
    async docSign(params) {
      await axios.patch(`document/sign/${params.id}`, {
        second_password: params.second_password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0414\u043E\u0441\u0442\u0443\u043F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D", { autoClose: 1e3, theme: "auto" });
      });
    },
    async loadAllDocument(params) {
      await axios.get(`document/list${params.type ? "/" + params.type : ""}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.documentList = res.data;
      });
    },
    async loadDocument(params) {
      await axios.get(`document/${params.slug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.documentItem = res.data;
      });
    },
    async docCreate(params) {
      let fd = new FormData();
      fd.set("title", params.title);
      fd.set("description", params.description);
      fd.set("receiver_id", params.receiver_id);
      if (typeof params.file !== "string") {
        fd.set("file", params.file);
      }
      await axios.post(`document/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0441\u043E\u0437\u0434\u0430\u043D", { autoClose: 1e3, theme: "auto" });
        this.loadAllDocument({ page: 1, limit: 10 });
        this.showCreateDoc = false;
      });
    },
    async setUsers(params, router) {
      await axios.post(`document/set-users/${params.slug}`, { participants: params.form }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        router.push(`/base/documents/signification/${params.slug}`).then((e) => {
          toast.success("\u0426\u0435\u043F\u044C \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430!", { autoClose: 1e3, theme: "auto" });
        });
      });
    },
    async docUpdate(params) {
      new FormData();
      await axios.patch(`document/update/${params.id}`, {
        title: params.title,
        description: params.description,
        users: params.users
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A", { autoClose: 1e3, theme: "auto" });
      });
    },
    async documentSign(params, router) {
      await axios.patch(`document/sign/${params.slug}`, params.data, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        router.push(`/base/documents`).then((e) => {
          toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044C!", { autoClose: 1e3, theme: "auto" });
        });
      });
    },
    async docDelete(params) {
      await axios.delete(`document/delete/${params.slug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1e3 });
      });
    }
  }
});

export { useDocumentStore as u };
//# sourceMappingURL=documents-BN6LdWDo.mjs.map
