import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useObjects = defineStore('object', {
  state:() => ({
    objects: {
      id: '',
      name: '',
      address: '',
      email: '',
      description: '',
      files: '',
      participants: {
        id: ''
      }
    }
  }),
  getters: {
    get_objects(object) {
      return this.objects
    }
  },
  actions: {
    async loadObjectList() {
      axios.get(`object/object-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.objects = response.data
      })
    },

    async loadObject(params: {id: number}) {
      axios.get(`object/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.objects = response.data
      })
    },

    async createObject(params: {objects: any}) {
      let fd = new FormData();
      fd.set('name', params.name)
      fd.set('address', params.address)
      fd.set('email', params.email)
      fd.set('description', params.description)
     if(typeof params.files !== 'string') {
       fd.set('files', params.files)
     }
      axios.post(`object/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.objects = response.data
        toast.success('Компания успешно создана', {autoClose: 1500, theme: 'auto'})
        this.loadObjectList()
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    }
  }
})