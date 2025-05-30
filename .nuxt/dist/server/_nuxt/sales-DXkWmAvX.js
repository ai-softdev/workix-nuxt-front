import { k as defineStore } from "../server.mjs";
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
    async loadSalesListFile() {
      axios.post(`sales/report`, {}, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("Создание отчёта началось!", { autoClose: 1500, theme: "auto" });
        } else if (response.status === 200) {
          const url = (void 0).URL.createObjectURL(new Blob([response.data]));
          const a = (void 0).createElement("a");
          a.href = url;
          a.download = `sales.xlsx`;
          (void 0).body.appendChild(a);
          a.click();
          (void 0).URL.revokeObjectURL(url);
          (void 0).body.removeChild(a);
        }
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
//# sourceMappingURL=sales-DXkWmAvX.js.map
