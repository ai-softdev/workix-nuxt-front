import {defineStore, type PiniaCustomProperties} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import type {Router} from "vue-router";

export const useDocumentStore = defineStore('document-store', {

  state: () => ({
    documentList: {},
    documentItem: {},
    userList: ref({}),
    createChainForm: [],
    showDepartment: [],
    showUsersNode: [],
    chainSchedule: {},
    createForm: {
      title: '',
      description: '',
      file: '',
      src: '',
      receiver_id: ''
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
    async docSign(params: { id: number, second_password: string | number }): Promise<void> {
      await axios.patch(`document/sign/${params.id}`, {
        second_password: params.second_password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Доступ разрешен', {autoClose: 1000, theme: 'auto'})
      })
    },
    async loadAllDocument(params: { page: number, limit: number, type?: any, query?: any }): Promise<void> {
      await axios.get(`document/list${params.type ? '/' + params.type : ''}${params.page ? '?page=' + params.page : ''}${params.limit ? '&limit=' + params.limit : ''}${params.query ? '&query=' + params.query : ''}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.documentList = res.data
      })
    },

    async loadDocument(params: { slug: string[] | string}): Promise<void> {
      await axios.get(`document/${params.slug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.documentItem = res.data

      })
    },

    async docCreate(params: { title: any, description: any, receiver_id: any, file: any }): Promise<void> {
      let fd = new FormData()
      fd.set('title', params.title)
      fd.set('description', params.description)
      fd.set('receiver_id', params.receiver_id)
      if (typeof params.file !== 'string') {
        fd.set('file', params.file)
      }
      await axios.post(`document/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Документ создан', {autoClose: 1000, theme: 'auto'})
        this.loadAllDocument({ page: 1, limit: 10})
        this.showCreateDoc = false
      })
    },

    async setUsers(params: { slug: any, form: any }, router: Router): Promise<void> {

      await axios.post(`document/set-users/${params.slug}`, {participants: params.form}, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        router.push(`/base/documents/signification/${params.slug}`).then(e=>{
          toast.success('Цепь запущена!', {autoClose: 1000, theme: 'auto'})
        })
      })
    },

    async docUpdate(params: { title?: any, description?: any, users: any, id: any }): Promise<void> {
      let fd = new FormData()
      // fd.set('users', params.users)
      // fd.set('title', params.title)
      // fd.set('description', params.description)
      await axios.patch(`document/update/${params.id}`, {
        title: params.title,
        description: params.description,
        users: params.users,
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешный запуск', {autoClose: 1000, theme: 'auto'})
      })
    },

    async documentSign(params: any, router: Router): Promise<void> {
      await axios.patch(`document/sign/${params.slug}`, params.data, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        router.push(`/base/documents`).then(e=>{
          toast.success('Успешная подпись!', {autoClose: 1000, theme: 'auto'})
        })
      })
    },

    async docDelete(params: { slug: string[] | string }) {
      await axios.delete(`document/delete/${params.slug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно удалён', {theme: 'auto', autoClose: 1000})

      })
    }
  }
})