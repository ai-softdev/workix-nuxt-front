import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import {toast} from "vue3-toastify";
import type {ICurrentCategory, TGoods} from "~/types/storage";

export const useStorageStore = defineStore('storage', {
  state: () => ({
    isActive: false,
    createCategory: false,
    storageCategoryList: [],
    storageHomeAllList: [],
    storageItem: {} as TGoods,
    currentCategory: {} as ICurrentCategory,
    contextMenuCategory: false,
    scan: ref(null),
    searchGoods: '',
    searchCategory: '',
    streaming: false,
  }),
  getters: {
    getStorageCategoryList: (state) => state.storageCategoryList,
    getStorageSubCategory: (state) => state.currentCategory,
    getStorageHomeAllList: (state) => state.storageHomeAllList,
    getStorageItem: (state) => state.storageItem
  },
  actions: {
    async loadStorageCategoryList(): Promise<void> {
      await axios.get(`store/category/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageCategoryList = res.data
      })
    },
    async loadStorageSubCategory(params: { slug: string | string[], search?: string | number }): Promise<void> {
      await axios.get(`store/subcategory/${params.slug}?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.currentCategory = res.data

      }).catch(e => {
      })
    },
    async loadStorageCategorySearch(params: { query: string | number }): Promise<void> {
      await axios.get(`store/category/list?name=${params.query}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageCategoryList = res.data
      })
    },
    async loadAllList(): Promise<void> {
      await axios.get(`store/item/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageHomeAllList = res.data
      })
    },
    async loadAllListSearch(params: { search?: any }): Promise<void> {
      await axios.get(`store/item/list?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageHomeAllList = res.data
      })
    },
    async loadItem(params: { itemSlug: string | string[] }): Promise<void> {
      await axios.get(`store/item/${params.itemSlug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageItem = res.data
      })
    },
    async createStorageCategoryOrSubcategory(params: {
      createType?: string,
      name: string,
      category_id?: number
    }): Promise<void> {
      await axios.post(`store/${params.createType}/create`, {
        name: params.name,
        category_id: params.createType === 'subcategory' ? params.category_id : null
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.loadStorageCategoryList()
        this.createCategory = false
        toast.success('Успешно создано', {autoClose: 1500, theme: 'auto'})
      }).catch(e => {
        toast.error('Возникла ошибка при создании', {autoClose: 1500, theme: 'auto'})
      })
    },
    async updateStorageElem(params: { updateType: string, id: number }): Promise<void> {
      await axios.patch(`store/${params.updateType}/update`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {

      }).catch(e => {

      })
    },
    async deleteStorageElem(params: { deleteType: string, id: number }): Promise<void> {
      await axios.delete(`store/${params.deleteType}/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        if (['subcategory', 'category'].includes(params.deleteType)) {
          this.loadStorageCategoryList()
        }
        toast.success('Успешно удалён', {autoClose: 1500, theme: 'auto'})
      })
    }
  }
})