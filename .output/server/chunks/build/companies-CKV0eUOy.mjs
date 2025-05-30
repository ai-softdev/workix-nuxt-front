import { k as defineStore } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

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
    },
    company_administrators: {},
    modules: {}
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
    async loadCompanyAdministrators(params) {
      await axios.get(`admin/user/company-admin/list?company_id=${params.company_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company_administrators = response.data;
      });
    },
    async createAdministrator(params) {
      await axios.post(`admin/user/company-admin/create`, params.data, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        toast.success("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!", { autoClose: 1500, theme: "auto" });
        this.loadCompanyAdministrators(params);
      });
    },
    async loadModules(params) {
      await axios.get(`company/modules/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.modules = response.data;
      });
    },
    async editModules(params) {
      await axios.patch(`company/modules/set-modules/${params.id}`, { modules: params.data }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        toast.success("\u041C\u043E\u0434\u0443\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B!", { autoClose: 1500, theme: "auto" });
        this.loadCompany({ id: params.id });
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
        toast.success("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430", { autoClose: 1500, theme: "auto" });
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
        toast.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438", { theme: "auto", autoClose: 1500 });
      });
    },
    async deleteDepartment(params, router) {
      await axios.delete(`department/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { autoClose: 1500, theme: "auto" });
        this.department = res.data;
        router.go(-1);
      });
    },
    async editCompany(params) {
      await axios.patch(`company/update`, params.form, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.loadCurrentCompany();
        toast.success("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430!", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useCompanies as u };
//# sourceMappingURL=companies-CKV0eUOy.mjs.map
