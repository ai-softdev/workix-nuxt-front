import { i as defineStore } from "../server.mjs";
import { a as axios } from "./axios-DrAfoKzV.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
const useSales = defineStore("sales", {
  state: () => ({
    sales: {}
  }),
  getters: {
    get_objects(object) {
      return this.objects;
    }
  },
  actions: {
    async loadSalesList(params) {
      axios.get(`sales/list?page=${params.page}&limit=${params.limit}${params.name ? `&name=${params.name}` : ""}${params.min_price ? `&min_price=${params.min_price}` : ""}${params.max_price ? `&max_price=${params.max_price}` : ""}${params.min_count ? `&min_count=${params.min_count}` : ""}${params.max_count ? `&max_count=${params.max_count}` : ""}${params.order_by ? `&order_by=${params.order_by}` : ""}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.sales = response.data;
      });
    },
    async createItem(params) {
      axios.post(`sales/create`, params.form, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        toast.success("Товар успешно создан!", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
        throw e;
      });
    }
    // async loadObject(params: {id: number}) {
    //     axios.get(`object/${params.id}`, {
    //         headers: {
    //             Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
    //         }
    //     }).then(response => {
    //         this.objects = response.data
    //     })
    // },
  }
});
export {
  useSales as u
};
//# sourceMappingURL=sales-BROjgE_a.js.map
