import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-Dhv7ZIvz.mjs';

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
        _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]"><svg class="stroke-white" width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
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

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=TheChatAvatar-BVHFib6v.mjs.map
