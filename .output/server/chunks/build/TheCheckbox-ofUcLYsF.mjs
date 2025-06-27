import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useChat } from './chat-D3-ILc9-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheCheckbox",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    check: {
      type: Boolean,
      default: true
    },
    t: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "container mt-4 w-[250px]" }, _attrs))} data-v-47be4060>`);
      if (__props.t !== "checkboxChat") {
        _push(`<span class="text-black dark:text-white" data-v-47be4060>${ssrInterpolate((_a = __props.item) == null ? void 0 : _a.name)}</span>`);
      } else {
        _push(`<span class="text-black dark:text-white" data-v-47be4060>${ssrInterpolate(_ctx.$t("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F"))}</span>`);
      }
      if (__props.t !== "checkboxChat") {
        _push(`<input${ssrRenderAttrs(mergeProps({
          type: "checkbox",
          checked: __props.item.value
        }, _ctx.$attrs))} data-v-47be4060>`);
      } else {
        _push(`<input type="checkbox"${ssrIncludeBooleanAttr(unref(chat).checkboxForwarded) ? " checked" : ""} data-v-47be4060>`);
      }
      _push(`<span class="checkmark" data-v-47be4060></span></label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47be4060"]]);

export { TheCheckbox as T };
//# sourceMappingURL=TheCheckbox-ofUcLYsF.mjs.map
