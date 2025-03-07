import { a as useRouter, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useStorageStore } from "./storage-B2GwZ5K-.js";
import { useRoute } from "vue-router";
import { _ as _sfc_main$1 } from "./StorageCard-DCRLamLs.js";
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
import "./axios-BEdV6jPT.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
import "./nuxt-link-CNB8XBKy.js";
import "./auth-D7w5JRdb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const storageStore = useStorageStore();
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex gap-4 flex-wrap"><!--[-->`);
      ssrRenderList(unref(storageStore).currentCategory.items, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          class: "flex flex-col gap-2 max-[800px]:justify-center",
          from: false,
          item,
          key: item.id
        }, null, _parent));
      });
      _push(`<!--]--></div><div>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/storage/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Dq9iXFIL.js.map
