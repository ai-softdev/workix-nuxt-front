import { a as useRouter$1, _ as __nuxt_component_0$3 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, resolveComponent, isRef, openBlock, createBlock, Fragment, renderList, onUpdated, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { T as TheContentBlock } from "./TheContentBlock-SWn52iXd.js";
import { _ as __nuxt_component_0$1 } from "./ContextMenu-BSTnVXjW.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { u as useStorageStore } from "./storage-BcTt0lkT.js";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$9 } from "./TheModal-DtMcuqX0.js";
import { _ as _sfc_main$b } from "./TheButton-CLFIQZye.js";
import { _ as _sfc_main$a } from "./TheTextContent-Bd9flYOl.js";
import { _ as _sfc_main$d } from "./TheSearch-Dbfux0Mw.js";
import { _ as __nuxt_component_2, h as handleSearch, v as viewSelect } from "./SelectMenu-D0q3s0mU.js";
import { _ as _sfc_main$c } from "./TheInput-BhoKAMvc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_0$2 } from "./Tooltip-DKEgcg7R.js";
import { _ as __nuxt_component_3 } from "./Icon-Bn6Kpv9I.js";
import { _ as _sfc_main$e } from "./StorageCard-v2TpWA3O.js";
import { QrcodeStream } from "vue-qrcode-reader";
import { _ as _sfc_main$f } from "./TheBreadcrumbs-CyXOlUWJ.js";
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
import "./selectMenu-nIh9XKQv.js";
import "./axios-DGmy-4pO.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
import "@tanstack/vue-virtual";
import "./Icon-CEQu5tsF.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-C91WxrSi.js";
import "./auth-ByKg_prd.js";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "StorageNavElemGoods",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: {}
    },
    moveEffectSubCategory: {
      type: Boolean
    },
    moveEffectSubCategoryWarn: {
      type: Boolean
    }
  },
  setup(__props) {
    ref(false);
    const route = useRoute();
    const router = useRouter();
    const storageStore = useStorageStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative rounded-l-md dark:hover:bg-semiCyan hover:!bg-opacity-30 hover:bg-cyan transition-all" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/storage/${__props.item.slug}`,
        class: [{ "dark:bg-semiCyan": unref(route).path === `/base/storage/${__props.item.slug}/${unref(route).params.id}` }, "flex items-center w-full rounded-l-md p-1"],
        onClick: ($event) => unref(storageStore).currentCategory = { ...__props.item }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-x-3"${_scopeId}><div class="text-semiCyan"${_scopeId}> • </div><span class="tracking-wider"${_scopeId}>${ssrInterpolate(__props.item.name)}</span></div><div${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-x-3" }, [
                createVNode("div", { class: "text-semiCyan" }, " • "),
                createVNode("span", { class: "tracking-wider" }, toDisplayString(__props.item.name), 1)
              ]),
              createVNode("div")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.moveEffectSubCategory) {
        _push(`<button class="absolute right-2 rounded-lg top-1"><svg width="25px" height="25px" viewBox="0 -5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-516.000000, -1144.000000)" class="dark:fill-white fill-black"><path d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 L538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 L543.996,1144 Z" id="delete" sketch:type="MSShapeGroup"></path></g></g></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.moveEffectSubCategoryWarn) {
        _push(ssrRenderComponent(_sfc_main$9, {
          type: "resize",
          onShowModal: ($event) => __props.moveEffectSubCategoryWarn = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$a, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить категорию?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить категорию?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="break-words tracking-wider my-4 text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Если вы удалите категорию то всё содержимое данной категории удалиться без возврата"))}</p><p class="mt-4"${_scopeId}>${ssrInterpolate(_ctx.$t("Убедитесь что категория пустая, переместите нужные товары в другие категории"))}</p></div><div class="flex flex-wrap gap-x-10 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, {
                type: "chat",
                onClick: ($event) => __props.moveEffectSubCategoryWarn = false
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
              _push2(ssrRenderComponent(_sfc_main$b, {
                type: "chat",
                onClick: ($event) => unref(storageStore).deleteStorageElem({ deleteType: "subcategory", id: __props.item.id }).then((res) => {
                  if (unref(storageStore).currentCategory.slug === __props.item.slug) {
                    unref(router).push("/base/storage");
                    unref(storageStore).currentCategory = {};
                  } else
                    unref(storageStore).currentCategory;
                })
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
                createVNode(_sfc_main$a, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Удалить категорию?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "break-words tracking-wider my-4 text-sm" }, [
                  createVNode("p", null, toDisplayString(_ctx.$t("Если вы удалите категорию то всё содержимое данной категории удалиться без возврата")), 1),
                  createVNode("p", { class: "mt-4" }, toDisplayString(_ctx.$t("Убедитесь что категория пустая, переместите нужные товары в другие категории")), 1)
                ]),
                createVNode("div", { class: "flex flex-wrap gap-x-10 justify-center" }, [
                  createVNode(_sfc_main$b, {
                    type: "chat",
                    onClick: ($event) => __props.moveEffectSubCategoryWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$b, {
                    type: "chat",
                    onClick: ($event) => unref(storageStore).deleteStorageElem({ deleteType: "subcategory", id: __props.item.id }).then((res) => {
                      if (unref(storageStore).currentCategory.slug === __props.item.slug) {
                        unref(router).push("/base/storage");
                        unref(storageStore).currentCategory = {};
                      } else
                        unref(storageStore).currentCategory;
                    })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/StorageNav/StorageNavElemGoods.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "StorageNavElem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    isActiveCategory: {
      type: Boolean
    },
    moveEffectCategory: {
      type: Boolean
    },
    moveEffectCategoryWarn: {
      type: Boolean
    }
  },
  setup(__props) {
    const storageStore = useStorageStore();
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0$1;
      const _component_StorageNavContextMenu = resolveComponent("StorageNavContextMenu");
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="flex items-center justify-between w-full relative"><div class="flex items-center gap-x-3"><div><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21.6099V12.5399" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 13.24V9.58002L7.51001 4.09998" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="tracking-wider text-sm break-words">${ssrInterpolate(__props.item.name)}</span></div>`);
      if (__props.moveEffectCategory) {
        _push(`<button class="absolute right-5 rounded-lg"><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "rotate-180": __props.isActiveCategory }, "transition-all"])}"><svg class="${ssrRenderClass([{ "!fill-semiCyan": __props.isActiveCategory }, "dark:fill-white fill-black"])}" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path></svg></div></button>`);
      if (__props.moveEffectCategoryWarn) {
        _push(ssrRenderComponent(_sfc_main$9, {
          type: "resize",
          onShowModal: ($event) => __props.moveEffectCategoryWarn = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$a, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить коробку?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить коробку?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="break-words tracking-wider my-4 text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t(
                "Если вы удалите коробку то всё содержимое данной коробки удалиться без возврата"
              ))}</p><p class="mt-4"${_scopeId}>${ssrInterpolate(_ctx.$t(
                "Убедитесь что коробка пустая, переместите нужные товары в другие категории"
              ))}</p></div><div class="flex flex-wrap gap-x-10 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, {
                type: "chat",
                onClick: ($event) => __props.moveEffectCategoryWarn = false
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
              _push2(ssrRenderComponent(_sfc_main$b, {
                type: "chat",
                onClick: ($event) => unref(storageStore).deleteStorageElem({ deleteType: "category", id: __props.item.id })
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
                createVNode(_sfc_main$a, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Удалить коробку?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "break-words tracking-wider my-4 text-sm" }, [
                  createVNode("p", null, toDisplayString(_ctx.$t(
                    "Если вы удалите коробку то всё содержимое данной коробки удалиться без возврата"
                  )), 1),
                  createVNode("p", { class: "mt-4" }, toDisplayString(_ctx.$t(
                    "Убедитесь что коробка пустая, переместите нужные товары в другие категории"
                  )), 1)
                ]),
                createVNode("div", { class: "flex flex-wrap gap-x-10 justify-center" }, [
                  createVNode(_sfc_main$b, {
                    type: "chat",
                    onClick: ($event) => __props.moveEffectCategoryWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$b, {
                    type: "chat",
                    onClick: ($event) => unref(storageStore).deleteStorageElem({ deleteType: "category", id: __props.item.id })
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
      if (__props.item.sub_categories && __props.isActiveCategory) {
        _push(`<div><!--[-->`);
        ssrRenderList(__props.item.sub_categories, (child) => {
          _push(ssrRenderComponent(_sfc_main$8, {
            class: "mt-2",
            item: child,
            key: child.id
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UContextMenu, {
        onContextmenu: () => {
        },
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StorageNavContextMenu, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M10 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M14 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M4 7H20",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
          } else {
            return [
              createVNode(_component_StorageNavContextMenu, null, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "23px",
                    height: "23px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M10 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M14 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M4 7H20",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/StorageNav/StorageNavElem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "py-2 px-4 dark:bg-gray-600 bg-gray-200 rounded-lg tracking-wider transition-all" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/UI/StorageButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const StorageButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StorageCreateCategory",
  __ssrInlineRender: true,
  setup(__props) {
    const storageStore = useStorageStore();
    const createType = ref("");
    const selected = ref(storageStore.storageCategoryList);
    const categoryTitle = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex"><div class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$a, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Создание"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Создание")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button><svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div><p class="my-2 text-sm tracking-wider text-center">${ssrInterpolate(_ctx.$t("Выберите тип который хотите создать"))}</p><div class="flex gap-x-10 justify-center mt-4">`);
      _push(ssrRenderComponent(StorageButton, {
        class: { "!bg-blueSemiLight text-white": unref(createType) === "category" },
        onClick: ($event) => createType.value = "category"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Коробка"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Коробка")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(StorageButton, {
        class: { "!bg-blueSemiLight text-white": unref(createType) === "subcategory" },
        onClick: ($event) => createType.value = "subcategory"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Категория"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Категория")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><form class="mt-10">`);
      _push(ssrRenderComponent(_sfc_main$c, {
        label: "Наименование",
        required: "",
        modelValue: unref(categoryTitle),
        "onUpdate:modelValue": ($event) => isRef(categoryTitle) ? categoryTitle.value = $event : null,
        type: "text"
      }, null, _parent));
      if (unref(createType) === "subcategory") {
        _push(`<div class="mt-4"><p>${ssrInterpolate(_ctx.$t("Выберите коробку"))}</p><div>`);
        _push(ssrRenderComponent(_component_USelectMenu, {
          searchable: "",
          required: "",
          "searchable-placeholder": _ctx.$t("Поиск..."),
          class: "w-full",
          "select-class": "dark:bg-gray-300 h-10 bg-white border dark:border-none",
          placeholder: "Выберите",
          variant: "none",
          modelValue: unref(selected),
          "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
          options: unref(storageStore).storageCategoryList,
          "option-attribute": "name"
        }, {
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="dark:text-black"${_scopeId}>${ssrInterpolate(unref(selected).name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "dark:text-black" }, toDisplayString(unref(selected).name), 1)
              ];
            }
          }),
          "option-empty": withCtx(({ query }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<q${_scopeId}>${ssrInterpolate(query)}</q> ${ssrInterpolate(_ctx.$t("Не найдено"))}`);
            } else {
              return [
                createVNode("q", null, toDisplayString(query), 1),
                createTextVNode(" " + toDisplayString(_ctx.$t("Не найдено")), 1)
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Ничего нет"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Ничего нет")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center gap-x-10 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$b, {
        t: "button",
        type: "chat",
        onClick: ($event) => unref(storageStore).createCategory = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Отмена"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        t: "button",
        type: "chat",
        onClick: ($event) => unref(storageStore).createStorageCategoryOrSubcategory({ createType: unref(createType) === "category" ? "category" : "subcategory", category_id: unref(createType) === "subcategory" ? unref(selected).id : null, name: unref(categoryTitle) })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Создать"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/UI/StorageCreateCategory.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StorageNav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter$1();
    const storageStore = useStorageStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "!p-0 h-screen max-[800px]:h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex px-10 py-4 gap-x-4 items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$d, {
              modelValue: unref(storageStore).searchCategory,
              "onUpdate:modelValue": ($event) => unref(storageStore).searchCategory = $event,
              class: "w-11/12",
              onSearch: ($event) => unref(handleSearch)(unref(storageStore).searchCategory, unref(storageStore).searchCategory.trim() !== "" ? unref(storageStore).loadStorageCategorySearch({ query: unref(storageStore).searchCategory }) : unref(storageStore).loadStorageCategoryList())
            }, null, _parent2, _scopeId));
            _push2(`<button${_scopeId}><svg class="dark:stroke-white stroke-black dark:hover:stroke-green-300 hover:stroke-green-500 transition-all" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M20.49 17.98H17.51" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M19 16.52V19.51" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M3.17004 7.43994L12 12.5499L20.7701 7.46991" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12 21.6099V12.5399" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.93001 21.52L4.59001 18.56C3.38001 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38001 6.11002 4.59001 5.44002L9.93001 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></button></div><div class="max-[800px]:max-h-[400px] overflow-auto"${_scopeId}><!--[-->`);
            ssrRenderList(unref(storageStore).storageCategoryList, (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                class: "mt-2 border-b pb-4 mx-4 dark:border-[#666D76] max-[800px]:last:border-none",
                isActive: unref(storageStore).isActive,
                item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex px-10 py-4 gap-x-4 items-center justify-between" }, [
                createVNode(_sfc_main$d, {
                  modelValue: unref(storageStore).searchCategory,
                  "onUpdate:modelValue": ($event) => unref(storageStore).searchCategory = $event,
                  class: "w-11/12",
                  onSearch: ($event) => unref(handleSearch)(unref(storageStore).searchCategory, unref(storageStore).searchCategory.trim() !== "" ? unref(storageStore).loadStorageCategorySearch({ query: unref(storageStore).searchCategory }) : unref(storageStore).loadStorageCategoryList())
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onSearch"]),
                createVNode("button", {
                  onClick: ($event) => unref(storageStore).createCategory = true
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black dark:hover:stroke-green-300 hover:stroke-green-500 transition-all",
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z",
                      "stroke-width": "1",
                      "stroke-miterlimit": "10",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M20.49 17.98H17.51",
                      "stroke-width": "1",
                      "stroke-miterlimit": "10",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M19 16.52V19.51",
                      "stroke-width": "1",
                      "stroke-miterlimit": "10",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M3.17004 7.43994L12 12.5499L20.7701 7.46991",
                      "stroke-width": "1",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M12 21.6099V12.5399",
                      "stroke-width": "1",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.93001 21.52L4.59001 18.56C3.38001 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38001 6.11002 4.59001 5.44002L9.93001 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z",
                      "stroke-width": "1",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "max-[800px]:max-h-[400px] overflow-auto" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(storageStore).storageCategoryList, (item) => {
                  return openBlock(), createBlock(_sfc_main$7, {
                    class: "mt-2 border-b pb-4 mx-4 dark:border-[#666D76] max-[800px]:last:border-none",
                    isActive: unref(storageStore).isActive,
                    item
                  }, null, 8, ["isActive", "item"]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(storageStore).createCategory) {
        _push(ssrRenderComponent(_sfc_main$9, {
          type: "resize",
          onShowModal: ($event) => unref(storageStore).createCategory = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/StorageNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ScanAnimation",
  __ssrInlineRender: true,
  props: {
    mode: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_UTooltip, mergeProps({
        class: "text-lg tracking-wider",
        text: _ctx.$t("Отсканируйте код"),
        popper: { arrow: true }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "dark:border-gray-200 border-gray-400": __props.mode === "scan" }, "relative border dark:border-gray-400 rounded-lg p-1 transition-all"])}" data-v-0adcc7be${_scopeId}><svg class="" width="30px" height="30px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-0adcc7be${_scopeId}><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-0adcc7be${_scopeId}><g transform="translate(1.000000, 2.000000)" class="${ssrRenderClass([{ "dark:!fill-gray-200 fill-gray-500": __props.mode === "scan" }, "dark:fill-gray-400 fill-gray-400"])}" data-v-0adcc7be${_scopeId}><rect x="13" y="0" width="1.953" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect><rect x="10" y="0" width="1.967" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect><rect x="8" y="0" width="0.95" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect><rect x="4" y="0" width="1.972" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect><rect x="2" y="0" width="0.973" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect><rect x="0" y="0" width="0.973" height="10.914" class="si-glyph-fill" data-v-0adcc7be${_scopeId}></rect></g></g></svg><div class="${ssrRenderClass([{ "laser": __props.mode === "scan" }, "w-[39px] h-[1.2px] rounded-full shadow shadow-cyan dark:shadow-semiCyan dark:bg-semiCyan bg-blueSemiLight absolute top-4 left-0"])}" data-v-0adcc7be${_scopeId}></div></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: ["relative border dark:border-gray-400 rounded-lg p-1 transition-all", { "dark:border-gray-200 border-gray-400": __props.mode === "scan" }],
                onClick: ($event) => _ctx.$emit("onScan")
              }, [
                (openBlock(), createBlock("svg", {
                  class: "",
                  width: "30px",
                  height: "30px",
                  viewBox: "0 -0.5 17 17",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("g", {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                  }, [
                    createVNode("g", {
                      transform: "translate(1.000000, 2.000000)",
                      class: ["dark:fill-gray-400 fill-gray-400", { "dark:!fill-gray-200 fill-gray-500": __props.mode === "scan" }]
                    }, [
                      createVNode("rect", {
                        x: "13",
                        y: "0",
                        width: "1.953",
                        height: "10.914",
                        class: "si-glyph-fill"
                      }),
                      createVNode("rect", {
                        x: "10",
                        y: "0",
                        width: "1.967",
                        height: "10.914",
                        class: "si-glyph-fill"
                      }),
                      createVNode("rect", {
                        x: "8",
                        y: "0",
                        width: "0.95",
                        height: "10.914",
                        class: "si-glyph-fill"
                      }),
                      createVNode("rect", {
                        x: "4",
                        y: "0",
                        width: "1.972",
                        height: "10.914",
                        class: "si-glyph-fill"
                      }),
                      createVNode("rect", {
                        x: "2",
                        y: "0",
                        width: "0.973",
                        height: "10.914",
                        class: "si-glyph-fill"
                      }),
                      createVNode("rect", {
                        x: "0",
                        y: "0",
                        width: "0.973",
                        height: "10.914",
                        class: "si-glyph-fill"
                      })
                    ], 2)
                  ])
                ])),
                createVNode("div", {
                  class: ["w-[39px] h-[1.2px] rounded-full shadow shadow-cyan dark:shadow-semiCyan dark:bg-semiCyan bg-blueSemiLight absolute top-4 left-0", { "laser": __props.mode === "scan" }]
                }, null, 2)
              ], 10, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/UI/ScanAnimation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ScanAnimation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0adcc7be"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StorageHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const storageStore = useStorageStore();
    const modeInput = ref("");
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-x-4 w-full mx-auto items-center" }, _attrs))}><form class="w-full flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        mode: unref(modeInput),
        onFocusout: ($event) => modeInput.value = "",
        onSearch: ($event) => unref(storageStore).searchGoods.trim() !== "" && unref(route).path === "/base/storage" ? unref(storageStore).loadAllListSearch({ search: unref(storageStore).searchGoods }) : unref(storageStore).loadStorageSubCategory({ slug: unref(route).params.slug, search: unref(storageStore).searchGoods }),
        modelValue: unref(storageStore).searchGoods,
        "onUpdate:modelValue": ($event) => unref(storageStore).searchGoods = $event,
        class: "!w-6/12",
        type: "text",
        ref: "scan"
      }, null, _parent));
      _push(`<div class="max-[800px]:hidden">`);
      _push(ssrRenderComponent(ScanAnimation, {
        onOnScan: ($event) => modeInput.value = "scan",
        mode: unref(modeInput)
      }, null, _parent));
      _push(`</div></form><button class="max-[800px]:block hidden"><svg class="dark:fill-white fill-black" width="40px" height="40px" viewBox="0 0 24 24" id="qr-code-scan-2" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"><path d="M10,15v2a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H9A1,1,0,0,1,10,15Zm7-9H15a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V7A1,1,0,0,0,17,6Zm0,6H13a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V13A1,1,0,0,0,17,12ZM12,7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1Z" style="${ssrRenderStyle({ "fill": "rgb(44, 169, 188)", "stroke-width": "1.2" })}"></path><path d="M3,9A1,1,0,0,1,2,8V4A2,2,0,0,1,4,2H8A1,1,0,0,1,8,4H4V8A1,1,0,0,1,3,9ZM22,8V4a2,2,0,0,0-2-2H16a1,1,0,0,0,0,2h4V8a1,1,0,0,0,2,0ZM9,21a1,1,0,0,0-1-1H4V16a1,1,0,0,0-2,0v4a2,2,0,0,0,2,2H8A1,1,0,0,0,9,21Zm13-1V16a1,1,0,0,0-2,0v4H16a1,1,0,0,0,0,2h4A2,2,0,0,0,22,20Z"></path></svg></button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/StorageHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StorageContent",
  __ssrInlineRender: true,
  setup(__props) {
    const storageStore = useStorageStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 flex-wrap" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(storageStore).storageHomeAllList, (item) => {
        _push(ssrRenderComponent(_sfc_main$e, {
          class: "flex gap-2 flex-col max-[800px]:justify-center",
          from: true,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/StorageContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "storage",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const storageStore = useStorageStore();
    ref("");
    const selected = ref(viewSelect[0]);
    const inWidth = ref();
    const scannedBarcode = ref(null);
    const onDecode = (value) => {
      scannedBarcode.value = value;
      storageStore.searchGoods = value;
      storageStore.loadAllListSearch({ search: JSON.stringify(storageStore.searchGoods[0].rawValue) });
      console.log(storageStore.searchGoods);
      storageStore.streaming = false;
    };
    onUpdated(() => {
      if (route.path === `/base/storage`) {
        storageStore.loadAllList();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorageNav = _sfc_main$4;
      const _component_StorageHeader = _sfc_main$2;
      const _component_USelectMenu = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_3;
      const _component_StorageContent = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-[800px]:flex-wrap justify-between max-[800px]:h-full gap-y-10 gap-x-6" }, _attrs))}>`);
      if (unref(inWidth) <= 800) {
        _push(`<div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-4/12 max-lg:w-5/12 max-[800px]:w-full">`);
      _push(ssrRenderComponent(_component_StorageNav, null, null, _parent));
      _push(`</div><div class="w-full flex flex-col gap-y-2">`);
      _push(ssrRenderComponent(TheContentBlock, {
        onScroll: () => {
        },
        onWheel: () => {
        },
        onTouch: () => {
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StorageHeader, {
              ref: unref(storageStore).scan,
              onOpenStreamSearch: ($event) => unref(storageStore).streaming = true
            }, null, _parent2, _scopeId));
            if (unref(storageStore).streaming) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                type: "resize",
                onShowModal: ($event) => {
                  unref(storageStore).streaming = false;
                  scannedBarcode.value = null;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>${ssrInterpolate(unref(scannedBarcode) ? JSON.stringify(unref(scannedBarcode)[0].rawValue) : "not working")}</p>`);
                    _push3(ssrRenderComponent(unref(QrcodeStream), {
                      onDetect: onDecode,
                      formats: ["qr_code", "aztec", "code_128", "code_39", "code_93", "databar", "codabar", "linear_codes", "micro_qr_code", "databar_expanded", "ean_13", "ean_8", "itf"]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(unref(scannedBarcode) ? JSON.stringify(unref(scannedBarcode)[0].rawValue) : "not working"), 1),
                      createVNode(unref(QrcodeStream), {
                        onDetect: onDecode,
                        formats: ["qr_code", "aztec", "code_128", "code_39", "code_93", "databar", "codabar", "linear_codes", "micro_qr_code", "databar_expanded", "ean_13", "ean_8", "itf"]
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_StorageHeader, {
                ref: unref(storageStore).scan,
                onOpenStreamSearch: ($event) => unref(storageStore).streaming = true
              }, null, 8, ["onOpenStreamSearch"]),
              unref(storageStore).streaming ? (openBlock(), createBlock(_sfc_main$9, {
                key: 0,
                type: "resize",
                onShowModal: ($event) => {
                  unref(storageStore).streaming = false;
                  scannedBarcode.value = null;
                }
              }, {
                default: withCtx(() => [
                  createVNode("p", null, toDisplayString(unref(scannedBarcode) ? JSON.stringify(unref(scannedBarcode)[0].rawValue) : "not working"), 1),
                  createVNode(unref(QrcodeStream), {
                    onDetect: onDecode,
                    formats: ["qr_code", "aztec", "code_128", "code_39", "code_93", "databar", "codabar", "linear_codes", "micro_qr_code", "databar_expanded", "ean_13", "ean_8", "itf"]
                  })
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div class="flex items-center gap-x-4 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$f, {
              "breadcrumb-link": unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? `/base/storage` : ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Главная"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Главная")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}`) {
              _push2(`<div${_scopeId}><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"${_scopeId}><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}`) {
              _push2(ssrRenderComponent(_sfc_main$f, {
                "breadcrumb-link": unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? `/base/storage/${unref(route).params.slug}` : ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(storageStore).currentCategory.name ? unref(storageStore).currentCategory.name : unref(storageStore).storageItem.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(storageStore).currentCategory.name ? unref(storageStore).currentCategory.name : unref(storageStore).storageItem.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}`) {
              _push2(`<div${_scopeId}><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"${_scopeId}><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}`) {
              _push2(ssrRenderComponent(_sfc_main$f, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(route).params.nestedSlug)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(route).params.nestedSlug), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: unref(selected),
              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
              options: unref(viewSelect)
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(selected).icon,
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(selected).label)}`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: unref(selected).icon,
                      class: "w-4 h-4"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(unref(selected).label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (!unref(route).params.slug) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_StorageContent, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", { class: "flex items-center gap-x-4 mb-4" }, [
                  createVNode(_sfc_main$f, {
                    "breadcrumb-link": unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? `/base/storage` : ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Главная")), 1)
                    ]),
                    _: 1
                  }, 8, ["breadcrumb-link"]),
                  unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? (openBlock(), createBlock("div", { key: 0 }, [
                    (openBlock(), createBlock("svg", {
                      width: "15px",
                      height: "15px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        class: "dark:stroke-white stroke-black",
                        d: "M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ])) : createCommentVNode("", true),
                  unref(route).path === `/base/storage/${unref(route).params.slug}` || unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? (openBlock(), createBlock(_sfc_main$f, {
                    key: 1,
                    "breadcrumb-link": unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? `/base/storage/${unref(route).params.slug}` : ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(storageStore).currentCategory.name ? unref(storageStore).currentCategory.name : unref(storageStore).storageItem.name), 1)
                    ]),
                    _: 1
                  }, 8, ["breadcrumb-link"])) : createCommentVNode("", true),
                  unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? (openBlock(), createBlock("div", { key: 2 }, [
                    (openBlock(), createBlock("svg", {
                      width: "15px",
                      height: "15px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        class: "dark:stroke-white stroke-black",
                        d: "M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ])) : createCommentVNode("", true),
                  unref(route).path === `/base/storage/${unref(route).params.slug}/${unref(route).params.nestedSlug}` ? (openBlock(), createBlock(_sfc_main$f, { key: 3 }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(route).params.nestedSlug), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", null, [
                  createVNode(_component_USelectMenu, {
                    modelValue: unref(selected),
                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                    options: unref(viewSelect)
                  }, {
                    label: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: unref(selected).icon,
                        class: "w-4 h-4"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(unref(selected).label), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ])
              ]),
              !unref(route).params.slug ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_StorageContent)
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_NuxtPage)
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/storage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=storage-CvuCP4er.js.map
