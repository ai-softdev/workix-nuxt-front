import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { useSSRContext, defineComponent, watch, unref, mergeProps, ref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useRouter as useRouter$1 } from 'vue-router';
import { _ as _sfc_main$3 } from './TheButton-DDcCSWqY.mjs';
import { _ as _sfc_main$4 } from './TheModal-CnBva0fQ.mjs';
import { _ as _sfc_main$5 } from './TheTextContent-D3-WrEaf.mjs';
import { u as useCompanies } from './companies-Dkc8gjfT.mjs';
import { T as TaskContentCreateElems } from './TaskContentCreateElems-B_LyAK55.mjs';
import { _ as _sfc_main$6 } from './TheInput-BfTT2E6G.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { u as useChat } from './chat-D985ZM2Z.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'vue3-toastify';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DepartmentContentLists",
  __ssrInlineRender: true,
  props: {
    departmentItem: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    useRouter$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-all px-5 py-6 rounded-3xl cursor-pointer border bg-white shadow-cards" }, _attrs))}><div class="items-center gap-x-4 max-lg:w-full max-md:justify-center font-medium max-sm:w-full max-sm:text-center mb-4 pb-4 border-b">${ssrInterpolate(__props.departmentItem.name)}</div><div class="flex flex-col gap-4"><div class="flex items-center justify-between"><p class="text-sm dark:text-gray-400">${ssrInterpolate(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"))}</p><p class="mt-2 text-mediumGray text-sm">${ssrInterpolate(__props.departmentItem.department_director_name || _ctx.$t("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))}</p></div><div class="flex items-center justify-between"><p class="text-sm dark:text-gray-400">${ssrInterpolate(_ctx.$t("\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C"))}</p><p class="mt-2 text-mediumGray text-sm">${ssrInterpolate(__props.departmentItem.vice_department_director_name || _ctx.$t("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/department/DepartmentContentLists.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DepartmentCreate",
  __ssrInlineRender: true,
  props: {
    showCreate: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const department = useCompanies();
    const createForm = ref({
      name: "",
      email: "",
      address: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "w-full mr-auto !rounded-full !bg-golden !text-black",
        type: "signIn",
        onClick: ($event) => __props.showCreate = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + ${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}`);
          } else {
            return [
              createTextVNode(" + " + toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => __props.showCreate = !__props.showCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      type: "text",
                      label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createForm).name,
                      "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$6, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex justify-center gap-x-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "px-10 rounded-full py-2",
                t: "button",
                type: "danger",
                onClick: ($event) => __props.showCreate = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "px-10 rounded-full py-2 bg-blueSemiLight",
                t: "submit",
                onClick: ($event) => unref(department).loadDepartmentList()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1)
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => {
                    unref(department).createDepartment({ department: unref(createForm) });
                    __props.showCreate = false;
                    unref(createForm).name = " ";
                  }, ["prevent"])
                }, [
                  createVNode(TaskContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$6, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-center gap-x-10" }, [
                    createVNode(_sfc_main$3, {
                      class: "px-10 rounded-full py-2",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreate = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$3, {
                      class: "px-10 rounded-full py-2 bg-blueSemiLight",
                      t: "submit",
                      onClick: ($event) => unref(department).loadDepartmentList()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/department/DepartmentCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    formTitle: String
  },
  setup(__props) {
    useChat();
    useAuthStore();
    const departmentList = useCompanies();
    departmentList.loadDepartmentList();
    const router = useRouter();
    const loadAuthStore = useAuthStore();
    watch(() => loadAuthStore.user, (newValue) => {
      var _a, _b;
      if (((_b = (_a = loadAuthStore == null ? void 0 : loadAuthStore.user) == null ? void 0 : _a.role) == null ? void 0 : _b.name_en) === "admin") {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between max-[786px]:flex-col max-[786px]:items-start"><p class="dark:text-white text-3xl font-bold mb-6">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "w-3/12 max-md:w-9/12 max-md:mb-4 text-sm" }, null, _parent));
      _push(`</div><div class="flex relative items-center justify-between w-full gap-x-10 mt-4"><p class="text-mediumGray w-6/12 max-[786px]:w-full">${ssrInterpolate(_ctx.$t("\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u043E\u0442\u0434\u0435\u043B, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438."))}</p></div><div class="mt-8">`);
      if (!unref(departmentList).get_all_department.results) {
        _push(`<div class="flex w-full gap-y-4 gap-x-4 flex-wrap"><!--[-->`);
        ssrRenderList(6, (item) => {
          _push(ssrRenderComponent(TheSceleton, {
            "border-radius": "10px",
            width: "30%",
            height: "100px"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-4 max-[1250px]:grid-cols-3 max-[810px]:grid-cols-2 max-[636px]:grid-cols-1 gap-5"><!--[-->`);
        ssrRenderList((_a = unref(departmentList)) == null ? void 0 : _a.get_all_department.results, (department) => {
          _push(ssrRenderComponent(_sfc_main$2, { "department-item": department }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="mt-6 flex items-center justify-end gap-1"><p>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u0432"))}: </p><p class="font-bold">${ssrInterpolate(unref(departmentList).get_all_department.count)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/department/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CtKL5VLE.mjs.map
