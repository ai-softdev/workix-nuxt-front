import { a as useRouter } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { u as useDocumentStore } from "./documents-C7oLX33L.js";
import { useRoute } from "vue-router";
import { u as useAuthStore } from "./auth-BZDR3g5x.js";
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    ref(false);
    ref("");
    const notSelected = ref(true);
    const selectedTitle = ref("");
    ref("");
    ref(null);
    const fileBase64 = ref(null);
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    async function fetchFileAsBase64() {
      try {
        const url = authStore.get_server_domain + documentStore.documentItem.file;
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
    watch(() => documentStore.documentItem, (newValue) => {
      console.log(authStore.get_server_domain + documentStore.documentItem.file);
      fetchFileAsBase64();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 flex-col border p-3 mt-4 rounded-lg" }, _attrs))}><p class="text-xl font-medium"> Документ: &quot;${ssrInterpolate(unref(documentStore).documentItem.title)}&quot; </p><div class="flex items-center gap-4 flex-col"><select id="select-key" name="key" class="p-3 border-white rounded-lg bg-bgWhite text-black"></select><button class="border p-2 rounded-lg"> Выбрать ключ </button></div>`);
      if (unref(notSelected)) {
        _push(`<p class="text-red-500 mt-2">Вы не выбрали ключ</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(notSelected)) {
        _push(`<p class="text-green-500 mt-2">Вы выбрали ключ: ${ssrInterpolate(unref(selectedTitle).CN)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form id="myForm" class="mt-4"><button type="submit" class="border py-3 px-4 rounded-lg text-xl bg-[#8881]"> Подписать </button></form></div>`);
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
//# sourceMappingURL=_slug_-Bu-anMou.js.map
