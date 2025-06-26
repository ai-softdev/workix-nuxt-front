import { useSSRContext, defineComponent, watchEffect, onUpdated, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, ref, mergeProps } from 'vue';
import { l as useSeoMeta, I as useRoute$1 } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useUserStore } from './users-RL7sfNv6.mjs';
import { useRoute } from 'vue-router';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { u as useCompanies } from './companies-Dkc8gjfT.mjs';
import { _ as _sfc_main$3 } from './TheTextContent-D3-WrEaf.mjs';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
import { _ as _sfc_main$4 } from './TheBreadcrumbs-JYk0wevu.mjs';
import { _ as _sfc_main$5 } from './TheModal-CnBva0fQ.mjs';
import { _ as _sfc_main$6 } from './TheButton-DDcCSWqY.mjs';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { T as TheCheckbox } from './TheCheckbox-fFAwztz6.mjs';
import { _ as _sfc_main$7 } from './TheInput-BfTT2E6G.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-CNB8XBKy.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './chat-fFS4idph.mjs';

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
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "mt-10" }, _attrs))}><div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6"><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: _ctx.$t("\u0418\u043C\u044F"),
        placeholder: unref(userStore).user.first_name,
        modelValue: unref(userEdit).first_name,
        "onUpdate:modelValue": ($event) => unref(userEdit).first_name = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
        placeholder: unref(userStore).user.last_name,
        modelValue: unref(userEdit).last_name,
        "onUpdate:modelValue": ($event) => unref(userEdit).last_name = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6"><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: _ctx.$t("Email"),
        placeholder: unref(userStore).user.email,
        modelValue: unref(userEdit).email,
        "onUpdate:modelValue": ($event) => unref(userEdit).email = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        type: "tel",
        label: _ctx.$t("\u041D\u043E\u043C\u0435\u0440"),
        placeholder: unref(userStore).user.phone,
        modelValue: unref(userEdit).phone,
        "onUpdate:modelValue": ($event) => unref(userEdit).phone = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6"><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        type: "password",
        label: _ctx.$t("\u041F\u0430\u0440\u043E\u043B\u044C"),
        placeholder: unref(userStore).user.password,
        modelValue: unref(userEdit).password,
        "onUpdate:modelValue": ($event) => unref(userEdit).password = $event
      }, null, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: _ctx.$t("\u041F\u0430\u0441\u043F\u043E\u0440\u0442"),
        placeholder: unref(userStore).user.passport,
        modelValue: unref(userEdit).passport,
        "onUpdate:modelValue": ($event) => unref(userEdit).passport = $event
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap items-center justify-around gap-x-10 max-sm:gap-y-4 mb-6"><div class="w-5/12 max-sm:w-full"><p>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}</p><select class="w-full dark:bg-gray-300 py-2 px-4 rounded-lg text-black" type="password"><!--[-->`);
      ssrRenderList((_a = unref(companyStore)) == null ? void 0 : _a.get_all_department.results, (department) => {
        _push(`<option${ssrRenderAttr("value", department.id)}>${ssrInterpolate(department.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="w-5/12 max-sm:w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: _ctx.$t("\u0417\u0430\u0440\u043E\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430"),
        modelValue: unref(userEdit).salary,
        "onUpdate:modelValue": ($event) => unref(userEdit).salary = $event
      }, null, _parent));
      _push(`</div></div><div class="mb-6"><div class="w-full mx-auto text-center"><label class="w-full"><span class="text-lg tracking-widest">\u0424\u043E\u0442\u043E</span><p class="flex justify-center items-center my-2"><img class="rounded-full h-20 w-20"${ssrRenderAttr("src", unref(userStore).user.photo)} alt=""></p></label></div></div><div class="flex items-center justify-around gap-x-10 mb-6"><div class="w-10/12"><p class="tracking-widest">${ssrInterpolate(_ctx.$t("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"))}</p><div class="flex flex-wrap justify-center mt-4"><!--[-->`);
      ssrRenderList(unref(userEdit).permissions, (permission) => {
        _push(ssrRenderComponent(TheCheckbox, { item: permission }, null, _parent));
      });
      _push(`<!--]--></div></div></div><div class="flex flex-wrap gap-y-3 items-center justify-center gap-x-10">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "py-2 px-6 rounded-full max-[450px]:w-full",
        t: "button",
        onClick: ($event) => _ctx.$emit("showChange"),
        type: "danger"
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
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "py-2 px-6 rounded-full max-[450px]:w-full",
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
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center max-md:flex-col gap-x-4 justify-center">`);
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F "))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!((_a = unref(currentUser).get_user_list) == null ? void 0 : _a.id)) {
        _push(`<div class="flex max-md:flex-col max-md:gap-y-2 items-center gap-x-2">`);
        _push(ssrRenderComponent(TheSceleton, {
          width: "150px",
          height: "25px",
          "border-radius": "20px",
          class: "max-md:order-2"
        }, null, _parent));
        _push(ssrRenderComponent(TheSceleton, {
          width: "70px",
          height: "70px",
          "border-radius": "50px"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex max-md:flex-col gap-x-2 gap-y-2 items-center"><span class="max-md:order-2 bg-blueDarkSemiLight text-sm px-4 py-1 rounded-full text-white max-md:">${ssrInterpolate(unref(currentUser).user.first_name + " " + unref(currentUser).user.last_name)}</span></div>`);
      }
      _push(`</div><div class="flex max-sm:flex-col max-sm:mt-6 items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$4, { "breadcrumb-link": "/base/users" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, {
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
      _push(`</div><div class="my-10 grid grid-cols-3 max-[1300px]:grid-cols-2 max-lg:grid-cols-1 max-[1300px]:gap-y-10">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-11/12 max-[1300px]:order-last mx-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")), 1)
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_sfc_main$2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "w-11/12 mx-auto relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute"${_scopeId}><p class="text-[11.5px] tracking-widest dark:text-white text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"))}</p><div class="mt-2"${_scopeId}><p class="text-[11.5px] tracking-widest dark:text-white text-gray-300"${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><p class="text-[11.5px] tracking-widest dark:text-white text-gray-300"${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleTimeString())}</p></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="my-6 mx-auto flex flex-col items-center"${_scopeId}>`);
            if (!unref(currentUser).user.id) {
              _push2(`<div class="flex flex-col items-center gap-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(TheSceleton, {
                width: "5rem",
                height: "5rem",
                "border-radius": "100%"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col justify-center items-center gap-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(TheSceleton, {
                width: "150px",
                height: "20px",
                "border-radius": "20px"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(TheSceleton, {
                width: "130px",
                height: "15px",
                "border-radius": "20px"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="flex flex-col items-center"${_scopeId}><label class="relative cursor-pointer"${_scopeId}><div class="w-20 h-20 rounded-full transition-all absolute hover:bg-gray-400 hover:bg-opacity-40"${_scopeId}><input type="file" class="top-6 w-0 absolute left-6"${_scopeId}></div><img class="w-20 h-20 dark:border-none border rounded-full"${ssrRenderAttr("src", unref(currentUser).user.photo)} alt=""${_scopeId}></label><div class="flex gap-x-2 mt-4 text-lg tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(currentUser).user.first_name)}</p><p${_scopeId}>${ssrInterpolate(unref(currentUser).user.last_name)}</p></div><div class="flex gap-x-2 my-2"${_scopeId}>`);
              if (unref(loadCurrentUser).user.role_en === "admin") {
                _push2(`<div class="text-center my-2 tracking-widest text-sm"${_scopeId}><p class="dark:text-gray-100 text-gray-500"${_scopeId}>${ssrInterpolate(unref(currentUser).user.role)}</p><p class="dark:text-gray-200 text-gray-400"${_scopeId}>${ssrInterpolate(unref(currentUser).user.position)}</p></div>`);
              } else {
                _push2(`<p class="tracking-widest text-sm"${_scopeId}>${ssrInterpolate(unref(currentUser).user.position)}</p>`);
              }
              _push2(`</div></div>`);
            }
            if (!unref(currentUser).user.id) {
              _push2(ssrRenderComponent(TheSceleton, {
                class: "my-2",
                width: "150px",
                height: "15px",
                "border-radius": "20px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<a class="flex items-center gap-x-2 hover:underline"${ssrRenderAttr("href", `tel:${unref(currentUser).user.phone}`)}${_scopeId}><div${_scopeId}><svg class="dark:stroke-white stroke-gray-400" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(unref(currentUser).user.phone)}</p></a>`);
            }
            _push2(`</div><div${_scopeId}><div class="flex flex-wrap justify-around"${_scopeId}><div class="my-4"${_scopeId}>`);
            if (!unref(currentUser).user.id) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(TheSceleton, {
                width: "150px",
                height: "20px",
                "border-radius": "5px"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex gap-x-2 items-center"${_scopeId}><div class="tracking-widest"${_scopeId}><svg width="25" height="25" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.41068 -0.000573039H21.5889C22.0185 -0.000573039 22.406 0.164404 22.6935 0.433045L11.9998 9.59925L1.30838 0.435895C1.59657 0.165829 1.98405 -0.000573039 2.41068 -0.000573039ZM1.30519 15.5649L9.22874 8.77351L11.9998 11.1994L14.7716 8.77351L22.6903 15.5649C22.4029 15.8337 22.0155 15.9992 21.5889 15.9992H2.41068C1.98189 15.9992 1.59358 15.8337 1.30519 15.5649ZM0.799824 14.6963L8.53259 8.12594L0.799824 1.40412V14.6963ZM23.1998 1.39935V14.6963L15.467 8.12594L23.1998 1.39935Z" class="dark:fill-white fill-gray-400"${_scopeId}></path></svg></div><a${ssrRenderAttr("href", `mailto:${unref(currentUser).user.email}`)} class="cursor-pointer tracking-widest hover:text-blueSemiLight hover:underline dark:hover:text-gray-200"${_scopeId}>${ssrInterpolate(unref(currentUser).user.email)}</a></div>`);
            }
            _push2(`</div><div class="my-4"${_scopeId}>`);
            if (!unref(currentUser).user.id) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(TheSceleton, {
                width: "50px",
                height: "20px",
                "border-radius": "5px"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex gap-x-2"${_scopeId}><div${_scopeId}><svg class="dark:fill-white fill-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14Z"${_scopeId}></path><path d="M17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z"${_scopeId}></path><path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"${_scopeId}></path><path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"${_scopeId}></path><path d="M7 14C7.55229 14 8 13.5523 8 13C8 12.4477 7.55229 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14Z"${_scopeId}></path><path d="M7 18C7.55229 18 8 17.5523 8 17C8 16.4477 7.55229 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.412 3.24999 9.14133 3.24999 9.94346 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V14.0564C22.75 15.8941 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H9.94359C8.10585 22.75 6.65018 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33855 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.86685 7.88123 2.8477 8.06061 2.83168 8.25H21.1683C21.1523 8.06061 21.1331 7.88124 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM2.75 12C2.75 11.146 2.75032 10.4027 2.76309 9.75H21.2369C21.2497 10.4027 21.25 11.146 21.25 12V14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25H10C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14V12Z"${_scopeId}></path></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(currentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " \u043B\u0435\u0442")}</p></div>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute" }, [
                createVNode("p", { class: "text-[11.5px] tracking-widest dark:text-white text-gray-300" }, toDisplayString(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C")), 1),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-[11.5px] tracking-widest dark:text-white text-gray-300" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1),
                  createVNode("p", { class: "text-[11.5px] tracking-widest dark:text-white text-gray-300" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleTimeString()), 1)
                ])
              ]),
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "my-6 mx-auto flex flex-col items-center" }, [
                !unref(currentUser).user.id ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col items-center gap-y-2"
                }, [
                  createVNode(TheSceleton, {
                    width: "5rem",
                    height: "5rem",
                    "border-radius": "100%"
                  }),
                  createVNode("div", { class: "flex flex-col justify-center items-center gap-y-2" }, [
                    createVNode(TheSceleton, {
                      width: "150px",
                      height: "20px",
                      "border-radius": "20px"
                    }),
                    createVNode(TheSceleton, {
                      width: "130px",
                      height: "15px",
                      "border-radius": "20px"
                    })
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex flex-col items-center"
                }, [
                  createVNode("label", { class: "relative cursor-pointer" }, [
                    createVNode("div", { class: "w-20 h-20 rounded-full transition-all absolute hover:bg-gray-400 hover:bg-opacity-40" }, [
                      createVNode("input", {
                        type: "file",
                        class: "top-6 w-0 absolute left-6"
                      })
                    ]),
                    createVNode("img", {
                      class: "w-20 h-20 dark:border-none border rounded-full",
                      src: unref(currentUser).user.photo,
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "flex gap-x-2 mt-4 text-lg tracking-widest" }, [
                    createVNode("p", null, toDisplayString(unref(currentUser).user.first_name), 1),
                    createVNode("p", null, toDisplayString(unref(currentUser).user.last_name), 1)
                  ]),
                  createVNode("div", { class: "flex gap-x-2 my-2" }, [
                    unref(loadCurrentUser).user.role_en === "admin" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center my-2 tracking-widest text-sm"
                    }, [
                      createVNode("p", { class: "dark:text-gray-100 text-gray-500" }, toDisplayString(unref(currentUser).user.role), 1),
                      createVNode("p", { class: "dark:text-gray-200 text-gray-400" }, toDisplayString(unref(currentUser).user.position), 1)
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "tracking-widest text-sm"
                    }, toDisplayString(unref(currentUser).user.position), 1))
                  ])
                ])),
                !unref(currentUser).user.id ? (openBlock(), createBlock(TheSceleton, {
                  key: 2,
                  class: "my-2",
                  width: "150px",
                  height: "15px",
                  "border-radius": "20px"
                })) : (openBlock(), createBlock("a", {
                  key: 3,
                  class: "flex items-center gap-x-2 hover:underline",
                  href: `tel:${unref(currentUser).user.phone}`
                }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-gray-400",
                      width: "25",
                      height: "25",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", { class: "tracking-widest" }, toDisplayString(unref(currentUser).user.phone), 1)
                ], 8, ["href"]))
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "flex flex-wrap justify-around" }, [
                  createVNode("div", { class: "my-4" }, [
                    !unref(currentUser).user.id ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(TheSceleton, {
                        width: "150px",
                        height: "20px",
                        "border-radius": "5px"
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex gap-x-2 items-center"
                    }, [
                      createVNode("div", { class: "tracking-widest" }, [
                        (openBlock(), createBlock("svg", {
                          width: "25",
                          height: "25",
                          viewBox: "0 0 24 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M2.41068 -0.000573039H21.5889C22.0185 -0.000573039 22.406 0.164404 22.6935 0.433045L11.9998 9.59925L1.30838 0.435895C1.59657 0.165829 1.98405 -0.000573039 2.41068 -0.000573039ZM1.30519 15.5649L9.22874 8.77351L11.9998 11.1994L14.7716 8.77351L22.6903 15.5649C22.4029 15.8337 22.0155 15.9992 21.5889 15.9992H2.41068C1.98189 15.9992 1.59358 15.8337 1.30519 15.5649ZM0.799824 14.6963L8.53259 8.12594L0.799824 1.40412V14.6963ZM23.1998 1.39935V14.6963L15.467 8.12594L23.1998 1.39935Z",
                            class: "dark:fill-white fill-gray-400"
                          })
                        ]))
                      ]),
                      createVNode("a", {
                        href: `mailto:${unref(currentUser).user.email}`,
                        class: "cursor-pointer tracking-widest hover:text-blueSemiLight hover:underline dark:hover:text-gray-200"
                      }, toDisplayString(unref(currentUser).user.email), 9, ["href"])
                    ]))
                  ]),
                  createVNode("div", { class: "my-4" }, [
                    !unref(currentUser).user.id ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(TheSceleton, {
                        width: "50px",
                        height: "20px",
                        "border-radius": "5px"
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex gap-x-2"
                    }, [
                      createVNode("div", null, [
                        (openBlock(), createBlock("svg", {
                          class: "dark:fill-white fill-gray-500",
                          width: "25",
                          height: "25",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14Z" }),
                          createVNode("path", { d: "M17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z" }),
                          createVNode("path", { d: "M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" }),
                          createVNode("path", { d: "M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" }),
                          createVNode("path", { d: "M7 14C7.55229 14 8 13.5523 8 13C8 12.4477 7.55229 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14Z" }),
                          createVNode("path", { d: "M7 18C7.55229 18 8 17.5523 8 17C8 16.4477 7.55229 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" }),
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.412 3.24999 9.14133 3.24999 9.94346 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V14.0564C22.75 15.8941 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H9.94359C8.10585 22.75 6.65018 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33855 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.86685 7.88123 2.8477 8.06061 2.83168 8.25H21.1683C21.1523 8.06061 21.1331 7.88124 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM2.75 12C2.75 11.146 2.75032 10.4027 2.76309 9.75H21.2369C21.2497 10.4027 21.25 11.146 21.25 12V14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25H10C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14V12Z"
                          })
                        ]))
                      ]),
                      createVNode("p", { class: "tracking-widest" }, toDisplayString(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(currentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " \u043B\u0435\u0442"), 1)
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "w-11/12 mx-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="tracking-widest mt-4 max-sm:text-center"${_scopeId}><p class="text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}</p><p${_scopeId}>${ssrInterpolate((_a2 = unref(currentUser).user.department) == null ? void 0 : _a2.name)}</p></div><div class="flex flex-wrap items-center max-sm:justify-center gap-x-1 text-sm tracking-widest"${_scopeId}><p class="my-4 dark:text-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"))}:</p><p class="break-words my-4 max-sm:m-0"${_scopeId}>${ssrInterpolate((_b = unref(currentUser).user) == null ? void 0 : _b.head_user)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "tracking-widest mt-4 max-sm:text-center" }, [
                createVNode("p", { class: "text-center" }, toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1),
                createVNode("p", null, toDisplayString((_c = unref(currentUser).user.department) == null ? void 0 : _c.name), 1)
              ]),
              createVNode("div", { class: "flex flex-wrap items-center max-sm:justify-center gap-x-1 text-sm tracking-widest" }, [
                createVNode("p", { class: "my-4 dark:text-gray-200" }, toDisplayString(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C")) + ":", 1),
                createVNode("p", { class: "break-words my-4 max-sm:m-0" }, toDisplayString((_d = unref(currentUser).user) == null ? void 0 : _d.head_user), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="fixed flex gap-x-4 bottom-6 right-6"><button class="w-12 h-12 bg-semiCyan hover:transition-all duration-200 hover:scale-95 rounded-full relative"><svg class="absolute top-3 right-2.5" width="25" height="25" viewBox="0 -0.05 20.109 20.109" xmlns="http://www.w3.org/2000/svg"><g class="stroke-gray-100" id="edit-user" transform="translate(-2 -2)"><path id="primary" d="M20.71,16.09,15.8,21H13V18.2l4.91-4.91a1,1,0,0,1,1.4,0l1.4,1.4A1,1,0,0,1,20.71,16.09ZM11,3a4,4,0,1,0,4,4A4,4,0,0,0,11,3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="primary-2" data-name="primary" d="M11,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H9" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg></button><button class="w-12 h-12 bg-red-400 hover:transition-all duration-200 hover:scale-95 rounded-full relative"><svg class="absolute top-3 right-2 fill-gray-200" height="26px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 473" xml:space="preserve"><g><path d="M324.285,215.015V128h20V38h-98.384V0H132.669v38H34.285v90h20v305h161.523c23.578,24.635,56.766,40,93.477,40
              c71.368,0,129.43-58.062,129.43-129.43C438.715,277.276,388.612,222.474,324.285,215.015z M294.285,215.015
              c-18.052,2.093-34.982,7.911-50,16.669V128h50V215.015z M162.669,30h53.232v8h-53.232V30z M64.285,68h250v30h-250V68z M84.285,128
              h50v275h-50V128z M164.285,403V128h50v127.768c-21.356,23.089-34.429,53.946-34.429,87.802c0,21.411,5.231,41.622,14.475,59.43
              H164.285z M309.285,443c-54.826,0-99.429-44.604-99.429-99.43s44.604-99.429,99.429-99.429s99.43,44.604,99.43,99.429
              S364.111,443,309.285,443z"></path><polygon points="342.248,289.395 309.285,322.358 276.323,289.395 255.11,310.608 288.073,343.571 255.11,376.533 276.323,397.746
              309.285,364.783 342.248,397.746 363.461,376.533 330.498,343.571 363.461,310.608 	"></polygon></g></svg></button>`);
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$5, {
          onShowModal: ($event) => {
            __props.showWarning = !__props.showWarning;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-center text-lg w-7/12 mx-auto my-10 dark:text-white tracking-widest break-words"${_scopeId}><span class="font-bold text-red-500"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"))}</span>: ${ssrInterpolate(_ctx.$t("\u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E"))}</p><div class="flex justify-center gap-x-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "w-[200px] rounded-full h-10",
                type: "success",
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "w-[200px] rounded-full h-10",
                type: "danger",
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
                createVNode(_sfc_main$3, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-center text-lg w-7/12 mx-auto my-10 dark:text-white tracking-widest break-words" }, [
                  createVNode("span", { class: "font-bold text-red-500" }, toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1),
                  createTextVNode(": " + toDisplayString(_ctx.$t("\u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E")), 1)
                ]),
                createVNode("div", { class: "flex justify-center gap-x-10" }, [
                  createVNode(_sfc_main$6, {
                    class: "w-[200px] rounded-full h-10",
                    type: "success",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    class: "w-[200px] rounded-full h-10",
                    type: "danger",
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
        _push(ssrRenderComponent(_sfc_main$5, {
          onShowModal: ($event) => __props.showChange = !__props.showChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$1, {
                "user-edit": __props.userEdit,
                onShowChange: ($event) => __props.showChange = false
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$3, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1)
                  ]),
                  _: 1
                }),
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
//# sourceMappingURL=_slug_-BvY2ypes.mjs.map
