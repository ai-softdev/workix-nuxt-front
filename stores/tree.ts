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
      const userMap = new Map();
      const rootUsers = [];

      // Заполняем userMap и добавляем свойство children
      this.tree.forEach(department => {
        department.participants.forEach(user => {
          user.children = [];
          userMap.set(user.id, user);
        });
      });

      // Формируем иерархию
      this.tree.forEach(department => {
        department.participants.forEach(user => {
          if (user.head_user_id && userMap.has(user.head_user_id)) {
            userMap.get(user.head_user_id).children.push(user);
          } else {
            rootUsers.push(user); // Если нет head_user_id, значит, это корневой элемент
          }
        });
      });

      return rootUsers;
    }
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


