import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref, reactive, computed, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, withDirectives, isRef, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import { u as useCompanies } from './companies-CKV0eUOy.mjs';
import { u as useAuthStore } from './auth-BBm1bsU7.mjs';
import { l as useSeoMeta, G as useMediaQuery, H as useParallax } from './server.mjs';
import { _ as _sfc_main$6 } from './TheModal-DcnSgpbI.mjs';
import { _ as _sfc_main$8 } from './TheButton-RleONNaZ.mjs';
import { _ as _sfc_main$7 } from './TheInput-BfTT2E6G.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { T as ThePreloader } from './ThePreloader-CEmymdT-.mjs';
import { u as useNotification } from './notification-cItHOegS.mjs';
import { u as useTaskList } from './tasks-B6aY4Vq0.mjs';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
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
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0$2 = "" + publicAssetsURL("icons/statistic.svg");
const _imports_1$1 = "" + publicAssetsURL("icons/tasks.svg");
const _imports_2 = "" + publicAssetsURL("icons/notifications.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContentChart",
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(PolarArea), {
        class: "text-white",
        style: { "{color": "white" },
        data: unref(chartData),
        options: unref(chartOptions)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentChart.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$1 = "" + publicAssetsURL("icons/profile.svg");
const _imports_1 = "" + publicAssetsURL("icons/edit.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContentUserInfo",
  __ssrInlineRender: true,
  props: {
    showInfo: {
      type: Boolean,
      default: false
    },
    getCode: {
      type: Boolean,
      default: false
    },
    userEdit: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const company = useCompanies();
    useAuthStore();
    const target = ref(null);
    useMediaQuery("(max-width: 700px)");
    const parallax = reactive(useParallax(target));
    computed(() => ({
      transition: ".3s ease-out all",
      transform: `rotateX(${parallax.roll * 1}deg) rotateY(${parallax.tilt * 1}deg)`
    }));
    const container = ref(null);
    useParallax(container);
    const loadCurrentUser = useAuthStore();
    const birth = new Date(loadCurrentUser.user.date_of_birth).toLocaleDateString();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-6 relative bg-white shadow-cards max-sm:col-auto dark:shadow-md dark:border-t dark:border-t-gray-500 dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200" }, _attrs))}><div><div class="flex items-center justify-between mb-8"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0$1)} alt="profile"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"))}</h2></div><button class="w-10 h-10 rounded-lg flex items-center justify-center bg-porcelain hover:bg-gray-300 transition-all ease-in-out duration-300"><img${ssrRenderAttr("src", _imports_1)} alt="profile"></button></div><div class="${ssrRenderClass({ "blur": !unref(loadCurrentUser).user.id })}"><div class="flex flex-col">`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<div class="flex max-sm:flex-wrap max-sm:justify-center select-none text-gray-600 gap-x-2 mb-5 pb-5 border-b"><img class="block w-[60px] h-[60px] border-2 border-golden rounded-full shadow-lg dark:shadow-none"${ssrRenderAttr("src", unref(loadCurrentUser).user.photo)} alt="logo"><div class="my-2 mx-2"><h3 class="text-md font-bold dark:text-white select-none">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3><p class="dark:text-white text-sm text-mediumGray">${ssrInterpolate(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(loadCurrentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " \u043B\u0435\u0442")}</p>`);
        if (unref(loadCurrentUser).user.role.name === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430") {
          _push(`<p class="dark:text-white tracking-widest font-bold">${ssrInterpolate(unref(loadCurrentUser).user.role.name)}</p>`);
        } else if (unref(loadCurrentUser).user.role.name === "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A") {
          _push(`<p class="dark:text-white tracking-widest font-bold">${ssrInterpolate(unref(loadCurrentUser).user.position.name)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex items-center gap-x-4">`);
        _push(ssrRenderComponent(TheSceleton, {
          "border-radius": "100px",
          width: "100px",
          height: "100px"
        }, null, _parent));
        _push(`<div class="flex flex-col gap-y-2">`);
        _push(ssrRenderComponent(TheSceleton, {
          width: "150px",
          height: "20px",
          "border-radius": "5px"
        }, null, _parent));
        _push(ssrRenderComponent(TheSceleton, {
          width: "60px",
          height: "15px",
          "border-radius": "5px"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`<div class="flex flex-col gap-y-2 ml-2 w-full"><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("Email"))}: </p>`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<p>${ssrInterpolate(unref(loadCurrentUser).user.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u041D\u043E\u043C\u0435\u0440"))}: </p><p>${ssrInterpolate((_a = unref(loadCurrentUser).user.phone) == null ? void 0 : _a.slice(4, 13))}</p></div><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430"))}: </p>`);
      if (unref(loadCurrentUser).user.salary) {
        _push(`<p>${ssrInterpolate(unref(loadCurrentUser).user.salary + " \u0441\u0443\u043C")}</p>`);
      } else {
        _push(`<p>${ssrInterpolate(_ctx.$t("\u041D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430"))}</p>`);
      }
      _push(`</div>`);
      if (unref(company).company.name) {
        _push(`<div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"))}: </p><p>${ssrInterpolate(unref(company).company.name)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (!unref(loadCurrentUser).user.id) {
        _push(`<div><div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>`);
        _push(ssrRenderComponent(ThePreloader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showInfo) {
        _push(ssrRenderComponent(_sfc_main$6, {
          onShowModal: ($event) => {
            __props.showInfo = false;
            __props.getCode = false;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}><div${_scopeId}><h2 class="text-center text-xl tracking-widest font-bold dark:text-white"${_scopeId}>\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h2></div><div class="w-full"${_scopeId}><div class="mt-10 flex items-center justify-around"${_scopeId}><div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest"${_scopeId}><p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:"))}</p><p class=""${_scopeId}>${ssrInterpolate(__props.userEdit.position.name)}</p></div><div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest"${_scopeId}><p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430:"))}</p><p class=""${_scopeId}>${ssrInterpolate(__props.userEdit.salary + " " + _ctx.$t("\u0441\u0443\u043C"))}</p></div></div><div class="px-10 max-sm:px-0"${_scopeId}><div class="my-10 flex max-lg:gap-x-2 max-md:gap-y-2 max-md:flex-wrap max-md:justify-center justify-between"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u043C\u044F") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "text",
                modelValue: __props.userEdit.first_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "text",
                modelValue: __props.userEdit.last_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="my-10 flex max-lg:gap-x-2 max-lg:gap-y-4 max-lg:flex-wrap max-md:justify-center justify-between items-center"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0422\u0435\u043B\u0435\u0444\u043E\u043D") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "tel",
                modelValue: __props.userEdit.phone,
                "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center border p-4 rounded-xl shadow-md dark:shadow-none text-center"${_scopeId}><div${_scopeId}>`);
              if (!__props.getCode) {
                _push2(`<p class="dark:text-white ml-1 tracking-widest font-bold text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440") + ":")}</p>`);
              } else {
                _push2(`<p class="dark:text-white ml-1 tracking-widest font-bold text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041A\u043E\u0434") + ":")}</p>`);
              }
              _push2(`</div>`);
              if (__props.getCode) {
                _push2(`<div class="flex gap-x-1 justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>`);
              if (!__props.getCode) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  t: "button",
                  type: "change",
                  class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                  onClick: ($event) => {
                    __props.getCode = true;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.getCode) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  t: "button",
                  type: "change",
                  class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                  onClick: ($event) => {
                    __props.getCode = true;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="my-10 flex max-lg:gap-x-2 max-md:flex-wrap max-md:justify-center justify-between"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F") + ":")}</p><input type="date"${ssrRenderAttr("value", unref(birth))}${_scopeId}></div></div></div><div class="flex justify-around max-sm:flex-col max-sm:gap-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "w-4/12 max-sm:w-full py-2 rounded-full",
                t: "button",
                type: "danger",
                onClick: ($event) => {
                  __props.showInfo = false;
                  __props.getCode = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "w-4/12 max-sm:w-full py-2 rounded-full",
                t: "submit",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => unref(loadCurrentUser).update_my({ user: __props.userEdit }), ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-center text-xl tracking-widest font-bold dark:text-white" }, "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode("div", { class: "mt-10 flex items-center justify-around" }, [
                      createVNode("div", { class: "flex flex-col text-center w-3/12 dark:text-white tracking-widest" }, [
                        createVNode("p", { class: "dark:text-gray-200 text-gray-400 font-bold text-[14px]" }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:")), 1),
                        createVNode("p", { class: "" }, toDisplayString(__props.userEdit.position.name), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col text-center w-3/12 dark:text-white tracking-widest" }, [
                        createVNode("p", { class: "dark:text-gray-200 text-gray-400 font-bold text-[14px]" }, toDisplayString(_ctx.$t("\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430:")), 1),
                        createVNode("p", { class: "" }, toDisplayString(__props.userEdit.salary + " " + _ctx.$t("\u0441\u0443\u043C")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "px-10 max-sm:px-0" }, [
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-md:gap-y-2 max-md:flex-wrap max-md:justify-center justify-between" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("\u0418\u043C\u044F") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "text",
                            modelValue: __props.userEdit.first_name,
                            "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "text",
                            modelValue: __props.userEdit.last_name,
                            "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-lg:gap-y-4 max-lg:flex-wrap max-md:justify-center justify-between items-center" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("\u0422\u0435\u043B\u0435\u0444\u043E\u043D") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "tel",
                            modelValue: __props.userEdit.phone,
                            "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center border p-4 rounded-xl shadow-md dark:shadow-none text-center" }, [
                          createVNode("div", null, [
                            !__props.getCode ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "dark:text-white ml-1 tracking-widest font-bold text-sm"
                            }, toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440") + ":"), 1)) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "dark:text-white ml-1 tracking-widest font-bold text-sm"
                            }, toDisplayString(_ctx.$t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041A\u043E\u0434") + ":"), 1))
                          ]),
                          __props.getCode ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex gap-x-1 justify-center"
                          }, [
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            })
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            !__props.getCode ? (openBlock(), createBlock(_sfc_main$8, {
                              key: 0,
                              t: "button",
                              type: "change",
                              class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                              onClick: ($event) => {
                                __props.getCode = true;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            __props.getCode ? (openBlock(), createBlock(_sfc_main$8, {
                              key: 1,
                              t: "button",
                              type: "change",
                              class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                              onClick: ($event) => {
                                __props.getCode = true;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-md:flex-wrap max-md:justify-center justify-between" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F") + ":"), 1),
                          withDirectives(createVNode("input", {
                            type: "date",
                            "onUpdate:modelValue": ($event) => isRef(birth) ? birth.value = $event : null
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(birth)]
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-around max-sm:flex-col max-sm:gap-y-2" }, [
                      createVNode(_sfc_main$8, {
                        class: "w-4/12 max-sm:w-full py-2 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => {
                          __props.showInfo = false;
                          __props.getCode = false;
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$8, {
                        class: "w-4/12 max-sm:w-full py-2 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentUserInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProfileContentNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 max-h-[400px] overflow-y-auto" }, _attrs))}>`);
      if (!unref(notification).get_notification.length) {
        _push(`<div class="text-center">${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(notification).get_notification, (notice, i) => {
        _push(`<div class="${ssrRenderClass([{ "dark:bg-gray-700 bg-gray-100": notice.read === true }, "p-4 relative dark:hover:bg-gray-700 !bg-whiteSmoke border hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg dark:border-gray-500"])}">`);
        if (notice.read) {
          _push(`<div class="absolute bottom-1 right-2 text-[11px]"><svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>`);
          if (notice.read === true) {
            _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col gap-4 dark:text-white text-black"><div class="w-full"><p class="text-sm text-start">${ssrInterpolate(notice.text)}</p></div><div class="text-sm flex items-center gap-2"><p>${ssrInterpolate(new Date(notice.created_at).toLocaleDateString())}</p><p>${ssrInterpolate(new Date(notice.created_at).toLocaleTimeString().slice(0, 5))}</p></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentNotification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProfileContentNotification = _sfc_main$3;
const _imports_0 = "" + publicAssetsURL("icons/mini-task.svg");
const _sfc_main$2 = {
  __name: "ProfileTasks",
  __ssrInlineRender: true,
  setup(__props) {
    const tasksList = useTaskList();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gap-3 flex items-center flex-col justify-center" }, _attrs))}>`);
      if (!((_a = unref(tasksList)) == null ? void 0 : _a.get_tasks.results)) {
        _push(`<div class="text-center">${ssrInterpolate(_ctx.$t("\u0417\u0430\u0434\u0430\u0447 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"))}</div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList((_b = unref(tasksList)) == null ? void 0 : _b.get_tasks.results, (task) => {
          _push(`<div class="p-4 border flex items-center justify-between gap-3 !bg-whiteSmoke rounded-lg w-full"><div class="flex flex-col gap-4 w-full"><p class="font-bold text-md">${ssrInterpolate(task.title)}</p><p class="text-sm">${ssrInterpolate(task.author_name)}</p><p class="text-sm">${ssrInterpolate(new Date(task.created_at).toLocaleDateString())}</p></div><img class="w-6 block"${ssrRenderAttr("src", _imports_0)} alt="task"></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileTasks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileTasks = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContent",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const target = ref(null);
    useMediaQuery("(max-width: 700px)");
    const parallax = reactive(useParallax(target));
    computed(() => ({
      transition: ".3s ease-out all",
      transform: `rotateX(${parallax.roll * 1}deg) rotateY(${parallax.tilt * 1}deg)`
    }));
    const parallaxContainer = ref(null);
    useParallax(parallaxContainer);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{ "max-[1150px]:grid-cols-2": __props.activeNav, "max-[1150px]:grid-cols-3": !__props.activeNav }, "w-full grid grid-cols-3 gap-x-5"])}">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="w-full col-span-2 p-6 bg-white dark:border-t dark:border-t-gray-500 dark:shadow-md shadow-cards dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"><img${ssrRenderAttr("src", _imports_0$2)} alt="statistic"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"))}</h2></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div><div class="grid grid-cols-3 gap-x-5 mt-5">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "bg-white shadow-cards hover:transform hover:-translate-y-2 transition-all duration-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="tasks"${_scopeId}><h2 class="dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}</h2></div>`);
            _push2(ssrRenderComponent(ProfileTasks, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "tasks"
                }),
                createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
              ]),
              createVNode(ProfileTasks)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "bg-white shadow-cards hover:transform hover:-translate-y-2 transition-all duration-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="tasks"${_scopeId}><h2 class="dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"))}</h2></div>`);
            _push2(ssrRenderComponent(ProfileContentNotification, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "tasks"
                }),
                createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")), 1)
              ]),
              createVNode(ProfileContentNotification)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useSeoMeta({
      title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
      description: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 | \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431\u043E \u043C\u043D\u0435"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="w-full mx-auto">`);
      _push(ssrRenderComponent(_component_ProfileContent, { activeNav: __props.activeNav }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-51aXr8Rx.mjs.map
