import { i as defineStore } from "../server.mjs";
import { a as axios } from "./axios-ZzUSrXPW.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
const useCompanies = defineStore("current-company", {
  state: () => ({
    company: {
      id: "",
      name: "",
      address: "",
      created_at: "",
      description: "",
      email: "",
      logo_file: "",
      users_count: "",
      departments_count: "",
      objects_count: ""
    },
    news: {
      title: "",
      description: "",
      photo: "",
      photo_url: ""
    },
    department: {
      id: null,
      name: "",
      participants: []
    },
    current_department: {
      id: "",
      name: "",
      participants: []
    }
  }),
  getters: {
    current_company(company) {
      return this.company;
    },
    get_all_company(company) {
      return this.company;
    },
    get_all_news(news) {
      return this.news;
    },
    get_all_department(department) {
      return this.department;
    },
    get_department(current_department) {
      return this.current_department;
    }
  },
  actions: {
    async loadCurrentCompany() {
      await axios.get("company/current", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadCompanyList(params) {
      await axios.get(`company/list?page=${params.page}&limit=${params.limit}&query=${params.query}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadCompany(params) {
      await axios.get(`company/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadDepartmentList() {
      await axios.get("department/", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.department = response.data;
      });
    },
    async loadDepartment(params) {
      await axios.get(`department/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.current_department = response.data;
      });
    },
    async loadNewsList() {
      await axios.get(`news/news-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.news = response.data;
      });
    },
    async loadNews(params) {
      await axios.get(`news/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.news = response.data;
      });
    },
    async createCompany(params) {
      await axios.post(`company/create`, {
        name: params.name
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
        toast.success("Компания успешно создана", { autoClose: 1500, theme: "auto" });
        this.loadCompanyList({ page: 1, limit: 5, query: "" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async createDepartment(params) {
      await axios.post(`department/`, {
        name: params.department.name
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.department = res.data;
        this.loadDepartmentList();
      }).catch((e) => {
        toast.error("Ошибка при создании", { theme: "auto", autoClose: 1500 });
      });
    },
    async deleteDepartment(params, router) {
      await axios.delete(`department/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("Успешно удалён", { autoClose: 1500, theme: "auto" });
        this.department = res.data;
        router.go(-1);
      });
    }
  }
});
export {
  useCompanies as u
};
//# sourceMappingURL=companies-CagzxlJm.js.map
