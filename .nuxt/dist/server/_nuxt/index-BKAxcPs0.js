import { a as useRouter$1, l as useSeoMeta } from "../server.mjs";
import { mergeProps, useSSRContext, ref, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, watch } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import VueTree from "@ssthouse/vue3-tree-chart";
import { u as useTreeStore, _ as _sfc_main$3 } from "./TheButton-Bz9xS3BF.js";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
import { useRoute, useRouter } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useCompanies } from "./companies-DK9t2HLw.js";
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
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
const _imports_0 = "" + __publicAssetsURL("img/map-bg.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center w-9 h-9 !rounded-xl !border" }, _attrs))} data-v-04c189c6>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheTreeButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheTreeButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-04c189c6"]]);
const _sfc_main$1 = {
  __name: "TreeContent",
  __ssrInlineRender: true,
  props: {
    treeConfig: {},
    treeFullScreen: {
      type: Boolean,
      default: false
    },
    treeShowUserInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authStore = useAuthStore();
    const treeStore = useTreeStore();
    useRoute();
    const router = useRouter();
    const richMediaData = ref();
    const treeUserInfo = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-db988db2><div class="relative" data-v-db988db2><div class="${ssrRenderClass([{ "!fixed z-[1000] left-0 top-0 !h-screen !w-screen flex !bg-opacity-60 !rounded-none !border-0 !bg-black justify-center items-center": unref(treeStore).treeFullScreen === true }, "relative bg-white border w-full h-[80vh] mx-auto rounded-2xl overflow-hidden dark:border-gray-400 shadow dark:shadow-gray-400 transition-all duration-300"])}" data-v-db988db2><div class="${ssrRenderClass([{ "!top-8 !right-8": unref(treeStore).treeFullScreen === true }, "absolute top-10 w-fit h-fit flex items-center gap-4 bg-white rounded-3xl border p-5 max-md:flex max-md:justify-center gap-x-2 right-10 z-[1001]"])}" data-v-db988db2>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><img class="z-[9] w-full h-full absolute top-0 right-0 bottom-0 object-cover block"${ssrRenderAttr("src", _imports_0)} alt="map-bg" data-v-db988db2>`);
      _push(ssrRenderComponent(unref(VueTree), {
        ref: "scaleTree",
        class: "mx-auto select-none relative rounded-2xl w-full h-full z-[1000]",
        dataset: richMediaData.value = [...unref(treeStore).get_list],
        config: __props.treeConfig = { nodeWidth: 200, nodeHeight: 150, levelHeight: 200, nodeSpacing: 400 }
      }, {
        node: withCtx(({ node, collapsed }, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "shadow-md dark:shadow-gray-400 ": node.id === ((_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id) }, "py-5 px-6 bg-porcelain transition-all rounded-3xl border"])}" data-v-db988db2${_scopeId}><p class="text-center break-words" style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-db988db2${_scopeId}>${ssrInterpolate(node.name)}</p><p class="text-center break-words" style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-db988db2${_scopeId}>${ssrInterpolate(((_b2 = node.first_name) == null ? void 0 : _b2.length) > 10 && ((_c2 = node.last_name) == null ? void 0 : _c2.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name)}</p><p class="text-sm text-center px-4 py-2 rounded-3xl text-mediumGray border bg-white mt-4" data-v-db988db2${_scopeId}>${ssrInterpolate(node.position)}</p></div>`);
          } else {
            return [
              createVNode("div", {
                onDblclick: ($event) => treeUserInfo.value = { id: node.id, first_name: node.first_name, last_name: node.last_name, photo_url: node.photo_url, position: node.position, department_id: node.department_id, department: node.department, role: node.role },
                class: ["py-5 px-6 bg-porcelain transition-all rounded-3xl border", { "shadow-md dark:shadow-gray-400 ": node.id === ((_d2 = unref(treeUserInfo)) == null ? void 0 : _d2.id) }]
              }, [
                createVNode("p", {
                  class: "text-center break-words",
                  style: { "font-weight": "bold" }
                }, toDisplayString(node.name), 1),
                createVNode("p", {
                  class: "text-center break-words",
                  style: { "font-weight": "bold" }
                }, toDisplayString(((_e2 = node.first_name) == null ? void 0 : _e2.length) > 10 && ((_f = node.last_name) == null ? void 0 : _f.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name), 1),
                createVNode("p", { class: "text-sm text-center px-4 py-2 rounded-3xl text-mediumGray border bg-white mt-4" }, toDisplayString(node.position), 1)
              ], 42, ["onDblclick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute max-md:hidden flex select-none gap-x-2 top-10 right-10 z-10" data-v-db988db2>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M19 19L14.65 14.65M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M19 19L14.65 14.65M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2${_scopeId}><path d="M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14",
                  stroke: "black",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "!rounded-none dark:!bg-gray-700": unref(treeStore).treeFullScreen, "!w-0 ": !unref(treeUserInfo), "!w-[25%] dark:border-r-gray-400 border-r ": unref(treeUserInfo) }, "absolute left-0 top-0 rounded-tl-2xl rounded-bl-2xl dark:bg-gray-700 bg-white z-30 h-full transition-all duration-200"])}" data-v-db988db2>`);
      if (unref(treeUserInfo)) {
        _push(`<div class="relative" data-v-db988db2><button class="${ssrRenderClass([{ "fixed !top-1 !p-[3px]": unref(treeStore).treeFullScreen }, "absolute top-2 right-0 p-1 border-t border-l border-b"])}" data-v-db988db2><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db988db2><path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db988db2></path></svg></button><div class="mx-auto mt-4 gap-y-2 px-2 flex flex-col justify-center items-center" data-v-db988db2><img class="w-[70px] h-[70px] rounded-full mt-10 dark:border-none border"${ssrRenderAttr("src", unref(authStore).get_server_domain + ((_a = unref(treeUserInfo)) == null ? void 0 : _a.photo_url))} alt="" data-v-db988db2><div class="dark:text-white text-black text-center" data-v-db988db2><p class="text-xl break-words" data-v-db988db2>${ssrInterpolate(((_b = unref(treeUserInfo)) == null ? void 0 : _b.first_name) + " " + ((_c = unref(treeUserInfo)) == null ? void 0 : _c.last_name))}</p><p class="text-sm" data-v-db988db2>${ssrInterpolate((_d = unref(treeUserInfo)) == null ? void 0 : _d.position)}</p></div><div data-v-db988db2><p class="break-words text-center" data-v-db988db2>${ssrInterpolate(_ctx.$t("Департамент:"))} <span data-v-db988db2>${ssrInterpolate((_e = unref(treeUserInfo)) == null ? void 0 : _e.department)}</span></p></div></div><div class="px-2 my-6 flex flex-wrap justify-center gap-2" data-v-db988db2>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "treeBtn",
          onClick: ($event) => {
            var _a2;
            return unref(router).push(`/base/users/${(_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id}`);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Перейти"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Перейти")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Департамент"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Департамент")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Выдать задание"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Выдать задание")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tree/TreeContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TreeContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-db988db2"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    treeFullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useTreeStore();
    const companies = useCompanies();
    companies.loadCurrentCompany();
    const router = useRouter$1();
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
      title: "Дерево",
      description: `Древовидная структура компании ${companies.company.name}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="dark:text-white text-3xl font-bold mb-6">${ssrInterpolate(_ctx.$t("Дерево " + unref(companies).company.name))}</p>`);
      _push(ssrRenderComponent(TreeContent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tree/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BKAxcPs0.js.map
