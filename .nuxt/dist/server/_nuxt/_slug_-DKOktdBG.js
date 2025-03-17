import { defineComponent, ref, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useDocumentStore } from "./documents-CQYKf9u4.js";
import { useRoute } from "vue-router";
import { u as useAuthStore } from "./auth-ByKg_prd.js";
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
import "./axios-DGmy-4pO.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    ref(false);
    ref("");
    ref(null);
    const fileBase64 = ref(null);
    const document = useDocumentStore();
    const authStore = useAuthStore();
    async function fetchFileAsBase64() {
      try {
        const url = authStore.get_server_domain + document.documentItem.file;
        const response = await fetch(url);
        if (!response.ok)
          throw new Error("Ошибка при загрузке файла");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Content = reader.result.split(",")[1];
          fileBase64.value = base64Content;
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Ошибка загрузки файла:", error);
      }
    }
    watch(() => document.documentItem, (newValue) => {
      console.log(authStore.get_server_domain + document.documentItem.file);
      fetchFileAsBase64();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5" }, _attrs))}><div><p> Выберите ключ: </p><select name="key"></select><form id="myForm"><input type="file" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]"><button type="submit">CHECK</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/documents/signification/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DKOktdBG.js.map
