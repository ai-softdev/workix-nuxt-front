import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { useSSRContext, defineComponent, watchEffect, watchSyncEffect, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, mergeProps, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './TheBreadcrumbs-BV4tnjik.mjs';
import { u as useCompanies } from './companies-DK9t2HLw.mjs';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$4 } from './TheSearch-Dw2_cWOE.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { _ as _sfc_main$6 } from './TheTextContent-0-tZhPDG.mjs';
import { _ as _sfc_main$3 } from './TheButton-Bz9xS3BF.mjs';
import { _ as _sfc_main$5 } from './TheModal-CnBva0fQ.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "" + publicAssetsURL("icons/delete.svg");
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
              _push2(`<p class="text-lg font-medium mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            } else {
              _push2(`<p class="text-lg font-medium mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            }
            _push2(`<div class="text-center flex flex-col gap-y-2"${_scopeId}>`);
            if (((_b = unref(loadCurrentUser).user.role) == null ? void 0 : _b.name_en) === "admin") {
              _push2(`<h2 class="text-sm text-mediumGray"${_scopeId}>(${ssrInterpolate(__props.userItem.role)})</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="text-mediumGray text-sm"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</h2></div></div><div class="flex items-center justify-between gap-5 max-[900px]:justify-start max-[900px]:border-r max-sm:border-none max-sm:justify-center"${_scopeId}><div class="text-center pr-6 pl-8 max-[900px]:pr-0"${_scopeId}><h2 class="font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"))}</h2><h2 class="text-mediumGray text-sm"${_scopeId}>00.00.0000</h2></div><div class="max-[900px]:hidden h-full border-l flex items-center justify-center pl-8"${_scopeId}><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div></div><div class="hidden h-full max-[900px]:flex items-center justify-center"${_scopeId}><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1.5 8.5L15.5 8.5M15.5 8.5L8.5 1.5M15.5 8.5L8.5 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
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
                }, toDisplayString(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1)) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-lg font-medium mb-2"
                }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1)),
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
                  createVNode("h2", { class: "font-medium" }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")), 1),
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
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start"><button class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0430\u0434"))}</button><div class="flex items-center flex-wrap gap-x-3">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/companies` }, {
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
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/companies/department` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B")), 1)
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
      if (!((_b = (_a = unref(currentDepartment).get_department) == null ? void 0 : _a.participants) == null ? void 0 : _b.length)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "danger",
          class: "px-10 py-2 !bg-whiteSmoke !border !border-gainsboro rounded-full flex items-center gap-3 !text-sunset",
          onClick: ($event) => __props.showWarning = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="delete-button"${_scopeId}> ${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0434\u0435\u043B"))}`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "delete-button"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0434\u0435\u043B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-x-10 mt-8"><div class="flex items-center w-11/12 max-sm:w-full gap-x-10">`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "w-3/12 max-[900px]:w-full" }, null, _parent));
      _push(`</div>`);
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$5, {
          onShowModal: ($event) => __props.showWarning = !__props.showWarning
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><p class="text-center font-bold max-sm:w-9/12 max-sm:mx-auto"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442?"))}</p><div class="text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full"${_scopeId}><p class="text-redOrange"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435!"))}</p><p class="!text-base nt-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442"))}</p></div></div><div class="flex justify-center gap-3 max-sm:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
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
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-white gap-3 py-2 !bg-redOrange !border transition-all ease-in-out duration-300",
                t: "submit",
                onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
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
                createVNode("div", null, [
                  createVNode("p", { class: "text-center font-bold max-sm:w-9/12 max-sm:mx-auto" }, toDisplayString(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442?")), 1),
                  createVNode("div", { class: "text-center text-lg max-sm:text-sm w-7/12 mx-auto my-10 dark:text-white break-words max-sm:w-full" }, [
                    createVNode("p", { class: "text-redOrange" }, toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435!")), 1),
                    createVNode("p", { class: "!text-base nt-2" }, toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-center gap-3 max-sm:flex-col" }, [
                  createVNode(_sfc_main$3, {
                    class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                    t: "button",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$3, {
                    class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-white gap-3 py-2 !bg-redOrange !border transition-all ease-in-out duration-300",
                    t: "submit",
                    onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
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
      _push(`</div><div class="flex gap-x-10 w-full mt-8 max-[1200px]:flex-col max-[1200px]:gap-3">`);
      if (!((_c = unref(currentDepartment).get_department) == null ? void 0 : _c.id)) {
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
        _push(`<div class="w-full max-[1200px]:order-1 flex flex-col items-center justify-center gap-4 p-6 rounded-3xl shadow-departmentInfo bg-white">`);
        if ((_e = (_d = unref(currentDepartment).get_department) == null ? void 0 : _d.participants) == null ? void 0 : _e.length) {
          _push(`<!--[-->`);
          ssrRenderList(unref(currentDepartment).get_department.participants, (userItem) => {
            _push(ssrRenderComponent(_sfc_main$1, {
              key: userItem.id,
              "user-item": userItem
            }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<p class="text-gray-500 text-center py-4">${ssrInterpolate(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"))}</p>`);
        }
        _push(`</div>`);
      }
      _push(`<div class="w-3/12 max-[1200px]:w-full bg-white p-6 rounded-3xl h-fit shadow-departmentInfo">`);
      _push(ssrRenderComponent(_sfc_main$6, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11 15.5V11.5M11 7.5H11.01M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
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
              createTextVNode(" " + toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-between mt-8"><p>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432"))}: </p><p>${ssrInterpolate((_f = unref(currentDepartment).get_department.participants) == null ? void 0 : _f.length)}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/department/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-D_kLbblW.mjs.map
