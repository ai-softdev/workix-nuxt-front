import { defineComponent, toRef, computed, ref, watch, useSSRContext, provide, h as h$1, cloneVNode, reactive, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick, toRaw, getCurrentInstance, mergeProps, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, createTextVNode, Transition } from 'vue';
import { _ as __nuxt_component_3 } from './Icon-jARSlWRz.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useUI, s as selectMenu, a as usePopper, g as get } from './selectMenu-BN_nbNrV.mjs';
import { z as mergeConfig, A as appConfig, E as useDebounceFn, F as computedAsync, D as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { o as defu } from '../runtime.mjs';

const ATTR_KEY = "data-n-ids";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = key.slice(1);
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + ":" + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + ":" + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50",
    padding: {
      "2xs": "ps-[85px]",
      xs: "ps-[87px]",
      sm: "ps-[96px]",
      md: "ps-[98px]",
      lg: "ps-[100px]",
      xl: "ps-[109px]"
    }
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      xs: "ps-8",
      sm: "ps-9",
      md: "ps-10",
      lg: "ps-11",
      xl: "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      xs: "pe-8",
      sm: "pe-9",
      md: "pe-10",
      lg: "pe-11",
      xl: "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-400 dark:text-gray-500",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
const uploadFile = (event, item) => {
  item.file = event;
  if (event.type) {
    item.src = URL.createObjectURL(item.file);
    if (item.file.size == 0) {
      setTimeout(() => {
        item.fileSizeInfo = true;
      }, 0);
      setTimeout(() => {
        item.fileSizeInfo = false;
        item.file = "";
        item.src = "";
      }, 3e3);
    }
  }
};
const viewSelect = [
  {
    label: "\u0421\u043F\u0438\u0441\u043E\u043A",
    icon: "i-heroicons-list-bullet",
    type: "list",
    svg: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.5 2.16602H7.33333M16.5 13.8327H7.33333M16.5 7.99935H7.33333M4 2.16602C4 2.85637 3.44036 3.41602 2.75 3.41602C2.05964 3.41602 1.5 2.85637 1.5 2.16602C1.5 1.47566 2.05964 0.916016 2.75 0.916016C3.44036 0.916016 4 1.47566 4 2.16602ZM4 13.8327C4 14.523 3.44036 15.0827 2.75 15.0827C2.05964 15.0827 1.5 14.523 1.5 13.8327C1.5 13.1423 2.05964 12.5827 2.75 12.5827C3.44036 12.5827 4 13.1423 4 13.8327ZM4 7.99935C4 8.68968 3.44036 9.24935 2.75 9.24935C2.05964 9.24935 1.5 8.68968 1.5 7.99935C1.5 7.30902 2.05964 6.74935 2.75 6.74935C3.44036 6.74935 4 7.30902 4 7.99935Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
  },
  {
    label: "\u041F\u043B\u0438\u0442\u043A\u0430",
    icon: "i-heroicons-squares-2x2",
    type: "tile",
    svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.99984 5.00065C10.4601 5.00065 10.8332 4.62755 10.8332 4.16732C10.8332 3.70708 10.4601 3.33398 9.99984 3.33398C9.53959 3.33398 9.1665 3.70708 9.1665 4.16732C9.1665 4.62755 9.53959 5.00065 9.99984 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M9.99984 10.8327C10.4601 10.8327 10.8332 10.4596 10.8332 9.99935C10.8332 9.5391 10.4601 9.16602 9.99984 9.16602C9.53959 9.16602 9.1665 9.5391 9.1665 9.99935C9.1665 10.4596 9.53959 10.8327 9.99984 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.53959 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.53959 16.6667 9.99984 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M15.8333 5.00065C16.2936 5.00065 16.6667 4.62755 16.6667 4.16732C16.6667 3.70708 16.2936 3.33398 15.8333 3.33398C15.3731 3.33398 15 3.70708 15 4.16732C15 4.62755 15.3731 5.00065 15.8333 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M15.8333 10.8327C16.2936 10.8327 16.6667 10.4596 16.6667 9.99935C16.6667 9.5391 16.2936 9.16602 15.8333 9.16602C15.3731 9.16602 15 9.5391 15 9.99935C15 10.4596 15.3731 10.8327 15.8333 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M15.8333 16.6667C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333C16.6667 15.3731 16.2936 15 15.8333 15C15.3731 15 15 15.3731 15 15.8333C15 16.2936 15.3731 16.6667 15.8333 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.16683 5.00065C4.62706 5.00065 5.00016 4.62755 5.00016 4.16732C5.00016 3.70708 4.62706 3.33398 4.16683 3.33398C3.7066 3.33398 3.3335 3.70708 3.3335 4.16732C3.3335 4.62755 3.7066 5.00065 4.16683 5.00065Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.16683 10.8327C4.62706 10.8327 5.00016 10.4596 5.00016 9.99935C5.00016 9.5391 4.62706 9.16602 4.16683 9.16602C3.7066 9.16602 3.3335 9.5391 3.3335 9.99935C3.3335 10.4596 3.7066 10.8327 4.16683 10.8327Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.16683 16.6667C4.62706 16.6667 5.00016 16.2936 5.00016 15.8333C5.00016 15.3731 4.62706 15 4.16683 15C3.7066 15 3.3335 15.3731 3.3335 15.8333C3.3335 16.2936 3.7066 16.6667 4.16683 16.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
  }
];
const handleSearch = (item, request, reqErr) => {
  if (item.trim() !== "")
    ;
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_3
  },
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$1.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$1.default.chipPosition,
      validator(value) {
        return Object.keys(config$1.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$1);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs))}>`);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
function d$1(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let t$4 = Symbol("headlessui.useid"), i$5 = 0;
function I() {
  return inject(t$4, () => `${++i$5}`)();
}
function l$1(e2) {
  provide(t$4, e2);
}
function o$4(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$3(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
}
var i$4 = Object.defineProperty;
var d = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$2 = (t2, e2, r2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$2 = class s {
  constructor() {
    n$2(this, "current", this.detect());
    n$2(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$2();
function i$3(r2) {
  if (c$2.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$4(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$2(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$3(r2, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$1() {
  return t$3() || i$2();
}
function u$2(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$1(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w(f2, m, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$4(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m(e2, t2);
  }
  let u2 = ref(null);
  u$2("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("click", (e2) => {
    n$1() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$2("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$1("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$1(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$4(e2) && o$4(e2) instanceof HTMLButtonElement && !((u2 = o$4(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$1() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$1({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$3(e2);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$1({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$3(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m, h2;
  let { as: n2, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R) => R.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function E(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var s2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s2 || {});
let f$2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t2;
    let { features: e2, ...r2 } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r2["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$1({ ourProps: n2, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
let n = Symbol("Context");
var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
function l() {
  return inject(n, null);
}
function t$2(o2) {
  provide(n, o2);
}
var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
let t$1 = [];
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f$1(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n2.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$2() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t$12 = { current: true };
    return t(() => {
      t$12.current && e2[0]();
    }), s3.add(() => {
      t$12.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r2 of a2.splice(t2, 1))
          r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
function e(i2 = {}, s3 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2))
    o$1(t2, f(s3, r2), n2);
  return t2;
}
function f(i2, s3) {
  return i2 ? i2 + "[" + s3 + "]" : s3;
}
function o$1(i2, s3, t2) {
  if (Array.isArray(t2))
    for (let [r2, n2] of t2.entries())
      o$1(i2, f(s3, r2.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s3, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s3, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s3, t2]) : typeof t2 == "number" ? i2.push([s3, `${t2}`]) : t2 == null ? i2.push([s3, ""]) : e(t2, s3, i2);
}
function Pe(a2, T2) {
  return a2 === T2;
}
var we = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(we || {}), Ee = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(Ee || {}), Ve = ((R) => (R[R.Pointer = 0] = "Pointer", R[R.Focus = 1] = "Focus", R[R.Other = 2] = "Other", R))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a2) {
  let T2 = inject(ne, null);
  if (T2 === null) {
    let r2 = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, N), r2;
  }
  return T2;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a2, { slots: T2 }) {
  let r2 = N("VirtualProvider"), R = computed(() => {
    let v2 = o$4(r2.optionsRef);
    if (!v2)
      return { start: 0, end: 0 };
    let s3 = (void 0).getComputedStyle(v2);
    return { start: parseFloat(s3.paddingBlockStart || s3.paddingTop), end: parseFloat(s3.paddingBlockEnd || s3.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: R.value.start, scrollPaddingEnd: R.value.end, count: r2.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$4(r2.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var v2;
    return (v2 = r2.virtual.value) == null ? void 0 : v2.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r2.virtual.value ? o2 : null), () => [h$1("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (v2) => {
    if (v2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r2.activationTrigger.value === 0)
        return;
      r2.activeOptionIndex.value !== null && r2.virtual.value.options.length > r2.activeOptionIndex.value && o2.value.scrollToIndex(r2.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((v2) => cloneVNode(T2.default({ option: r2.virtual.value.options[v2.index], open: r2.comboboxState.value === 0 })[0], { key: `${e2.value}-${v2.index}`, "data-index": v2.index, "aria-setsize": r2.virtual.value.options.length, "aria-posinset": v2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${v2.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: T$12, attrs: r2, emit: R }) {
  let o2 = ref(1), u2 = ref(null), e$1 = ref(null), v2 = ref(null), s$12 = ref(null), h2 = ref({ static: false, hold: false }), b2 = ref([]), d2 = ref(null), V = ref(2), P = ref(false);
  function D(l2 = (i2) => i2) {
    let i2 = d2.value !== null ? b2.value[d2.value] : null, f2 = l2(b2.value.slice()), p2 = f2.length > 0 && f2[0].dataRef.order.value !== null ? f2.sort((C, F2) => C.dataRef.order.value - F2.dataRef.order.value) : O(f2, (C) => o$4(C.dataRef.domRef)), O$1 = i2 ? p2.indexOf(i2) : null;
    return O$1 === -1 && (O$1 = null), { options: p2, activeOptionIndex: O$1 };
  }
  let L = computed(() => a2.multiple ? 1 : 0), K = computed(() => a2.nullable), [c$12, g2] = d$1(computed(() => a2.modelValue), (l2) => R("update:modelValue", l2), computed(() => a2.defaultValue)), k = computed(() => c$12.value === void 0 ? u$3(L.value, { [1]: [], [0]: void 0 }) : c$12.value), n2 = null, y2 = null;
  function S2(l2) {
    return u$3(L.value, { [0]() {
      return g2 == null ? void 0 : g2(l2);
    }, [1]: () => {
      let i2 = toRaw(t2.value.value).slice(), f2 = toRaw(l2), p2 = i2.findIndex((O2) => t2.compare(f2, toRaw(O2)));
      return p2 === -1 ? i2.push(f2) : i2.splice(p2, 1), g2 == null ? void 0 : g2(i2);
    } });
  }
  let w$12 = computed(() => {
  });
  watch([w$12], ([l2], [i2]) => {
    if (t2.virtual.value && l2 && i2 && d2.value !== null) {
      let f2 = l2.indexOf(i2[d2.value]);
      f2 !== -1 ? d2.value = f2 : d2.value = null;
    }
  });
  let t2 = { comboboxState: o2, value: k, mode: L, compare(l2, i2) {
    if (typeof a2.by == "string") {
      let f2 = a2.by;
      return (l2 == null ? void 0 : l2[f2]) === (i2 == null ? void 0 : i2[f2]);
    }
    return a2.by === null ? Pe(l2, i2) : a2.by(l2, i2);
  }, calculateIndex(l2) {
    return t2.virtual.value ? a2.by === null ? t2.virtual.value.options.indexOf(l2) : t2.virtual.value.options.findIndex((i2) => t2.compare(i2, l2)) : b2.value.findIndex((i2) => t2.compare(i2.dataRef.value, l2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: e$1, labelRef: u2, buttonRef: v2, optionsRef: s$12, disabled: computed(() => a2.disabled), options: b2, change(l2) {
    g2(l2);
  }, activeOptionIndex: computed(() => {
    if (P.value && d2.value === null && (t2.virtual.value ? t2.virtual.value.options.length > 0 : b2.value.length > 0)) {
      if (t2.virtual.value) {
        let i2 = t2.virtual.value.options.findIndex((f2) => {
          var p2;
          return !((p2 = t2.virtual.value) != null && p2.disabled(f2));
        });
        if (i2 !== -1)
          return i2;
      }
      let l2 = b2.value.findIndex((i2) => !i2.dataRef.disabled);
      if (l2 !== -1)
        return l2;
    }
    return d2.value;
  }), activationTrigger: V, optionsPropsRef: h2, closeCombobox() {
    P.value = false, !a2.disabled && o2.value !== 1 && (o2.value = 1, d2.value = null);
  }, openCombobox() {
    if (P.value = true, !a2.disabled && o2.value !== 0) {
      if (t2.value.value) {
        let l2 = t2.calculateIndex(t2.value.value);
        l2 !== -1 && (d2.value = l2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(l2) {
    V.value = l2;
  }, goToOption(l2, i2, f2) {
    P.value = false, n2 !== null && cancelAnimationFrame(n2), n2 = requestAnimationFrame(() => {
      if (a2.disabled || s$12.value && !h2.value.static && o2.value === 1)
        return;
      if (t2.virtual.value) {
        d2.value = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => t2.virtual.value.options, resolveActiveIndex: () => {
          var C, F2;
          return (F2 = (C = t2.activeOptionIndex.value) != null ? C : t2.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = t2.virtual.value) != null && U.disabled(W));
          })) != null ? F2 : null;
        }, resolveDisabled: (C) => t2.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), V.value = f2 != null ? f2 : 2;
        return;
      }
      let p2 = D();
      if (p2.activeOptionIndex === null) {
        let C = p2.options.findIndex((F2) => !F2.dataRef.disabled);
        C !== -1 && (p2.activeOptionIndex = C);
      }
      let O2 = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => p2.options, resolveActiveIndex: () => p2.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d2.value = O2, V.value = f2 != null ? f2 : 2, b2.value = p2.options;
    });
  }, selectOption(l2) {
    let i2 = b2.value.find((p2) => p2.id === l2);
    if (!i2)
      return;
    let { dataRef: f2 } = i2;
    S2(f2.value);
  }, selectActiveOption() {
    if (t2.activeOptionIndex.value !== null) {
      if (t2.virtual.value)
        S2(t2.virtual.value.options[t2.activeOptionIndex.value]);
      else {
        let { dataRef: l2 } = b2.value[t2.activeOptionIndex.value];
        S2(l2.value);
      }
      t2.goToOption(c.Specific, t2.activeOptionIndex.value);
    }
  }, registerOption(l2, i2) {
    let f2 = reactive({ id: l2, dataRef: i2 });
    if (t2.virtual.value) {
      b2.value.push(f2);
      return;
    }
    y2 && cancelAnimationFrame(y2);
    let p2 = D((O2) => (O2.push(f2), O2));
    d2.value === null && t2.isSelected(i2.value.value) && (p2.activeOptionIndex = p2.options.indexOf(f2)), b2.value = p2.options, d2.value = p2.activeOptionIndex, V.value = 2, p2.options.some((O2) => !o$4(O2.dataRef.domRef)) && (y2 = requestAnimationFrame(() => {
      let O2 = D();
      b2.value = O2.options, d2.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(l2, i2) {
    if (n2 !== null && cancelAnimationFrame(n2), i2 && (P.value = true), t2.virtual.value) {
      b2.value = b2.value.filter((p2) => p2.id !== l2);
      return;
    }
    let f2 = D((p2) => {
      let O2 = p2.findIndex((C) => C.id === l2);
      return O2 !== -1 && p2.splice(O2, 1), p2;
    });
    b2.value = f2.options, d2.value = f2.activeOptionIndex, V.value = 2;
  }, isSelected(l2) {
    return u$3(L.value, { [0]: () => t2.compare(toRaw(t2.value.value), toRaw(l2)), [1]: () => toRaw(t2.value.value).some((i2) => t2.compare(toRaw(i2), toRaw(l2))) });
  }, isActive(l2) {
    return d2.value === t2.calculateIndex(l2);
  } };
  w([e$1, v2, s$12], () => t2.closeCombobox(), computed(() => o2.value === 0)), provide(ne, t2), t$2(computed(() => u$3(o2.value, { [0]: i.Open, [1]: i.Closed })));
  let I2 = computed(() => {
    var l2;
    return (l2 = o$4(e$1)) == null ? void 0 : l2.closest("form");
  });
  return onMounted(() => {
    watch([I2], () => {
      if (!I2.value || a2.defaultValue === void 0)
        return;
      function l2() {
        t2.change(a2.defaultValue);
      }
      return I2.value.addEventListener("reset", l2), () => {
        var i2;
        (i2 = I2.value) == null || i2.removeEventListener("reset", l2);
      };
    }, { immediate: true });
  }), () => {
    var C, F2, W;
    let { name: l2, disabled: i2, form: f2, ...p2 } = a2, O2 = { open: o2.value === 0, disabled: i2, activeIndex: t2.activeOptionIndex.value, activeOption: t2.activeOptionIndex.value === null ? null : t2.virtual.value ? t2.virtual.value.options[(C = t2.activeOptionIndex.value) != null ? C : 0] : (W = (F2 = t2.options.value[t2.activeOptionIndex.value]) == null ? void 0 : F2.dataRef.value) != null ? W : null, value: k.value };
    return h$1(Fragment, [...l2 != null && k.value != null ? e({ [l2]: k.value }).map(([U, ue]) => h$1(f$2, E({ features: s2.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: f2, name: U, value: ue }))) : [], A$1({ theirProps: { ...r2, ...T(p2, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: T$12, attrs: r2, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a2, { attrs: T2, slots: r2 }) {
  var e2;
  let R = (e2 = a2.id) != null ? e2 : `headlessui-combobox-label-${I()}`, o2 = N("ComboboxLabel");
  function u2() {
    var v2;
    (v2 = o$4(o2.inputRef)) == null || v2.focus({ preventScroll: true });
  }
  return () => {
    let v2 = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...s3 } = a2, h2 = { id: R, ref: o2.labelRef, onClick: u2 };
    return A$1({ ourProps: h2, theirProps: s3, slot: v2, attrs: T2, slots: r2, name: "ComboboxLabel" });
  };
} });
let tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a2, { attrs: T2, slots: r2, expose: R }) {
  var h2;
  let o2 = (h2 = a2.id) != null ? h2 : `headlessui-combobox-button-${I()}`, u2 = N("ComboboxButton");
  R({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(b2) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (b2.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$4(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function v2(b2) {
    switch (b2.key) {
      case o$3.ArrowDown:
        b2.preventDefault(), b2.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$3.ArrowUp:
        b2.preventDefault(), b2.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$3.Escape:
        if (u2.comboboxState.value !== 0)
          return;
        b2.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && b2.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let s3 = s$1(computed(() => ({ as: a2.as, type: T2.type })), u2.buttonRef);
  return () => {
    var P, D;
    let b2 = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a2, V = { ref: u2.buttonRef, id: o2, type: s3.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (P = o$4(u2.optionsRef)) == null ? void 0 : P.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(D = o$4(u2.labelRef)) == null ? void 0 : D.id, o2].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: v2, onClick: e2 };
    return A$1({ ourProps: V, theirProps: d2, slot: b2, attrs: T2, slots: r2, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a2) => true }, setup(a2, { emit: T2, attrs: r2, slots: R, expose: o2 }) {
  var k;
  let u2 = (k = a2.id) != null ? k : `headlessui-combobox-input-${I()}`, e2 = N("ComboboxInput"), v2 = computed(() => i$3(o$4(e2.inputRef))), s3 = { value: false };
  o2({ el: e2.inputRef, $el: e2.inputRef });
  function h2() {
    e2.change(null);
    let n2 = o$4(e2.optionsRef);
    n2 && (n2.scrollTop = 0), e2.goToOption(c.Nothing);
  }
  let b2 = computed(() => {
    var y2;
    let n2 = e2.value.value;
    return o$4(e2.inputRef) ? typeof a2.displayValue != "undefined" && n2 !== void 0 ? (y2 = a2.displayValue(n2)) != null ? y2 : "" : typeof n2 == "string" ? n2 : "" : "";
  });
  onMounted(() => {
    watch([b2, e2.comboboxState, v2], ([n2, y2], [S2, w2]) => {
      if (s3.value)
        return;
      let t2 = o$4(e2.inputRef);
      t2 && ((w2 === 0 && y2 === 1 || n2 !== S2) && (t2.value = n2), requestAnimationFrame(() => {
        var i2;
        if (s3.value || !t2 || ((i2 = v2.value) == null ? void 0 : i2.activeElement) !== t2)
          return;
        let { selectionStart: I2, selectionEnd: l2 } = t2;
        Math.abs((l2 != null ? l2 : 0) - (I2 != null ? I2 : 0)) === 0 && I2 === 0 && t2.setSelectionRange(t2.value.length, t2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([n2], [y2]) => {
      if (n2 === 0 && y2 === 1) {
        if (s3.value)
          return;
        let S2 = o$4(e2.inputRef);
        if (!S2)
          return;
        let w2 = S2.value, { selectionStart: t2, selectionEnd: I2, selectionDirection: l2 } = S2;
        S2.value = "", S2.value = w2, l2 !== null ? S2.setSelectionRange(t2, I2, l2) : S2.setSelectionRange(t2, I2);
      }
    });
  });
  let d2 = ref(false);
  function V() {
    d2.value = true;
  }
  function P() {
    o$2().nextFrame(() => {
      d2.value = false;
    });
  }
  function D(n2) {
    switch (s3.value = true, n2.key) {
      case o$3.Enter:
        if (s3.value = false, e2.comboboxState.value !== 0 || d2.value)
          return;
        if (n2.preventDefault(), n2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$3.ArrowDown:
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Next), [1]: () => e2.openCombobox() });
      case o$3.ArrowUp:
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c.Last);
          });
        } });
      case o$3.Home:
        if (n2.shiftKey)
          break;
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.First);
      case o$3.PageUp:
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.First);
      case o$3.End:
        if (n2.shiftKey)
          break;
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.PageDown:
        return s3.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.Escape:
        if (s3.value = false, e2.comboboxState.value !== 0)
          return;
        n2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && n2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && h2(), e2.closeCombobox();
        break;
      case o$3.Tab:
        if (s3.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function L(n2) {
    T2("change", n2), e2.nullable.value && e2.mode.value === 0 && n2.target.value === "" && h2(), e2.openCombobox();
  }
  function K(n2) {
    var S2, w2, t2;
    let y2 = (S2 = n2.relatedTarget) != null ? S2 : t$1.find((I2) => I2 !== n2.currentTarget);
    if (s3.value = false, !((w2 = o$4(e2.optionsRef)) != null && w2.contains(y2)) && !((t2 = o$4(e2.buttonRef)) != null && t2.contains(y2)) && e2.comboboxState.value === 0)
      return n2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? h2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function c$12(n2) {
    var S2, w2, t2;
    let y2 = (S2 = n2.relatedTarget) != null ? S2 : t$1.find((I2) => I2 !== n2.currentTarget);
    (w2 = o$4(e2.buttonRef)) != null && w2.contains(y2) || (t2 = o$4(e2.optionsRef)) != null && t2.contains(y2) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$2().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let g2 = computed(() => {
    var n2, y2, S2, w2;
    return (w2 = (S2 = (y2 = a2.defaultValue) != null ? y2 : e2.defaultValue.value !== void 0 ? (n2 = a2.displayValue) == null ? void 0 : n2.call(a2, e2.defaultValue.value) : null) != null ? S2 : e2.defaultValue.value) != null ? w2 : "";
  });
  return () => {
    var I2, l2, i2, f2, p2, O2, C;
    let n2 = { open: e2.comboboxState.value === 0 }, { displayValue: y2, onChange: S2, ...w2 } = a2, t2 = { "aria-controls": (I2 = e2.optionsRef.value) == null ? void 0 : I2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (l2 = e2.options.value.find((F2) => !e2.virtual.value.disabled(F2.dataRef.value) && e2.compare(F2.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : l2.id : (i2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : i2.id, "aria-labelledby": (O2 = (f2 = o$4(e2.labelRef)) == null ? void 0 : f2.id) != null ? O2 : (p2 = o$4(e2.buttonRef)) == null ? void 0 : p2.id, "aria-autocomplete": "list", id: u2, onCompositionstart: V, onCompositionend: P, onKeydown: D, onInput: L, onFocus: c$12, onBlur: K, role: "combobox", type: (C = r2.type) != null ? C : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: g2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$1({ ourProps: t2, theirProps: w2, slot: n2, attrs: r2, slots: R, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: T$12, slots: r2, expose: R }) {
  let o2 = N("ComboboxOptions"), u2 = `headlessui-combobox-options-${I()}`;
  R({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a2.hold;
  });
  let e2 = l(), v2 = computed(() => e2 !== null ? (e2.value & i.Open) === i.Open : o2.comboboxState.value === 0);
  return i$1({ container: computed(() => o$4(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(s3) {
    return s3.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s3) {
    s3.setAttribute("role", "none");
  } }), () => {
    var d2, V, P;
    let s3 = { open: o2.comboboxState.value === 0 }, h2 = { "aria-labelledby": (P = (d2 = o$4(o2.labelRef)) == null ? void 0 : d2.id) != null ? P : (V = o$4(o2.buttonRef)) == null ? void 0 : V.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : void 0 }, b2 = T(a2, ["hold"]);
    return A$1({ ourProps: h2, theirProps: b2, slot: s3, attrs: T$12, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r2, default: () => [h$1(ke, {}, r2.default)] } : r2, features: N$1.RenderStrategy | N$1.Static, visible: v2.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: T$12, attrs: r2, expose: R }) {
  let o2 = N("ComboboxOption"), u2 = `headlessui-combobox-option-${I()}`, e2 = ref(null);
  R({ el: e2, $el: e2 });
  let v2 = computed(() => {
    var c2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a2.value) : o2.activeOptionIndex.value === null ? false : ((c2 = o2.options.value[o2.activeOptionIndex.value]) == null ? void 0 : c2.id) === u2;
  }), s3 = computed(() => o2.isSelected(a2.value)), h2 = inject(ie, null), b2 = computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: e2, order: computed(() => a2.order) }));
  onMounted(() => o2.registerOption(u2, b2)), onUnmounted(() => o2.unregisterOption(u2, v2.value)), watchEffect(() => {
    let c2 = o$4(e2);
    c2 && (h2 == null || h2.value.measureElement(c2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && v2.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var c2, g2;
      return (g2 = (c2 = o$4(e2)) == null ? void 0 : c2.scrollIntoView) == null ? void 0 : g2.call(c2, { block: "nearest" });
    }));
  });
  function d2(c2) {
    var g2;
    if (a2.disabled || (g2 = o2.virtual.value) != null && g2.disabled(a2.value))
      return c2.preventDefault();
    o2.selectOption(u2), n$1() || requestAnimationFrame(() => {
      var k;
      return (k = o$4(o2.inputRef)) == null ? void 0 : k.focus({ preventScroll: true });
    }), o2.mode.value === 0 && requestAnimationFrame(() => o2.closeCombobox());
  }
  function V() {
    var g2;
    if (a2.disabled || (g2 = o2.virtual.value) != null && g2.disabled(a2.value))
      return o2.goToOption(c.Nothing);
    let c$12 = o2.calculateIndex(a2.value);
    o2.goToOption(c.Specific, c$12);
  }
  let P = u$1();
  function D(c2) {
    P.update(c2);
  }
  function L(c$12) {
    var k;
    if (!P.wasMoved(c$12) || a2.disabled || (k = o2.virtual.value) != null && k.disabled(a2.value) || v2.value)
      return;
    let g2 = o2.calculateIndex(a2.value);
    o2.goToOption(c.Specific, g2, 0);
  }
  function K(c$12) {
    var g2;
    P.wasMoved(c$12) && (a2.disabled || (g2 = o2.virtual.value) != null && g2.disabled(a2.value) || v2.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c.Nothing)));
  }
  return () => {
    let { disabled: c2 } = a2, g2 = { active: v2.value, selected: s3.value, disabled: c2 }, k = { id: u2, ref: e2, role: "option", tabIndex: c2 === true ? void 0 : -1, "aria-disabled": c2 === true ? true : void 0, "aria-selected": s3.value, disabled: void 0, onClick: d2, onFocus: V, onPointerenter: D, onMouseenter: D, onPointermove: L, onMousemove: L, onPointerleave: K, onMouseleave: K }, n2 = T(a2, ["order", "value"]);
    return A$1({ ourProps: k, theirProps: n2, slot: g2, attrs: r2, slots: T$12, name: "ComboboxOption" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$4(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe(o2, b2) {
  return o2 === b2;
}
var ce = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(ce || {}), ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(ve || {}), be = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(be || {});
function me(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b2 = inject($, null);
  if (b2 === null) {
    let r2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, A), r2;
  }
  return b2;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b2, attrs: r2, emit: w$12 }) {
  let n2 = ref(1), e$1 = ref(null), f2 = ref(null), v2 = ref(null), s$12 = ref([]), m = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s$12.value[p2.value] : null, l2 = O(t2(s$12.value.slice()), (O2) => o$4(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y2, L] = d$1(computed(() => o2.modelValue), (t2) => w$12("update:modelValue", t2), computed(() => o2.defaultValue)), M = computed(() => y2.value === void 0 ? u$3(D.value, { [1]: [], [0]: void 0 }) : y2.value), k = { listboxState: n2, value: M, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e$1, buttonRef: f2, optionsRef: v2, disabled: computed(() => o2.disabled), options: s$12, searchQuery: m, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1)
      return;
    let d2 = u2(), O2 = f$1(t2 === c.Specific ? { focus: c.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s$12.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1)
      return;
    let l2 = m.value !== "" ? 0 : 1;
    m.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s$12.value.slice(p2.value + l2).concat(s$12.value.slice(0, p2.value + l2)) : s$12.value).find((I2) => I2.dataRef.textValue.startsWith(m.value) && !I2.dataRef.disabled), h2 = O2 ? s$12.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m.value !== "" && (m.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s$12.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s$12.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L(t2);
  }, select(t2) {
    o2.disabled || L(u$3(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w([f2, v2], (t2, i2) => {
    var l2;
    k.closeListbox(), w$2(i2, h.Loose) || (t2.preventDefault(), (l2 = o$4(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k), t$2(computed(() => u$3(n2.value, { [0]: i.Open, [1]: i.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$4(f2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0)
        return;
      function t2() {
        k.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n2.value === 0, disabled: l2, value: M.value };
    return h$1(Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I2, Q]) => h$1(f$2, E({ features: s2.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, name: I2, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...r2, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b2, attrs: r2, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2 }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${I()}`, n2 = A("ListboxLabel");
  function e2() {
    var v2;
    (v2 = o$4(n2.buttonRef)) == null || v2.focus({ preventScroll: true });
  }
  return () => {
    let v2 = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s3 } = o2, m = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$1({ ourProps: m, theirProps: s3, slot: v2, attrs: b2, slots: r2, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${I()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$3.Space:
      case o$3.Enter:
      case o$3.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$4(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
        });
        break;
      case o$3.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$4(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
        });
        break;
    }
  }
  function v2(a2) {
    switch (a2.key) {
      case o$3.Space:
        a2.preventDefault();
        break;
    }
  }
  function s3(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$4(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me(() => {
      var u2;
      return (u2 = o$4(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m = s$1(computed(() => ({ as: o2.as, type: b2.type })), e2.buttonRef);
  return () => {
    var y2, L;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$4(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o$4(e2.labelRef)) == null ? void 0 : L.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v2, onClick: s3 };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${I()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v2(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$3.Space:
        if (e2.searchQuery.value !== "")
          return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$3.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$4(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$3(e2.orientation.value, { vertical: o$3.ArrowDown, horizontal: o$3.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Next);
      case u$3(e2.orientation.value, { vertical: o$3.ArrowUp, horizontal: o$3.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Previous);
      case o$3.Home:
      case o$3.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.First);
      case o$3.End:
      case o$3.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$4(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$3.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s3 = l(), m = computed(() => s3 !== null ? (s3.value & i.Open) === i.Open : e2.listboxState.value === 0);
  return () => {
    var y2, L;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L = o$4(e2.buttonRef)) == null ? void 0 : L.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, features: N$1.RenderStrategy | N$1.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b2, attrs: r2, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${I()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s3 = computed(() => u$3(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m = computed(() => u$3(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
  }, [0]: () => s3.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n2, a2)), onUnmounted(() => e2.unregisterOption(n2)), onMounted(() => {
    watch([e2.listboxState, s3], () => {
      e2.listboxState.value === 0 && s3.value && u$3(e2.mode.value, { [1]: () => {
        m.value && e2.goToOption(c.Specific, n2);
      }, [0]: () => {
        e2.goToOption(c.Specific, n2);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$4(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled)
      return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$4(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled)
      return e2.goToOption(c.Nothing);
    e2.goToOption(c.Specific, n2);
  }
  let y2 = u$1();
  function L(t2) {
    y2.update(t2);
  }
  function M(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value || e2.goToOption(c.Specific, n2, 0));
  }
  function k(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value && e2.goToOption(c.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v2.value, selected: s3.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s3.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k, onMouseleave: k };
    return A$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r2, slots: b2, name: "ListboxOption" });
  };
} });
const useFormGroup = (inputProps, config2) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (inputProps == null ? void 0 : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup == null ? void 0 : formGroup.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup == null ? void 0 : formGroup.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2 == null ? void 0 : config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  onUnmounted(() => {
    groupContext == null ? void 0 : groupContext.value.unregister(instance);
  });
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main = defineComponent({
  components: {
    HCombobox: Ze,
    HComboboxButton: tt,
    HComboboxOptions: lt,
    HComboboxOption: at,
    HComboboxInput: ot,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_3,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: String,
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const label = computed(() => {
      if (props.multiple) {
        if (Array.isArray(props.modelValue) && props.modelValue.length) {
          return `${props.modelValue.length} selected`;
        } else {
          return null;
        }
      } else {
        if (props.valueAttribute) {
          const option = props.options.find((option2) => option2[props.valueAttribute] === props.modelValue);
          return option ? option[props.optionAttribute] : null;
        } else {
          return ["string", "number"].includes(typeof props.modelValue) ? props.modelValue : props.modelValue[props.optionAttribute];
        }
      }
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : option[props.optionAttribute] === query.value);
        if (existingOption) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    function onChange(event) {
      query.value = event.target.value;
    }
    l$1(() => useId("$YMH7mn4R4k"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      label,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.createOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                        key: 0,
                        "display-value": () => _ctx.query,
                        name: "q",
                        placeholder: _ctx.searchablePlaceholder,
                        autofocus: "",
                        autocomplete: "off",
                        class: _ctx.uiMenu.input,
                        onChange: _ctx.onChange
                      }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: 1,
                        value: _ctx.createOption,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ]),
                        _: 3
                      }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(" No options. ")
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _, handleSearch as h, uploadFile as u, viewSelect as v };
//# sourceMappingURL=SelectMenu-DPJhBD4a.mjs.map
