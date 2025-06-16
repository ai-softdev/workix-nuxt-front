import { a as useRouter$1, l as useSeoMeta, m as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, ref, Transition, createCommentVNode, withDirectives, isRef, vModelText, Fragment, renderList, nextTick, onUnmounted, watch } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { u as useUserStore } from "./users-BEPo3Qg_.js";
import { u as useChat } from "./chat-CHhRtVU6.js";
import { useRouter, useRoute } from "vue-router";
import { u as useAuthStore } from "./auth-BBm1bsU7.js";
import { _ as _sfc_main$8 } from "./TheButton-RleONNaZ.js";
import { _ as _sfc_main$9 } from "./TheModal-DcnSgpbI.js";
import { _ as _sfc_main$a } from "./TheFileInput-DjqHWSnJ.js";
import { Preview } from "vue-advanced-cropper";
import { _ as _sfc_main$b, a as _sfc_main$c } from "./TheChatAvatar-DCM7IIyH.js";
import { toast } from "vue3-toastify";
import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { T as TheSceleton } from "./TheSceleton-CoixK6br.js";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useCompanies } from "./companies-CKV0eUOy.js";
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
import "./axios-DrAfoKzV.js";
import "axios";
import "./documents-DjbJ5PhU.js";
const _imports_0 = "" + __publicAssetsURL("icons/chat-search.svg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavHeaderSlot",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-2 cursor-pointer flex flex-col items-center justify-center gap-2.5 rounded-xl transition-all ease-in-out duration-300", { "bg-azure bg-opacity-10": __props.active }]
      }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "ChatNavHeaderSvg", {}, null, _push, _parent);
      _push(`</div><p class="text-[12px] text-center">`);
      ssrRenderSlot(_ctx.$slots, "ChatNavHeaderText", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/ChatNavHeaderSlot.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavHeaderElem",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-none" }, _attrs))}><div class="grid grid-cols-3 gap-2 transition-all duration-200 pb-3 border-b">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        active: unref(chat).displayChat === "all",
        onClick: ($event) => unref(chat).displayChat = "all"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.61123 12.1009C5.53872 11.6336 5.50109 11.1549 5.50109 10.6673C5.50109 5.51266 9.70726 1.33398 14.8958 1.33398C20.0844 1.33398 24.2905 5.51266 24.2905 10.6673C24.2905 11.8318 24.076 12.9464 23.6839 13.9742C23.6024 14.1877 23.5616 14.2945 23.5432 14.3778C23.5249 14.4604 23.5177 14.5185 23.5158 14.6031C23.5138 14.6884 23.5253 14.7824 23.5485 14.9703L24.0181 18.7856C24.069 19.1986 24.0944 19.4051 24.0257 19.5552C23.9655 19.6868 23.8586 19.7912 23.7258 19.8484C23.5741 19.9136 23.3682 19.8834 22.9565 19.8231L19.2404 19.2784C19.0463 19.2499 18.9493 19.2357 18.8609 19.2363C18.7735 19.2367 18.7131 19.2431 18.6274 19.2611C18.541 19.2793 18.4305 19.3207 18.2096 19.4034C17.1791 19.7895 16.0623 20.0007 14.8958 20.0007C14.4079 20.0007 13.9288 19.9637 13.461 19.8925M7.40465 24.6673C10.8637 24.6673 13.6678 21.7945 13.6678 18.2507C13.6678 14.7068 10.8637 11.834 7.40465 11.834C3.9456 11.834 1.14149 14.7068 1.14149 18.2507C1.14149 18.963 1.2548 19.6482 1.46395 20.2885C1.55236 20.5591 1.59656 20.6945 1.61108 20.7869C1.62622 20.8835 1.62887 20.9376 1.62323 21.0351C1.61783 21.1286 1.59445 21.2342 1.5477 21.4453L0.834473 24.6673L4.32841 24.1901C4.51912 24.1641 4.61447 24.1511 4.69774 24.1517C4.78541 24.1522 4.83195 24.157 4.91793 24.1742C4.99959 24.1904 5.12099 24.2332 5.36379 24.319C6.00349 24.5447 6.6901 24.6673 7.40465 24.6673Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25",
                height: "26",
                viewBox: "0 0 25 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.61123 12.1009C5.53872 11.6336 5.50109 11.1549 5.50109 10.6673C5.50109 5.51266 9.70726 1.33398 14.8958 1.33398C20.0844 1.33398 24.2905 5.51266 24.2905 10.6673C24.2905 11.8318 24.076 12.9464 23.6839 13.9742C23.6024 14.1877 23.5616 14.2945 23.5432 14.3778C23.5249 14.4604 23.5177 14.5185 23.5158 14.6031C23.5138 14.6884 23.5253 14.7824 23.5485 14.9703L24.0181 18.7856C24.069 19.1986 24.0944 19.4051 24.0257 19.5552C23.9655 19.6868 23.8586 19.7912 23.7258 19.8484C23.5741 19.9136 23.3682 19.8834 22.9565 19.8231L19.2404 19.2784C19.0463 19.2499 18.9493 19.2357 18.8609 19.2363C18.7735 19.2367 18.7131 19.2431 18.6274 19.2611C18.541 19.2793 18.4305 19.3207 18.2096 19.4034C17.1791 19.7895 16.0623 20.0007 14.8958 20.0007C14.4079 20.0007 13.9288 19.9637 13.461 19.8925M7.40465 24.6673C10.8637 24.6673 13.6678 21.7945 13.6678 18.2507C13.6678 14.7068 10.8637 11.834 7.40465 11.834C3.9456 11.834 1.14149 14.7068 1.14149 18.2507C1.14149 18.963 1.2548 19.6482 1.46395 20.2885C1.55236 20.5591 1.59656 20.6945 1.61108 20.7869C1.62622 20.8835 1.62887 20.9376 1.62323 21.0351C1.61783 21.1286 1.59445 21.2342 1.5477 21.4453L0.834473 24.6673L4.32841 24.1901C4.51912 24.1641 4.61447 24.1511 4.69774 24.1517C4.78541 24.1522 4.83195 24.157 4.91793 24.1742C4.99959 24.1904 5.12099 24.2332 5.36379 24.319C6.00349 24.5447 6.6901 24.6673 7.40465 24.6673Z",
                  stroke: "black",
                  "stroke-width": "1.4",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Все"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Все")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        active: unref(chat).displayChat === "users",
        onClick: ($event) => unref(chat).displayChat = "users"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M4.70349 21.6788C5.4132 20.0067 7.07021 18.834 9.00114 18.834H16.0011C17.9321 18.834 19.5891 20.0067 20.2988 21.6788M17.1678 10.084C17.1678 12.6613 15.0784 14.7507 12.5011 14.7507C9.92381 14.7507 7.83447 12.6613 7.83447 10.084C7.83447 7.50665 9.92381 5.41732 12.5011 5.41732C15.0784 5.41732 17.1678 7.50665 17.1678 10.084ZM24.1678 13.0007C24.1678 19.4439 18.9444 24.6673 12.5011 24.6673C6.05781 24.6673 0.834473 19.4439 0.834473 13.0007C0.834473 6.55733 6.05781 1.33398 12.5011 1.33398C18.9444 1.33398 24.1678 6.55733 24.1678 13.0007Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25",
                height: "26",
                viewBox: "0 0 25 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M4.70349 21.6788C5.4132 20.0067 7.07021 18.834 9.00114 18.834H16.0011C17.9321 18.834 19.5891 20.0067 20.2988 21.6788M17.1678 10.084C17.1678 12.6613 15.0784 14.7507 12.5011 14.7507C9.92381 14.7507 7.83447 12.6613 7.83447 10.084C7.83447 7.50665 9.92381 5.41732 12.5011 5.41732C15.0784 5.41732 17.1678 7.50665 17.1678 10.084ZM24.1678 13.0007C24.1678 19.4439 18.9444 24.6673 12.5011 24.6673C6.05781 24.6673 0.834473 19.4439 0.834473 13.0007C0.834473 6.55733 6.05781 1.33398 12.5011 1.33398C18.9444 1.33398 24.1678 6.55733 24.1678 13.0007Z",
                  stroke: "black",
                  "stroke-width": "1.4",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Личные"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Личные")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        active: unref(chat).displayChat === "groups",
        onClick: ($event) => unref(chat).displayChat = "groups"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M26.1678 24.5V22.1667C26.1678 19.9922 24.6805 18.1651 22.6678 17.647M18.5845 3.83922C20.2947 4.53151 21.5011 6.20819 21.5011 8.16667C21.5011 10.1251 20.2947 11.8019 18.5845 12.4941M20.3345 24.5C20.3345 22.3256 20.3345 21.2385 19.9792 20.3808C19.5056 19.2374 18.5971 18.3289 17.4536 17.8552C16.596 17.5 15.5089 17.5 13.3345 17.5H9.83447C7.66007 17.5 6.57288 17.5 5.71529 17.8552C4.57181 18.3289 3.66334 19.2374 3.1897 20.3808C2.83447 21.2385 2.83447 22.3256 2.83447 24.5M16.2511 8.16667C16.2511 10.744 14.1618 12.8333 11.5845 12.8333C9.00714 12.8333 6.91781 10.744 6.91781 8.16667C6.91781 5.58934 9.00714 3.5 11.5845 3.5C14.1618 3.5 16.2511 5.58934 16.2511 8.16667Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "29",
                height: "28",
                viewBox: "0 0 29 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M26.1678 24.5V22.1667C26.1678 19.9922 24.6805 18.1651 22.6678 17.647M18.5845 3.83922C20.2947 4.53151 21.5011 6.20819 21.5011 8.16667C21.5011 10.1251 20.2947 11.8019 18.5845 12.4941M20.3345 24.5C20.3345 22.3256 20.3345 21.2385 19.9792 20.3808C19.5056 19.2374 18.5971 18.3289 17.4536 17.8552C16.596 17.5 15.5089 17.5 13.3345 17.5H9.83447C7.66007 17.5 6.57288 17.5 5.71529 17.8552C4.57181 18.3289 3.66334 19.2374 3.1897 20.3808C2.83447 21.2385 2.83447 22.3256 2.83447 24.5M16.2511 8.16667C16.2511 10.744 14.1618 12.8333 11.5845 12.8333C9.00714 12.8333 6.91781 10.744 6.91781 8.16667C6.91781 5.58934 9.00714 3.5 11.5845 3.5C14.1618 3.5 16.2511 5.58934 16.2511 8.16667Z",
                  stroke: "black",
                  "stroke-width": "1.4",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Группы"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Группы")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/ChatNavHeaderElem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const titleChecked = false;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatGroupCreate",
  __ssrInlineRender: true,
  setup(__props) {
    const userCount = ref([]);
    const groupName = ref(null);
    const groupTitle = ref("");
    const chat = useChat();
    useRouter();
    useAuthStore();
    const setFocus = () => {
      nextTick(() => {
        var _a;
        (_a = groupName.value) == null ? void 0 : _a.focus();
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        class: "mb-6 !flex !items-center !justify-center gap-x-4 !p-2.5 hover:!bg-golden text-center w-full border !border-gainsboro rounded-full !text-black !transition-all ease-in-out duration-300",
        onClick: ($event) => {
          unref(chat).showGroupCreate = true;
          setFocus();
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + ${ssrInterpolate(_ctx.$t("Создать группу"))}`);
          } else {
            return [
              createTextVNode(" + " + toDisplayString(_ctx.$t("Создать группу")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(chat).showGroupCreate) {
        _push(ssrRenderComponent(_sfc_main$9, {
          onClick: ($event) => setFocus(),
          onShowModal: ($event) => {
            unref(chat).showGroupCreate = false;
            unref(chat).showGroupCreateChoice = false;
            groupTitle.value = "";
            unref(chat).file = "";
            unref(chat).src = "";
            unref(chat).fileUpload = null;
            unref(chat).results = { coordinates: null, image: null };
          },
          type: "resize"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex select-none gap-x-6 items-center"${_scopeId}><div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, { toward: "chat" }, null, _parent2, _scopeId));
              if (unref(chat).results.image) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Preview), {
                  class: "w-[80px] h-[80px] rounded-full",
                  image: unref(chat).results.image,
                  coordinates: unref(chat).results.coordinates
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><p class="${ssrRenderClass([{ "!text-red-400 transition-all": titleChecked }, "text-sm tracking-wider text-semiCyan transition-all"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("Название группы"))}</p><input${ssrRenderAttr("value", unref(groupTitle))} class="${ssrRenderClass([{ "border-b-red-400 transition-all": titleChecked }, "border-b-2 bg-transparent border-b-semiCyan !outline-none transition-all"])}" type="text"${_scopeId}></div></div><div class="flex select-none text-sm justify-end gap-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "chat",
                onClick: ($event) => {
                  unref(chat).showGroupCreate = false;
                  unref(chat).showGroupCreateChoice = false;
                  unref(chat).isGroup = false;
                  unref(chat).file = "";
                  unref(chat).src = "";
                  groupTitle.value = "";
                  unref(chat).fileUpload = null;
                  unref(chat).results = { coordinates: null, image: null };
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
                type: "chat",
                onClick: () => {
                  if (!unref(groupTitle).length || !unref(groupTitle).trim()) {
                    unref(toast).error("Заполните поле", { autoClose: 1500, theme: "auto" });
                    titleChecked = true;
                  } else {
                    unref(chat).showGroupCreate = false;
                    unref(chat).showGroupCreateChoice = true;
                  }
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Далее"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Далее")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => setFocus(),
                  class: "flex select-none gap-x-6 items-center"
                }, [
                  createVNode("div", {
                    class: "relative",
                    onMouseenter: ($event) => unref(chat).showImageChange = true,
                    onMouseleave: ($event) => unref(chat).showImageChange = false
                  }, [
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, { toward: "chat" })
                      ]),
                      _: 1
                    }),
                    unref(chat).results.image ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(unref(Preview), {
                        class: "w-[80px] h-[80px] rounded-full",
                        image: unref(chat).results.image,
                        coordinates: unref(chat).results.coordinates
                      }, null, 8, ["image", "coordinates"])
                    ])) : createCommentVNode("", true)
                  ], 40, ["onMouseenter", "onMouseleave"]),
                  createVNode("div", null, [
                    createVNode("p", {
                      class: ["text-sm tracking-wider text-semiCyan transition-all", { "!text-red-400 transition-all": titleChecked }]
                    }, toDisplayString(_ctx.$t("Название группы")), 3),
                    withDirectives(createVNode("input", {
                      ref_key: "groupName",
                      ref: groupName,
                      "onUpdate:modelValue": ($event) => isRef(groupTitle) ? groupTitle.value = $event : null,
                      class: ["border-b-2 bg-transparent border-b-semiCyan !outline-none transition-all", { "border-b-red-400 transition-all": titleChecked }],
                      onChange: ($event) => titleChecked = false,
                      type: "text"
                    }, null, 42, ["onUpdate:modelValue", "onChange"]), [
                      [vModelText, unref(groupTitle)]
                    ])
                  ])
                ], 8, ["onClick"]),
                createVNode("div", { class: "flex select-none text-sm justify-end gap-x-4" }, [
                  createVNode(_sfc_main$8, {
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreate = false;
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).isGroup = false;
                      unref(chat).file = "";
                      unref(chat).src = "";
                      groupTitle.value = "";
                      unref(chat).fileUpload = null;
                      unref(chat).results = { coordinates: null, image: null };
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$8, {
                    type: "chat",
                    onClick: () => {
                      if (!unref(groupTitle).length || !unref(groupTitle).trim()) {
                        unref(toast).error("Заполните поле", { autoClose: 1500, theme: "auto" });
                        titleChecked = true;
                      } else {
                        unref(chat).showGroupCreate = false;
                        unref(chat).showGroupCreateChoice = true;
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Далее")), 1)
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
      if (unref(chat).showGroupCreateChoice) {
        _push(ssrRenderComponent(_sfc_main$9, {
          type: "resizeSendWindow",
          class: "",
          onShowModal: ($event) => {
            unref(chat).showGroupCreateChoice = false;
            unref(chat).showGroupCreate = false;
            groupTitle.value = "";
            unref(chat).file = "";
            unref(chat).src = "";
            unref(chat).fileUpload = null;
            unref(chat).results = { coordinates: null, image: null };
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="tracking-wider px-4 pt-4"${_scopeId}>${ssrInterpolate(_ctx.$t("Добавить участников"))} <span class="text-sm text-gray-400 ml-2"${_scopeId}>${ssrInterpolate(unref(userCount).length + "/1000")}</span></p><div class="w-full px-4 relative flex items-center"${_scopeId}><div class="absolute rotate-90 ml-2"${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="Поиск..."${_scopeId}></div><!--[-->`);
              ssrRenderList(unref(chat).get_chat_list.results.filter((e) => !e.is_group), (item) => {
                _push2(ssrRenderComponent(_sfc_main$b, { item }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4"${_scopeId}>`);
              if (!unref(chat).showSettingChat) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).showGroupCreateChoice = false;
                    unref(chat).showGroupCreate = true;
                    setFocus();
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Назад"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Назад")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).showGroupCreateChoice = false;
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
              }
              if (!unref(chat).showSettingChat) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).showGroupCreateChoice = false;
                    unref(chat).isGroup = true;
                    unref(chat).createChatUser({ users: unref(userCount).filter((e) => e.id).map((e) => e.id), name: unref(groupTitle), photo: unref(chat).fileUpload }).then((res) => {
                      unref(chat).isGroup = false;
                    });
                  }
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
              } else {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  type: "chat",
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Добавить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("p", { class: "tracking-wider px-4 pt-4" }, [
                  createTextVNode(toDisplayString(_ctx.$t("Добавить участников")) + " ", 1),
                  createVNode("span", { class: "text-sm text-gray-400 ml-2" }, toDisplayString(unref(userCount).length + "/1000"), 1)
                ]),
                createVNode("div", { class: "w-full px-4 relative flex items-center" }, [
                  createVNode("div", { class: "absolute rotate-90 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("input", {
                    type: "text",
                    class: "w-full dark:bg-gray-700 outline-none pl-10 h-[50px]",
                    placeholder: "Поиск..."
                  })
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chat).get_chat_list.results.filter((e) => !e.is_group), (item) => {
                  return openBlock(), createBlock(_sfc_main$b, { item }, null, 8, ["item"]);
                }), 256)),
                createVNode("div", { class: "w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4" }, [
                  !unref(chat).showSettingChat ? (openBlock(), createBlock(_sfc_main$8, {
                    key: 0,
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).showGroupCreate = true;
                      setFocus();
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Назад")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(_sfc_main$8, {
                    key: 1,
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreateChoice = false;
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])),
                  !unref(chat).showSettingChat ? (openBlock(), createBlock(_sfc_main$8, {
                    key: 2,
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).isGroup = true;
                      unref(chat).createChatUser({ users: unref(userCount).filter((e) => e.id).map((e) => e.id), name: unref(groupTitle), photo: unref(chat).fileUpload }).then((res) => {
                        unref(chat).isGroup = false;
                      });
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(_sfc_main$8, {
                    key: 3,
                    type: "chat",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]))
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatGroup/ChatGroupCreate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavHeader",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useUserStore();
    const chat = useChat();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4" }, _attrs))}><form class="relative"><label for="search-chat" class="absolute top-2.5 right-3"><img${ssrRenderAttr("src", _imports_0)} alt="chat-search"></label><input id="search-chat"${ssrRenderAttr("value", unref(chat).searchElem)} type="text" placeholder="Поиск..." class="${ssrRenderClass([{ "max-md:hidden": !unref(chat).activeChatNav && unref(route).path !== "/base/chat" }, "w-full hover:bg-gray-50 focus:border-golden px-4 py-2.5 border rounded-full max-md:w-9/12 max-md:mx-auto block text-sm bg-white focus:bg-gray-50 text-black dark:focus:opacity-100 transition-all dark:bg-gray-600 dark:text-white outline-none"])}"></form>`);
      if (unref(chat).windowWidth < 768 || unref(chat).windowWidth > 768) {
        _push(`<div class="mt-6">`);
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavContentUser",
  __ssrInlineRender: true,
  props: {
    dragClass: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useUserStore();
    const chatStore = useChat();
    const user = useAuthStore();
    const route = useRoute();
    function message(chat_id) {
      let socket = new WebSocket(`wss://buildwithus.ai-softdev.com/ws/chat/${chat_id}?token=${nuxtStorage.localStorage.getData("token")}`);
      socket.onmessage = (data) => {
        let msg = JSON.parse(data.data.message);
        console.log(msg);
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      ssrRenderList((_a = unref(chatStore).get_chat_list.results) == null ? void 0 : _a.filter((e) => unref(chatStore).displayChat === "all" || e.is_group === true && unref(chatStore).displayChat === "groups" || e.is_group === false && unref(chatStore).displayChat === "users"), (chat) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/base/chat/${chat.id}`,
          onClick: ($event) => {
            unref(chatStore).activeChatNav = false;
            message(chat.id);
            unref(chatStore).showPinnedWindow = false;
            unref(chatStore).messageUpdate = {};
            unref(chatStore).messageForwarded = {};
            unref(chatStore).messageReplied = {};
            unref(chatStore).showChatInfo = false;
            unref(chatStore).showGroupCreateChoice = false;
          },
          class: ["flex justify-between px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-azure hover:!bg-opacity-10 cursor-pointer transition-all duration-200 py-2", { "dark:hover:!bg-semiCyan ": unref(route).path === `/base/chat/${chat.id}`, "hover:!bg-cyan": unref(route).path === `/base/chat/${chat.id}`, "!bg-blue-400": __props.dragClass && chat.id === chat.id }],
          onDragenter: ($event) => chat.id ? __props.dragClass = true : __props.dragClass = false,
          onDragleave: ($event) => __props.dragClass = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
            if (_push2) {
              _push2(`<div class="flex gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$c, { chat }, null, _parent2, _scopeId));
              _push2(`<div class="text-sm break-words"${_scopeId}>`);
              if (((_a2 = chat.user) == null ? void 0 : _a2.id) !== unref(user).user.id && ((_b = chat.user) == null ? void 0 : _b.id)) {
                _push2(`<p class="text-black dark:text-white font-bold"${_scopeId}>${ssrInterpolate(unref(user).user.id !== ((_c = chat.user) == null ? void 0 : _c.id) ? chat.user.first_name + " " + chat.user.last_name : unref(user).user.first_name + " " + unref(user).user.last_name)}</p>`);
              } else if (!((_d = chat.user) == null ? void 0 : _d.id) && !chat.is_group) {
                _push2(`<p class="text-black font-bold dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("Избранное"))}</p>`);
              } else if (chat.is_group) {
                _push2(`<p class="text-black dark:text-white font-bold"${_scopeId}>${ssrInterpolate(chat.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (chat.last_message.text && !chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(((_e = chat.last_message.text) == null ? void 0 : _e.length) > 15 ? chat.last_message.text.slice(0, 15) + "..." : chat.last_message.text)}</p>`);
              } else if (chat.last_message.text && chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 15) + "..." : chat.last_message.file_name)}</span>${ssrInterpolate(", " + chat.last_message.text)}</p>`);
              } else if (!chat.last_message.text && chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 20) + "..." : chat.last_message.file_name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="text-[12px] flex gap-x-1"${_scopeId}>`);
              if ((_f = chat.user) == null ? void 0 : _f.id) {
                _push2(`<div${_scopeId}>`);
                if (chat.last_message.sender.id === unref(user).user.id) {
                  _push2(`<svg class="${ssrRenderClass([{ "fill-white": unref(route).path === `/base/chat/${chat.id}` }, "fill-semiCyan"])}" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}>`);
                  if (((_g = chat.last_message.text) == null ? void 0 : _g.length) > 0) {
                    _push2(`<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"${_scopeId}></path>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.last_message.read !== false) {
                    _push2(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"${_scopeId}></path>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="${ssrRenderClass([{ "text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(chat.last_message.created_at ? new Date(chat.last_message.created_at).toLocaleTimeString().slice(0, 5) : "")}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_sfc_main$c, { chat }, null, 8, ["chat"]),
                  createVNode("div", { class: "text-sm break-words" }, [
                    ((_h = chat.user) == null ? void 0 : _h.id) !== unref(user).user.id && ((_i = chat.user) == null ? void 0 : _i.id) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-black dark:text-white font-bold"
                    }, toDisplayString(unref(user).user.id !== ((_j = chat.user) == null ? void 0 : _j.id) ? chat.user.first_name + " " + chat.user.last_name : unref(user).user.first_name + " " + unref(user).user.last_name), 1)) : !((_k = chat.user) == null ? void 0 : _k.id) && !chat.is_group ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-black font-bold dark:text-white"
                    }, toDisplayString(_ctx.$t("Избранное")), 1)) : chat.is_group ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "text-black dark:text-white font-bold"
                    }, toDisplayString(chat.name), 1)) : createCommentVNode("", true),
                    chat.last_message.text && !chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 3,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, toDisplayString(((_l = chat.last_message.text) == null ? void 0 : _l.length) > 15 ? chat.last_message.text.slice(0, 15) + "..." : chat.last_message.text), 3)) : chat.last_message.text && chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 4,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, [
                      createVNode("span", null, toDisplayString(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 15) + "..." : chat.last_message.file_name), 1),
                      createTextVNode(toDisplayString(", " + chat.last_message.text), 1)
                    ], 2)) : !chat.last_message.text && chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 5,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, toDisplayString(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 20) + "..." : chat.last_message.file_name), 3)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "text-[12px] flex gap-x-1" }, [
                  ((_m = chat.user) == null ? void 0 : _m.id) ? (openBlock(), createBlock("div", { key: 0 }, [
                    chat.last_message.sender.id === unref(user).user.id ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: ["fill-semiCyan", { "fill-white": unref(route).path === `/base/chat/${chat.id}` }],
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      ((_n = chat.last_message.text) == null ? void 0 : _n.length) > 0 ? (openBlock(), createBlock("path", {
                        key: 0,
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"
                      })) : createCommentVNode("", true),
                      chat.last_message.read !== false ? (openBlock(), createBlock("path", {
                        key: 1,
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"
                      })) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  createVNode("p", {
                    class: ["text-gray-400", { "text-white": unref(route).path === `/base/chat/${chat.id}` }]
                  }, toDisplayString(chat.last_message.created_at ? new Date(chat.last_message.created_at).toLocaleTimeString().slice(0, 5) : ""), 3)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavContentUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavContent",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const chatStore = useChat();
    useAuthStore();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[80%] max-md:h-[80%] overflow-y-auto mt-4 max-md:w-full" }, _attrs))}>`);
      if (unref(chatStore).searchElem === "") {
        _push(`<div class="flex flex-col mb-20">`);
        if (unref(userStore).get_user_list.results) {
          _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        } else {
          _push(`<!--[-->`);
          ssrRenderList(4, (i) => {
            _push(`<div class="flex justify-center relative flex-col items-center mb-2">`);
            _push(ssrRenderComponent(TheSceleton, {
              class: "dark:opacity-20 opacity-60",
              width: "90%",
              height: "70px",
              "border-radius": "10px"
            }, null, _parent));
            _push(`<div class="absolute left-6 max-md:left-10 flex items-center">`);
            _push(ssrRenderComponent(TheSceleton, {
              class: "dark:opacity-20",
              width: "50px",
              height: "50px",
              "border-radius": "100%"
            }, null, _parent));
            _push(`<div class="ml-4 flex flex-col dark:opacity-20 gap-y-2">`);
            _push(ssrRenderComponent(TheSceleton, {
              class: "",
              width: "150px",
              height: "10px",
              "border-radius": "4px"
            }, null, _parent));
            _push(ssrRenderComponent(TheSceleton, {
              class: "",
              width: "150px",
              height: "10px",
              "border-radius": "4px"
            }, null, _parent));
            _push(`</div></div></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatStore).searchElem !== "") {
        _push(`<div class=""><!--[-->`);
        ssrRenderList(unref(userStore).get_user_search.results, (userSearchList) => {
          var _a;
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/base/chat/${(_a = unref(chatStore).get_user_chat) == null ? void 0 : _a.id}`,
            onClick: ($event) => {
              var _a2;
              userSearchList.id !== ((_a2 = unref(chatStore).get_user_chat.user) == null ? void 0 : _a2.id) ? unref(chatStore).createChatUser({ user_id: userSearchList.id }) : () => {
                unref(chatStore).flag = false;
                ("nextTick" in _ctx ? _ctx.nextTick : unref(nextTick))(() => {
                  unref(chatStore).flag = true;
                });
              };
              unref(chatStore).showPinnedWindow = false;
              unref(chatStore).searchElem = "";
              unref(chatStore).activeChatNav = false;
            },
            class: ["flex items-center px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-azure !bg-opacity-10 cursor-pointer transition-all duration-200 p-1", { "dark:hover:!bg-semiCyan": unref(route).path === `/base/chat/${userSearchList.id}`, "hover:!bg-cyan": unref(route).path === `/base/chat/${userSearchList.id}` }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", userSearchList.photo)} alt="use-photo"${_scopeId}><p class="text-sm break-words font-bold"${_scopeId}>${ssrInterpolate(userSearchList.first_name + " " + userSearchList.last_name)}</p>`);
              } else {
                return [
                  createVNode("img", {
                    class: "w-[50px] h-[50px] rounded-full",
                    src: userSearchList.photo,
                    alt: "use-photo"
                  }, null, 8, ["src"]),
                  createVNode("p", { class: "text-sm break-words font-bold" }, toDisplayString(userSearchList.first_name + " " + userSearchList.last_name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatNav",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    useRouter();
    useRoute();
    useUserStore();
    const chatStore = useChat();
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-da89c0b2>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "",
        onDragenter: ($event) => unref(chatStore).showDragInfo = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ChatNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-da89c0b2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    ref(true);
    const route = useRoute();
    const router = useRouter$1();
    const chatStore = useChat();
    const userStore = useUserStore();
    const loadAuthStore = useAuthStore();
    const company = useCompanies();
    chatStore.loadChatList({ page: 1, limit: 100 });
    userStore.loadUserList({ query: "", user_type: "user-list", page: 1, limit: 1e4 });
    onUnmounted(() => {
      chatStore.showGroupCreateChoice = false;
      chatStore.showGroupCreate = false;
      chatStore.file = "";
      chatStore.src = "";
      chatStore.fileUpload = null;
      chatStore.results = { coordinates: null, image: null };
    });
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
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "chat");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "Чат",
      description: "Интерактивный чат для пользователей"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "!mx-0 !p-10 max-[768px]:!p-0" }, _attrs))}><div class="bg-white border flex w-full border-t border-t-gray-100 dark:text-white rounded-3xl shadow-chat overflow-hidden"><div class="${ssrRenderClass([{ "max-md:w-0": !unref(chatStore).activeChatNav || unref(route).path === `/base/chat/${unref(route).params.id}`, "max-md:w-full ": unref(route).path === `/base/chat`, "w-[320px]": !unref(userStore).get_user_list.results || !unref(chatStore).activeChatNav }, "max-md:absolute h-screen overflow-hidden relative z-[12] rounded-l-3xl dark:bg-gray-700 border-r bg-white transition-all duration-300 w-[320px]"])}">`);
      _push(ssrRenderComponent(ChatNav, null, null, _parent));
      _push(`</div><div class="w-11/12 relative overflow-hidden max-lg:w-9/12 max-md:w-full h-screen">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(route).path === "/base/chat") {
        _push(`<div class="flex items-center justify-center my-auto w-full h-full text-center rounded-full px-2"><p class="bg-black bg-opacity-5 px-10 py-2 rounded-full">${ssrInterpolate(_ctx.$t("Выберите контакт для сообщения"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=chat-9nhS_YSO.js.map
