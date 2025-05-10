import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheSceleton",
  __ssrInlineRender: true,
  props: {
    height: String,
    width: String,
    borderRadius: String
  },
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--567f2d1c": __props.height,
        "--5204a01b": __props.width,
        "--a3b7a02e": __props.borderRadius
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "placeholder" }, _attrs, _cssVars))} data-v-1adc958b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheSceleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheSceleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1adc958b"]]);
export {
  TheSceleton as T
};
//# sourceMappingURL=TheSceleton-DUPRb_8O.js.map
