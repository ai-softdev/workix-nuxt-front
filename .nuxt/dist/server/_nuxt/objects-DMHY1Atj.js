import { k as defineStore } from "../server.mjs";
import { a as axios } from "./axios-DrAfoKzV.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
const useObjects = defineStore("object", {
  state: () => ({
    objects: {
      id: "",
      name: "",
      address: "",
      email: "",
      description: "",
      files: "",
      participants: {
        id: ""
      }
    }
  }),
  getters: {
    get_objects(object) {
      return this.objects;
    }
  },
  actions: {
    async loadObjectList() {
      axios.get(`object/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
      });
    },
    async loadObject(params) {
      axios.get(`object/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
      });
    },
    async createObject(params) {
      let fd = new FormData();
      fd.set("name", params.name);
      fd.set("address", params.address);
      fd.set("email", params.email);
      fd.set("description", params.description);
      if (typeof params.files !== "string") {
        fd.set("files", params.files);
      }
      axios.post(`object/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
        toast.success("Компания успешно создана", { autoClose: 1500, theme: "auto" });
        this.loadObjectList();
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
export {
  useObjects as u
};
//# sourceMappingURL=objects-DMHY1Atj.js.map
