import { k as defineStore } from "../server.mjs";
import { a as axios } from "./axios-Q2E2Xj-P.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
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
        toast.success("Прочитано", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
export {
  useNotification as u
};
//# sourceMappingURL=notification-D1Ny8bJK.js.map
