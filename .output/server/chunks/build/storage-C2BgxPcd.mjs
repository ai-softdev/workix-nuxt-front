import { ref } from 'vue';
import { i as defineStore } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useStorageStore = defineStore("storage", {
  state: () => ({
    isActive: false,
    createCategory: false,
    storageCategoryList: [],
    storageHomeAllList: [],
    storageItem: {},
    currentCategory: {},
    contextMenuCategory: false,
    scan: ref(null),
    searchGoods: "",
    searchCategory: "",
    streaming: false
  }),
  getters: {
    getStorageCategoryList: (state) => state.storageCategoryList,
    getStorageSubCategory: (state) => state.currentCategory,
    getStorageHomeAllList: (state) => state.storageHomeAllList,
    getStorageItem: (state) => state.storageItem
  },
  actions: {
    async loadStorageCategoryList() {
      await axios.get(`store/category/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.storageCategoryList = res.data;
      });
    },
    async loadStorageSubCategory(params) {
      await axios.get(`store/subcategory/${params.slug}?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.currentCategory = res.data;
      }).catch((e) => {
      });
    },
    async loadStorageCategorySearch(params) {
      await axios.get(`store/category/list?name=${params.query}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.storageCategoryList = res.data;
      });
    },
    async loadAllList() {
      await axios.get(`store/item/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.storageHomeAllList = res.data;
      });
    },
    async loadAllListSearch(params) {
      await axios.get(`store/item/list?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.storageHomeAllList = res.data;
      });
    },
    async loadItem(params) {
      await axios.get(`store/item/${params.itemSlug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.storageItem = res.data;
      });
    },
    async createStorageCategoryOrSubcategory(params) {
      await axios.post(`store/${params.createType}/create`, {
        name: params.name,
        category_id: params.createType === "subcategory" ? params.category_id : null
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.loadStorageCategoryList();
        this.createCategory = false;
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error("\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438", { autoClose: 1500, theme: "auto" });
      });
    },
    async updateStorageElem(params) {
      await axios.patch(`store/${params.updateType}/update`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
      }).catch((e) => {
      });
    },
    async deleteStorageElem(params) {
      await axios.delete(`store/${params.deleteType}/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        if (["subcategory", "category"].includes(params.deleteType)) {
          this.loadStorageCategoryList();
        }
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useStorageStore as u };
//# sourceMappingURL=storage-C2BgxPcd.mjs.map
