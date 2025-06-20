import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatUserCheckbox",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const user = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (!__props.item.is_group && __props.item.user.department) {
        _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center gap-x-4 relative py-2 px-6 text-black transition-all cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-200" }, _attrs))}><div class="relative max-w-[50px] max-h-[50px]"><img${ssrRenderAttr("src", unref(user).get_server_domain + __props.item.user.photo)} class="${ssrRenderClass([{ "!p-[2px] transition-all !border": __props.item.value }, "rounded-full w-full dark:border-0 border"])}" alt="">`);
        if (__props.item.value) {
          _push(`<div class="${ssrRenderClass([{ "!border-2 !border-semiCyan text-white transition-all": __props.item.value === true, "dark:border-none": __props.item.value === false }, "absolute top-0 rounded-full w-[50px] h-[50px]"])}"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.value) {
          _push(`<div class="absolute bottom-0 right-0"><svg class="bg-semiCyan rounded-full stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L10 16L17 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="relative z-10 dark:text-white">${ssrInterpolate(((_b = (_a = __props.item) == null ? void 0 : _a.user) == null ? void 0 : _b.first_name) + " " + ((_d = (_c = __props.item) == null ? void 0 : _c.user) == null ? void 0 : _d.last_name))}</span><input type="checkbox" class="hidden"${ssrIncludeBooleanAttr(__props.item.value) ? " checked" : ""}><span class="w-full h-full absolute top-0 left-0"></span></label>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatUserCheckbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheChatAvatar",
  __ssrInlineRender: true,
  props: {
    chat: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const domain = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      if (((_a = __props.chat.user) == null ? void 0 : _a.id) !== unref(domain).user.id && ((_b = __props.chat.user) == null ? void 0 : _b.id)) {
        _push(`<div class="w-[50px]"><img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", unref(domain).get_server_domain + __props.chat.user.photo)} alt=""></div>`);
      } else if (__props.chat.is_group) {
        _push(`<div>`);
        if ((_c = __props.chat) == null ? void 0 : _c.photo_url) {
          _push(`<img${ssrRenderAttr("src", unref(domain).get_server_domain + ((_d = __props.chat) == null ? void 0 : _d.photo_url))} class="w-[50px] h-[50px] rounded-full" alt="">`);
        } else {
          _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]"><!--[-->`);
          ssrRenderList(__props.chat.name.split(" ").slice(0, 2), (chatName) => {
            _push(`<p class="uppercase font-bold">${ssrInterpolate(chatName[0])}</p>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      } else if (!((_e = __props.chat.user) == null ? void 0 : _e.id) && !__props.chat.is_group) {
        _push(`<div class="rounded-full bg-azure flex items-center justify-center w-[50px] h-[50px]"><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H10.2C11.8802 1 12.7202 1 13.362 1.32698C13.9265 1.6146 14.3854 2.07354 14.673 2.63803C15 3.27976 15 4.11984 15 5.8V19L8 15L1 19V5.8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/TheChatAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=TheChatAvatar-C7zFbNKN.js.map
