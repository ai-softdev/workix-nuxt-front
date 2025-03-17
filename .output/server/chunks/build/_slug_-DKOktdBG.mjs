import { defineComponent, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useDocumentStore } from './documents-CQYKf9u4.mjs';
import { useRoute } from 'vue-router';
import { u as useAuthStore } from './auth-ByKg_prd.mjs';
import './server.mjs';
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
    watch(() => document.documentItem, (newValue) => {
      console.log(authStore.get_server_domain + document.documentItem.file);
      fetchFileAsBase64();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5" }, _attrs))}><div><p> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043B\u044E\u0447: </p><select name="key"></select><form id="myForm"><input type="file" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]"><button type="submit">CHECK</button></form></div></div>`);
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
//# sourceMappingURL=_slug_-DKOktdBG.mjs.map
