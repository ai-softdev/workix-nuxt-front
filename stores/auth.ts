import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import {useUserStore} from "~/stores/users";
import type {Router} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import {isDevelopment, isProduction} from "std-env";

interface IUser {
  user: object | unknown
}

export const useAuthStore = defineStore('authUser', {
  state: () => ({
    current_user: {
      id: null,
      email: '',
      password: '',
      date_of_birth: '',
      first_name: '',
      last_name: '',
      company_id: '',
      phone: '',
      photo: '',
      position: '',
      role: {},
      status: '',
      passport: '',
      salary: {},
      permissions: []
    },
    user: {} as IUser,
    user_worker: {} as IUser,
    permissions: [],
    exam_active: false,
    openNotification: false,
    openSettings: false,
    my_scroll: 0,
    activeNav: false,
  }),
  getters: {
    get_current_user(current_user) {
      return this.current_user
    },
    get_user(user){
      return this.user
    },
    get_server_domain(){
      return 'https://test-api-buildwithus.ai-softdev.com'
      // return 'https://192.168.1.2:8000'
      // return 'http://192.168.152.169:8000'
      // return 'https://f01d-94-158-60-209.ngrok-free.app'
      // return 'https://api-buildwithus.ai-softdev.com'
    }
  },
  actions: {
    async authorize(params: { email: any, password: any }, router: Router) {
      await axios.post('auth/login', {
        email: params.email,
        password: params.password,
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        nuxtStorage.localStorage.setData('token', response.data.access, isProduction ? 30 : 1200)
        this.loadCurrentUser()
        router.push('/base/companies').then(e=>{
          toast.success('Успешная авторизация', {autoClose: 1500, theme: 'auto'},)
        })
      }).catch(e => {
        router.push('/')
        toast.error('Неверный логин или пароль', {autoClose: 1500, theme: "auto"})
      })
    },

    async loadCurrentUserWorker() {
      await axios.get('user/current-user-worker', {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.user_worker = res.data;
      })
    },

    async loadCurrentUser() {
      const router = useRouter();

     await axios.get('user/current-user', {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.user = response.data
      }).catch(error=> {
       nuxtStorage.localStorage.removeItem('token');
       router.push('/')
     })
    },
    async update_my(params: { user: any}) {
      let fd = new FormData();
      const originalUser = this.user
      if(params.user.first_name !== originalUser.first_name) {
        fd.set('first_name', params.user.first_name)
      }
      if(params.user.last_name !== originalUser.last_name) {
        fd.set('last_name', params.user.last_name)
      }
      if(params.user.phone !== originalUser.phone) {
        fd.set('phone', params.user.phone)
      }
      if(params.user.password !== originalUser.password) {
        fd.set('password', params.user.password)
      }
      if(params.user.salary !== originalUser.salary) {
        fd.set('salary', params.user.salary)
      }
      if(params.user.email !== originalUser.email) {
        fd.set('email', params.user.email)
      }
      if(params.user.date_of_birth !== originalUser.date_of_birth) {
        fd.set('date_of_birth', params.user.date_of_birth)
      }
      if(params.user.passport !== originalUser.passport) {
        fd.set('password', params.user.password)
      }
      if(params.user.department_id !== originalUser.department_id) {
        fd.set('department_id', params.user.department_id)
      }
      if(params.user.position.id !== originalUser.position.id) {
        fd.set('position', params.user.position.id)
      }
      if (params.update_type !== 'current-user' && params.user.permissions_ids !== originalUser.permissions_id) {
        fd.set('permissions_ids', params.permissions_ids)
      }
      if (params.update_type !== 'current-user' && params.user.role_id !== originalUser.role_id) {
        fd.set('role_id', params.user.role_id)

      }
      if (typeof params.user.photo === 'string' && params.user.photo !== originalUser.photo) {
        fd.set('photo', params.user.photo)
      }
      await axios.patch(`user/current-user`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.user = response.data
        toast.success('Данные успешно обновлены', {autoClose: 1500, theme: 'auto'})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    }
  },
})