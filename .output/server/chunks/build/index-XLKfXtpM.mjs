import { _ as _sfc_main$4 } from './TheButton-BYEThwSU.mjs';
import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './TheTextContent-Bd9flYOl.mjs';
import { _ as _sfc_main$2 } from './TheBreadcrumbs-CyXOlUWJ.mjs';
import { _ as _sfc_main$3 } from './TheInput-BhoKAMvc.mjs';
import { u as useSales } from './sales-B0ny6huI.mjs';
import './server.mjs';
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
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import './nuxt-link-CNB8XBKy.mjs';
import 'vue3-toastify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSales();
    let salesForm = ref({
      name: "",
      sales_count: "",
      price_per_count: "",
      vat: "",
      company_sale_to: "",
      agent: {
        first_name: "",
        last_name: "",
        patronymic: ""
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UITheButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-x-4 max-lg:mt-5">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/sales" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0434\u0430\u0436\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 w-6/12 flex flex-col gap-4 max-lg:w-full"><p class="font-medium text-xl mb-3"> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430: </p><form class="grid grid-cols-2 gap-4 max-lg:grid-cols-1">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430"),
        placeholder: unref(salesForm).name,
        modelValue: unref(salesForm).name,
        "onUpdate:modelValue": ($event) => unref(salesForm).name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0434\u0430\u0436"),
        placeholder: unref(salesForm).sales_count,
        modelValue: unref(salesForm).sales_count,
        "onUpdate:modelValue": ($event) => unref(salesForm).sales_count = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443"),
        placeholder: unref(salesForm).price_per_count,
        modelValue: unref(salesForm).price_per_count,
        "onUpdate:modelValue": ($event) => unref(salesForm).price_per_count = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u041D\u0414\u0421"),
        placeholder: unref(salesForm).vat,
        modelValue: unref(salesForm).vat,
        "onUpdate:modelValue": ($event) => unref(salesForm).vat = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442"),
        placeholder: unref(salesForm).company_sale_to,
        modelValue: unref(salesForm).company_sale_to,
        "onUpdate:modelValue": ($event) => unref(salesForm).company_sale_to = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u0418\u043C\u044F \u0430\u0433\u0435\u043D\u0442\u0430"),
        placeholder: unref(salesForm).agent.first_name,
        modelValue: unref(salesForm).agent.first_name,
        "onUpdate:modelValue": ($event) => unref(salesForm).agent.first_name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430"),
        placeholder: unref(salesForm).agent.last_name,
        modelValue: unref(salesForm).agent.last_name,
        "onUpdate:modelValue": ($event) => unref(salesForm).agent.last_name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u0433\u0435\u043D\u0442\u0430"),
        placeholder: unref(salesForm).agent.patronymic,
        modelValue: unref(salesForm).agent.patronymic,
        "onUpdate:modelValue": ($event) => unref(salesForm).agent.patronymic = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UITheButton, {
        type: "submit",
        class: "mb-2 border p-3 rounded-lg !text-black dark:!text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/sales/item-create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-XLKfXtpM.mjs.map
