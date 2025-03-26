import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useSales = defineStore('sales', {
    state:() => ({
        sales: {}
    }),
    getters: {
        get_objects(object) {
            return this.objects
        }
    },
    actions: {
        async loadSalesList(params: any) {
            axios.get(`sales/list?page=${params.page}&limit=${params.limit}${params.name ? `&name=${params.name}` : ''}${params.min_price ? `&min_price=${params.min_price}` : ''}${params.max_price ? `&max_price=${params.max_price}` : ''}${params.min_count ? `&min_count=${params.min_count}` : ''}${params.max_count ? `&max_count=${params.max_count}` : ''}`, {
                headers: {
                    Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
                }
            }).then(response => {
                this.sales = response.data
            })
        },

        async createItem(params: any) {

            axios.post(`sales/create`, params.form, {
                headers: {
                    Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
                }
            }).then(response => {
                toast.success('Товар успешно создан!', {autoClose: 1500, theme: 'auto'})
            }).catch(e => {
                toast.error(e, {autoClose: 1500, theme: 'auto'})
                throw e;
            })
        },

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
})