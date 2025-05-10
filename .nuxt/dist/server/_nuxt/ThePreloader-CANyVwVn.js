import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-2be646fe><div class="preloader absolute loading" data-v-2be646fe><span class="slice" data-v-2be646fe></span><span class="slice" data-v-2be646fe></span><span class="slice" data-v-2be646fe></span><span class="slice" data-v-2be646fe></span><span class="slice" data-v-2be646fe></span><span class="slice" data-v-2be646fe></span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/ThePreloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ThePreloader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2be646fe"]]);
export {
  ThePreloader as T
};
//# sourceMappingURL=ThePreloader-CANyVwVn.js.map
