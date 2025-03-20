import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useStorageStore } from "./storage-C2BgxPcd.js";
import { useRoute } from "vue-router";
import { u as useAuthStore } from "./auth-Dhv7ZIvz.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StorageCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    from: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useStorageStore();
    const authStore = useAuthStore();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.from ? unref(route).path + `/${__props.item.slug}/${__props.item.nestedSlug}` : unref(route).path + `/${__props.item.slug}`,
        class: "hover:bg-blueSemiLight hover:text-white transition-all h-max duration-200 p-2 rounded-xl w-[200px]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-none p-2 rounded-xl"${_scopeId}><img${ssrRenderAttr("src", unref(authStore).get_server_domain + __props.item.photo)} class="rounded-xl max-h-[160px] h-full mx-auto border dark:border-none" alt=""${_scopeId}></div><div class="flex text-center justify-center items-center"${_scopeId}><p class="tracking-wider break-words mt-4"${_scopeId}>${ssrInterpolate(__props.item.name)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-none p-2 rounded-xl" }, [
                createVNode("img", {
                  src: unref(authStore).get_server_domain + __props.item.photo,
                  class: "rounded-xl max-h-[160px] h-full mx-auto border dark:border-none",
                  alt: ""
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "flex text-center justify-center items-center" }, [
                createVNode("p", { class: "tracking-wider break-words mt-4" }, toDisplayString(__props.item.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Storage/UI/StorageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=StorageCard-CTIpFlz7.js.map
