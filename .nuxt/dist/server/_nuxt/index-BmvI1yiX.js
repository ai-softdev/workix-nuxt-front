import { _ as _sfc_main$4 } from "./TheButton-BH_KWEhI.js";
import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./TheTextContent-Bd9flYOl.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-CyXOlUWJ.js";
import { _ as _sfc_main$3 } from "./TheInput-BhoKAMvc.js";
import { u as useSales } from "./sales-BROjgE_a.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "@sindresorhus/slugify";
import "tailwind-merge";
import "animejs";
import "./axios-DrAfoKzV.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "./nuxt-link-CNB8XBKy.js";
import "vue3-toastify";
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
            _push2(`${ssrInterpolate(_ctx.$t("Страница создания товара"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница создания товара")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-x-4 max-lg:mt-5">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Профиль"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Профиль")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/sales" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Продажи"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Продажи")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Создание товара"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Создание товара")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 w-6/12 flex flex-col gap-4 max-lg:w-full"><p class="font-medium text-xl mb-3"> Создание товара: </p><form class="grid grid-cols-2 gap-4 max-lg:grid-cols-1">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Название товара"),
        placeholder: unref(salesForm).name,
        modelValue: unref(salesForm).name,
        "onUpdate:modelValue": ($event) => unref(salesForm).name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Количество продаж"),
        placeholder: unref(salesForm).sales_count,
        modelValue: unref(salesForm).sales_count,
        "onUpdate:modelValue": ($event) => unref(salesForm).sales_count = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Цена за единицу"),
        placeholder: unref(salesForm).price_per_count,
        modelValue: unref(salesForm).price_per_count,
        "onUpdate:modelValue": ($event) => unref(salesForm).price_per_count = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("НДС"),
        placeholder: unref(salesForm).vat,
        modelValue: unref(salesForm).vat,
        "onUpdate:modelValue": ($event) => unref(salesForm).vat = $event,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Контрагент"),
        placeholder: unref(salesForm).company_sale_to,
        modelValue: unref(salesForm).company_sale_to,
        "onUpdate:modelValue": ($event) => unref(salesForm).company_sale_to = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Имя агента"),
        placeholder: unref(salesForm).agent.first_name,
        modelValue: unref(salesForm).agent.first_name,
        "onUpdate:modelValue": ($event) => unref(salesForm).agent.first_name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Фамилия агента"),
        placeholder: unref(salesForm).agent.last_name,
        modelValue: unref(salesForm).agent.last_name,
        "onUpdate:modelValue": ($event) => unref(salesForm).agent.last_name = $event,
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.$t("Отчество агента"),
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
            _push2(` Добавить `);
          } else {
            return [
              createTextVNode(" Добавить ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BmvI1yiX.js.map
