import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { defineComponent, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { useRoute } from "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheBreadcrumbs",
  __ssrInlineRender: true,
  props: {
    breadcrumbLink: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["text-[15px] !bg-transparent border-none font-light transition-all", {
          "dark:hover:text-gray-200 hover:text-gray-500 hover:underline text-mediumGray": __props.breadcrumbLink.length,
          "text-darkJungle": __props.breadcrumbLink.length === 0
        }],
        to: __props.breadcrumbLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheBreadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TheBreadcrumbs-BV4tnjik.js.map
