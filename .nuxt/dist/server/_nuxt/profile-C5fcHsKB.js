import { defineComponent, ref, unref, useSSRContext, reactive, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { PolarArea } from "vue-chartjs";
import { u as useCompanies } from "./companies-Dkc8gjfT.js";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
import { G as useMediaQuery, H as useParallax, l as useSeoMeta } from "../server.mjs";
import { _ as _sfc_main$6 } from "./TheModal-CnBva0fQ.js";
import { _ as _sfc_main$8 } from "./TheButton-DDcCSWqY.js";
import { _ as _sfc_main$7 } from "./TheInput-BfTT2E6G.js";
import { T as TheSceleton } from "./TheSceleton-CoixK6br.js";
import { T as ThePreloader } from "./ThePreloader-CEmymdT-.js";
import { u as useNotification } from "./notification-D1Ny8bJK.js";
import { u as useTaskList } from "./tasks-DX-xK1Wx.js";
import { T as TheContentBlock } from "./TheContentBlock-CceRERsm.js";
import "./axios-Q2E2Xj-P.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "@sindresorhus/slugify";
import "tailwind-merge";
import "animejs";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0$2 = "" + __publicAssetsURL("icons/statistic.svg");
const _imports_1$1 = "" + __publicAssetsURL("icons/tasks.svg");
const _imports_2 = "" + __publicAssetsURL("icons/notifications.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContentChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["Выполненные задания", "Выполненные IQ тесты", "Активность", "Посещаемость"],
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
const _imports_0$1 = "" + __publicAssetsURL("icons/profile.svg");
const _imports_1 = "" + __publicAssetsURL("icons/edit.svg");
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
    new Date(loadCurrentUser.user.date_of_birth).toLocaleDateString();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-6 relative bg-white shadow-cards max-sm:col-auto dark:shadow-md dark:border-t dark:border-t-gray-500 dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200" }, _attrs))}><div><div class="flex items-center justify-between mb-8"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0$1)} alt="profile"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("Личные данные"))}</h2></div><button class="w-10 h-10 rounded-lg flex items-center justify-center bg-porcelain hover:bg-gray-300 transition-all ease-in-out duration-300"><img${ssrRenderAttr("src", _imports_1)} alt="profile"></button></div><div class="${ssrRenderClass({ "blur": !unref(loadCurrentUser).user.id })}"><div class="flex flex-col">`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<div class="flex max-sm:flex-wrap max-sm:justify-center select-none text-gray-600 gap-x-2 mb-5 pb-5 border-b"><img class="block w-[60px] h-[60px] border-2 border-golden rounded-full shadow-lg dark:shadow-none"${ssrRenderAttr("src", unref(loadCurrentUser).user.photo)} alt="logo"><div class="my-2 mx-2"><h3 class="text-md font-bold dark:text-white select-none">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3><p class="dark:text-white text-sm text-mediumGray">${ssrInterpolate(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(loadCurrentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " лет")}</p>`);
        if (unref(loadCurrentUser).user.role.name === "Администратор сайта") {
          _push(`<p class="dark:text-white tracking-widest font-bold">${ssrInterpolate(unref(loadCurrentUser).user.role.name)}</p>`);
        } else if (unref(loadCurrentUser).user.role.name === "Сотрудник") {
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
      _push(`</div><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("Номер"))}: </p><p>${ssrInterpolate((_a = unref(loadCurrentUser).user.phone) == null ? void 0 : _a.slice(4, 13))}</p></div><div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("Заработная плата"))}: </p>`);
      if (unref(loadCurrentUser).user.salary) {
        _push(`<p>${ssrInterpolate(unref(loadCurrentUser).user.salary + " сум")}</p>`);
      } else {
        _push(`<p>${ssrInterpolate(_ctx.$t("Не назначена"))}</p>`);
      }
      _push(`</div>`);
      if (unref(company).company.name) {
        _push(`<div class="text-sm flex items-center justify-between"><p class="dark:text-white font-bold">${ssrInterpolate(_ctx.$t("Компания"))}: </p><p>${ssrInterpolate(unref(company).company.name)}</p></div>`);
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
              _push2(`<form class="p-6 relative"${_scopeId}><div${_scopeId}><h2 class="text-2xl font-bold dark:text-white"${_scopeId}>Личная информация</h2></div><div class="w-full mt-8"${_scopeId}><div class="mt-10 max-[1275px]:flex-col max-[1275px]:gap-10 flex items-center justify-around bg-whiteLilia p-8 rounded-3xl pb-6 border-b mb-6"${_scopeId}><div class="flex items-center max-[1120px]:flex-col gap-3 dark:text-white border-r pr-10 max-[1275px]:border-none max-[1275px]:pr-0"${_scopeId}><p class="dark:text-gray-200 font-bold text-md"${_scopeId}>${ssrInterpolate(_ctx.$t("Должность:"))}</p><p class="bg-white rounded-xl py-2 px-4 shadow max-[1120px]:text-center"${_scopeId}>${ssrInterpolate(__props.userEdit.position.name)}</p></div><div class="flex items-center max-[1120px]:flex-col gap-3 dark:text-white"${_scopeId}><p class="dark:text-gray-200 font-bold text-md"${_scopeId}>${ssrInterpolate(_ctx.$t("Заработная плата:"))}</p>`);
              if (__props.userEdit.salary) {
                _push2(`<p class="bg-white rounded-xl py-2 px-4 shadow"${_scopeId}>${ssrInterpolate(__props.userEdit.salary + " " + _ctx.$t("сум"))}</p>`);
              } else {
                _push2(`<p class="bg-white rounded-xl py-2 px-4 shadow"${_scopeId}>${ssrInterpolate(_ctx.$t("Нет зарплаты"))}</p>`);
              }
              _push2(`</div></div><div class="grid grid-cols-2 gap-5 mb-12 max-[1120px]:grid-cols-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                class: "w-full",
                type: "text",
                label: "Имя:",
                modelValue: __props.userEdit.first_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "date",
                modelValue: __props.userEdit.date_of_birth,
                "onUpdate:modelValue": ($event) => __props.userEdit.date_of_birth = $event,
                label: "Дата рождения:"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "text",
                modelValue: __props.userEdit.last_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event,
                label: "Фамилия:"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "tel",
                modelValue: __props.userEdit.phone,
                "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event,
                label: "Телефон:"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-center gap-5 max-[1120px]:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "!bg-porcelain !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2",
                t: "button",
                onClick: ($event) => {
                  __props.showInfo = false;
                  __props.getCode = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Отмена"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "!bg-golden !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2",
                t: "submit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Сохранить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Сохранить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => unref(loadCurrentUser).update_my({ user: __props.userEdit }), ["prevent"]),
                  class: "p-6 relative"
                }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-2xl font-bold dark:text-white" }, "Личная информация")
                  ]),
                  createVNode("div", { class: "w-full mt-8" }, [
                    createVNode("div", { class: "mt-10 max-[1275px]:flex-col max-[1275px]:gap-10 flex items-center justify-around bg-whiteLilia p-8 rounded-3xl pb-6 border-b mb-6" }, [
                      createVNode("div", { class: "flex items-center max-[1120px]:flex-col gap-3 dark:text-white border-r pr-10 max-[1275px]:border-none max-[1275px]:pr-0" }, [
                        createVNode("p", { class: "dark:text-gray-200 font-bold text-md" }, toDisplayString(_ctx.$t("Должность:")), 1),
                        createVNode("p", { class: "bg-white rounded-xl py-2 px-4 shadow max-[1120px]:text-center" }, toDisplayString(__props.userEdit.position.name), 1)
                      ]),
                      createVNode("div", { class: "flex items-center max-[1120px]:flex-col gap-3 dark:text-white" }, [
                        createVNode("p", { class: "dark:text-gray-200 font-bold text-md" }, toDisplayString(_ctx.$t("Заработная плата:")), 1),
                        __props.userEdit.salary ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "bg-white rounded-xl py-2 px-4 shadow"
                        }, toDisplayString(__props.userEdit.salary + " " + _ctx.$t("сум")), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "bg-white rounded-xl py-2 px-4 shadow"
                        }, toDisplayString(_ctx.$t("Нет зарплаты")), 1))
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-5 mb-12 max-[1120px]:grid-cols-1" }, [
                      createVNode(_sfc_main$7, {
                        class: "w-full",
                        type: "text",
                        label: "Имя:",
                        modelValue: __props.userEdit.first_name,
                        "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$7, {
                        type: "date",
                        modelValue: __props.userEdit.date_of_birth,
                        "onUpdate:modelValue": ($event) => __props.userEdit.date_of_birth = $event,
                        label: "Дата рождения:"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$7, {
                        type: "text",
                        modelValue: __props.userEdit.last_name,
                        "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event,
                        label: "Фамилия:"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$7, {
                        type: "tel",
                        modelValue: __props.userEdit.phone,
                        "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event,
                        label: "Телефон:"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center gap-5 max-[1120px]:flex-col" }, [
                      createVNode(_sfc_main$8, {
                        class: "!bg-porcelain !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2",
                        t: "button",
                        onClick: ($event) => {
                          __props.showInfo = false;
                          __props.getCode = false;
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$8, {
                        class: "!bg-golden !border !text-black rounded-full !w-3/12 max-[1120px]:!w-full !p-2",
                        t: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Сохранить")), 1)
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
        _push(`<div class="text-center">${ssrInterpolate(_ctx.$t("Уведомлений пока нет"))}</div>`);
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
const _imports_0 = "" + __publicAssetsURL("icons/mini-task.svg");
const _sfc_main$2 = {
  __name: "ProfileTasks",
  __ssrInlineRender: true,
  setup(__props) {
    const tasksList = useTaskList();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gap-3 flex items-center flex-col justify-center" }, _attrs))}>`);
      if (!((_a = unref(tasksList)) == null ? void 0 : _a.get_tasks.results)) {
        _push(`<div class="text-center">${ssrInterpolate(_ctx.$t("Задач пока нет"))}</div>`);
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
      _push(`<!--[--><div class="${ssrRenderClass([{ "max-[1150px]:grid-cols-2": __props.activeNav, "max-[1150px]:grid-cols-3": !__props.activeNav }, "w-full grid grid-cols-3 gap-x-5 max-[1150px]:!grid-cols-1"])}">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="w-full col-span-2 p-6 bg-white dark:border-t dark:border-t-gray-500 dark:shadow-md shadow-cards dark:shadow-gray-500 rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-200"><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"><img${ssrRenderAttr("src", _imports_0$2)} alt="statistic"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("Личная статистика"))}</h2></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div><div class="grid grid-cols-3 max-[1150px]:!grid-cols-1 gap-x-5 mt-5">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "bg-white shadow-cards hover:transform hover:-translate-y-2 transition-all duration-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="tasks"${_scopeId}><h2 class="dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("Последние задания"))}</h2></div>`);
            _push2(ssrRenderComponent(ProfileTasks, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "tasks"
                }),
                createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("Последние задания")), 1)
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
            _push2(`<div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="tasks"${_scopeId}><h2 class="dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("Уведомления"))}</h2></div>`);
            _push2(ssrRenderComponent(ProfileContentNotification, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "tasks"
                }),
                createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("Уведомления")), 1)
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
      title: "Профиль",
      description: "Личный кабинет | Текущая информация обо мне"
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
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-C5fcHsKB.js.map
