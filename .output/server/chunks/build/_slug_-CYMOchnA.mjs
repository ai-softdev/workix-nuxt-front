import { a as useRouter } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useDocumentStore } from './documents-BO3rBbpA.mjs';
import { useRoute } from 'vue-router';
import { u as useAuthStore } from './auth-BBm1bsU7.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

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
          throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0444\u0430\u0439\u043B\u0430");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Content = reader.result.split(",")[1];
          fileBase64.value = base64Content;
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u0430:", error);
      }
    }
    watch(() => documentStore.documentItem, (newValue) => {
      console.log(authStore.get_server_domain + documentStore.documentItem.file);
      fetchFileAsBase64();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 flex-col border p-3 mt-4 rounded-lg" }, _attrs))}><p class="text-xl font-medium"> \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: &quot;${ssrInterpolate(unref(documentStore).documentItem.title)}&quot; </p><div class="flex items-center gap-4 flex-col"><select id="select-key" name="key" class="p-3 border-white rounded-lg bg-bgWhite text-black"></select><button class="border p-2 rounded-lg"> \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043B\u044E\u0447 </button></div>`);
      if (unref(notSelected)) {
        _push(`<p class="text-red-500 mt-2">\u0412\u044B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u043A\u043B\u044E\u0447</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(notSelected)) {
        _push(`<p class="text-green-500 mt-2">\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u043A\u043B\u044E\u0447: ${ssrInterpolate(unref(selectedTitle).CN)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form id="myForm" class="mt-4"><button type="submit" class="border py-3 px-4 rounded-lg text-xl bg-[#8881]"> \u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/documents/signification/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CYMOchnA.mjs.map
