import { k as defineStore } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useNotification = defineStore("notification", {
  state: () => ({
    notification: []
  }),
  getters: {
    get_notification: (state) => state.notification
  },
  actions: {
    loadNotification() {
      axios.get(`notification/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
      });
    },
    readNotice(params) {
      axios.post(`notification/make-read/${params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
        this.loadNotification();
        toast.success("\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useNotification as u };
//# sourceMappingURL=notification-D1Ny8bJK.mjs.map
