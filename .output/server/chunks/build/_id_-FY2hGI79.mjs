import { useSSRContext, defineComponent, watchEffect, watchSyncEffect, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, ref, mergeProps, createCommentVNode } from 'vue';
import { l as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './TheBreadcrumbs-JYk0wevu.mjs';
import { u as useCompanies } from './companies-CKV0eUOy.mjs';
import { useRoute } from 'vue-router';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
import { _ as _sfc_main$5 } from './TheSearch-Dw2_cWOE.mjs';
import { _ as _sfc_main$6 } from './TheButton-RleONNaZ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { u as useAuthStore } from './auth-BBm1bsU7.mjs';
import { _ as _sfc_main$3 } from './TheTextContent-D3-WrEaf.mjs';
import { _ as _sfc_main$7 } from './TheModal-DcnSgpbI.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheFilter",
  __ssrInlineRender: true,
  props: {
    showFilter: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    ref({
      query: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-md:absolute max-md:bottom-11 max-md:right-0" }, _attrs))}><form class="flex items-center gap-x-10 my-10">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onClick: ($event) => __props.showFilter = !__props.showFilter,
        class: "tracking-widest rounded-full max-md:!bg-transparent dark:bg-gray-400 p-3 bg-gray-300 hover:bg-gray-400 transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="max-md:hidden"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0424\u0438\u043B\u044C\u0442\u0440\u044B"))}</p><div class="max-md:block hidden"${_scopeId}><svg class="${ssrRenderClass([{ "!stroke-gray-300": __props.showFilter }, "!stroke-gray-700"])}" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("p", { class: "max-md:hidden" }, toDisplayString(_ctx.$t("\u0424\u0438\u043B\u044C\u0442\u0440\u044B")), 1),
              createVNode("div", { class: "max-md:block hidden" }, [
                (openBlock(), createBlock("svg", {
                  class: ["!stroke-gray-700", { "!stroke-gray-300": __props.showFilter }],
                  width: "24px",
                  height: "24px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], 2))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheFilter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/users/${__props.userItem.id}`,
        class: "transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-4 rounded-lg flex max-[1241px]:flex-col max-[1241px]:gap-y-4 justify-between items-center cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-center gap-x-4 w-3/12 max-lg:w-full max-lg:x-mx-auto"${_scopeId}><img class="w-14 h-14 rounded-full"${ssrRenderAttr("src", __props.userItem.photo_url)} alt=""${_scopeId}><h2 class="tracking-widest font-bold max-xl:text-center"${_scopeId}>${ssrInterpolate(__props.userItem.first_name + " " + __props.userItem.last_name)}</h2></div><div class="flex flex-col items-center justify-center w-5/12 max-lg:w-full mx-auto"${_scopeId}>`);
            if (((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) === "admin") {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            } else {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            }
            _push2(`<div class="text-center flex flex-col gap-y-2"${_scopeId}>`);
            if (((_b = unref(loadCurrentUser).user.role) == null ? void 0 : _b.name_en) === "admin") {
              _push2(`<h2 class="tracking-widest text-sm text-gray-600"${_scopeId}>(${ssrInterpolate(__props.userItem.role)})</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="tracking-widest text-md"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</h2></div></div><div class="w-2/12 max-[1241px]:w-full max-lg:x-mx-auto text-center"${_scopeId}><h2 class="tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"))}</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-x-4 w-3/12 max-lg:w-full max-lg:x-mx-auto" }, [
                createVNode("img", {
                  class: "w-14 h-14 rounded-full",
                  src: __props.userItem.photo_url,
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("h2", { class: "tracking-widest font-bold max-xl:text-center" }, toDisplayString(__props.userItem.first_name + " " + __props.userItem.last_name), 1)
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-center w-5/12 max-lg:w-full mx-auto" }, [
                ((_c = unref(loadCurrentUser).user.role) == null ? void 0 : _c.name_en) === "admin" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg font-bold tracking-widest mb-2"
                }, toDisplayString(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1)) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-lg font-bold tracking-widest mb-2"
                }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1)),
                createVNode("div", { class: "text-center flex flex-col gap-y-2" }, [
                  ((_d = unref(loadCurrentUser).user.role) == null ? void 0 : _d.name_en) === "admin" ? (openBlock(), createBlock("h2", {
                    key: 0,
                    class: "tracking-widest text-sm text-gray-600"
                  }, "(" + toDisplayString(__props.userItem.role) + ")", 1)) : createCommentVNode("", true),
                  createVNode("h2", { class: "tracking-widest text-md" }, toDisplayString(__props.userItem.position), 1)
                ])
              ]),
              createVNode("div", { class: "w-2/12 max-[1241px]:w-full max-lg:x-mx-auto text-center" }, [
                createVNode("h2", { class: "tracking-widest font-bold" }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
    watchEffect(() => {
      currentDepartment.loadDepartment({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentDepartment.current_department.name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-10">`);
      _push(ssrRenderComponent(_sfc_main$3, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))} <span class="text-base text-white bg-blueSemiLight py-2 px-4 rounded-full"${_scopeId}>${ssrInterpolate(unref(currentDepartment).get_department.name)}</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")) + " ", 1),
              createVNode("span", { class: "text-base text-white bg-blueSemiLight py-2 px-4 rounded-full" }, toDisplayString(unref(currentDepartment).get_department.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$4, { "breadcrumb-link": `/base/companies` }, {
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
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$4, { "breadcrumb-link": `/base/companies/department` }, {
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
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, {
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
      _push(`</div><div class="flex items-center gap-x-10"><div class="flex items-center w-11/12 gap-x-10">`);
      _push(ssrRenderComponent(_sfc_main$5, { class: "w-7/12" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "danger",
        class: "px-10 py-2 rounded-full",
        onClick: ($event) => __props.showWarning = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onShowModal: ($event) => __props.showWarning = !__props.showWarning
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="text-center text-lg mt-2 tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442?"))}</p><p class="!text-base"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442"))}</p></div></div><div class="flex justify-center gap-x-10 mt-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "danger",
                class: "w-3/12 py-2 rounded-full",
                onClick: ($event) => __props.showWarning = false
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "success",
                class: "w-3/12 py-2 rounded-full",
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
                  createVNode(_sfc_main$3, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-center text-lg mt-2 tracking-widest" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442?")), 1),
                    createVNode("p", { class: "!text-base" }, toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                  createVNode(_sfc_main$6, {
                    type: "danger",
                    class: "w-3/12 py-2 rounded-full",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    type: "success",
                    class: "w-3/12 py-2 rounded-full",
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
      _push(`</div><div class="flex gap-x-10 w-full">`);
      if (!((_a = unref(currentDepartment).get_department) == null ? void 0 : _a.id)) {
        _push(`<div class="flex w-full gap-y-4 flex-col"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(TheSceleton, {
            "border-radius": "10px",
            width: "90%",
            height: "80px"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="w-full"><!--[-->`);
        ssrRenderList((_c = (_b = unref(currentDepartment)) == null ? void 0 : _b.get_department) == null ? void 0 : _c.participants, (userItem) => {
          _push(ssrRenderComponent(_sfc_main$1, { "user-item": userItem }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="w-3/12">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F`);
                } else {
                  return [
                    createTextVNode("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="flex items-center my-4 gap-x-5 justify-center"${_scopeId}><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"${_scopeId}><div${_scopeId}><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/TheHeader.vue:26:11"${_scopeId}><g id="User / Users_Group" data-v-inspector="components/TheHeader.vue:27:13"${_scopeId}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-inspector="components/TheHeader.vue:28:15"${_scopeId}></path></g></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432"))}: </p></div><div${_scopeId}><p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white"${_scopeId}>${ssrInterpolate((_a2 = unref(currentDepartment).get_department.participants) == null ? void 0 : _a2.length)}</p></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createTextVNode("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center my-4 gap-x-5 justify-center" }, [
                  createVNode("div", { class: "flex items-center gap-x-2 w-8/12 max-md:w-9/12" }, [
                    createVNode("div", null, [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-v-inspector": "components/TheHeader.vue:26:11"
                      }, [
                        createVNode("g", {
                          id: "User / Users_Group",
                          "data-v-inspector": "components/TheHeader.vue:27:13"
                        }, [
                          createVNode("path", {
                            id: "Vector",
                            class: "dark:stroke-white stroke-black",
                            d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
                            "stroke-width": "1",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "data-v-inspector": "components/TheHeader.vue:28:15"
                          })
                        ])
                      ]))
                    ]),
                    createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432")) + ": ", 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" }, toDisplayString((_b2 = unref(currentDepartment).get_department.participants) == null ? void 0 : _b2.length), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
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
//# sourceMappingURL=_id_-FY2hGI79.mjs.map
