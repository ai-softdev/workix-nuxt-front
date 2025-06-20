import { k as defineStore, a as useRouter } from './server.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const r = /* @__PURE__ */ Object.create(null), E = (e) => {
  var _a2, _b2;
  return ((_a2 = globalThis.process) == null ? void 0 : _a2.env) || define_import_meta_env_default || ((_b2 = globalThis.Deno) == null ? void 0 : _b2.env.toObject()) || globalThis.__env__ || (e ? r : globalThis);
}, s = new Proxy(r, { get(e, o) {
  var _a2;
  return (_a2 = E()[o]) != null ? _a2 : r[o];
}, has(e, o) {
  const i = E();
  return o in i || o in r;
}, set(e, o, i) {
  const g = E(true);
  return g[o] = i, true;
}, deleteProperty(e, o) {
  if (!o)
    return false;
  const i = E(true);
  return delete i[o], true;
}, ownKeys() {
  const e = E(true);
  return Object.keys(e);
} }), t = typeof process < "u" && process.env && "production" || "", p = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"]];
function B() {
  var _a2, _b2, _c2, _d2, _e2, _f2;
  if ((_a2 = globalThis.process) == null ? void 0 : _a2.env)
    for (const e of p) {
      const o = e[1] || e[0];
      if ((_b2 = globalThis.process) == null ? void 0 : _b2.env[o])
        return { name: e[0].toLowerCase(), ...e[2] };
    }
  return ((_d2 = (_c2 = globalThis.process) == null ? void 0 : _c2.env) == null ? void 0 : _d2.SHELL) === "/bin/jsh" && ((_f2 = (_e2 = globalThis.process) == null ? void 0 : _e2.versions) == null ? void 0 : _f2.webcontainer) ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
const l = B();
l.name;
function n(e) {
  return e ? e !== "false" : false;
}
const I = ((_a = globalThis.process) == null ? void 0 : _a.platform) || "", T = n(s.CI) || l.ci !== false, R = n(((_b = globalThis.process) == null ? void 0 : _b.stdout) && ((_c = globalThis.process) == null ? void 0 : _c.stdout.isTTY));
n(s.DEBUG);
const C = t === "test" || n(s.TEST), f = t === "production";
n(s.MINIMAL) || T || C || !R;
const a = /^win/i.test(I);
!n(s.NO_COLOR) && (n(s.FORCE_COLOR) || (R || a) && s.TERM !== "dumb" || T);
const _ = (((_e = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e.node) || "").replace(/^v/, "") || null;
Number(_ == null ? void 0 : _.split(".")[0]) || null;
const W = globalThis.process || /* @__PURE__ */ Object.create(null), c = { versions: {} };
new Proxy(W, { get(e, o) {
  if (o === "env")
    return s;
  if (o in e)
    return e[o];
  if (o in c)
    return c[o];
} });
const A = ((_g = (_f = globalThis.process) == null ? void 0 : _f.release) == null ? void 0 : _g.name) === "node", L = !!globalThis.Bun || !!((_i = (_h = globalThis.process) == null ? void 0 : _h.versions) == null ? void 0 : _i.bun), D = !!globalThis.Deno, O = !!globalThis.fastly, S = !!globalThis.Netlify, N = !!globalThis.EdgeRuntime, u = ((_j = globalThis.navigator) == null ? void 0 : _j.userAgent) === "Cloudflare-Workers", b = !!globalThis.__lagon__, F = [[S, "netlify"], [N, "edge-light"], [u, "workerd"], [O, "fastly"], [D, "deno"], [L, "bun"], [A, "node"], [b, "lagon"]];
function G() {
  const e = F.find((o) => o[0]);
  if (e)
    return { name: e[1] };
}
const P = G();
(P == null ? void 0 : P.name) || "";
const useAuthStore = defineStore("authUser", {
  state: () => ({
    current_user: {
      id: null,
      email: "",
      password: "",
      date_of_birth: "",
      first_name: "",
      last_name: "",
      company_id: "",
      phone: "",
      photo: "",
      position: "",
      role: {},
      status: "",
      passport: "",
      salary: {},
      permissions: []
    },
    user: {},
    user_worker: {},
    permissions: [],
    exam_active: false,
    openNotification: false,
    openSettings: false,
    my_scroll: 0,
    activeNav: false
  }),
  getters: {
    get_current_user(current_user) {
      return this.current_user;
    },
    get_user(user) {
      return this.user;
    },
    get_server_domain() {
      return "https://test-api-buildwithus.ai-softdev.com";
    }
  },
  actions: {
    async authorize(params, router) {
      await axios.post("auth/login", {
        email: params.email,
        password: params.password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        nuxtStorage.localStorage.setData("token", response.data.access, f ? 30 : 1200);
        this.loadCurrentUser();
        router.push("/base/companies").then((e) => {
          toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", { autoClose: 1500, theme: "auto" });
        });
      }).catch((e) => {
        router.push("/");
        toast.error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C", { autoClose: 1500, theme: "auto" });
      });
    },
    async loadCurrentUserWorker() {
      await axios.get("user/current-user-worker", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.user_worker = res.data;
      });
    },
    async loadCurrentUser() {
      const router = useRouter();
      await axios.get("user/current-user", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      }).catch((error) => {
        nuxtStorage.localStorage.removeItem("token");
        router.push("/");
      });
    },
    async update_my(params) {
      let fd = new FormData();
      const originalUser = this.user;
      if (params.user.first_name !== originalUser.first_name) {
        fd.set("first_name", params.user.first_name);
      }
      if (params.user.last_name !== originalUser.last_name) {
        fd.set("last_name", params.user.last_name);
      }
      if (params.user.phone !== originalUser.phone) {
        fd.set("phone", params.user.phone);
      }
      if (params.user.password !== originalUser.password) {
        fd.set("password", params.user.password);
      }
      if (params.user.salary !== originalUser.salary) {
        fd.set("salary", params.user.salary);
      }
      if (params.user.email !== originalUser.email) {
        fd.set("email", params.user.email);
      }
      if (params.user.date_of_birth !== originalUser.date_of_birth) {
        fd.set("date_of_birth", params.user.date_of_birth);
      }
      if (params.user.passport !== originalUser.passport) {
        fd.set("password", params.user.password);
      }
      if (params.user.department_id !== originalUser.department_id) {
        fd.set("department_id", params.user.department_id);
      }
      if (params.user.position.id !== originalUser.position.id) {
        fd.set("position", params.user.position.id);
      }
      if (params.update_type !== "current-user" && params.user.permissions_ids !== originalUser.permissions_id) {
        fd.set("permissions_ids", params.permissions_ids);
      }
      if (params.update_type !== "current-user" && params.user.role_id !== originalUser.role_id) {
        fd.set("role_id", params.user.role_id);
      }
      if (typeof params.user.photo === "string" && params.user.photo !== originalUser.photo) {
        fd.set("photo", params.user.photo);
      }
      await axios.patch(`user/current-user`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        toast.success("\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=auth-Cv6xi175.mjs.map
