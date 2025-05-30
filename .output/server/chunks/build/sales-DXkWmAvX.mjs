import { k as defineStore } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

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
          toast.success("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0442\u0447\u0451\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u043E\u0441\u044C!", { autoClose: 1500, theme: "auto" });
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
        toast.success("\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!", { autoClose: 1500, theme: "auto" });
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

export { useSales as u };
//# sourceMappingURL=sales-DXkWmAvX.mjs.map
