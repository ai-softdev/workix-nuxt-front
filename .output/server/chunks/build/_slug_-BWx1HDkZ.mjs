import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { a as useRouter, l as useSeoMeta, I as useRoute$1 } from './server.mjs';
import { useSSRContext, defineComponent, watchEffect, onUpdated, withCtx, createTextVNode, toDisplayString, unref, createVNode, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_5 } from './profile-sfkvonJq.mjs';
import { _ as _imports_1$1, a as _imports_2$1 } from './password-C72EmLZ_.mjs';
import { _ as _imports_6 } from './info-NxOjFgud.mjs';
import { u as useUserStore } from './users-RL7sfNv6.mjs';
import { useRoute } from 'vue-router';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { u as useCompanies } from './companies-DK9t2HLw.mjs';
import { _ as _sfc_main$3 } from './TheBreadcrumbs-BV4tnjik.mjs';
import { _ as _sfc_main$4 } from './TheModal-CnBva0fQ.mjs';
import { _ as _sfc_main$5 } from './TheButton-Bz9xS3BF.mjs';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { T as TheCheckbox } from './TheCheckbox-C05sx-UI.mjs';
import { _ as _sfc_main$6 } from './TheInput-BfTT2E6G.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
import './nuxt-link-CNB8XBKy.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './chat-D3-ILc9-.mjs';

const _imports_1 = "" + publicAssetsURL("icons/mail.svg");
const _imports_2 = "" + publicAssetsURL("icons/post.svg");
const _imports_4$1 = "" + publicAssetsURL("icons/stag.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheUserChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F", "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 IQ \u0442\u0435\u0441\u0442\u044B", "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C", "\u041F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u044C"],
      datasets: [
        {
          backgroundColor: ["rgba(109,252,118,0.4)", "rgba(252,155,0,0.91)", "rgba(0,121,255,0.4)", "rgba(255,9,0,0.68)"],
          data: [70, 70, 90, 100]
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PolarArea), mergeProps({
        class: "text-white",
        style: { "{color": "white" },
        data: unref(chartData),
        options: unref(chartOptions)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserUI/TheUserChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_3 = "" + publicAssetsURL("icons/pasport.svg");
const _imports_4 = "" + publicAssetsURL("icons/salary.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserChange",
  __ssrInlineRender: true,
  props: {
    userEdit: {
      type: Object,
      default: () => {
      }
    },
    showChange: Boolean
  },
  emits: ["showChange"],
  setup(__props, { emit: __emit }) {
    const userStore = useUserStore();
    const companyStore = useCompanies();
    useUserStore();
    useRoute$1();
    const props = __props;
    const userEdit = ref({ ...props.userEdit });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "mt-10" }, _attrs))}><div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6"><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        label: _ctx.$t("\u0418\u043C\u044F"),
        placeholder: unref(userStore).user.first_name,
        modelValue: unref(userEdit).first_name,
        "onUpdate:modelValue": ($event) => unref(userEdit).first_name = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
        placeholder: unref(userStore).user.last_name,
        modelValue: unref(userEdit).last_name,
        "onUpdate:modelValue": ($event) => unref(userEdit).last_name = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6"><div class="w-5/12 max-sm:w-full flex flex-col gap-1"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_1)} alt="mail"><p class="dark:text-white font-medium">${ssrInterpolate(_ctx.$t("\u041F\u043E\u0447\u0442\u0430"))}: </p></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        placeholder: unref(userStore).user.email,
        modelValue: unref(userEdit).email,
        "onUpdate:modelValue": ($event) => unref(userEdit).email = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full flex flex-col gap-1"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_1$1)} alt="phone"><p class="dark:text-white font-medium">${ssrInterpolate(_ctx.$t("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"))}: </p></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "tel",
        placeholder: unref(userStore).user.phone,
        modelValue: unref(userEdit).phone,
        "onUpdate:modelValue": ($event) => unref(userEdit).phone = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6"><div class="w-5/12 max-sm:w-full flex flex-col gap-1"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_2$1)} alt="password"><p class="dark:text-white font-medium">${ssrInterpolate(_ctx.$t("\u041F\u0430\u0440\u043E\u043B\u044C"))}: </p></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "password",
        placeholder: unref(userStore).user.password,
        modelValue: unref(userEdit).password,
        "onUpdate:modelValue": ($event) => unref(userEdit).password = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full flex flex-col gap-1"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_3)} alt="pasport"><p class="dark:text-white font-medium">${ssrInterpolate(_ctx.$t("\u041F\u0430\u0441\u043F\u043E\u0440\u0442"))}: </p></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        placeholder: unref(userStore).user.passport,
        modelValue: unref(userEdit).passport,
        "onUpdate:modelValue": ($event) => unref(userEdit).passport = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center gap-x-10 max-sm:gap-y-4 max-sm:flex-col mb-6"><div class="w-5/12 max-sm:w-full"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_4)} alt="salary"><p class="dark:text-white font-medium">${ssrInterpolate(_ctx.$t("\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430"))}: </p></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: unref(userEdit).salary,
        "onUpdate:modelValue": ($event) => unref(userEdit).salary = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full"><p class="mb-2 font-bold">${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}</p><select class="w-full text-black rounded-3xl p-2.5 bg-whiteSmoke border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"><!--[-->`);
      ssrRenderList((_a = unref(companyStore)) == null ? void 0 : _a.get_all_department.results, (department) => {
        _push(`<option${ssrRenderAttr("value", department.id)}>${ssrInterpolate(department.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="flex items-center justify-around gap-x-10 mb-6 pt-8 mt-8 border-t"><div class="w-full"><p class="font-bold text-lg">${ssrInterpolate(_ctx.$t("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"))}</p><div class="flex flex-wrap mt-4 gap-2"><!--[-->`);
      ssrRenderList(unref(userEdit).permissions, (permission) => {
        _push(ssrRenderComponent(TheCheckbox, { item: permission }, null, _parent));
      });
      _push(`<!--]--></div></div></div><div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10 max-sm:flex-col">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
        t: "button",
        onClick: ($event) => _ctx.$emit("showChange")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
        t: "submit",
        type: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserChange.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  props: {
    userEdit: {
      type: Object,
      default: () => ({})
    },
    showWarning: Boolean,
    showChange: Boolean,
    activeImg: Boolean
  },
  setup(__props) {
    const route = useRoute();
    const company = useCompanies();
    const loadCurrentUser = useAuthStore();
    const currentUser = useUserStore();
    useRouter();
    watchEffect(() => {
      var _a, _b;
      currentUser.loadUser({ id: route.params.slug });
      if (((_a = loadCurrentUser.user.role) == null ? void 0 : _a.name_en) === "company_admin" || ((_b = loadCurrentUser.user.role) == null ? void 0 : _b.name_en) === "admin") {
        company.loadDepartmentList();
        currentUser.loadPermissions();
      } else if (loadCurrentUser.user.role_en === "admin") {
        company.loadCompanyList({ page: 1, limit: 1e5, query: "" });
      }
    });
    onUpdated(() => {
      useSeoMeta({
        title: `${currentUser.user.first_name + " " + currentUser.user.last_name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start"><button class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0430\u0434"))}</button><div class="flex items-center flex-wrap gap-x-3">`);
      _push(ssrRenderComponent(_sfc_main$3, { "breadcrumb-link": `/base/users` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentUser).user.first_name + " " + unref(currentUser).user.last_name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentUser).user.first_name + " " + unref(currentUser).user.last_name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 flex items-center gap-4 justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5"><p class="dark:text-white text-3xl font-bold">${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"))}</p><div class="flex items-center gap-3 max-sm:flex-col max-sm:items-start"><p class="dark:text-white">${ssrInterpolate(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"))}</p><div class="flex items-center gap-2"><p class="dark:text-white text-mediumGray">${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><p class="dark:text-white text-mediumGray">${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleTimeString())}</p></div></div></div><div class="my-10 grid grid-cols-3 max-[1150px]:!grid-cols-1 gap-5"><div class="bg-white p-6 rounded-3xl"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0)} alt="profile"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}</h2></div><div class="my-6 mx-auto flex flex-col">`);
      if (!unref(currentUser).user.id) {
        _push(`<div class="flex flex-col items-center gap-y-2">`);
        _push(ssrRenderComponent(TheSceleton, {
          width: "5rem",
          height: "5rem",
          "border-radius": "100%"
        }, null, _parent));
        _push(`<div class="flex flex-col justify-center items-center gap-y-2">`);
        _push(ssrRenderComponent(TheSceleton, {
          width: "150px",
          height: "20px",
          "border-radius": "20px"
        }, null, _parent));
        _push(ssrRenderComponent(TheSceleton, {
          width: "130px",
          height: "15px",
          "border-radius": "20px"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex flex-col"><div class="flex text-gray-600 gap-x-2 border-b pb-6"><img class="block w-[60px] h-[60px] border-2 border-golden rounded-full shadow-lg dark:shadow-none"${ssrRenderAttr("src", unref(currentUser).user.photo)} alt="logo"><div class="my-2 mx-2"><h3 class="text-md font-bold dark:text-white select-none">${ssrInterpolate(unref(currentUser).user.first_name)} ${ssrInterpolate(unref(currentUser).user.last_name)}</h3><p class="dark:text-white text-sm text-mediumGray">${ssrInterpolate(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(loadCurrentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " \u043B\u0435\u0442")}</p></div></div></div>`);
      }
      if (!unref(currentUser).user.id) {
        _push(ssrRenderComponent(TheSceleton, {
          class: "my-2",
          width: "150px",
          height: "15px",
          "border-radius": "20px"
        }, null, _parent));
      } else {
        _push(`<div class="flex flex-col gap-4 w-full h-fit mt-6"><div class="text-sm flex items-center justify-between"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_1)} alt="mail"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("Email"))}: </p></div><a${ssrRenderAttr("href", `mailto:${unref(currentUser).user.email}`)} class="cursor-pointer hover:text-blueSemiLight hover:underline dark:hover:text-gray-200">${ssrInterpolate(unref(currentUser).user.email)}</a></div><div class="text-sm flex items-center justify-between"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_2)} alt="post"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}: </p></div>`);
        if (unref(loadCurrentUser).user.role_en === "admin") {
          _push(`<p class="dark:text-white">${ssrInterpolate(unref(currentUser).user.role)} ${ssrInterpolate(unref(currentUser).user.position)}</p>`);
        } else {
          _push(`<p class="dark:text-white">${ssrInterpolate(unref(currentUser).user.position)}</p>`);
        }
        _push(`</div><div class="text-sm flex items-center justify-between"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_1$1)} alt="phone"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0422\u0435\u043B\u0435\u0444\u043E\u043D"))}: </p></div><a class="flex items-center gap-x-2 hover:underline"${ssrRenderAttr("href", `tel:${unref(currentUser).user.phone}`)}><p>${ssrInterpolate(unref(currentUser).user.phone)}</p></a></div><div class="text-sm flex items-center justify-between"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_4$1)} alt="stag"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0436"))}: </p></div><p class="flex items-center gap-x-2 hover:underline">${ssrInterpolate(unref(currentUser).user.phone)}</p></div></div>`);
      }
      _push(`</div></div><div class="col-span-2 bg-white p-6 rounded-3xl"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"><img${ssrRenderAttr("src", _imports_5)} alt="statistic"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"))}</h2></div><div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div><div class="bg-white p-6 rounded-3xl"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"><img${ssrRenderAttr("src", _imports_6)} alt="info"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F  \u043E \u043E\u0442\u0434\u0435\u043B\u0435"))}</h2></div><div class="flex flex-col gap-4 w-full"><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}: </p><p class="flex items-center gap-x-2 hover:underline">${ssrInterpolate((_a = unref(currentUser).user.department) == null ? void 0 : _a.name)}</p></div><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"))}: </p><p class="flex items-center gap-x-2 hover:underline">${ssrInterpolate((_b = unref(currentUser).user.department) == null ? void 0 : _b.name)}</p></div></div></div></div><div class="fixed flex gap-x-4 bottom-6 left-1/2 -translate-x-1/2"><button class="w-12 h-12 bg-white border hover:transition-all duration-200 hover:scale-95 rounded-xl relative"><svg class="absolute top-3 right-2.5" width="25" height="25" viewBox="0 -0.05 20.109 20.109" xmlns="http://www.w3.org/2000/svg"><g class="stroke-black" id="edit-user" transform="translate(-2 -2)"><path id="primary" d="M20.71,16.09,15.8,21H13V18.2l4.91-4.91a1,1,0,0,1,1.4,0l1.4,1.4A1,1,0,0,1,20.71,16.09ZM11,3a4,4,0,1,0,4,4A4,4,0,0,0,11,3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="primary-2" data-name="primary" d="M11,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H9" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg></button><button class="w-12 h-12 bg-white border hover:transition-all duration-200 hover:scale-95 rounded-xl relative"><svg class="absolute top-3 right-2 fill-redOrange" height="26px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 473" xml:space="preserve"><g><path d="M324.285,215.015V128h20V38h-98.384V0H132.669v38H34.285v90h20v305h161.523c23.578,24.635,56.766,40,93.477,40
              c71.368,0,129.43-58.062,129.43-129.43C438.715,277.276,388.612,222.474,324.285,215.015z M294.285,215.015
              c-18.052,2.093-34.982,7.911-50,16.669V128h50V215.015z M162.669,30h53.232v8h-53.232V30z M64.285,68h250v30h-250V68z M84.285,128
              h50v275h-50V128z M164.285,403V128h50v127.768c-21.356,23.089-34.429,53.946-34.429,87.802c0,21.411,5.231,41.622,14.475,59.43
              H164.285z M309.285,443c-54.826,0-99.429-44.604-99.429-99.43s44.604-99.429,99.429-99.429s99.43,44.604,99.43,99.429
              S364.111,443,309.285,443z"></path><polygon points="342.248,289.395 309.285,322.358 276.323,289.395 255.11,310.608 288.073,343.571 255.11,376.533 276.323,397.746
              309.285,364.783 342.248,397.746 363.461,376.533 330.498,343.571 363.461,310.608 	"></polygon></g></svg></button>`);
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => {
            __props.showWarning = !__props.showWarning;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?"))}</p><p class="text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full"${_scopeId}><span class="font-bold text-red-500"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"))}</span>: ${ssrInterpolate(_ctx.$t("\u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E"))}</p><div class="flex justify-center gap-3 max-sm:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                t: "button",
                onClick: ($event) => __props.showWarning = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-white gap-3 py-2 !bg-redOrange !border transition-all ease-in-out duration-300",
                t: "submit",
                onClick: ($event) => unref(currentUser).deleteUser({ user_id: unref(currentUser).user.id }, _ctx.$router)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("p", { class: "text-center font-bold max-sm:w-9/12 max-sm:mx-auto" }, toDisplayString(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?")), 1),
                createVNode("p", { class: "text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full" }, [
                  createVNode("span", { class: "font-bold text-red-500" }, toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1),
                  createTextVNode(": " + toDisplayString(_ctx.$t("\u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E")), 1)
                ]),
                createVNode("div", { class: "flex justify-center gap-3 max-sm:flex-col" }, [
                  createVNode(_sfc_main$5, {
                    class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                    t: "button",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-white gap-3 py-2 !bg-redOrange !border transition-all ease-in-out duration-300",
                    t: "submit",
                    onClick: ($event) => unref(currentUser).deleteUser({ user_id: unref(currentUser).user.id }, _ctx.$router)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showChange) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => __props.showChange = !__props.showChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"))}</p>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                "user-edit": __props.userEdit,
                onShowChange: ($event) => __props.showChange = false
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("p", { class: "text-center font-bold max-sm:w-9/12 max-sm:mx-auto" }, toDisplayString(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1),
                createVNode(_sfc_main$1, {
                  "user-edit": __props.userEdit,
                  onShowChange: ($event) => __props.showChange = false
                }, null, 8, ["user-edit", "onShowChange"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/users/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BWx1HDkZ.mjs.map
