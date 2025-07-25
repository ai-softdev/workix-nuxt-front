import { a as useRouter, l as useSeoMeta } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, unref, ref, withModifiers, watch } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { u as useObjects } from "./objects-DMzYlhLA.js";
import { _ as _sfc_main$6 } from "./TheButton-Bz9xS3BF.js";
import { _ as _sfc_main$4 } from "./TheModal-CjGVpCB-.js";
import { _ as _sfc_main$5 } from "./TheInput-BfTT2E6G.js";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
import { u as useCompanies } from "./companies-DK9t2HLw.js";
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
import "./axios-Q2E2Xj-P.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
const _imports_0 = "" + __publicAssetsURL("icons/address.svg");
const _imports_1 = "" + __publicAssetsURL("icons/workers-count.svg");
const _imports_2 = "" + __publicAssetsURL("icons/download.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/base/objects/${__props.object.id}`,
        class: "block rounded-3xl shadow-cards bg-white p-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="font-bold mb-6 pb-6 border-b"${_scopeId}>${ssrInterpolate(__props.object.name)}</h1><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="address"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Адрес"))}: </p></div><p class="text-mediumGray"${_scopeId}>${ssrInterpolate(__props.object.address)}</p></div><div class="flex items-center justify-between mt-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="workers-count"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Кол-во участников"))}: </p></div><p class="text-mediumGray"${_scopeId}>${ssrInterpolate(__props.object.participants_count || 0)}</p></div><button class="flex items-center gap-2.5 py-2.5 px-5 rounded-full border bg-porcelain hover:bg-golden mx-auto mt-6 font-bold transition-all ease-in-out duration-300"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="download"${_scopeId}> ${ssrInterpolate(_ctx.$t("Скачать документ"))}</button>`);
          } else {
            return [
              createVNode("h1", { class: "font-bold mb-6 pb-6 border-b" }, toDisplayString(__props.object.name), 1),
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "address"
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("Адрес")) + ": ", 1)
                ]),
                createVNode("p", { class: "text-mediumGray" }, toDisplayString(__props.object.address), 1)
              ]),
              createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: "workers-count"
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("Кол-во участников")) + ": ", 1)
                ]),
                createVNode("p", { class: "text-mediumGray" }, toDisplayString(__props.object.participants_count || 0), 1)
              ]),
              createVNode("button", { class: "flex items-center gap-2.5 py-2.5 px-5 rounded-full border bg-porcelain hover:bg-golden mx-auto mt-6 font-bold transition-all ease-in-out duration-300" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "download"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("Скачать документ")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ObjectContent",
  __ssrInlineRender: true,
  setup(__props) {
    const objects = useObjects();
    objects.loadObjectList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8" }, _attrs))}><div class="grid grid-cols-4 max-[1050px]:grid-cols-3 max-[786px]:grid-cols-2 max-[678px]:grid-cols-1 gap-5"><!--[-->`);
      ssrRenderList(unref(objects).get_objects.results, (object) => {
        _push(ssrRenderComponent(_sfc_main$3, { object }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
        _push(`<button class="font-bold bg-golden rounded-full py-2.5 px-10"> + ${ssrInterpolate(_ctx.$t("Создать объект"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => __props.showCreate = !__props.showCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="font-bold text-center text-xl max-sm:text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("Создание объекта"))}</p><form class="mt-10"${_scopeId}><div class="flex flex-col gap-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                type: "text",
                label: _ctx.$t("Наименование"),
                modelValue: unref(createForm).name,
                "onUpdate:modelValue": ($event) => unref(createForm).name = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$5, {
                type: "text",
                label: _ctx.$t("Адрес"),
                modelValue: unref(createForm).address,
                "onUpdate:modelValue": ($event) => unref(createForm).address = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap gap-y-3 items-center mt-14 justify-center gap-x-10 max-sm:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                t: "button",
                onClick: ($event) => __props.showCreate = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Отменить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
                t: "submit",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Создать"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form>`);
            } else {
              return [
                createVNode("p", { class: "font-bold text-center text-xl max-sm:text-sm" }, toDisplayString(_ctx.$t("Создание объекта")), 1),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => unref(objects).createObject(unref(createForm)), ["prevent"]),
                  class: "mt-10"
                }, [
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    createVNode(_sfc_main$5, {
                      type: "text",
                      label: _ctx.$t("Наименование"),
                      modelValue: unref(createForm).name,
                      "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$5, {
                      type: "text",
                      label: _ctx.$t("Адрес"),
                      modelValue: unref(createForm).address,
                      "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-y-3 items-center mt-14 justify-center gap-x-10 max-sm:flex-col" }, [
                    createVNode(_sfc_main$6, {
                      class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                      t: "button",
                      onClick: ($event) => __props.showCreate = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$6, {
                      class: "w-4/12 max-sm:w-full rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
                      t: "submit",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                      ]),
                      _: 1
                    })
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
      title: "Объекты",
      description: "Объекты компании"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between mb-6 max-[678px]:flex-col max-[678px]:gap-3 max-[678px]:items-start"><p class="dark:text-white text-3xl font-bold">${ssrInterpolate(_ctx.$t("Страница с объектами"))}</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BgQLHbTj.js.map
