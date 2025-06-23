import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';

const _imports_0 = "" + publicAssetsURL("icons/modal-exit.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheModal",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[10000]"><div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen z-[9999]"></div><div class="${ssrRenderClass([{
          "!w-max dark:!bg-gray-700": __props.type === "resize",
          "!w-4/12 dark:!bg-gray-700 !p-0": __props.type === "resizeSendWindow",
          "!w-[400px] dark:!bg-gray-700 !p-0": __props.type === "resizeInfoWindow"
        }, "dark:bg-gray-600 bg-white z-[10000] rounded-3xl w-7/12 max-md:w-10/12 max-sm:w-11/12 max-h-[70%] relative p-5 max-sm:p-3 overflow-y-auto"])}"><button type="button" class="bg-porcelain cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full absolute top-6 right-6 z-10"><img${ssrRenderAttr("src", _imports_0)} alt="modal-exit"></button>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TheModal-CnBva0fQ.mjs.map
