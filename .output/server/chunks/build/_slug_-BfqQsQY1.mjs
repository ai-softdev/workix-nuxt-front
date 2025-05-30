import { _ as __nuxt_component_3 } from './Icon-jARSlWRz.mjs';
import { defineComponent, toRef, computed, useSSRContext, watchSyncEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, ref, watch, onUnmounted, resolveComponent } from 'vue';
import { twJoin } from 'tailwind-merge';
import { u as useUI } from './selectMenu-BN_nbNrV.mjs';
import { z as mergeConfig, A as appConfig, l as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useDocumentStore } from './documents-BN6LdWDo.mjs';
import { useRoute, useRouter } from 'vue-router';
import { _ as _sfc_main$c } from './TheBreadcrumbs-JYk0wevu.mjs';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
import { _ as _sfc_main$b } from './TheTextContent-D3-WrEaf.mjs';
import { _ as _sfc_main$d } from './TheButton-RleONNaZ.mjs';
import { _ as _sfc_main$e } from './TheModal-DcnSgpbI.mjs';
import { u as useAuthStore } from './auth-BBm1bsU7.mjs';
import isEqual from 'lodash/isEqual.js';
import { toast } from 'vue3-toastify';
import { u as useCompanies } from './companies-CKV0eUOy.mjs';
import { _ as __nuxt_component_0$1 } from './Tooltip-DGOs9ivX.mjs';
import { u as useUserStore } from './users-DY7xitBX.mjs';
import './Icon-0volylWR.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
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
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import './nuxt-link-CNB8XBKy.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const meter = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: "min-w-fit transition-all",
    text: "text-gray-400 dark:text-gray-500 text-end",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  meter: {
    base: "appearance-none block w-full bg-none overflow-y-hidden",
    background: "bg-gray-200 dark:bg-gray-700",
    color: "text-{color}-500 dark:text-{color}-400",
    ring: "",
    rounded: "rounded-full",
    shadow: "",
    size: {
      "2xs": "h-px",
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
      xl: "h-4",
      "2xl": "h-5"
    },
    appearance: {
      inner: "[&::-webkit-meter-inner-element]:block [&::-webkit-meter-inner-element]:relative [&::-webkit-meter-inner-element]:border-none [&::-webkit-meter-inner-element]:bg-none [&::-webkit-meter-inner-element]:bg-transparent",
      meter: "[&::-webkit-meter-bar]:border-none [&::-webkit-meter-bar]:bg-none [&::-webkit-meter-bar]:bg-transparent",
      bar: "[&::-webkit-meter-optimum-value]:border-none [&::-webkit-meter-optimum-value]:bg-none [&::-webkit-meter-optimum-value]:bg-current",
      value: "[&::-moz-meter-bar]:border-none [&::-moz-meter-bar]:bg-none [&::-moz-meter-bar]:bg-current"
    },
    bar: {
      transition: "[&::-webkit-meter-optimum-value]:transition-all [&::-moz-meter-bar]:transition-all",
      ring: "",
      rounded: "[&::-webkit-meter-optimum-value]:rounded-full [&::-moz-meter-bar]:rounded-full",
      size: {
        "2xs": "[&::-webkit-meter-optimum-value]:h-px [&::-moz-meter-bar]:h-px",
        xs: "[&::-webkit-meter-optimum-value]:h-0.5 [&::-moz-meter-bar]:h-0.5",
        sm: "[&::-webkit-meter-optimum-value]:h-1 [&::-moz-meter-bar]:h-1",
        md: "[&::-webkit-meter-optimum-value]:h-2 [&::-moz-meter-bar]:h-2",
        lg: "[&::-webkit-meter-optimum-value]:h-3 [&::-moz-meter-bar]:h-3",
        xl: "[&::-webkit-meter-optimum-value]:h-4 [&::-moz-meter-bar]:h-4",
        "2xl": "[&::-webkit-meter-optimum-value]:h-5 [&::-moz-meter-bar]:h-5"
      }
    }
  },
  label: {
    base: "flex gap-2 items-center",
    text: "truncate",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  color: {
    white: "text-white dark:text-black",
    black: "text-black dark:text-white",
    gray: "text-gray-500 dark:text-gray-400"
  },
  default: {
    size: "md",
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.meter, meter);
const _sfc_main$a = defineComponent({
  components: {
    UIcon: __nuxt_component_3
  },
  inheritAttrs: false,
  slots: Object,
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.meter.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    icon: {
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
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("meter", toRef(props, "ui"), config, toRef(props, "class"));
    function clampPercent(value, min, max) {
      if (min == max) {
        return value < min ? 0 : 100;
      }
      if (min > max) {
        max = [min, min = max][0];
      }
      const percent2 = (value - min) / (max - min) * 100;
      return Math.max(0, Math.min(100, percent2));
    }
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.text,
        ui.value.indicator.size[props.size]
      );
    });
    const meterClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.meter.base,
        ui.value.meter.background,
        ui.value.meter.ring,
        ui.value.meter.rounded,
        ui.value.meter.shadow,
        (_a = ui.value.color[props.color]) != null ? _a : ui.value.meter.color.replaceAll("{color}", props.color),
        ui.value.meter.size[props.size]
      );
    });
    const meterAppearanceClass = computed(() => {
      return twJoin(
        ui.value.meter.appearance.inner,
        ui.value.meter.appearance.meter,
        ui.value.meter.appearance.bar,
        ui.value.meter.appearance.value
      );
    });
    const meterBarClass = computed(() => {
      return twJoin(
        ui.value.meter.bar.transition,
        ui.value.meter.bar.ring,
        ui.value.meter.bar.rounded,
        ui.value.meter.bar.size[props.size]
      );
    });
    const labelClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.label.base,
        ui.value.label.text,
        (_a = ui.value.color[props.color]) != null ? _a : ui.value.label.color.replaceAll("{color}", props.color),
        ui.value.label.size[props.size]
      );
    });
    const normalizedMin = computed(() => props.min > props.max ? props.max : props.min);
    const normalizedMax = computed(() => props.max < props.min ? props.min : props.max);
    const percent = computed(() => clampPercent(Number(props.value), normalizedMin.value, normalizedMax.value));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      meterClass,
      meterAppearanceClass,
      meterBarClass,
      labelClass,
      normalizedMin,
      normalizedMax,
      percent
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent, value: _ctx.value }, () => {
      _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}"><div class="${ssrRenderClass(_ctx.indicatorClass)}">${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<meter${ssrRenderAttr("value", _ctx.value)}${ssrRenderAttr("min", _ctx.normalizedMin)}${ssrRenderAttr("max", _ctx.normalizedMax)} class="${ssrRenderClass([_ctx.meterClass, _ctx.meterAppearanceClass, _ctx.meterBarClass])}"></meter>`);
  if (_ctx.label || _ctx.$slots.label) {
    ssrRenderSlot(_ctx.$slots, "label", { percent: _ctx.percent, value: _ctx.value }, () => {
      _push(`<div class="${ssrRenderClass(_ctx.labelClass)}">`);
      if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, { name: _ctx.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.label)}</div>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Meter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
class Node {
  constructor(self, parent = null, previous = null) {
    __publicField(this, "self");
    __publicField(this, "parent");
    __publicField(this, "previous");
    this.self = self;
    this.parent = parent;
    this.previous = previous;
  }
}
class LinkedList {
  constructor() {
    __publicField(this, "head");
    __publicField(this, "tail");
    this.head = null;
    this.tail = null;
  }
  append(self) {
    const node = new Node(self);
    if (this.tail) {
      this.tail.parent = node;
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }
  delete(value) {
    var _a;
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && isEqual(this.head.self, value)) {
      deletedNode = this.head;
      this.head = this.head.parent;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.parent) {
        if (isEqual(currentNode.parent.self, value)) {
          deletedNode = currentNode.parent;
          currentNode.parent = currentNode.parent.parent;
        } else {
          currentNode = currentNode.parent;
        }
      }
    }
    if (isEqual((_a = this.tail) == null ? void 0 : _a.self, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  deleteNodeValue(targetValue, removeObject) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue) && Array.isArray(current.self)) {
        const indexToRemove = current.self.findIndex((obj) => isEqual(obj, removeObject));
        if (indexToRemove !== -1) {
          current.self.splice(indexToRemove, 1);
          return;
        }
      }
      current = current.parent;
    }
  }
  replaceNodeValue(targetValue, newValue) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue)) {
        current.self = newValue;
        return;
      }
      current = current.parent;
    }
  }
  addContentToNode(targetValue, content) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue)) {
        current.self.push(content);
        return;
      }
      current = current.parent;
    }
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (isEqual(currentNode.self, value)) {
        return currentNode;
      }
      currentNode = currentNode.parent;
    }
    return null;
  }
  insertAfter(after, data) {
    const found = this.find(after);
    if (!found) {
      return this;
    }
    found.next = new Node(data, found.next);
  }
  swipeIfCondition() {
    let current = this.head;
    while (current && current.parent) {
      if (current.self[0].priority < current.parent.self[0].priority) {
        const tempSelf = current.self;
        current.self = current.parent.self;
        current.parent.self = tempSelf;
        const tempParent = current.self.parent;
        current.self.parent = current.parent.self.parent;
        current.parent.self.parent = tempParent;
        toast.info("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u044B\u043B \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D", { theme: "auto", autoClose: 1500 });
      }
      console.log(current);
      current = current.parent;
    }
  }
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.parent;
    }
    return nodes;
  }
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainScheduleItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    currentUser: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const company = useCompanies();
    const authStore = useAuthStore();
    ref(false);
    const list = ref(new LinkedList());
    const documentStore = useDocumentStore();
    const appendData = (data) => {
      list.value.append(data);
    };
    watch(() => documentStore.documentItem, () => {
      var _a, _b, _c, _d, _e, _f;
      if ((_a = documentStore.documentItem.documentusers) == null ? void 0 : _a.length) {
        list.value = new LinkedList();
        console.log("watch document yes");
        documentStore.documentItem.documentusers.forEach((item) => {
          var _a2, _b2, _c2, _d2;
          appendData([{
            first_name: (_a2 = item.user) == null ? void 0 : _a2.first_name,
            last_name: (_b2 = item.user) == null ? void 0 : _b2.last_name,
            photo_url: (_c2 = item.user) == null ? void 0 : _c2.photo,
            id: (_d2 = item.user) == null ? void 0 : _d2.id
          }]);
        });
        watchSyncEffect(() => {
          documentStore.userList = list.value.toArray().map((node) => node.self);
        });
      } else {
        console.log("watch document no");
        list.value = new LinkedList();
        if (list.value.toArray().length === 0 && ((_b = authStore.user) == null ? void 0 : _b.first_name)) {
          appendData([{
            first_name: (_c = authStore.user) == null ? void 0 : _c.first_name,
            last_name: (_d = authStore.user) == null ? void 0 : _d.last_name,
            photo_url: (_e = authStore.user) == null ? void 0 : _e.photo,
            id: (_f = authStore.user) == null ? void 0 : _f.id
          }]);
        }
        watchSyncEffect(() => {
          documentStore.userList = list.value.toArray().map((node) => node.self);
        });
      }
    });
    onUnmounted(() => {
      documentStore.showUsersNode = [];
      documentStore.showDepartment = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "list",
        class: "flex items-center"
      }, _attrs))} data-v-4c5aef2a>`);
      ssrRenderList(unref(documentStore).userList, (userGroup, groupIndex) => {
        var _a;
        _push(`<div class="px-2 h-full z-20 relative flex items-center transition-all" data-v-4c5aef2a><div class="transition-all" data-v-4c5aef2a></div><div class="${ssrRenderClass([{ "border border-dashed border-blueSemiLight h-20 rounded-lg": userGroup.length === 0 || userGroup === null }, "w-[220px] gap-y-6 flex items-center flex-col justify-center relative"])}" data-v-4c5aef2a>`);
        if (userGroup.length === 0) {
          _push(`<p class="absolute text-blueSemiLight tracking-widest text-sm w-full h-full flex items-center justify-center rounded-lg transition-all duration-200" data-v-4c5aef2a>${ssrInterpolate(_ctx.$t("\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0434\u043B\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (groupIndex !== 0 && !((_a = userGroup[0]) == null ? void 0 : _a.id)) {
          _push(`<div class="absolute top-0" data-v-4c5aef2a><button class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 right-10 text-green-400 font-bold" data-v-4c5aef2a> + </button><button class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 left-10 text-red-400 font-bold" data-v-4c5aef2a> x </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(documentStore).showContext === groupIndex) {
          _push(`<div class="absolute rounded-lg dark:bg-gray-700 bg-gray-200 w-[220px] top-10 z-[5] p-2" data-v-4c5aef2a><input type="text" class="pl-2 dark:bg-gray-600 rounded-lg outline-none w-full mb-4"${ssrRenderAttr("placeholder", _ctx.$t("\u041F\u043E\u0438\u0441\u043A..."))} data-v-4c5aef2a><div class="overflow-auto max-h-[150px]" data-v-4c5aef2a><!--[-->`);
          ssrRenderList(unref(company).get_all_department.results, (department) => {
            _push(`<div data-v-4c5aef2a><button class="flex items-center justify-between gap-x-2 w-full break-words break-all" data-v-4c5aef2a><span data-v-4c5aef2a>${ssrInterpolate(department.name)}</span><div class="${ssrRenderClass({ "rotate-180": unref(documentStore).showContextDepartment === department.id })}" data-v-4c5aef2a><svg class="dark:fill-white fill-black" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4c5aef2a><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z" data-v-4c5aef2a></path></svg></div></button>`);
            if (unref(documentStore).showContextDepartment === department.id) {
              _push(`<div data-v-4c5aef2a><!--[-->`);
              ssrRenderList(department.participants, (user) => {
                _push(`<div data-v-4c5aef2a>`);
                if (department.participants && unref(documentStore).showUsersNode.every((e) => e.id !== user.id) && user.id !== unref(authStore).user.id && userGroup.every((e) => e.priority === user.priority)) {
                  _push(`<button class="px-2 py-1 w-full flex items-center text-start hover:bg-semiCyan rounded-lg transition-all" data-v-4c5aef2a><span class="" data-v-4c5aef2a>${ssrInterpolate(user.first_name + " " + user.last_name)}</span></button>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<list${ssrRenderAttrs({
          name: "list",
          class: "flex flex-col gap-y-6 transition-all"
        })} data-v-4c5aef2a>`);
        ssrRenderList(userGroup, (user, userIndex) => {
          _push(`<div class="h-24 w-[220px] border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center justify-center mx-auto relative" data-v-4c5aef2a><div class="flex items-center gap-x-2" data-v-4c5aef2a>`);
          if (user.photo) {
            _push(`<div class="max-w-[50px]" data-v-4c5aef2a><img class="w-full rounded-full"${ssrRenderAttr("src", user.photo)} alt="" data-v-4c5aef2a></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="break-words" data-v-4c5aef2a><p class="text-sm w-full" data-v-4c5aef2a>${ssrInterpolate(user.first_name + " " + user.last_name)}</p></div></div>`);
          if (unref(documentStore).documentItem.status === "created" && user.id !== unref(authStore).user.id && groupIndex !== 0) {
            _push(`<button class="absolute px-2.5 pt-1 top-0 right-0 border-l border-b border-gray-500 dark:border-white rounded rounded-tl-none rounded-br-none text-red-400 font-bold" data-v-4c5aef2a> X </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`</list></div></div>`);
      });
      if (unref(documentStore).documentItem.status === "created") {
        _push(`<button class="text-2xl px-4 py-2 ml-4 rounded-lg border border-blueSemiLight text-blueDarkSemiLight cursor-pointer hover:scale-95 transition-all" data-v-4c5aef2a> + </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainScheduleItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DocumentItemInfoChainScheduleItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-4c5aef2a"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainSchedule",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}><div class="h-[500px] grid overflow-auto border grid-cols-1">`);
      _push(ssrRenderComponent(DocumentItemInfoChainScheduleItem, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainSchedule.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "rounded-lg transition-all duration-200" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFileBtn.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DocumentItemInfoChainFileBtn = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainFile",
  __ssrInlineRender: true,
  props: {
    item: Object,
    default: () => {
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UTooltip = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><p class="text-center tracking-widest">${ssrInterpolate(_ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B:"))}</p><div class="flex items-center gap-x-4 mt-4"><button class="flex items-center gap-x-4 tracking-widest hover:bg-blueSemiLight p-1 rounded-lg transition-all hover:text-white">`);
      if (((_a = __props.item.file_name) == null ? void 0 : _a.substr(-3)) === "pdf") {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve"><g><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
             M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
            C42.2,42.8,41.9,43.1,41.5,43.1z"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = __props.item.file_name) == null ? void 0 : _b.substr(-3)) === "doc" || ((_c = __props.item.file_name) == null ? void 0 : _c.substr(-4)) === "docx") {
        _push(`<div><svg width="50px" height="50px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad"></path><path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"></path><path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"></path></g><path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(__props.item.file_name)}</span></button><div class="flex items-center gap-x-6">`);
      _push(ssrRenderComponent(DocumentItemInfoChainFileBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTooltip, {
              text: _ctx.$t("\u0421\u043A\u0430\u0447\u0430\u0442\u044C"),
              class: "tracking-widest"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="stroke-black dark:stroke-white hover:!stroke-semiCyan transition" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path d="M16 17H12H8" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white hover:!stroke-semiCyan transition",
                      width: "40px",
                      height: "40px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M12 7L12 14M12 14L15 11M12 14L9 11",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M16 17H12H8",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      }),
                      createVNode("path", {
                        d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTooltip, {
                text: _ctx.$t("\u0421\u043A\u0430\u0447\u0430\u0442\u044C"),
                class: "tracking-widest"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "stroke-black dark:stroke-white hover:!stroke-semiCyan transition",
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 7L12 14M12 14L15 11M12 14L9 11",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M16 17H12H8",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    }),
                    createVNode("path", {
                      d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                _: 1
              }, 8, ["text"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!((_d = __props.item.chain) == null ? void 0 : _d.self)) {
        _push(ssrRenderComponent(DocumentItemInfoChainFileBtn, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTooltip, {
                text: _ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B"),
                class: "tracking-widest"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:fill-white fill-black hover:!fill-semiCyan transition" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 452.025 452.025" xml:space="preserve"${_scopeId2}><path d="M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3
                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5
                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z"${_scopeId2}></path><path d="M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1
                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z"${_scopeId2}></path><path d="M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1
                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12
                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z"${_scopeId2}></path><path d="M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z"${_scopeId2}></path><path d="M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z"${_scopeId2}></path><path d="M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z"${_scopeId2}></path><path d="M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z"${_scopeId2}></path><path d="M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z"${_scopeId2}></path><path d="M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z"${_scopeId2}></path><path d="M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z"${_scopeId2}></path><path d="M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z"${_scopeId2}></path><path d="M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z"${_scopeId2}></path><path d="M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z"${_scopeId2}></path><path d="M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z"${_scopeId2}></path><path d="M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z"${_scopeId2}></path><path d="M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z"${_scopeId2}></path><path d="M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z"${_scopeId2}></path><path d="M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z"${_scopeId2}></path><path d="M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:fill-white fill-black hover:!fill-semiCyan transition",
                        height: "30px",
                        width: "30px",
                        version: "1.1",
                        id: "Capa_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 452.025 452.025",
                        "xml:space": "preserve"
                      }, [
                        createVNode("path", { d: "M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3\r\n                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5\r\n                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z" }),
                        createVNode("path", { d: "M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1\r\n                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z" }),
                        createVNode("path", { d: "M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1\r\n                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12\r\n                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z" }),
                        createVNode("path", { d: "M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z" }),
                        createVNode("path", { d: "M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z" }),
                        createVNode("path", { d: "M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z" }),
                        createVNode("path", { d: "M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z" }),
                        createVNode("path", { d: "M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z" }),
                        createVNode("path", { d: "M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z" }),
                        createVNode("path", { d: "M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z" }),
                        createVNode("path", { d: "M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z" }),
                        createVNode("path", { d: "M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z" }),
                        createVNode("path", { d: "M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z" }),
                        createVNode("path", { d: "M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z" }),
                        createVNode("path", { d: "M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z" }),
                        createVNode("path", { d: "M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z" }),
                        createVNode("path", { d: "M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z" }),
                        createVNode("path", { d: "M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z" }),
                        createVNode("path", { d: "M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z" })
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTooltip, {
                  text: _ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B"),
                  class: "tracking-widest"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white fill-black hover:!fill-semiCyan transition",
                      height: "30px",
                      width: "30px",
                      version: "1.1",
                      id: "Capa_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      viewBox: "0 0 452.025 452.025",
                      "xml:space": "preserve"
                    }, [
                      createVNode("path", { d: "M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3\r\n                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5\r\n                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z" }),
                      createVNode("path", { d: "M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1\r\n                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z" }),
                      createVNode("path", { d: "M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1\r\n                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12\r\n                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z" }),
                      createVNode("path", { d: "M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z" }),
                      createVNode("path", { d: "M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z" }),
                      createVNode("path", { d: "M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z" }),
                      createVNode("path", { d: "M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z" }),
                      createVNode("path", { d: "M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z" }),
                      createVNode("path", { d: "M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z" }),
                      createVNode("path", { d: "M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z" }),
                      createVNode("path", { d: "M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z" }),
                      createVNode("path", { d: "M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z" }),
                      createVNode("path", { d: "M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z" }),
                      createVNode("path", { d: "M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z" }),
                      createVNode("path", { d: "M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z" }),
                      createVNode("path", { d: "M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z" }),
                      createVNode("path", { d: "M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z" }),
                      createVNode("path", { d: "M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z" }),
                      createVNode("path", { d: "M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z" })
                    ]))
                  ]),
                  _: 1
                }, 8, ["text"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button></button></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFile.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChain",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    ref(false);
    const extractIds = (data) => {
      return data.flat().map((item) => item.id).filter((id) => id);
    };
    function startChain() {
      let array = extractIds(documentStore.userList);
      documentStore.setUsers({ slug: route.params.slug, form: array }, router);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$b, { class: "my-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0446\u0435\u043F\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0446\u0435\u043F\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="justify-center gap-x-10 border-b border-l border-r p-4 rounded-b-xl rounded-t-sm"><div class="flex gap-x-6 justify-center items-center">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="flex justify-center gap-x-10 mt-4">`);
      if (unref(documentStore).documentItem.status === "created" && unref(documentStore).documentItem.author_id === unref(authStore).user.id) {
        _push(ssrRenderComponent(_sfc_main$d, {
          type: "documentBtn",
          onClick: ($event) => unref(documentStore).showWarn = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(documentStore).documentItem.status === "created") {
        _push(ssrRenderComponent(_sfc_main$d, {
          type: "documentBtn",
          onClick: startChain
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0435\u043F\u044C"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0435\u043F\u044C")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(documentStore).documentItem.status === "processing" && ((_a = unref(documentStore).documentItem.current_documentuser) == null ? void 0 : _a.user_id) === unref(authStore).user.id) {
        _push(ssrRenderComponent(_sfc_main$d, {
          type: "documentBtn",
          onClick: ($event) => unref(router).push(`/base/documents/signification/${unref(route).params.slug}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044E"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044E")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="my-6"><p class="text-center tracking-widest text-lg">${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:"))}</p><p>${ssrInterpolate(unref(documentStore).documentItem.description)}</p></div>`);
      if (unref(documentStore).showWarn) {
        _push(ssrRenderComponent(_sfc_main$e, {
          type: "resize",
          onShowModal: ($event) => unref(documentStore).showWarn = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$b, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-sm tracking-widest text-gray-300 my-6"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D"))}</p><div class="flex justify-center gap-x-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$d, {
                type: "chat",
                onClick: ($event) => unref(documentStore).showWarn = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$d, {
                type: "chat",
                onClick: ($event) => {
                  unref(documentStore).docDelete({ slug: unref(route).params.slug }).then((res) => {
                    unref(router).push("/base/documents");
                    unref(documentStore).showWarn = false;
                  });
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$b, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-sm tracking-widest text-gray-300 my-6" }, toDisplayString(_ctx.$t("\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u043F\u0440\u043E\u043F\u0430\u0434\u0451\u0442 \u0438 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D")), 1),
                createVNode("div", { class: "flex justify-center gap-x-10" }, [
                  createVNode(_sfc_main$d, {
                    type: "chat",
                    onClick: ($event) => unref(documentStore).showWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$d, {
                    type: "chat",
                    onClick: ($event) => {
                      unref(documentStore).docDelete({ slug: unref(route).params.slug }).then((res) => {
                        unref(router).push("/base/documents");
                        unref(documentStore).showWarn = false;
                      });
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoChain.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainContentElems",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocumentItemInfoChainContentElems = resolveComponent("DocumentItemInfoChainContentElems", true);
      if (__props.item.self) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-all" }, _attrs))}><div class="flex items-center gap-x-6"><list${ssrRenderAttrs({
          name: "list",
          class: "flex flex-col gap-y-6 transition-all"
        })}>`);
        ssrRenderList(__props.item.self, (user, userIndex) => {
          _push(`<div class="h-24 border border-gray-500 dark:border-white w-[220px] px-2 rounded-lg text-center flex items-center justify-center mx-auto relative"><div class="flex gap-x-4 items-center"><div class="max-w-[50px]"><img class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + user.photo)} alt=""></div><p class="text-[15px] w-full">${ssrInterpolate(user.first_name + " " + user.last_name)}</p></div></div>`);
        });
        _push(`</list>`);
        _push(ssrRenderComponent(_component_DocumentItemInfoChainContentElems, {
          item: __props.item.parent
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContentElems.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainContent",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "list",
        class: "flex overflow-x-auto w-full items-center gap-x-6"
      }, _attrs))}><div class="h-24 border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center relative"><div class="flex gap-x-4 items-center w-[220px]"><div class="max-w-[50px]"><img class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + __props.item.author.photo)} alt=""></div><p class="text-[15px] w-full">${ssrInterpolate(((_a = __props.item.author) == null ? void 0 : _a.first_name) + " " + ((_b = __props.item.author) == null ? void 0 : _b.last_name))}</p></div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        item: unref(documentStore).documentItem.chain
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoContent",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="border rounded-t-lg rounded-b-sm h-[500px] grid gap-x-10 px-2 mt-10 overflow-auto">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="border-b border-l border-r p-4 rounded-b-xl rounded-t-sm"><div class="flex gap-x-6 justify-center items-center">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="flex justify-center gap-x-10 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        class: "px-2 py-1 rounded-full",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        class: "px-2 py-1 rounded-full",
        type: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="my-6"><p class="text-center tracking-widest text-lg">${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:"))}</p><p class="text-sm">${ssrInterpolate(unref(documentStore).documentItem.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfo",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      if ((_a = __props.item.chain) == null ? void 0 : _a.self) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="overflow-x-hidden">`);
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    useRoute();
    useCompanies();
    useUserStore();
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${documentStore.documentItem.title}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UMeter = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-x-6 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-full h-max" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$b, { class: "mx-auto text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(documentStore).documentItem.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$c, { "breadcrumb-link": "/base/documents" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"${_scopeId}></path></svg></div>`);
            _push2(ssrRenderComponent(_sfc_main$c, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(documentStore).documentItem.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UMeter, {
              min: "0",
              max: "100",
              indicator: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              item: unref(documentStore).documentItem
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$b, { class: "mx-auto text-center" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex items-center gap-x-4" }, [
                createVNode(_sfc_main$c, { "breadcrumb-link": "/base/documents" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "15px",
                    height: "15px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      class: "dark:stroke-white stroke-black",
                      d: "M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                createVNode(_sfc_main$c, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_component_UMeter, {
                  min: "0",
                  max: "100",
                  indicator: ""
                })
              ]),
              createVNode(_sfc_main$1, {
                item: unref(documentStore).documentItem
              }, null, 8, ["item"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/documents/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BfqQsQY1.mjs.map
