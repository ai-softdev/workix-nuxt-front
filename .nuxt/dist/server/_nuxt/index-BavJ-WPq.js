import { u as useHead, m as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useAuthStore } from "./auth-DQm4aBcD.js";
import { useRouter } from "vue-router";
import "nuxt-storage/nuxt-storage.js";
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
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    loginShow: Boolean,
    activeEyes: Boolean
  },
  setup(__props) {
    useRouter();
    useAuthStore();
    ref({
      email: "",
      password: ""
    });
    useHead(
      {
        titleTemplate: "Авторизация • ERP"
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BavJ-WPq.js.map
