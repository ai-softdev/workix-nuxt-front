import { a as useRouter, l as useSeoMeta } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, watchEffect, watchSyncEffect, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-BV4tnjik.js";
import { u as useCompanies } from "./companies-Dkc8gjfT.js";
import { useRoute } from "vue-router";
import { _ as _sfc_main$4 } from "./TheSearch-Dw2_cWOE.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
import { _ as _sfc_main$6 } from "./TheTextContent-0-tZhPDG.js";
import { _ as _sfc_main$3 } from "./TheButton-Bz9xS3BF.js";
import { _ as _sfc_main$5 } from "./TheModal-CnBva0fQ.js";
import { T as TheSceleton } from "./TheSceleton-CoixK6br.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "./axios-Q2E2Xj-P.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "" + __publicAssetsURL("icons/delete.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DepartmentUserList",
  __ssrInlineRender: true,
  props: {
    userItem: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/base/users/${__props.userItem.id}`,
        class: "department__item transition-all grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 gap-4 hover:shadow-departmentCard border bg-whiteLilia hover:bg-white hover:border-golden dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-5 rounded-3xl cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-center gap-x-4 border-r max-sm:border-none max-sm:justify-center"${_scopeId}><img class="w-14 h-14 rounded-full shadow"${ssrRenderAttr("src", __props.userItem.photo)}${_scopeId}><h2 class="font-bold max-xl:text-center"${_scopeId}>${ssrInterpolate(__props.userItem.first_name + " " + __props.userItem.last_name)}</h2></div><div class="flex flex-col items-center justify-center border-r max-[900px]:border-none"${_scopeId}>`);
            if (((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) === "admin") {
              _push2(`<p class="text-lg font-medium mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("Роль | Должность"))}</p>`);
            } else {
              _push2(`<p class="text-lg font-medium mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("Должность"))}</p>`);
            }
            _push2(`<div class="text-center flex flex-col gap-y-2"${_scopeId}>`);
            if (((_b = unref(loadCurrentUser).user.role) == null ? void 0 : _b.name_en) === "admin") {
              _push2(`<h2 class="text-sm text-mediumGray"${_scopeId}>(${ssrInterpolate(__props.userItem.role)})</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="text-mediumGray text-sm"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</h2></div></div><div class="flex items-center justify-between gap-5 max-[900px]:justify-start max-[900px]:border-r max-sm:border-none max-sm:justify-center"${_scopeId}><div class="text-center pr-6 pl-8 max-[900px]:pr-0"${_scopeId}><h2 class="font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("Дата регистрации"))}</h2><h2 class="text-mediumGray text-sm"${_scopeId}>00.00.0000</h2></div><div class="max-[900px]:hidden h-full border-l flex items-center justify-center pl-8"${_scopeId}><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div></div><div class="hidden h-full max-[900px]:flex items-center justify-center"${_scopeId}><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-x-4 border-r max-sm:border-none max-sm:justify-center" }, [
                createVNode("img", {
                  class: "w-14 h-14 rounded-full shadow",
                  src: __props.userItem.photo
                }, null, 8, ["src"]),
                createVNode("h2", { class: "font-bold max-xl:text-center" }, toDisplayString(__props.userItem.first_name + " " + __props.userItem.last_name), 1)
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-center border-r max-[900px]:border-none" }, [
                ((_c = unref(loadCurrentUser).user.role) == null ? void 0 : _c.name_en) === "admin" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg font-medium mb-2"
                }, toDisplayString(_ctx.$t("Роль | Должность")), 1)) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-lg font-medium mb-2"
                }, toDisplayString(_ctx.$t("Должность")), 1)),
                createVNode("div", { class: "text-center flex flex-col gap-y-2" }, [
                  ((_d = unref(loadCurrentUser).user.role) == null ? void 0 : _d.name_en) === "admin" ? (openBlock(), createBlock("h2", {
                    key: 0,
                    class: "text-sm text-mediumGray"
                  }, "(" + toDisplayString(__props.userItem.role) + ")", 1)) : createCommentVNode("", true),
                  createVNode("h2", { class: "text-mediumGray text-sm" }, toDisplayString(__props.userItem.position), 1)
                ])
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-5 max-[900px]:justify-start max-[900px]:border-r max-sm:border-none max-sm:justify-center" }, [
                createVNode("div", { class: "text-center pr-6 pl-8 max-[900px]:pr-0" }, [
                  createVNode("h2", { class: "font-medium" }, toDisplayString(_ctx.$t("Дата регистрации")), 1),
                  createVNode("h2", { class: "text-mediumGray text-sm" }, "00.00.0000")
                ]),
                createVNode("div", { class: "max-[900px]:hidden h-full border-l flex items-center justify-center pl-8" }, [
                  (openBlock(), createBlock("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5",
                      stroke: "#000000",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ])
              ]),
              createVNode("div", { class: "hidden h-full max-[900px]:flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  width: "17",
                  height: "17",
                  viewBox: "0 0 17 17",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5",
                    stroke: "#000000",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/department/DepartmentUserList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    showWarning: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const currentDepartment = useCompanies();
    const route = useRoute();
    useRouter();
    watchEffect(() => {
      currentDepartment.loadDepartment({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentDepartment.current_department.name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start"><button class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(_ctx.$t("Назад"))}</button><div class="flex items-center flex-wrap gap-x-3">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/companies` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Компания"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Компания")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/companies/department` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Департаменты"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Департаменты")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentDepartment).get_department.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentDepartment).get_department.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 flex items-center gap-4 justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5"><p class="dark:text-white text-3xl font-bold">${ssrInterpolate(unref(currentDepartment).get_department.name)}</p>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        type: "danger",
        class: "px-10 py-2 !bg-whiteSmoke !border !border-gainsboro rounded-full flex items-center gap-3 !text-sunset",
        onClick: ($event) => __props.showWarning = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="delete-button"${_scopeId}> ${ssrInterpolate(_ctx.$t("Удалить отдел"))}`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "delete-button"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Удалить отдел")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-x-10 mt-8"><div class="flex items-center w-11/12 max-sm:w-full gap-x-10">`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "w-3/12 max-[900px]:w-full" }, null, _parent));
      _push(`</div>`);
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$5, {
          onShowModal: ($event) => __props.showWarning = !__props.showWarning
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><p class="text-xl text-center font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("Предупреждение"))}</p><div class="text-center text-lg mt-2 tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Вы действительно хотите удалить департамент?"))}</p><p class="!text-base"${_scopeId}>${ssrInterpolate(_ctx.$t("Удалённые департаменты восстановке не подлежат"))}</p></div></div><div class="flex justify-center gap-x-10 mt-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                type: "danger",
                class: "w-3/12 py-2 rounded-full",
                onClick: ($event) => __props.showWarning = false
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
              _push2(ssrRenderComponent(_sfc_main$3, {
                type: "success",
                class: "w-3/12 py-2 rounded-full",
                onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("p", { class: "text-xl text-center font-medium" }, toDisplayString(_ctx.$t("Предупреждение")), 1),
                  createVNode("div", { class: "text-center text-lg mt-2 tracking-widest" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("Вы действительно хотите удалить департамент?")), 1),
                    createVNode("p", { class: "!text-base" }, toDisplayString(_ctx.$t("Удалённые департаменты восстановке не подлежат")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                  createVNode(_sfc_main$3, {
                    type: "danger",
                    class: "w-3/12 py-2 rounded-full",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$3, {
                    type: "success",
                    class: "w-3/12 py-2 rounded-full",
                    onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
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
      _push(`</div><div class="flex gap-x-10 w-full mt-8 max-[1200px]:flex-col max-[1200px]:gap-3">`);
      if (!((_a = unref(currentDepartment).get_department) == null ? void 0 : _a.id)) {
        _push(`<div class="flex max-[1200px]:order-1 w-full gap-y-4 flex-col"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(TheSceleton, {
            "border-radius": "10px",
            width: "90%",
            height: "80px"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="w-full max-[1200px]:order-1 flex flex-col gap-4 p-6 rounded-3xl shadow-departmentInfo bg-white"><!--[-->`);
        ssrRenderList((_c = (_b = unref(currentDepartment)) == null ? void 0 : _b.get_department) == null ? void 0 : _c.participants, (userItem) => {
          _push(ssrRenderComponent(_sfc_main$1, { "user-item": userItem }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="w-3/12 max-[1200px]:w-full bg-white p-6 rounded-3xl h-fit shadow-departmentInfo">`);
      _push(ssrRenderComponent(_sfc_main$6, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11 15.5V11.5M11 7.5H11.01M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$t("Информация"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "22",
                height: "23",
                viewBox: "0 0 22 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M11 15.5V11.5M11 7.5H11.01M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z",
                  stroke: "#2A2A2A",
                  "stroke-width": "1.6",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createTextVNode(" " + toDisplayString(_ctx.$t("Информация")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-between mt-8"><p>${ssrInterpolate(_ctx.$t("Сотрудников"))}: </p><p>${ssrInterpolate((_d = unref(currentDepartment).get_department.participants) == null ? void 0 : _d.length)}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/department/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-BeqEXkCo.js.map
