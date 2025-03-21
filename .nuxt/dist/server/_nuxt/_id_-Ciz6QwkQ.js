import { defineComponent, watchEffect, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./TheTextContent-Bd9flYOl.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-CyXOlUWJ.js";
import { u as useCompanies } from "./companies-BPYsXbQC.js";
import { useRoute } from "vue-router";
import "./nuxt-link-CNB8XBKy.js";
import "../server.mjs";
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
import "./axios-BwlLlcxc.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const newsItem = useCompanies();
    const route = useRoute();
    watchEffect(() => {
      newsItem.loadNews({ id: route.params.id });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(newsItem).news.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(newsItem).news.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/companies" }, {
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
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(newsItem).news.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(newsItem).news.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-Ciz6QwkQ.js.map
