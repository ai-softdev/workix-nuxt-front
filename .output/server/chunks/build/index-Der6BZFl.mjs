import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { useSSRContext, defineComponent, watch, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, unref, ref, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './TheTextContent-D3-WrEaf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { u as useObjects } from './objects-C2hecMZU.mjs';
import { _ as _sfc_main$6 } from './TheSearch-Dbfux0Mw.mjs';
import { _ as _sfc_main$7 } from './TheFilter-D1FXaf2R.mjs';
import { _ as _sfc_main$a } from './TheButton-DHlwvJQT.mjs';
import { _ as _sfc_main$8 } from './TheModal-DtMcuqX0.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$9 } from './TheInput-BhoKAMvc.mjs';
import { u as useAuthStore } from './auth-DQm4aBcD.mjs';
import { u as useCompanies } from './companies-BCJ1LT8i.mjs';
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
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

const _imports_0 = "" + publicAssetsURL("img/logo-company.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ObjectList",
  __ssrInlineRender: true,
  props: {
    object: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/objects/${__props.object.id}`,
        class: "transition-all cursor-pointer dark:bg-gray-400 dark:hover:bg-gray-300 dark:shadow-none shadow-xl hover:bg-gray-100 dark:border-none border-t border-t-gray-100 p-4 rounded-xl flex items-center gap-x-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[50px] h-[50px]"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}><h1 class="tracking-widest"${_scopeId}>${ssrInterpolate(__props.object.name)}</h1>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[50px] h-[50px]",
                src: _imports_0,
                alt: ""
              }),
              createVNode("h1", { class: "tracking-widest" }, toDisplayString(__props.object.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ObjectContent",
  __ssrInlineRender: true,
  setup(__props) {
    const objects = useObjects();
    objects.loadObjectList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-x-10" }, _attrs))}><div class="w-full flex flex-col gap-y-4"><!--[-->`);
      ssrRenderList(unref(objects).get_objects.results, (object) => {
        _push(ssrRenderComponent(_sfc_main$4, { object }, null, _parent));
      });
      _push(`<!--]--></div><div class="dark:border-t dark:border-t-gray-500 border-t border-t-gray-100 dark:shadow-gray-500 shadow-md w-4/12 rounded-lg p-2">`);
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-wrap gap-y-4 justify-center gap-x-10 my-10 mx-auto w-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectUI/ObjectContentCreateElems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ObjectContentCreateElems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ObjectCreate",
  __ssrInlineRender: true,
  props: {
    showCreate: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const objects = useObjects();
    const currentUser = useAuthStore();
    const createForm = ref({
      name: "",
      files: "",
      address: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_a = unref(currentUser).user.permissions) == null ? void 0 : _a.find((e) => e.name_en === "object.create")) {
        _push(`<button class="font-bold tracking-widest text-white bg-blue-400 mx-auto py-4 rounded-xl w-full px-4 text-sm">${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$8, {
          onShowModal: ($event) => __props.showCreate = !__props.showCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(ObjectContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$9, {
                      type: "text",
                      label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createForm).name,
                      "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$9, {
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
              _push2(ssrRenderComponent(ObjectContentCreateElems, { class: "flex-wrap" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$9, {
                      type: "text",
                      label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                      modelValue: unref(createForm).address,
                      "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$9, {
                          type: "text",
                          label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                          modelValue: unref(createForm).address,
                          "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(ObjectContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreate = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      class: "py-2 px-6 rounded-full",
                      t: "submit",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$a, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$a, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430")), 1)
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => unref(objects).createObject(unref(createForm)), ["prevent"])
                }, [
                  createVNode(ObjectContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$9, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(ObjectContentCreateElems, { class: "flex-wrap" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$9, {
                          type: "text",
                          label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                          modelValue: unref(createForm).address,
                          "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(ObjectContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$a, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$a, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const loadAuthStore = useAuthStore();
    const company = useCompanies();
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
    watch(() => company.company, (newValue) => {
      var _a;
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "objects");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B",
      description: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-x-6">`);
      _push(ssrRenderComponent(_sfc_main$6, { class: "w-8/12" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "w-2/12 ml-auto" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/objects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Der6BZFl.mjs.map
