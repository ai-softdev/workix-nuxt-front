import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { i as defineStore } from './server.mjs';
import { toast } from 'vue3-toastify';

const useUserStore = defineStore("user-list", {
  state: () => ({
    user: {
      id: "",
      first_name: "",
      last_name: "",
      patronymic: "",
      password: "",
      email: "",
      photo_file: "",
      photo: "",
      position_id: "",
      position_name: "",
      position: [{
        id: "",
        name: ""
      }],
      role_id: "",
      role_name: "",
      role_en: "",
      role: {
        id: "",
        name: ""
      },
      phone: "",
      department: "",
      company: "",
      company_id: "",
      salary: "",
      date_of_birth: "",
      permissions: []
    },
    roleList: [],
    userSearch: {},
    permissions: [],
    page: 1
  }),
  getters: {
    get_user_list: (state) => state.user,
    get_user_search: (state) => state.userSearch,
    get_position_list: (state) => state.user.position,
    get_role_list: (state) => state.roleList,
    get_permission_list: (state) => state.permissions
  },
  actions: {
    async loadAdminList(params) {
      await axios.get(`/admin/user/company-admin/list?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      });
    },
    async loadUserList(params) {
      await axios.get(`user/list?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      });
    },
    async loadUser(params) {
      axios.get(`user/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      }).catch((e) => {
      });
    },
    async searchUser(params) {
      axios.get(`user/list/my-company?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.userSearch = res.data;
      });
    },
    async createUser(params) {
      let formD = new FormData();
      formD.set("first_name", params.first_name);
      formD.set("last_name", params.last_name);
      formD.set("email", params.email);
      formD.set("password", params.password);
      formD.set("date_of_birth", params.date_of_birth);
      formD.set("photo", params.photo);
      formD.set("phone", params.phone);
      formD.set("position", params.position);
      formD.set("role_id", params.role_id);
      formD.set("patronymic", params.patronymic);
      formD.set("company_id", params.company_id);
      formD.set("department_id", params.department_id);
      if (typeof params.photo !== "string") {
        formD.set("photo", params.photo);
      }
      axios.post(`user/create`, formD, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        this.loadUserList({ limit: 5, page: 1, query: "" });
      }).catch((e) => {
      });
    },
    async createAdmin(params) {
      let formData = new FormData();
      formData.set("first_name", params.first_name);
      formData.set("last_name", params.last_name);
      formData.set("email", params.email);
      formData.set("password", params.password);
      formData.set("date_of_birth", params.date_of_birth.toISOString());
      formData.set("photo", params.photo);
      formData.set("phone", params.phone);
      formData.set("position", params.position);
      formData.set("role_id", params.role_id);
      formData.set("company_id", params.company_id);
      formData.set("department_id", params.department_id);
      if (typeof params.photo !== "string") {
        formData.set("photo", params.photo);
      }
      axios.post("/admin/user/company-admin/create", formData, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        this.loadUserList({ limit: 5, page: 1, query: "" });
      }).catch((e) => {
      });
    },
    async update_user(params) {
      let formD = new FormData();
      const originalUser = this.user;
      if (params.user.first_name !== originalUser.first_name) {
        formD.set("first_name", params.user.first_name);
      }
      if (params.user.last_name !== originalUser.last_name) {
        formD.set("last_name", params.user.last_name);
      }
      if (params.user.phone !== originalUser.phone) {
        formD.set("phone", params.user.phone);
      }
      if (params.user.password !== originalUser.password) {
        formD.set("password", params.user.password);
      }
      if (params.user.salary !== originalUser.salary) {
        formD.set("salary", params.user.salary);
      }
      if (params.user.email !== originalUser.email) {
        formD.set("email", params.user.email);
      }
      if (params.user.date_of_birth !== originalUser.date_of_birth) {
        formD.set("date_of_birth", params.user.date_of_birth);
      }
      if (params.user.passport !== originalUser.passport) {
        formD.set("password", params.user.password);
      }
      if (params.user.department_id !== originalUser.department_id) {
        formD.set("department_id", params.user.department_id);
      }
      if (params.user.position.id !== originalUser.position.id) {
        formD.set("position", params.user.position.id);
      }
      if (params.update_type !== "current-user" && params.user.permissions_ids !== originalUser.permissions_id) {
        formD.set("permissions_ids", params.permissions_ids);
      }
      if (params.update_type !== "current-user" && params.user.role_id !== originalUser.role_id) {
        formD.set("role_id", params.user.role_id);
      }
      if (typeof params.user.photo === "string" && params.user.photo !== originalUser.photo) {
        formD.set("photo", params.user.photo);
      }
      await axios.patch(`user/update/${params.id}`, formD, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        toast.success("\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async change_permissions(params) {
      await axios.post(`user/permission/change-user-permissions/${params.id}`, {
        permissions: params.permissions
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user.permissions = response.data;
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async deleteUser(params, router) {
      axios.delete(`user/delete/${params.user_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        router.push("/base/users");
        toast.success("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async loadPositionList() {
      axios.get(`user/position/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user.position = response.data;
      });
    },
    async loadRoleList() {
      axios.get(`user/role/role-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.roleList = response.data;
      });
    },
    async loadPermissions() {
      axios.get(`user/permission/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.permissions = response.data;
      });
    }
  }
});

export { useUserStore as u };
//# sourceMappingURL=users-qQfdnDo1.mjs.map
