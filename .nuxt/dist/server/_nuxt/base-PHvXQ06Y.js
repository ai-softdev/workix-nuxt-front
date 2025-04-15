import { defineComponent, withCtx, createTextVNode, toDisplayString, unref, useSSRContext, mergeProps, createVNode, renderSlot, ref, openBlock, createBlock, watchSyncEffect, createCommentVNode, watch, onUpdated } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-CNB8XBKy.js";
import { g as useState, i as defineStore, u as useHead, _ as __nuxt_component_0$2 } from "../server.mjs";
import { u as useAuthStore } from "./auth-DQm4aBcD.js";
import { a as axios } from "./axios-DrAfoKzV.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$9 } from "./TheTextContent-Bd9flYOl.js";
import { _ as _sfc_main$a, u as useTreeStore } from "./TheButton-BYEThwSU.js";
import { T as TheSceleton } from "./TheSceleton-DUPRb_8O.js";
import { u as useChat } from "./chat-atQsJcZS.js";
import { u as useTaskList } from "./tasks-Dbo_KhxS.js";
import { u as useCompanies } from "./companies-DBZEnG6X.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "axios";
const useColorMode = () => {
  return useState("color-mode").value;
};
const useNotification = defineStore("notification", {
  state: () => ({
    notification: []
  }),
  getters: {
    get_notification: (state) => state.notification
  },
  actions: {
    loadNotification() {
      axios.get(`notification/list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
      });
    },
    readNotice(params) {
      axios.post(`notification/make-read/${params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
        this.loadNotification();
        toast.success("Прочитано", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white ml-auto" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top"></path></g></g></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Уведомления"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Уведомления")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-2 flex flex-col gap-y-4 h-full max-md:h-full max-[800px]:max-h-[90%] max-h-[400px] overflow-y-scroll pr-2"><!--[-->`);
      ssrRenderList(unref(notification).get_notification, (notice, i) => {
        _push(`<div class="${ssrRenderClass([{ "dark:bg-gray-700 bg-gray-300": notice.read === true }, "p-2 border relative dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all duration-200 rounded-lg dark:border-gray-500"])}">`);
        if (notice.read) {
          _push(`<div class="absolute bottom-1 left-2 text-[11px]"><svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>`);
          if (notice.read === true) {
            _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between gap-x-4 dark:text-white text-black"><div class="w-full"><p class="text-center">${ssrInterpolate(notice.text)}</p></div><div class="border-r"></div><div class="text-end text-[12px]"><p>${ssrInterpolate(new Date(notice.created_at).toLocaleDateString())}</p><p>${ssrInterpolate(new Date(notice.created_at).toLocaleTimeString().slice(0, 5))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentNotification.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentLink",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "flex select-none items-center gap-x-6 hover:bg-blueDarkSemiLight p-2 rounded-lg transition-all duration-200 cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><p class="dark:text-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentText", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white" }, [
                renderSlot(_ctx.$slots, "headerContentIcon")
              ]),
              createVNode("p", { class: "dark:text-white" }, [
                renderSlot(_ctx.$slots, "headerContentText")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentLink.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "HeaderContentElems",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const route = useRoute();
    const router = useRouter();
    const loadNotification = useNotification();
    const loadCurrentUser = useAuthStore();
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center max-[800px]:justify-center gap-x-8" }, _attrs))}><div class="cursor-pointer transition-all duration-300">`);
      if (unref(colorMode).preference === "light") {
        _push(`<div class="hover:rounded-full hover:bg-gray-100 max-[800px]:p-2 transition-all"><svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 438.2 438.2" xml:space="preserve"><g><g id="XMLID_2_"><g><path style="${ssrRenderStyle({ "fill": "#F4581B" })}" d="M327.884,124.839c32.8,18.61,54.92,53.85,54.92,94.26s-22.12,75.65-54.92,94.25
                        c-42.33-10.46-73.71-48.69-73.71-94.25c0-45.57,31.38-83.79,73.71-94.25V124.839z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M327.884,124.839v0.01c-42.33,10.46-73.71,48.68-73.71,94.25c0,45.56,31.38,83.79,73.71,94.25
                        c-15.76,8.95-33.98,14.06-53.39,14.06c-59.82,0-108.31-48.49-108.31-108.31s48.49-108.32,108.31-108.32
                        C293.904,110.779,312.124,115.889,327.884,124.839z"></path></g></g><rect x="266.996" y="348.358" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.842"></rect><rect x="266.996" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.842"></rect><rect x="143.838" y="297.341" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 16.3354 691.2888)" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.841"></rect><rect x="55.396" y="211.6" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="89.842" height="15"></rect><rect x="106.412" y="88.435" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 190.5049 270.7802)" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="89.841" height="15"></rect><g><rect x="313.124" y="347.297" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 129.4419 796.0912)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect><rect x="200.701" y="75.897" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 224.7537 316.9841)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect><rect x="210.785" y="337.209" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 284.2135 766.1119)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="323.201" y="65.81" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 604.3321 286.9755)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="131.296" y="257.715" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 -62.4538 508.8688)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="121.209" y="155.389" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 204.7084 366.4883)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect></g></g></svg></div>`);
      } else {
        _push(`<div class="hover:dark:bg-gray-500 hover:rounded-full hover:bg-gray-100 hover:p-2 max-[800px]:p-2 transition-all"><svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380.446 380.446" xml:space="preserve"><g><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M363.262,116.333c-2.68-1.227-6.508-2.734-11.101-4.075c-4.594-1.346-9.953-2.546-15.695-3.34
                  c-2.472-0.353-5.024-0.611-7.607-0.81c-0.199-2.583-0.457-5.135-0.81-7.607c-0.795-5.742-1.994-11.101-3.34-15.695
                  c-1.341-4.594-2.848-8.422-4.075-11.101c-1.214-2.68-2.16-4.211-2.16-4.211s-0.946,1.531-2.16,4.211
                  c-1.227,2.679-2.734,6.508-4.075,11.101c-1.347,4.594-2.546,9.953-3.34,15.695c-0.352,2.466-0.609,5.011-0.808,7.589
                  c-2.584,0.196-5.136,0.451-7.609,0.802c-2.871,0.399-5.646,0.892-8.278,1.456c-2.632,0.552-5.12,1.229-7.417,1.881
                  c-2.297,0.684-4.402,1.386-6.268,2.087c-1.866,0.706-3.493,1.383-4.833,2.005c-2.68,1.22-4.211,2.172-4.211,2.172
                  s1.531,0.952,4.211,2.172c1.34,0.622,2.967,1.299,4.833,2.005c1.866,0.702,3.972,1.404,6.268,2.088
                  c2.297,0.652,4.785,1.329,7.417,1.881c2.632,0.565,5.407,1.057,8.278,1.456c2.467,0.349,5.013,0.604,7.59,0.8
                  c0.196,2.577,0.451,5.124,0.8,7.59c0.399,2.871,0.891,5.646,1.456,8.278c0.552,2.632,1.229,5.12,1.881,7.417
                  c0.684,2.297,1.386,4.402,2.088,6.269c0.706,1.866,1.383,3.493,2.005,4.833c1.22,2.68,2.172,4.211,2.172,4.211
                  s0.952-1.531,2.172-4.211c0.622-1.34,1.299-2.967,2.005-4.833c0.701-1.866,1.404-3.972,2.088-6.269
                  c0.651-2.297,1.328-4.785,1.881-7.417c0.565-2.632,1.057-5.407,1.456-8.278c0.35-2.473,0.606-5.025,0.802-7.609
                  c2.577-0.199,5.122-0.457,7.589-0.808c5.742-0.794,11.101-1.994,15.695-3.34c4.594-1.341,8.422-2.848,11.101-4.075
                  c2.68-1.214,4.211-2.16,4.211-2.16S365.942,117.547,363.262,116.333z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M299.845,229.947c-0.41-0.309-1.012-0.843-1.777-1.362c-1.531-1.083-3.719-2.415-6.344-3.599
                  c-2.625-1.189-5.687-2.248-8.969-2.95c-0.504-0.111-1.022-0.197-1.535-0.291c-0.094-0.513-0.179-1.031-0.29-1.535
                  c-0.702-3.281-1.76-6.344-2.95-8.969c-1.184-2.625-2.515-4.813-3.599-6.344c-0.519-0.766-1.053-1.367-1.362-1.777
                  c-0.332-0.41-0.546-0.629-0.546-0.629s-0.213,0.219-0.546,0.629c-0.309,0.41-0.843,1.012-1.362,1.777
                  c-1.083,1.531-2.414,3.719-3.599,6.344c-1.189,2.625-2.248,5.687-2.95,8.969c-0.109,0.497-0.194,1.007-0.286,1.513
                  c-0.515,0.093-1.034,0.178-1.539,0.289c-1.641,0.353-3.227,0.787-4.73,1.286c-1.504,0.488-2.926,1.086-4.238,1.661
                  c-1.313,0.604-2.516,1.224-3.582,1.844c-1.066,0.623-1.996,1.221-2.762,1.771c-0.766,0.523-1.367,1.058-1.777,1.37
                  c-0.41,0.334-0.629,0.549-0.629,0.549s0.219,0.215,0.629,0.549c0.41,0.311,1.012,0.847,1.777,1.37
                  c0.766,0.549,1.695,1.147,2.762,1.771c1.066,0.62,2.27,1.24,3.582,1.843c1.313,0.576,2.734,1.173,4.238,1.661
                  c1.504,0.499,3.09,0.934,4.73,1.286c0.498,0.109,1.01,0.193,1.517,0.285c0.092,0.507,0.176,1.019,0.285,1.517
                  c0.353,1.641,0.787,3.226,1.286,4.73c0.488,1.504,1.086,2.926,1.661,4.238c0.604,1.313,1.224,2.516,1.844,3.582
                  c0.623,1.066,1.221,1.996,1.771,2.762c0.522,0.766,1.058,1.367,1.369,1.777c0.334,0.41,0.549,0.629,0.549,0.629
                  s0.215-0.219,0.549-0.629c0.311-0.41,0.847-1.012,1.369-1.777c0.549-0.766,1.147-1.695,1.771-2.762
                  c0.619-1.066,1.24-2.27,1.844-3.582c0.575-1.313,1.173-2.734,1.661-4.238c0.499-1.504,0.933-3.09,1.286-4.73
                  c0.111-0.506,0.196-1.024,0.289-1.54c0.506-0.092,1.016-0.177,1.513-0.286c3.281-0.702,6.344-1.76,8.969-2.95
                  c2.625-1.184,4.813-2.515,6.344-3.599c0.766-0.519,1.367-1.053,1.777-1.362c0.41-0.333,0.629-0.546,0.629-0.546
                  S300.255,230.279,299.845,229.947z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M71.311,47.918c-0.432-0.325-1.066-0.888-1.873-1.434c-1.613-1.142-3.918-2.544-6.683-3.792
                  c-2.766-1.253-5.992-2.368-9.449-3.108c-0.531-0.117-1.076-0.207-1.617-0.306c-0.099-0.541-0.189-1.086-0.306-1.617
                  c-0.739-3.457-1.855-6.683-3.108-9.449c-1.248-2.766-2.65-5.07-3.791-6.684c-0.547-0.806-1.11-1.44-1.435-1.872
                  c-0.35-0.432-0.575-0.663-0.575-0.663s-0.225,0.23-0.575,0.663c-0.325,0.432-0.888,1.066-1.435,1.872
                  c-1.141,1.613-2.544,3.918-3.791,6.684c-1.253,2.766-2.369,5.992-3.108,9.449c-0.115,0.523-0.204,1.061-0.301,1.594
                  c-0.543,0.098-1.089,0.188-1.622,0.304c-1.728,0.372-3.399,0.83-4.984,1.355c-1.584,0.514-3.083,1.144-4.465,1.75
                  c-1.383,0.636-2.65,1.29-3.774,1.942c-1.124,0.657-2.103,1.286-2.91,1.865c-0.807,0.551-1.44,1.115-1.873,1.443
                  c-0.432,0.352-0.663,0.578-0.663,0.578s0.23,0.227,0.663,0.578c0.432,0.328,1.066,0.892,1.873,1.443
                  c0.807,0.579,1.786,1.209,2.91,1.865c1.124,0.653,2.391,1.306,3.774,1.942c1.383,0.606,2.881,1.236,4.465,1.75
                  c1.584,0.525,3.255,0.983,4.984,1.355c0.525,0.115,1.064,0.203,1.598,0.3c0.097,0.534,0.185,1.073,0.3,1.598
                  c0.372,1.729,0.829,3.399,1.355,4.984c0.514,1.584,1.144,3.083,1.75,4.465c0.636,1.383,1.29,2.65,1.942,3.774
                  c0.656,1.124,1.287,2.103,1.865,2.909c0.551,0.807,1.115,1.44,1.443,1.873c0.352,0.432,0.578,0.663,0.578,0.663
                  s0.227-0.23,0.578-0.663c0.328-0.432,0.892-1.066,1.443-1.873c0.579-0.807,1.209-1.786,1.865-2.909
                  c0.653-1.124,1.306-2.391,1.942-3.774c0.606-1.383,1.236-2.881,1.75-4.465c0.526-1.584,0.983-3.255,1.355-4.984
                  c0.116-0.532,0.206-1.079,0.304-1.622c0.533-0.097,1.071-0.186,1.594-0.301c3.457-0.739,6.683-1.855,9.449-3.108
                  c2.766-1.248,5.07-2.65,6.683-3.792c0.807-0.547,1.44-1.109,1.873-1.435c0.432-0.35,0.663-0.575,0.663-0.575
                  S71.743,48.268,71.311,47.918z"></path><g><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M257.193,0c21.254,0,41.693,3.488,60.778,9.919c-75.252,25.357-129.446,96.501-129.446,180.304
                    c0,83.804,54.193,154.947,129.446,180.304c-19.085,6.431-39.524,9.919-60.778,9.919c-105.058,0-190.224-85.166-190.224-190.224
                    S152.136,0,257.193,0z"></path></g><path style="${ssrRenderStyle({ "fill": "#E2BC50" })}" d="M257.2,0.003c5.8,0,11.54,0.26,17.2,0.77c-96.95,8.74-172.93,90.22-172.93,189.45
                  c0,99.25,76.01,180.74,172.99,189.45c-5.68,0.51-11.44,0.77-17.26,0.77c-105.06,0-190.23-85.16-190.23-190.22
                  S152.14,0.003,257.2,0.003z"></path></g></svg></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/base/chat",
        class: [{ "!bg-opacity-0 hover:!bg-opacity-100 border-none": unref(route).path === "/base/chat" || unref(route).path === `/base/chat/${unref(route).params.id}` }, "hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full px-2 py-2 transition-all cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-inspector="components/TheHeader.vue:163:11"${_scopeId}><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-inspector="components/TheHeader.vue:165:13"${_scopeId}></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-inspector="components/TheHeader.vue:166:13"${_scopeId}></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-inspector="components/TheHeader.vue:167:13"${_scopeId}></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-inspector="components/TheHeader.vue:168:13"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25px",
                height: "25px",
                class: "dark:stroke-white stroke-black",
                viewBox: "0 0 60 60",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "#000000",
                "data-v-inspector": "components/TheHeader.vue:163:11"
              }, [
                createVNode("line", {
                  x1: "16",
                  y1: "20",
                  x2: "48",
                  y2: "20",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:165:13"
                }),
                createVNode("line", {
                  x1: "16",
                  y1: "30",
                  x2: "48",
                  y2: "30",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:166:13"
                }),
                createVNode("line", {
                  x1: "16",
                  y1: "40",
                  x2: "48",
                  y2: "40",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:167:13"
                }),
                createVNode("path", {
                  d: "m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:168:13"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full hover:p-2 p-2 max-[800px]:p-2 transition-all cursor-pointer"><div class="relative"><svg class="dark:fill-white fill-gray-500" height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 611.999 611.999" xml:space="preserve"><g><g><g><path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
                  C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
                  c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
                  h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
                  c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
                  C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
                  c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
                  c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
                   M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
                  c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
                  c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path><path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
                  c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
                  C323.259,126.96,315.532,119.235,306.001,119.235z"></path></g></g></g></svg><div class="text-center text-[10px] rounded-full absolute -top-[2px] -right-[2px]"><div class="animate-ping absolute inline-flex w-full h-full min-w-[14px] min-h-[14px] max-w-full max-h-full rounded-full bg-sky-400 opacity-75"></div><div class="relative inline-flex justify-center rounded-full min-w-[14px] min-h-[14px] max-w-full max-h-full w-full h-full bg-sky-500 text-white">${ssrInterpolate(Array.isArray(unref(loadNotification).notification) ? unref(loadNotification).notification.filter((item) => !item.read).length : 0)}</div></div></div></div>`);
      if (unref(loadCurrentUser).openNotification) {
        _push(ssrRenderComponent(_sfc_main$8, {
          class: "select-none",
          key: _ctx.readCount,
          onOpenNotification: ($event) => unref(loadCurrentUser).openNotification = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex max-[800px]:hidden select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer hover:transform hover:-translate-y-2">`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<div class=""><img class="w-[50px] h-[50px] rounded-full shadow-lg border border-gray-100 dark:border-none"${ssrRenderAttr("src", unref(loadCurrentUser).user.photo)} alt="header-img"></div>`);
      } else {
        _push(`<div class="flex items-center gap-x-2">`);
        _push(ssrRenderComponent(TheSceleton, {
          "border-radius": "100px",
          width: "50px",
          height: "50px"
        }, null, _parent));
        _push(ssrRenderComponent(TheSceleton, {
          "border-radius": "5px",
          width: "150px",
          height: "15px"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<h3 class="dark:text-white select-none tracking-wider">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3></div><div class="relative max-[800px]:hidden"><div class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"></circle><path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"></path></svg></div>`);
      if (unref(loadCurrentUser).openSettings) {
        _push(`<div class="flex flex-col gap-y-6 select-none"><div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex"><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top"></path></g></g></svg></div>`);
        _push(ssrRenderComponent(_sfc_main$7, null, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_503_2726)"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"${_scopeId}></rect><mask id="mask0_503_2726" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"${_scopeId}></rect></mask><g mask="url(#mask0_503_2726)"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"${_scopeId}></path></g></g><defs${_scopeId}><clipPath id="clip0_503_2726"${_scopeId}><rect width="28" height="20" rx="2" fill="white"${_scopeId}></rect></clipPath></defs></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 -4 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("g", { "clip-path": "url(#clip0_503_2726)" }, [
                      createVNode("rect", {
                        x: "0.25",
                        y: "0.25",
                        width: "27.5",
                        height: "19.5",
                        rx: "1.75",
                        fill: "white",
                        stroke: "#F5F5F5",
                        "stroke-width": "0.5"
                      }),
                      createVNode("mask", {
                        id: "mask0_503_2726",
                        style: { "mask-type": "alpha" },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "28",
                        height: "20"
                      }, [
                        createVNode("rect", {
                          x: "0.25",
                          y: "0.25",
                          width: "27.5",
                          height: "19.5",
                          rx: "1.75",
                          fill: "white",
                          stroke: "white",
                          "stroke-width": "0.5"
                        })
                      ]),
                      createVNode("g", { mask: "url(#mask0_503_2726)" }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 13.3333H28V6.66667H0V13.3333Z",
                          fill: "#0C47B7"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 20H28V13.3333H0V20Z",
                          fill: "#E53B35"
                        })
                      ])
                    ]),
                    createVNode("defs", null, [
                      createVNode("clipPath", { id: "clip0_503_2726" }, [
                        createVNode("rect", {
                          width: "28",
                          height: "20",
                          rx: "2",
                          fill: "white"
                        })
                      ])
                    ])
                  ]))
                ])
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3${_scopeId}>${ssrInterpolate(_ctx.$t("Русский"))}</h3>`);
            } else {
              return [
                createVNode("h3", null, toDisplayString(_ctx.$t("Русский")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(loadCurrentUser).user.role.name_en !== "admin") {
          _push(ssrRenderComponent(_sfc_main$7, { to: "profile" }, {
            headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z" })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("Личная информация"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Личная информация")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(loadCurrentUser).user.role.name_en !== "admin") {
          _push(ssrRenderComponent(_sfc_main$7, { to: "companies" }, {
            headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 50 50",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }, [
                    createVNode("path", { d: "M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("Информация о Компании"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Информация о Компании")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(loadCurrentUser).user.role.name_en !== "admin") {
          _push(ssrRenderComponent(_sfc_main$7, { to: "tasks" }, {
            headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    class: "dark:stroke-white stroke-black",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12.37 8.87988H17.62",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M6.38 8.87988L7.13 9.62988L9.38 7.37988",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M12.37 15.8799H17.62",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M6.38 15.8799L7.13 16.6299L9.38 14.3799",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("Мои задания"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Мои задания")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$a, {
          class: "rounded-full py-2",
          type: "danger",
          onClick: ($event) => {
            unref(nuxtStorage).localStorage.removeItem("token");
            unref(router).push("/");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Выйти"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Выйти")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentElems.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentLinkList",
  __ssrInlineRender: true,
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$6, { class: "hidden max-[800px]:flex" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_503_2726)"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"${_scopeId}></rect><mask id="mask0_503_2726" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"${_scopeId}></rect></mask><g mask="url(#mask0_503_2726)"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"${_scopeId}></path></g></g><defs${_scopeId}><clipPath id="clip0_503_2726"${_scopeId}><rect width="28" height="20" rx="2" fill="white"${_scopeId}></rect></clipPath></defs></svg></div>`);
          } else {
            return [
              createVNode("div", null, [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 -4 28 28",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("g", { "clip-path": "url(#clip0_503_2726)" }, [
                    createVNode("rect", {
                      x: "0.25",
                      y: "0.25",
                      width: "27.5",
                      height: "19.5",
                      rx: "1.75",
                      fill: "white",
                      stroke: "#F5F5F5",
                      "stroke-width": "0.5"
                    }),
                    createVNode("mask", {
                      id: "mask0_503_2726",
                      style: { "mask-type": "alpha" },
                      maskUnits: "userSpaceOnUse",
                      x: "0",
                      y: "0",
                      width: "28",
                      height: "20"
                    }, [
                      createVNode("rect", {
                        x: "0.25",
                        y: "0.25",
                        width: "27.5",
                        height: "19.5",
                        rx: "1.75",
                        fill: "white",
                        stroke: "white",
                        "stroke-width": "0.5"
                      })
                    ]),
                    createVNode("g", { mask: "url(#mask0_503_2726)" }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 13.3333H28V6.66667H0V13.3333Z",
                        fill: "#0C47B7"
                      }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 20H28V13.3333H0V20Z",
                        fill: "#E53B35"
                      })
                    ])
                  ]),
                  createVNode("defs", null, [
                    createVNode("clipPath", { id: "clip0_503_2726" }, [
                      createVNode("rect", {
                        width: "28",
                        height: "20",
                        rx: "2",
                        fill: "white"
                      })
                    ])
                  ])
                ]))
              ])
            ];
          }
        }),
        headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>${ssrInterpolate(_ctx.$t("Русский"))}</h3>`);
          } else {
            return [
              createVNode("h3", null, toDisplayString(_ctx.$t("Русский")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(loadCurrentUser).user.name_en !== "admin") {
        _push(ssrRenderComponent(_sfc_main$7, { to: "profile" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Личная информация"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Личная информация")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.name_en !== "admin") {
        _push(ssrRenderComponent(_sfc_main$7, { to: "companies" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 50 50",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }, [
                  createVNode("path", { d: "M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Информация о Компании"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Информация о Компании")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.name_en !== "admin") {
        _push(ssrRenderComponent(_sfc_main$7, { to: "tasks" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  class: "dark:stroke-white stroke-black",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12.37 8.87988H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 8.87988L7.13 9.62988L9.38 7.37988",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12.37 15.8799H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 15.8799L7.13 16.6299L9.38 14.3799",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Мои задания"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Мои задания")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderContentLinkList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "HeaderContent",
  __ssrInlineRender: true,
  setup(__props) {
    const windowWidth = ref(null);
    useChat();
    const activeHeader = ref(true);
    const loadCurrentUser = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    watchSyncEffect(() => {
      windowWidth.value < 800 && route.path === "/base/chat" || windowWidth.value < 800 && route.path === `/base/chat/${route.params.id}` ? activeHeader.value = false : activeHeader.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderContentLinkList = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "blur": unref(useTreeStore)().treeFullScreen === true }, "w-full bg-white py-4 px-10 flex dark:bg-gray-600 shadow-lg transition-all duration-300 dark:shadow-lg justify-end relative z-30"]
      }, _attrs))}><div class="flex items-center gap-x-8">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "max-[800px]:hidden" }, null, _parent));
      _push(`<div class="relative hidden max-[800px]:block"><div class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"></circle><path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"></path></svg></div>`);
      if (unref(loadCurrentUser).openSettings) {
        _push(`<div class="flex flex-col gap-y-6 select-none"><div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex"><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top"></path></g></g></svg></div><div class="mx-auto flex flex-col gap-y-6"><div class="max-[800px]:flex max-[800px]:justify-center hidden w-full select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer"><div class=""><img class="rounded-full w-[100px] h-[100px]"${ssrRenderAttr("src", unref(loadCurrentUser).user.photo)} alt=""></div><h3 class="select-none dark:text-white">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3></div></div>`);
        _push(ssrRenderComponent(_component_HeaderContentLinkList, null, null, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$a), {
          class: "rounded-full py-2",
          type: "danger",
          onClick: () => {
            _ctx.localStorage.removeItem("token");
            unref(router).push("/");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Выйти"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Выйти")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _imports_0 = "" + __publicAssetsURL("img/Logo.webp");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavigationLink",
  __ssrInlineRender: true,
  props: {
    to: String,
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.to,
        onClick: ($event) => {
          unref(authUser).openSettings = false;
          unref(authUser).openNotification = false;
        },
        class: ["flex pl-6 transition-all hover:bg-cyan dark:hover:bg-blueDarkSemiLight dark:hover:border-r-blue-400 hover:border-r-4 hover:border-r-semiCyan py-2 w-full items-center gap-x-3 dark:text-white text-black px-4", { "rounded-l-none justify-center ": !unref(authUser).activeNav }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white fill-black transition-all"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "navIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (unref(authUser).activeNav) {
              _push2(`<div class="tracking-wider text-sm max-sm:text-base"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "navLink", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "dark:fill-white fill-black transition-all" }, [
                renderSlot(_ctx.$slots, "navIcon")
              ]),
              unref(authUser).activeNav ? (openBlock(), createBlock("div", {
                key: 0,
                class: "tracking-wider text-sm max-sm:text-base"
              }, [
                renderSlot(_ctx.$slots, "navLink")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigtaion/NavigationLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationBlock",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    activeNav: {
      type: Boolean
    },
    navId: {
      type: Number,
      default: null
    },
    hoverActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="px-2 w-full text-start transition-all"><div class="items-center flex justify-start">`);
      ssrRenderSlot(_ctx.$slots, "navTitleIcon", {}, null, _push, _parent);
      if (unref(authStore).activeNav) {
        _push(`<span class="tracking-wider dark:text-white text-black">`);
        ssrRenderSlot(_ctx.$slots, "navTitle", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="" class="${ssrRenderClass([{ "rotate-180 transition-all": __props.active, "-rotate-0 transition-all": !__props.active }, ""])}"><svg class="dark:fill-white fill-black" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path></svg></div></div></button>`);
      if (__props.active) {
        _push(`<div class="flex flex-col gap-y-1">`);
        ssrRenderSlot(_ctx.$slots, "navContent", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigtaion/NavigationBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    useTaskList();
    const company = useCompanies();
    const router = useRouter();
    const logOut = () => {
      localStorage.removeItem("token");
      router.push("/");
    };
    const isValidLink = (nameEn) => {
      var _a;
      const foundItem = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === nameEn);
      return foundItem !== void 0;
    };
    watch(() => loadCurrentUser.user, () => {
      if (loadCurrentUser.user.role.name_en !== "admin") {
        company.loadCurrentCompany();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["container z-50 relative shadow-lg dark:border-none", { "blur": unref(useTreeStore)().treeFullScreen === true }]
      }, _attrs))} data-v-c416b5d0><div class="${ssrRenderClass([{ "px-3 py-[33px]": !unref(loadCurrentUser).activeNav, "px-6 py-[23px]": unref(loadCurrentUser).activeNav }, "flex w-full items-center transition-all justify-between text-center dark:bg-gray-600"])}" data-v-c416b5d0><img${ssrRenderAttr("src", _imports_0)} alt="" class="${ssrRenderClass([{ "w-[80px] transition-all": unref(loadCurrentUser).activeNav, "w-[50px] transition-all": !unref(loadCurrentUser).activeNav }, "transition-all mx-auto"])}" data-v-c416b5d0></div><div class="${ssrRenderClass([{ "pl-0": !unref(loadCurrentUser).activeNav, "max-md:w-full overflow-x-hidden ": unref(loadCurrentUser).activeNav, "top-0 fixed shadow-lg dark:border-none": unref(loadCurrentUser).my_scroll > 90, "max-[1151px]:w-[27%] max-[1149px]:w-full max-lg:w-full": unref(loadCurrentUser).activeNav && unref(loadCurrentUser).my_scroll > 100 }, "py-2 flex flex-col gap-y-4 transition-all duration-300 dark:bg-gray-600 max-h-screen max-[1150px]:pb-24 overflow-y-auto h-screen"])}" data-v-c416b5d0>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white fill-black" data-v-c416b5d0${_scopeId}><svg width="45px" height="45px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path d="M17 11.8c-0.28-1.4-1.4-2.52-2.84-2.84-0.36-1.68-1.84-2.92-3.6-2.92h-6.88c-2.040 0-3.68 1.64-3.68 3.68v6.88c0 1.76 1.24 3.24 2.92 3.6 0.28 1.4 1.4 2.52 2.84 2.84 0.36 1.68 1.84 2.92 3.6 2.92h6.88c2.040 0 3.68-1.64 3.68-3.68v-6.88c0-1.76-1.24-3.24-2.92-3.6zM18.24 15.4v6.88c0 0.080 0 0.16 0 0.24-0.48-1.12-1.32-2.080-2.4-2.72 0.24-0.48 0.36-1 0.36-1.56 0-1.88-1.52-3.4-3.4-3.4s-3.4 1.52-3.4 3.4c0 0.56 0.12 1.080 0.36 1.56-1.080 0.64-1.88 1.6-2.4 2.72 0-0.080 0-0.16 0-0.24v-6.88c0-1.12 0.88-2 2-2h6.88c1.12 0 2 0.88 2 2zM11.040 18.28c0-0.96 0.76-1.72 1.72-1.72s1.72 0.76 1.72 1.72c0 0.96-0.76 1.72-1.72 1.72-0.92 0-1.72-0.76-1.72-1.72zM1.68 16.6v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM4.52 19.44v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM9.36 24.28c-0.28 0-0.52-0.040-0.76-0.16 0-0.040 0.040-0.080 0.040-0.12 0.28-1.24 1.12-2.32 2.28-2.92 0.56 0.36 1.2 0.56 1.88 0.56s1.36-0.2 1.88-0.56c1.16 0.6 2 1.64 2.28 2.92 0 0.040 0.040 0.080 0.040 0.12-0.24 0.080-0.48 0.16-0.76 0.16h-6.88z" data-v-c416b5d0${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white fill-black" }, [
                (openBlock(), createBlock("svg", {
                  width: "45px",
                  height: "45px",
                  viewBox: "-6 0 32 32",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M17 11.8c-0.28-1.4-1.4-2.52-2.84-2.84-0.36-1.68-1.84-2.92-3.6-2.92h-6.88c-2.040 0-3.68 1.64-3.68 3.68v6.88c0 1.76 1.24 3.24 2.92 3.6 0.28 1.4 1.4 2.52 2.84 2.84 0.36 1.68 1.84 2.92 3.6 2.92h6.88c2.040 0 3.68-1.64 3.68-3.68v-6.88c0-1.76-1.24-3.24-2.92-3.6zM18.24 15.4v6.88c0 0.080 0 0.16 0 0.24-0.48-1.12-1.32-2.080-2.4-2.72 0.24-0.48 0.36-1 0.36-1.56 0-1.88-1.52-3.4-3.4-3.4s-3.4 1.52-3.4 3.4c0 0.56 0.12 1.080 0.36 1.56-1.080 0.64-1.88 1.6-2.4 2.72 0-0.080 0-0.16 0-0.24v-6.88c0-1.12 0.88-2 2-2h6.88c1.12 0 2 0.88 2 2zM11.040 18.28c0-0.96 0.76-1.72 1.72-1.72s1.72 0.76 1.72 1.72c0 0.96-0.76 1.72-1.72 1.72-0.92 0-1.72-0.76-1.72-1.72zM1.68 16.6v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM4.52 19.44v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM9.36 24.28c-0.28 0-0.52-0.040-0.76-0.16 0-0.040 0.040-0.080 0.040-0.12 0.28-1.24 1.12-2.32 2.28-2.92 0.56 0.36 1.2 0.56 1.88 0.56s1.36-0.2 1.88-0.56c1.16 0.6 2 1.64 2.28 2.92 0 0.040 0.040 0.080 0.040 0.12-0.24 0.080-0.48 0.16-0.76 0.16h-6.88z" })
                ]))
              ])
            ];
          }
        }),
        navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Пользователи"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Пользователи")), 1)
            ];
          }
        }),
        navContent: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { to: "/base/profile" }, {
              navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><circle cx="12" cy="6" r="4" stroke-width="1.5" data-v-c416b5d0${_scopeId2}></circle><path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="" stroke-width="1.5" stroke-linecap="round" data-v-c416b5d0${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      width: "25px",
                      height: "25px",
                      class: "stroke-black dark:stroke-white",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "6",
                        r: "4",
                        "stroke-width": "1.5"
                      }),
                      createVNode("path", {
                        d: "M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",
                        stroke: "",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ];
                }
              }),
              navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Профиль"))}</p>`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.$t("Профиль")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (((_c2 = (_b2 = (_a2 = unref(loadCurrentUser)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.role) == null ? void 0 : _c2.name_en) !== "admin") {
              _push2(ssrRenderComponent(_sfc_main$3, { to: "/base/users" }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><g id="User / Users_Group" data-v-c416b5d0${_scopeId2}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path></g></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("g", { id: "User / Users_Group" }, [
                          createVNode("path", {
                            id: "Vector",
                            class: "dark:stroke-white stroke-black",
                            d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
                            "stroke-width": "1",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ])
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Пользователи"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Пользователи")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$3, { to: "/base/profile" }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    width: "25px",
                    height: "25px",
                    class: "stroke-black dark:stroke-white",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("circle", {
                      cx: "12",
                      cy: "6",
                      r: "4",
                      "stroke-width": "1.5"
                    }),
                    createVNode("path", {
                      d: "M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",
                      stroke: "",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Профиль")), 1)
                ]),
                _: 1
              }),
              ((_f2 = (_e2 = (_d2 = unref(loadCurrentUser)) == null ? void 0 : _d2.user) == null ? void 0 : _e2.role) == null ? void 0 : _f2.name_en) !== "admin" ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                to: "/base/users"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("g", { id: "User / Users_Group" }, [
                      createVNode("path", {
                        id: "Vector",
                        class: "dark:stroke-white stroke-black",
                        d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
                        "stroke-width": "1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ])
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Пользователи")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (((_c = (_b = (_a = unref(loadCurrentUser)) == null ? void 0 : _a.user) == null ? void 0 : _b.role) == null ? void 0 : _c.name_en) !== "admin" && isValidLink("tasks")) {
        _push(ssrRenderComponent(_sfc_main$2, null, {
          navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Задания"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Задания")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black px-1" data-v-c416b5d0${_scopeId}><svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path fill-rule="nonzero" d="M10,4.5 C10,4.77614237 9.77614237,5 9.5,5 C9.22385763,5 9,4.77614237 9,4.5 C9,3.67157288 9.67157288,3 10.5,3 L13.5,3 C14.3284271,3 15,3.67157288 15,4.5 C15,4.77614237 14.7761424,5 14.5,5 C14.2238576,5 14,4.77614237 14,4.5 C14,4.22385763 13.7761424,4 13.5,4 L10.5,4 C10.2238576,4 10,4.22385763 10,4.5 Z M6.5,4 C6.77614237,4 7,4.22385763 7,4.5 C7,4.77614237 6.77614237,5 6.5,5 C5.67157288,5 5,5.67157288 5,6.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,6.5 C19,5.67157288 18.3284271,5 17.5,5 C17.2238576,5 17,4.77614237 17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C18.8807119,4 20,5.11928813 20,6.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,6.5 C4,5.11928813 5.11928813,4 6.5,4 Z" data-v-c416b5d0${_scopeId}></path><path fill-rule="nonzero" d="M15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L10.8535534,14.8535534 C10.6582912,15.0488155 10.3417088,15.0488155 10.1464466,14.8535534 L8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 C8.34170876,11.9511845 8.65829124,11.9511845 8.85355339,12.1464466 L10.5,13.7928932 L15.1464466,9.14644661 Z" data-v-c416b5d0${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:fill-white fill-black px-1" }, [
                  (openBlock(), createBlock("svg", {
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "fill-rule": "nonzero",
                      d: "M10,4.5 C10,4.77614237 9.77614237,5 9.5,5 C9.22385763,5 9,4.77614237 9,4.5 C9,3.67157288 9.67157288,3 10.5,3 L13.5,3 C14.3284271,3 15,3.67157288 15,4.5 C15,4.77614237 14.7761424,5 14.5,5 C14.2238576,5 14,4.77614237 14,4.5 C14,4.22385763 13.7761424,4 13.5,4 L10.5,4 C10.2238576,4 10,4.22385763 10,4.5 Z M6.5,4 C6.77614237,4 7,4.22385763 7,4.5 C7,4.77614237 6.77614237,5 6.5,5 C5.67157288,5 5,5.67157288 5,6.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,6.5 C19,5.67157288 18.3284271,5 17.5,5 C17.2238576,5 17,4.77614237 17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C18.8807119,4 20,5.11928813 20,6.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,6.5 C4,5.11928813 5.11928813,4 6.5,4 Z"
                    }),
                    createVNode("path", {
                      "fill-rule": "nonzero",
                      d: "M15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L10.8535534,14.8535534 C10.6582912,15.0488155 10.3417088,15.0488155 10.1464466,14.8535534 L8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 C8.34170876,11.9511845 8.65829124,11.9511845 8.85355339,12.1464466 L10.5,13.7928932 L15.1464466,9.14644661 Z"
                    })
                  ]))
                ])
              ];
            }
          }),
          navContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("tasks")) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  to: `/base/tasks`,
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg width="25px" height="25px" class="dark:fill-white fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" data-v-c416b5d0${_scopeId2}></path><path d="M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" data-v-c416b5d0${_scopeId2}></path><path d="M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" data-v-c416b5d0${_scopeId2}></path><path d="M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" data-v-c416b5d0${_scopeId2}></path><path d="M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" data-v-c416b5d0${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          width: "25px",
                          height: "25px",
                          class: "dark:fill-white fill-black",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" }),
                          createVNode("path", { d: "M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" }),
                          createVNode("path", { d: "M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" }),
                          createVNode("path", { d: "M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" }),
                          createVNode("path", { d: "M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" })
                        ]))
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Задания"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("Задания")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("tasks") ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  to: `/base/tasks`,
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      width: "25px",
                      height: "25px",
                      class: "dark:fill-white fill-black",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" }),
                      createVNode("path", { d: "M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" }),
                      createVNode("path", { d: "M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" }),
                      createVNode("path", { d: "M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" }),
                      createVNode("path", { d: "M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" })
                    ]))
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("Задания")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, null, {
        navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("О компании"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("О компании")), 1)
            ];
          }
        }),
        navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(loadCurrentUser).user.company_logo_url) {
              _push2(`<div class="dark:fill-white fill-black px-2" data-v-c416b5d0${_scopeId}><svg width="35px" height="35px" viewBox="0 0 846.66 846.66" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path d="M173.4 164.76l46.54 0 0 -99.29c0,-11.49 9.32,-20.81 20.81,-20.81l365.16 0c11.49,0 20.81,9.32 20.81,20.81l0 99.29 46.55 0c11.49,0 20.8,9.32 20.8,20.81l0 574.82 46.44 0 0 -70.09c0,-27.36 41.6,-27.36 41.6,0l0 70.09 36.41 0c27.37,0 27.37,41.61 0,41.61 -263.46,0 -526.92,0 -790.38,0 -27.36,0 -27.36,-41.61 0,-41.61l36.41 0 0 -70.09c0,-27.36 41.6,-27.36 41.6,0l0 70.09 46.44 0 0 -574.82c0,-11.49 9.32,-20.81 20.81,-20.81zm304.59 595.63l0 -148.28 -109.32 0 0 148.28 109.32 0zm-150.93 0l0 -169.08c0,-11.49 9.32,-20.81 20.8,-20.81l150.94 0c11.49,0 20.8,9.32 20.8,20.81l0 169.08 132.86 0 0 -484.23 -458.26 0 0 484.23 132.86 0zm-79.01 -344.07l64.92 0c11.49,0 20.8,9.32 20.8,20.81l0 64.91c0,11.49 -9.31,20.81 -20.8,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.11 41.61l-23.3 0 0 23.31 23.3 0 0 -23.31zm241.53 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.48,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.32,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -161.71l64.92 0c11.49,0 20.8,9.32 20.8,20.81l0 64.91c0,11.49 -9.31,20.81 -20.8,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.11 41.61l-23.3 0 0 23.31 23.3 0 0 -23.31zm241.53 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.48,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.32,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-240.79 -103.28l458.26 0 0 -28.18c-152.75,0 -305.51,0 -458.26,0l0 28.18zm67.35 -69.79l323.56 0 0 -78.49 -323.56 0 0 78.49z" data-v-c416b5d0${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<div class="w-[40px] h-[40px]" data-v-c416b5d0${_scopeId}><img class="w-full rounded-full"${ssrRenderAttr("src", unref(loadCurrentUser).user.company_logo_url)} alt="" data-v-c416b5d0${_scopeId}></div>`);
            }
          } else {
            return [
              !unref(loadCurrentUser).user.company_logo_url ? (openBlock(), createBlock("div", {
                key: 0,
                class: "dark:fill-white fill-black px-2"
              }, [
                (openBlock(), createBlock("svg", {
                  width: "35px",
                  height: "35px",
                  viewBox: "0 0 846.66 846.66",
                  version: "1.1",
                  "xml:space": "preserve",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M173.4 164.76l46.54 0 0 -99.29c0,-11.49 9.32,-20.81 20.81,-20.81l365.16 0c11.49,0 20.81,9.32 20.81,20.81l0 99.29 46.55 0c11.49,0 20.8,9.32 20.8,20.81l0 574.82 46.44 0 0 -70.09c0,-27.36 41.6,-27.36 41.6,0l0 70.09 36.41 0c27.37,0 27.37,41.61 0,41.61 -263.46,0 -526.92,0 -790.38,0 -27.36,0 -27.36,-41.61 0,-41.61l36.41 0 0 -70.09c0,-27.36 41.6,-27.36 41.6,0l0 70.09 46.44 0 0 -574.82c0,-11.49 9.32,-20.81 20.81,-20.81zm304.59 595.63l0 -148.28 -109.32 0 0 148.28 109.32 0zm-150.93 0l0 -169.08c0,-11.49 9.32,-20.81 20.8,-20.81l150.94 0c11.49,0 20.8,9.32 20.8,20.81l0 169.08 132.86 0 0 -484.23 -458.26 0 0 484.23 132.86 0zm-79.01 -344.07l64.92 0c11.49,0 20.8,9.32 20.8,20.81l0 64.91c0,11.49 -9.31,20.81 -20.8,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.11 41.61l-23.3 0 0 23.31 23.3 0 0 -23.31zm241.53 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.48,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.32,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -161.71l64.92 0c11.49,0 20.8,9.32 20.8,20.81l0 64.91c0,11.49 -9.31,20.81 -20.8,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.11 41.61l-23.3 0 0 23.31 23.3 0 0 -23.31zm241.53 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.48,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.32,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-186.94 -41.61l64.92 0c11.49,0 20.81,9.32 20.81,20.81l0 64.91c0,11.49 -9.32,20.81 -20.81,20.81l-64.92 0c-11.49,0 -20.8,-9.32 -20.8,-20.81l0 -64.91c0,-11.49 9.31,-20.81 20.8,-20.81zm44.12 41.61l-23.31 0 0 23.31 23.31 0 0 -23.31zm-240.79 -103.28l458.26 0 0 -28.18c-152.75,0 -305.51,0 -458.26,0l0 28.18zm67.35 -69.79l323.56 0 0 -78.49 -323.56 0 0 78.49z" })
                ]))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "w-[40px] h-[40px]"
              }, [
                createVNode("img", {
                  class: "w-full rounded-full",
                  src: unref(loadCurrentUser).user.company_logo_url,
                  alt: ""
                }, null, 8, ["src"])
              ]))
            ];
          }
        }),
        navContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("documents")) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                to: `/base/documents`,
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke-width="1.5" data-v-c416b5d0${_scopeId2}></path><path d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239" stroke-width="1.5" data-v-c416b5d0${_scopeId2}></path><path d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239" stroke-width="1.5" data-v-c416b5d0${_scopeId2}></path><path d="M9 13H15" stroke-width="1.5" stroke-linecap="round" data-v-c416b5d0${_scopeId2}></path><path d="M9 9H15" stroke-width="1.5" stroke-linecap="round" data-v-c416b5d0${_scopeId2}></path><path d="M9 17H12" stroke-width="1.5" stroke-linecap="round" data-v-c416b5d0${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z",
                          "stroke-width": "1.5"
                        }),
                        createVNode("path", {
                          d: "M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239",
                          "stroke-width": "1.5"
                        }),
                        createVNode("path", {
                          d: "M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239",
                          "stroke-width": "1.5"
                        }),
                        createVNode("path", {
                          d: "M9 13H15",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M9 9H15",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M9 17H12",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Документы"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Документы")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("sales")) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                to: `/base/sales`,
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" x="0" y="0" viewBox="0 0 511 511.997" style="${ssrRenderStyle({ "enable-background": "new 0 0 512 512" })}" xml:space="preserve" data-v-c416b5d0${_scopeId2}><g data-v-c416b5d0${_scopeId2}><path d="M452.707 267.48c-23.527-23.421-50.727-1.5-50.727-1.5v-123.3a7.499 7.499 0 1 0-14.996 0V276.53s-35.761 28.192-51.132 35.082V89.605c0-10.32 8.394-18.714 18.714-18.714h13.704c10.32 0 18.714 8.394 18.714 18.714v22.372c0 4.144 3.356 7.5 7.5 7.5a7.496 7.496 0 0 0 7.496-7.5V89.605c0-18.59-15.12-33.71-33.71-33.71h-13.704c-18.59 0-33.714 15.12-33.714 33.71V317.56a78.813 78.813 0 0 1-13.727 2.554V162c0-18.684-15.2-33.883-33.879-33.883h-13.371c-18.68 0-33.879 15.2-33.879 33.883v76.414l-13.73 7.29v-25.43c0-16.82-13.684-30.504-30.5-30.504H161.64c-16.82 0-30.5 13.683-30.5 30.503v68.493l-24.489 12.996-68.765 19.652c-11.965 3.418-21.957 11.254-28.13 22.059-6.175 10.808-7.85 23.394-4.718 35.437l7.691 29.594c1.04 4.008 5.133 6.41 9.145 5.371a7.502 7.502 0 0 0 5.371-9.148l-7.691-29.59c-4.461-17.164 5.402-34.43 22.457-39.301l62.87-17.969 47.255 126.117c3.164 8.446 2.664 32.54-22.332 41.418l-47.512 10.793c-16.559 3.758-32.875-6.168-37.148-22.605L35.5 436.477a7.505 7.505 0 0 0-9.145-5.375 7.504 7.504 0 0 0-5.375 9.148l9.649 37.117c5.422 20.852 23.945 34.63 44.566 34.63 15.153 0 57.934-11.97 57.934-11.97a46.217 46.217 0 0 0 34.988-54.621l164.375-40.242c13.594-3.332 26.5-9.789 37.313-18.676l79.992-65.726c24.387-21.63 10.082-46.145 2.91-53.282zM259.875 143.117h13.371c10.41 0 18.879 8.473 18.879 18.883v158.488l-47.324-.02c-4.348-.038-1.34-2.91-1.102-3.105l13.63-11.039c12.714-10.3 21.019-24.62 24.679-42.57 2.324-11.387-2.02-22.785-11.328-29.746-8.696-6.5-19.88-7.75-29.684-3.453V162c0-10.41 8.469-18.883 18.879-18.883zm-113.734 77.156c0-8.546 6.953-15.503 15.5-15.503h20.125c8.547 0 15.504 6.957 15.504 15.503v33.391l-51.133 27.14v-60.53zm294.136 88.903-79.996 65.726a79.408 79.408 0 0 1-31.355 15.692L163.34 431.137l-44.531-118.84 127.148-67.492c5.168-2.746 11.055-2.29 15.738 1.215 4.684 3.503 6.785 9.011 5.618 14.738-2.95 14.449-9.485 25.86-19.426 33.91l-13.63 11.043c-5.585 4.523-7.644 11.824-5.245 18.601 2.398 6.774 8.593 11.157 15.781 11.157l54.645.023h.039c19.453 0 38.148-5.914 54.062-17.105l61.07-42.946a21.122 21.122 0 0 1 27.368 2.524c4.207 4.297 12.441 17.066-1.7 31.21zm0 0" class="fill-black dark:fill-white" opacity="1" data-original="#000000" data-v-c416b5d0${_scopeId2}></path><path d="M123.414 448.79c0-16.294-13.254-29.552-29.547-29.552S64.32 432.496 64.32 448.79c0 16.29 13.254 29.547 29.547 29.547s29.547-13.258 29.547-29.547zm-44.094 0c0-8.024 6.524-14.552 14.547-14.552 8.02 0 14.547 6.528 14.547 14.551 0 8.02-6.523 14.547-14.547 14.547-8.023 0-14.547-6.527-14.547-14.547zM39.934 235.48l109.023-109.863 24.523 12.684a23.065 23.065 0 0 0 26.602-3.871l59.344-57.125s-1.633 29.34 23.074 29.34c12.719 0 23.07-10.352 23.07-23.075v-60.5c0-.07-.004-.144-.004-.218C305.484 7.066 293.941 0 282.5 0h-59.973c-12.722 0-23.07 10.352-23.07 23.07 0 25.36 25.809 23.07 25.809 23.07L179.992 89.72l-24.879-12.867c-8.996-4.657-19.836-2.95-26.976 4.238L7.184 202.977c-8.961 9.03-8.907 23.668.125 32.628 4.351 4.317 19.21 13.29 32.625-.125zm-22.106-21.937L138.781 91.656c1.563-1.57 4.07-4.32 9.442-1.48l29.652 15.336a7.499 7.499 0 0 0 8.648-1.258l62.547-60.207a7.5 7.5 0 0 0-5.203-12.902h-21.34c-4.449 0-8.07-3.622-8.07-8.075 0-4.449 3.621-8.07 8.07-8.07H282.5c2.207 0 8.066 0 8.066 8.023 0 .067.004.133.004.204V83.57c0 4.45-3.62 8.07-8.07 8.07-4.453 0-8.074-3.62-8.074-8.07V59.676a7.496 7.496 0 0 0-12.7-5.402l-72.046 69.351a8.069 8.069 0 0 1-9.305 1.355l-29.414-15.214a7.505 7.505 0 0 0-8.77 1.379L29.29 224.915c-4.922 4.92-9.894 1.554-11.418.042-3.156-3.137-3.176-8.258-.043-11.414zm0 0" class="fill-black dark:fill-white" opacity="1" data-original="#000000" data-v-c416b5d0${_scopeId2}></path></g></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "fill-black dark:fill-white",
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        width: "25px",
                        height: "25px",
                        x: "0",
                        y: "0",
                        viewBox: "0 0 511 511.997",
                        style: { "enable-background": "new 0 0 512 512" },
                        "xml:space": "preserve"
                      }, [
                        createVNode("g", null, [
                          createVNode("path", {
                            d: "M452.707 267.48c-23.527-23.421-50.727-1.5-50.727-1.5v-123.3a7.499 7.499 0 1 0-14.996 0V276.53s-35.761 28.192-51.132 35.082V89.605c0-10.32 8.394-18.714 18.714-18.714h13.704c10.32 0 18.714 8.394 18.714 18.714v22.372c0 4.144 3.356 7.5 7.5 7.5a7.496 7.496 0 0 0 7.496-7.5V89.605c0-18.59-15.12-33.71-33.71-33.71h-13.704c-18.59 0-33.714 15.12-33.714 33.71V317.56a78.813 78.813 0 0 1-13.727 2.554V162c0-18.684-15.2-33.883-33.879-33.883h-13.371c-18.68 0-33.879 15.2-33.879 33.883v76.414l-13.73 7.29v-25.43c0-16.82-13.684-30.504-30.5-30.504H161.64c-16.82 0-30.5 13.683-30.5 30.503v68.493l-24.489 12.996-68.765 19.652c-11.965 3.418-21.957 11.254-28.13 22.059-6.175 10.808-7.85 23.394-4.718 35.437l7.691 29.594c1.04 4.008 5.133 6.41 9.145 5.371a7.502 7.502 0 0 0 5.371-9.148l-7.691-29.59c-4.461-17.164 5.402-34.43 22.457-39.301l62.87-17.969 47.255 126.117c3.164 8.446 2.664 32.54-22.332 41.418l-47.512 10.793c-16.559 3.758-32.875-6.168-37.148-22.605L35.5 436.477a7.505 7.505 0 0 0-9.145-5.375 7.504 7.504 0 0 0-5.375 9.148l9.649 37.117c5.422 20.852 23.945 34.63 44.566 34.63 15.153 0 57.934-11.97 57.934-11.97a46.217 46.217 0 0 0 34.988-54.621l164.375-40.242c13.594-3.332 26.5-9.789 37.313-18.676l79.992-65.726c24.387-21.63 10.082-46.145 2.91-53.282zM259.875 143.117h13.371c10.41 0 18.879 8.473 18.879 18.883v158.488l-47.324-.02c-4.348-.038-1.34-2.91-1.102-3.105l13.63-11.039c12.714-10.3 21.019-24.62 24.679-42.57 2.324-11.387-2.02-22.785-11.328-29.746-8.696-6.5-19.88-7.75-29.684-3.453V162c0-10.41 8.469-18.883 18.879-18.883zm-113.734 77.156c0-8.546 6.953-15.503 15.5-15.503h20.125c8.547 0 15.504 6.957 15.504 15.503v33.391l-51.133 27.14v-60.53zm294.136 88.903-79.996 65.726a79.408 79.408 0 0 1-31.355 15.692L163.34 431.137l-44.531-118.84 127.148-67.492c5.168-2.746 11.055-2.29 15.738 1.215 4.684 3.503 6.785 9.011 5.618 14.738-2.95 14.449-9.485 25.86-19.426 33.91l-13.63 11.043c-5.585 4.523-7.644 11.824-5.245 18.601 2.398 6.774 8.593 11.157 15.781 11.157l54.645.023h.039c19.453 0 38.148-5.914 54.062-17.105l61.07-42.946a21.122 21.122 0 0 1 27.368 2.524c4.207 4.297 12.441 17.066-1.7 31.21zm0 0",
                            class: "fill-black dark:fill-white",
                            opacity: "1",
                            "data-original": "#000000"
                          }),
                          createVNode("path", {
                            d: "M123.414 448.79c0-16.294-13.254-29.552-29.547-29.552S64.32 432.496 64.32 448.79c0 16.29 13.254 29.547 29.547 29.547s29.547-13.258 29.547-29.547zm-44.094 0c0-8.024 6.524-14.552 14.547-14.552 8.02 0 14.547 6.528 14.547 14.551 0 8.02-6.523 14.547-14.547 14.547-8.023 0-14.547-6.527-14.547-14.547zM39.934 235.48l109.023-109.863 24.523 12.684a23.065 23.065 0 0 0 26.602-3.871l59.344-57.125s-1.633 29.34 23.074 29.34c12.719 0 23.07-10.352 23.07-23.075v-60.5c0-.07-.004-.144-.004-.218C305.484 7.066 293.941 0 282.5 0h-59.973c-12.722 0-23.07 10.352-23.07 23.07 0 25.36 25.809 23.07 25.809 23.07L179.992 89.72l-24.879-12.867c-8.996-4.657-19.836-2.95-26.976 4.238L7.184 202.977c-8.961 9.03-8.907 23.668.125 32.628 4.351 4.317 19.21 13.29 32.625-.125zm-22.106-21.937L138.781 91.656c1.563-1.57 4.07-4.32 9.442-1.48l29.652 15.336a7.499 7.499 0 0 0 8.648-1.258l62.547-60.207a7.5 7.5 0 0 0-5.203-12.902h-21.34c-4.449 0-8.07-3.622-8.07-8.075 0-4.449 3.621-8.07 8.07-8.07H282.5c2.207 0 8.066 0 8.066 8.023 0 .067.004.133.004.204V83.57c0 4.45-3.62 8.07-8.07 8.07-4.453 0-8.074-3.62-8.074-8.07V59.676a7.496 7.496 0 0 0-12.7-5.402l-72.046 69.351a8.069 8.069 0 0 1-9.305 1.355l-29.414-15.214a7.505 7.505 0 0 0-8.77 1.379L29.29 224.915c-4.922 4.92-9.894 1.554-11.418.042-3.156-3.137-3.176-8.258-.043-11.414zm0 0",
                            class: "fill-black dark:fill-white",
                            opacity: "1",
                            "data-original": "#000000"
                          })
                        ])
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Продажи"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Продажи")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, {
              to: "/base/companies",
              class: "flex items-center gap-x-6"
            }, {
              navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z" data-v-c416b5d0${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "fill-black dark:fill-white",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 50 50",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z" })
                    ]))
                  ];
                }
              }),
              navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loadCurrentUser).user.role === "Администратор сайта") {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Компании"))}</p>`);
                  } else {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Компания"))}</p>`);
                  }
                } else {
                  return [
                    unref(loadCurrentUser).user.role === "Администратор сайта" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.$t("Компании")), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.$t("Компания")), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(loadCurrentUser).user.role.name_en !== "admin") {
              _push2(ssrRenderComponent(_sfc_main$3, {
                to: "/base/companies/department",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:stroke-white stroke-black" fill="none" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" data-v-c416b5d0${_scopeId2}></path><path d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" data-v-c416b5d0${_scopeId2}></path><path d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" data-v-c416b5d0${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        fill: "none",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" }),
                        createVNode("path", { d: "M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" }),
                        createVNode("path", { d: "M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Департаменты"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Департаменты")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(loadCurrentUser).user.role.name_en !== "admin") {
              _push2(ssrRenderComponent(_sfc_main$3, {
                to: "/base/tree",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z" transform="translate(0 0.0049)" data-v-c416b5d0${_scopeId2}></path><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32" height="32" data-v-c416b5d0${_scopeId2}></rect></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "fill-black dark:fill-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 32 32",
                        id: "icon",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z",
                          transform: "translate(0 0.0049)"
                        }),
                        createVNode("rect", {
                          id: "_Transparent_Rectangle_",
                          "data-name": "<Transparent Rectangle>",
                          fill: "none",
                          width: "32",
                          height: "32"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Дерево"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Дерево")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("objects")) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                to: "/base/objects",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path><path d="M12 12V21" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path><path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        height: "25px",
                        class: "stroke-black dark:stroke-white",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M20.3873 7.1575L11.9999 12L3.60913 7.14978",
                          "stroke-width": "1.3",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M12 12V21",
                          "stroke-width": "1.3",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z",
                          "stroke-width": "1.3",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Объекты"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("Объекты")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("documents") ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                to: `/base/documents`,
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z",
                      "stroke-width": "1.5"
                    }),
                    createVNode("path", {
                      d: "M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239",
                      "stroke-width": "1.5"
                    }),
                    createVNode("path", {
                      d: "M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239",
                      "stroke-width": "1.5"
                    }),
                    createVNode("path", {
                      d: "M9 13H15",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    }),
                    createVNode("path", {
                      d: "M9 9H15",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    }),
                    createVNode("path", {
                      d: "M9 17H12",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Документы")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("sales") ? (openBlock(), createBlock(_sfc_main$3, {
                key: 1,
                to: `/base/sales`,
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "fill-black dark:fill-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    version: "1.1",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "25px",
                    height: "25px",
                    x: "0",
                    y: "0",
                    viewBox: "0 0 511 511.997",
                    style: { "enable-background": "new 0 0 512 512" },
                    "xml:space": "preserve"
                  }, [
                    createVNode("g", null, [
                      createVNode("path", {
                        d: "M452.707 267.48c-23.527-23.421-50.727-1.5-50.727-1.5v-123.3a7.499 7.499 0 1 0-14.996 0V276.53s-35.761 28.192-51.132 35.082V89.605c0-10.32 8.394-18.714 18.714-18.714h13.704c10.32 0 18.714 8.394 18.714 18.714v22.372c0 4.144 3.356 7.5 7.5 7.5a7.496 7.496 0 0 0 7.496-7.5V89.605c0-18.59-15.12-33.71-33.71-33.71h-13.704c-18.59 0-33.714 15.12-33.714 33.71V317.56a78.813 78.813 0 0 1-13.727 2.554V162c0-18.684-15.2-33.883-33.879-33.883h-13.371c-18.68 0-33.879 15.2-33.879 33.883v76.414l-13.73 7.29v-25.43c0-16.82-13.684-30.504-30.5-30.504H161.64c-16.82 0-30.5 13.683-30.5 30.503v68.493l-24.489 12.996-68.765 19.652c-11.965 3.418-21.957 11.254-28.13 22.059-6.175 10.808-7.85 23.394-4.718 35.437l7.691 29.594c1.04 4.008 5.133 6.41 9.145 5.371a7.502 7.502 0 0 0 5.371-9.148l-7.691-29.59c-4.461-17.164 5.402-34.43 22.457-39.301l62.87-17.969 47.255 126.117c3.164 8.446 2.664 32.54-22.332 41.418l-47.512 10.793c-16.559 3.758-32.875-6.168-37.148-22.605L35.5 436.477a7.505 7.505 0 0 0-9.145-5.375 7.504 7.504 0 0 0-5.375 9.148l9.649 37.117c5.422 20.852 23.945 34.63 44.566 34.63 15.153 0 57.934-11.97 57.934-11.97a46.217 46.217 0 0 0 34.988-54.621l164.375-40.242c13.594-3.332 26.5-9.789 37.313-18.676l79.992-65.726c24.387-21.63 10.082-46.145 2.91-53.282zM259.875 143.117h13.371c10.41 0 18.879 8.473 18.879 18.883v158.488l-47.324-.02c-4.348-.038-1.34-2.91-1.102-3.105l13.63-11.039c12.714-10.3 21.019-24.62 24.679-42.57 2.324-11.387-2.02-22.785-11.328-29.746-8.696-6.5-19.88-7.75-29.684-3.453V162c0-10.41 8.469-18.883 18.879-18.883zm-113.734 77.156c0-8.546 6.953-15.503 15.5-15.503h20.125c8.547 0 15.504 6.957 15.504 15.503v33.391l-51.133 27.14v-60.53zm294.136 88.903-79.996 65.726a79.408 79.408 0 0 1-31.355 15.692L163.34 431.137l-44.531-118.84 127.148-67.492c5.168-2.746 11.055-2.29 15.738 1.215 4.684 3.503 6.785 9.011 5.618 14.738-2.95 14.449-9.485 25.86-19.426 33.91l-13.63 11.043c-5.585 4.523-7.644 11.824-5.245 18.601 2.398 6.774 8.593 11.157 15.781 11.157l54.645.023h.039c19.453 0 38.148-5.914 54.062-17.105l61.07-42.946a21.122 21.122 0 0 1 27.368 2.524c4.207 4.297 12.441 17.066-1.7 31.21zm0 0",
                        class: "fill-black dark:fill-white",
                        opacity: "1",
                        "data-original": "#000000"
                      }),
                      createVNode("path", {
                        d: "M123.414 448.79c0-16.294-13.254-29.552-29.547-29.552S64.32 432.496 64.32 448.79c0 16.29 13.254 29.547 29.547 29.547s29.547-13.258 29.547-29.547zm-44.094 0c0-8.024 6.524-14.552 14.547-14.552 8.02 0 14.547 6.528 14.547 14.551 0 8.02-6.523 14.547-14.547 14.547-8.023 0-14.547-6.527-14.547-14.547zM39.934 235.48l109.023-109.863 24.523 12.684a23.065 23.065 0 0 0 26.602-3.871l59.344-57.125s-1.633 29.34 23.074 29.34c12.719 0 23.07-10.352 23.07-23.075v-60.5c0-.07-.004-.144-.004-.218C305.484 7.066 293.941 0 282.5 0h-59.973c-12.722 0-23.07 10.352-23.07 23.07 0 25.36 25.809 23.07 25.809 23.07L179.992 89.72l-24.879-12.867c-8.996-4.657-19.836-2.95-26.976 4.238L7.184 202.977c-8.961 9.03-8.907 23.668.125 32.628 4.351 4.317 19.21 13.29 32.625-.125zm-22.106-21.937L138.781 91.656c1.563-1.57 4.07-4.32 9.442-1.48l29.652 15.336a7.499 7.499 0 0 0 8.648-1.258l62.547-60.207a7.5 7.5 0 0 0-5.203-12.902h-21.34c-4.449 0-8.07-3.622-8.07-8.075 0-4.449 3.621-8.07 8.07-8.07H282.5c2.207 0 8.066 0 8.066 8.023 0 .067.004.133.004.204V83.57c0 4.45-3.62 8.07-8.07 8.07-4.453 0-8.074-3.62-8.074-8.07V59.676a7.496 7.496 0 0 0-12.7-5.402l-72.046 69.351a8.069 8.069 0 0 1-9.305 1.355l-29.414-15.214a7.505 7.505 0 0 0-8.77 1.379L29.29 224.915c-4.922 4.92-9.894 1.554-11.418.042-3.156-3.137-3.176-8.258-.043-11.414zm0 0",
                        class: "fill-black dark:fill-white",
                        opacity: "1",
                        "data-original": "#000000"
                      })
                    ])
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Продажи")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_sfc_main$3, {
                to: "/base/companies",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "fill-black dark:fill-white",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 50 50",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z" })
                  ]))
                ]),
                navLink: withCtx(() => [
                  unref(loadCurrentUser).user.role === "Администратор сайта" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.$t("Компании")), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.$t("Компания")), 1))
                ]),
                _: 1
              }),
              unref(loadCurrentUser).user.role.name_en !== "admin" ? (openBlock(), createBlock(_sfc_main$3, {
                key: 2,
                to: "/base/companies/department",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    fill: "none",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" }),
                    createVNode("path", { d: "M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" }),
                    createVNode("path", { d: "M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Департаменты")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(loadCurrentUser).user.role.name_en !== "admin" ? (openBlock(), createBlock(_sfc_main$3, {
                key: 3,
                to: "/base/tree",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "fill-black dark:fill-white",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 32 32",
                    id: "icon",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z",
                      transform: "translate(0 0.0049)"
                    }),
                    createVNode("rect", {
                      id: "_Transparent_Rectangle_",
                      "data-name": "<Transparent Rectangle>",
                      fill: "none",
                      width: "32",
                      height: "32"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Дерево")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("objects") ? (openBlock(), createBlock(_sfc_main$3, {
                key: 4,
                to: "/base/objects",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    width: "25px",
                    height: "25px",
                    class: "stroke-black dark:stroke-white",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M20.3873 7.1575L11.9999 12L3.60913 7.14978",
                      "stroke-width": "1.3",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M12 12V21",
                      "stroke-width": "1.3",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z",
                      "stroke-width": "1.3",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("Объекты")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (((_f = (_e = (_d = unref(loadCurrentUser)) == null ? void 0 : _d.user) == null ? void 0 : _e.role) == null ? void 0 : _f.name_en) !== "admin" && isValidLink("task.create")) {
        _push(ssrRenderComponent(_sfc_main$2, null, {
          navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Данные"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Данные")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black pl-3" data-v-c416b5d0${_scopeId}><svg width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path d="M702.537143 218.477714c31.085714-10.825143 55.003429-23.113143 69.924571-35.328 10.24-8.338286 13.458286-13.824 13.458286-16.018285s-3.218286-7.68-13.458286-16.091429c-14.921143-12.141714-38.765714-24.429714-69.924571-35.254857C634.368 92.16 540.013714 78.336 438.857143 78.336s-195.510857 13.897143-263.68 37.449143c-31.085714 10.825143-55.003429 23.113143-69.924572 35.328-10.24 8.338286-13.458286 13.750857-13.458285 16.018286 0 2.194286 3.218286 7.68 13.458285 16.091428 14.921143 12.141714 38.765714 24.429714 69.924572 35.254857 68.169143 23.625143 162.523429 37.449143 263.68 37.449143s195.510857-13.897143 263.68-37.449143zM69.485714 464.749714v128.804572c37.961143 40.009143 140.068571 88.722286 264.777143 103.277714 182.857143 21.284571 355.986286-18.651429 473.526857-98.304l0.438857-131.657143C683.008 540.525714 506.733714 571.465143 328.484571 550.619429c-110.372571-12.8-204.361143-46.08-259.072-85.869715z m0-80.457143c38.034286 39.936 140.068571 88.649143 264.777143 103.131429 183.222857 21.357714 356.717714-18.724571 474.258286-98.742857l0.512-145.993143C734.208 286.573714 596.48 315.977143 438.857143 315.977143c-156.964571 0-294.253714-29.257143-369.152-72.777143A132116.333714 132116.333714 0 0 0 69.485714 384.219429z m0.146286 289.865143l0.292571 108.105143-1.097142-7.460571c22.381714 74.020571 165.302857 133.485714 378.148571 133.485714 115.931429 0 206.774857-17.554286 276.626286-52.077714 19.602286-9.728 34.523429-17.92 49.152-28.598857 9.728-7.094857 16.091429-11.410286 26.550857-20.626286 10.825143-9.581714 27.501714-7.241143 37.156571 3.657143 9.581714 10.752 10.825143 28.306286 0 37.961143-11.702857 10.24-17.188571 14.848-28.598857 23.186285-17.042286 12.434286-36.425143 25.380571-58.806857 36.498286-77.092571 38.107429-155.648 60.854857-302.08 60.854857-243.931429 0-405.211429-77.165714-436.077714-179.2l-1.097143-3.657143v-3.803428L9.362286 628.077714a116682.532571 116682.532571 0 0 1 0.365714-455.68 52.662857 52.662857 0 0 1-0.292571-5.266285C9.508571 84.918857 201.728 18.285714 438.857143 18.285714c237.129143 0 429.348571 66.633143 429.348571 148.845715a53.028571 53.028571 0 0 1-0.804571 9.581714 23.405714 23.405714 0 0 1 1.024 7.094857l-1.682286 520.411429c-0.073143 14.482286-13.385143 26.185143-29.769143 26.112-16.384 0-29.622857-11.776-29.549714-26.331429v-27.355429c-125.074286 73.216-301.056 104.082286-478.939429 83.382858-110.226286-12.873143-204.214857-46.08-258.925714-85.869715z m668.525714-290.962285a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.380571 26.038857-25.380571 14.336 0 26.038857 11.337143 26.038857 25.380571 0 14.116571-11.702857 25.453714-26.038857 25.453715z m0 209.408a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453715z m0 212.114285a25.746286 25.746286 0 0 1-25.965714-25.526857c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453714z" data-v-c416b5d0${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:fill-white fill-black pl-3" }, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M702.537143 218.477714c31.085714-10.825143 55.003429-23.113143 69.924571-35.328 10.24-8.338286 13.458286-13.824 13.458286-16.018285s-3.218286-7.68-13.458286-16.091429c-14.921143-12.141714-38.765714-24.429714-69.924571-35.254857C634.368 92.16 540.013714 78.336 438.857143 78.336s-195.510857 13.897143-263.68 37.449143c-31.085714 10.825143-55.003429 23.113143-69.924572 35.328-10.24 8.338286-13.458286 13.750857-13.458285 16.018286 0 2.194286 3.218286 7.68 13.458285 16.091428 14.921143 12.141714 38.765714 24.429714 69.924572 35.254857 68.169143 23.625143 162.523429 37.449143 263.68 37.449143s195.510857-13.897143 263.68-37.449143zM69.485714 464.749714v128.804572c37.961143 40.009143 140.068571 88.722286 264.777143 103.277714 182.857143 21.284571 355.986286-18.651429 473.526857-98.304l0.438857-131.657143C683.008 540.525714 506.733714 571.465143 328.484571 550.619429c-110.372571-12.8-204.361143-46.08-259.072-85.869715z m0-80.457143c38.034286 39.936 140.068571 88.649143 264.777143 103.131429 183.222857 21.357714 356.717714-18.724571 474.258286-98.742857l0.512-145.993143C734.208 286.573714 596.48 315.977143 438.857143 315.977143c-156.964571 0-294.253714-29.257143-369.152-72.777143A132116.333714 132116.333714 0 0 0 69.485714 384.219429z m0.146286 289.865143l0.292571 108.105143-1.097142-7.460571c22.381714 74.020571 165.302857 133.485714 378.148571 133.485714 115.931429 0 206.774857-17.554286 276.626286-52.077714 19.602286-9.728 34.523429-17.92 49.152-28.598857 9.728-7.094857 16.091429-11.410286 26.550857-20.626286 10.825143-9.581714 27.501714-7.241143 37.156571 3.657143 9.581714 10.752 10.825143 28.306286 0 37.961143-11.702857 10.24-17.188571 14.848-28.598857 23.186285-17.042286 12.434286-36.425143 25.380571-58.806857 36.498286-77.092571 38.107429-155.648 60.854857-302.08 60.854857-243.931429 0-405.211429-77.165714-436.077714-179.2l-1.097143-3.657143v-3.803428L9.362286 628.077714a116682.532571 116682.532571 0 0 1 0.365714-455.68 52.662857 52.662857 0 0 1-0.292571-5.266285C9.508571 84.918857 201.728 18.285714 438.857143 18.285714c237.129143 0 429.348571 66.633143 429.348571 148.845715a53.028571 53.028571 0 0 1-0.804571 9.581714 23.405714 23.405714 0 0 1 1.024 7.094857l-1.682286 520.411429c-0.073143 14.482286-13.385143 26.185143-29.769143 26.112-16.384 0-29.622857-11.776-29.549714-26.331429v-27.355429c-125.074286 73.216-301.056 104.082286-478.939429 83.382858-110.226286-12.873143-204.214857-46.08-258.925714-85.869715z m668.525714-290.962285a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.380571 26.038857-25.380571 14.336 0 26.038857 11.337143 26.038857 25.380571 0 14.116571-11.702857 25.453714-26.038857 25.453715z m0 209.408a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453715z m0 212.114285a25.746286 25.746286 0 0 1-25.965714-25.526857c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453714z" })
                  ]))
                ])
              ];
            }
          }),
          navContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("task.create")) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  to: `/base/storage`,
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="dark:fill-white fill-black" data-v-c416b5d0${_scopeId2}><svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z" data-v-c416b5d0${_scopeId2}></path></svg></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "dark:fill-white fill-black" }, [
                          (openBlock(), createBlock("svg", {
                            width: "25px",
                            height: "25px",
                            viewBox: "0 0 32 32",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", { d: "M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z" })
                          ]))
                        ])
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Склад"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("Склад")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("task.create") ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  to: `/base/storage`,
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx(() => [
                    createVNode("div", { class: "dark:fill-white fill-black" }, [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 32 32",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z" })
                      ]))
                    ])
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("Склад")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_i = (_h = (_g = unref(loadCurrentUser)) == null ? void 0 : _g.user) == null ? void 0 : _h.role) == null ? void 0 : _i.name_en) !== "admin" && (isValidLink("chat") || isValidLink("file_manager"))) {
        _push(ssrRenderComponent(_sfc_main$2, null, {
          navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Прочее"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Прочее")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black ml-1.5" data-v-c416b5d0${_scopeId}><svg width="40px" height="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path d="M128,28A100,100,0,1,0,228,128,100.11332,100.11332,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.10416,92.10416,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,128Zm48,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,184,128Zm-96,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,88,128Z" data-v-c416b5d0${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:fill-white fill-black ml-1.5" }, [
                  (openBlock(), createBlock("svg", {
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 256 256",
                    id: "Flat",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M128,28A100,100,0,1,0,228,128,100.11332,100.11332,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.10416,92.10416,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,128Zm48,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,184,128Zm-96,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,88,128Z" })
                  ]))
                ])
              ];
            }
          }),
          navContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("chat")) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  to: "/base/chat",
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-c416b5d0${_scopeId2}><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-c416b5d0${_scopeId2}></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-c416b5d0${_scopeId2}></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-c416b5d0${_scopeId2}></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-c416b5d0${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          width: "25px",
                          height: "25px",
                          class: "dark:stroke-white stroke-black",
                          viewBox: "0 0 60 60",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          stroke: "#000000"
                        }, [
                          createVNode("line", {
                            x1: "16",
                            y1: "20",
                            x2: "48",
                            y2: "20",
                            "stroke-width": "2"
                          }),
                          createVNode("line", {
                            x1: "16",
                            y1: "30",
                            x2: "48",
                            y2: "30",
                            "stroke-width": "2"
                          }),
                          createVNode("line", {
                            x1: "16",
                            y1: "40",
                            x2: "48",
                            y2: "40",
                            "stroke-width": "2"
                          }),
                          createVNode("path", {
                            d: "m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Чат"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("Чат")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("file_manager")) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  to: "/base/cloud",
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg width="25px" class="dark:stroke-white stroke-black" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId2}><path d="M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path><path d="M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c416b5d0${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          width: "25px",
                          class: "dark:stroke-white stroke-black",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-c416b5d0${_scopeId2}>${ssrInterpolate(_ctx.$t("Облако"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("Облако")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("chat") ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  to: "/base/chat",
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      width: "25px",
                      height: "25px",
                      class: "dark:stroke-white stroke-black",
                      viewBox: "0 0 60 60",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      stroke: "#000000"
                    }, [
                      createVNode("line", {
                        x1: "16",
                        y1: "20",
                        x2: "48",
                        y2: "20",
                        "stroke-width": "2"
                      }),
                      createVNode("line", {
                        x1: "16",
                        y1: "30",
                        x2: "48",
                        y2: "30",
                        "stroke-width": "2"
                      }),
                      createVNode("line", {
                        x1: "16",
                        y1: "40",
                        x2: "48",
                        y2: "40",
                        "stroke-width": "2"
                      }),
                      createVNode("path", {
                        d: "m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z",
                        "stroke-width": "2"
                      })
                    ]))
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("Чат")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(loadCurrentUser).user.role.name_en !== "admin" && isValidLink("file_manager") ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  to: "/base/cloud",
                  class: "flex items-center gap-x-6"
                }, {
                  navIcon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      width: "25px",
                      class: "dark:stroke-white stroke-black",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("Облако")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-full transition-all duration-500 mx-auto max-md:!ml-3" data-v-c416b5d0>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        class: "rounded-full flex items-center gap-x-2 hover:dark:bg-semiCyan hover:bg-cyan transition-all duration-200 p-2",
        onClick: ($event) => logOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-c416b5d0${_scopeId}><svg width="30px" class="stroke-red-400" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c416b5d0${_scopeId}><path d="M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H9" stroke-width="1.5" data-v-c416b5d0${_scopeId}></path><path d="M9 6.4764C9 4.18259 9 3.03569 9.70725 2.4087C10.4145 1.78171 11.4955 1.97026 13.6576 2.34736L15.9864 2.75354C18.3809 3.17118 19.5781 3.37999 20.2891 4.25826C21 5.13652 21 6.40672 21 8.94711V15.0529C21 17.5933 21 18.8635 20.2891 19.7417C19.5781 20.62 18.3809 20.8288 15.9864 21.2465L13.6576 21.6526C11.4955 22.0297 10.4145 22.2183 9.70725 21.5913C9 20.9643 9 19.8174 9 17.5236V6.4764Z" stroke-width="1.5" data-v-c416b5d0${_scopeId}></path><path d="M12 11V13" stroke-width="1.5" stroke-linecap="round" data-v-c416b5d0${_scopeId}></path></svg></div>`);
            if (unref(loadCurrentUser).activeNav) {
              _push2(`<p class="font-medium dark:text-white text-black" data-v-c416b5d0${_scopeId}>${ssrInterpolate(_ctx.$t("Выйти"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  class: "stroke-red-400",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H9",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M9 6.4764C9 4.18259 9 3.03569 9.70725 2.4087C10.4145 1.78171 11.4955 1.97026 13.6576 2.34736L15.9864 2.75354C18.3809 3.17118 19.5781 3.37999 20.2891 4.25826C21 5.13652 21 6.40672 21 8.94711V15.0529C21 17.5933 21 18.8635 20.2891 19.7417C19.5781 20.62 18.3809 20.8288 15.9864 21.2465L13.6576 21.6526C11.4955 22.0297 10.4145 22.2183 9.70725 21.5913C9 20.9643 9 19.8174 9 17.5236V6.4764Z",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M12 11V13",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ]))
              ]),
              unref(loadCurrentUser).activeNav ? (openBlock(), createBlock("p", {
                key: 0,
                class: "font-medium dark:text-white text-black"
              }, toDisplayString(_ctx.$t("Выйти")), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c416b5d0"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const treeStore = useTreeStore();
    useChat();
    useNotification();
    const route = useRouter();
    useRoute();
    const user = useAuthStore();
    onUpdated(() => {
      if (!nuxtStorage.localStorage.getData("token")) {
        route.push("/").then((e) => {
          toast.info("Для начало авторизуйтесь", { autoClose: 1500, theme: "auto" });
        });
      }
    });
    useHead({
      titleTemplate: (title) => {
        return title ? `${title} • ERP` : "ERP";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderContent = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="${ssrRenderClass([{ "hidden": !unref(user).activeNav, "max-[1150px]:block": unref(user).activeNav }, "w-screen h-screen z-50 fixed bg-black opacity-30 hidden"])}"></div><div class="flex w-full h-full dark:bg-bgPages"><div class="${ssrRenderClass([{ "max-[1150px]:-translate-x-24 transition-all duration-200": !unref(user).activeNav, "max-[600px]:w-full transition-all": unref(user).activeNav }, "bg-white transition-all duration-300 dark:bg-black max-[880px]:h-screen max-[1150px]:fixed z-[70]"])}"><div class="absolute bg-gray-300 rounded-l-lg px-2 py-1 z-[100] hidden max-[1150px]:block max-md:block right-2 top-6"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      _push(ssrRenderComponent(TheNavigation, {
        class: ["max-md:overflow-x-hidden", { "mr-24": unref(user).activeNav && unref(user).my_scroll > 90 }],
        activeNav: unref(user).activeNav
      }, null, _parent));
      _push(`</div><div class="w-full relative"><div class="${ssrRenderClass([{ "blur": unref(treeStore).treeFullScreen === true }, "cursor-pointer absolute top-8 max-[800px]:top-6 left-5 z-50 dark:fill-white fill-black"])}"><svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path></svg></div>`);
      _push(ssrRenderComponent(_component_HeaderContent, { class: "pl-14" }, null, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtPage, { class: "mx-6 max-sm:mx-1 py-10 h-full" }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=base-PHvXQ06Y.js.map
