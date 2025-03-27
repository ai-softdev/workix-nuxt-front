import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useTreeStore = defineStore('useTree', {
  state: ()=>({
    tree: [],
    treeFullScreen: false
  }),
  getters: {
    get_list(tree: any) {
      return this.tree.map(department => ({
        ...department,
        children: department.participants,
      }));
    },

  },
  actions: {
    async loadTreeList(){
      axios.get(`department/`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        this.tree = res.data.results
      })
    }
  }
})

