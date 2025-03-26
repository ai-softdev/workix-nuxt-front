import { i as defineStore } from './server.mjs';
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
      axios.get(`sales/list?page=${params.page}&limit=${params.limit}${params.name ? `&name=${params.name}` : ""}${params.min_price ? `&min_price=${params.min_price}` : ""}${params.max_price ? `&max_price=${params.max_price}` : ""}${params.min_count ? `&min_count=${params.min_count}` : ""}${params.max_count ? `&max_count=${params.max_count}` : ""}`, {
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
//# sourceMappingURL=sales-6VtDClO8.mjs.map
