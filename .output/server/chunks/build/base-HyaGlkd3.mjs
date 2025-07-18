import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, onUpdated, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, watch, ref, Transition, watchSyncEffect } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CNB8XBKy.mjs';
import { u as useHead, _ as __nuxt_component_0$1, i as useI18n, g as useState } from './server.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { u as useNotification } from './notification-D1Ny8bJK.mjs';
import { useRouter, useRoute } from 'vue-router';
import { _ as _sfc_main$9 } from './TheTextContent-0-tZhPDG.mjs';
import { u as useTreeStore, _ as _sfc_main$a } from './TheButton-Bz9xS3BF.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { _ as _sfc_main$b } from './TheModal-CjGVpCB-.mjs';
import { u as useChat } from './chat-D3-ILc9-.mjs';
import { toast } from 'vue3-toastify';
import { u as useTaskList } from './tasks-RoJoTOhB.mjs';
import { u as useCompanies } from './companies-DK9t2HLw.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import 'axios';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _imports_0$1 = "" + publicAssetsURL("icons/ru.svg");
const _imports_1 = "" + publicAssetsURL("icons/us.svg");
const _imports_2 = "" + publicAssetsURL("icons/exit.svg");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$9, { class: "text-start font-bold mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-2 flex flex-col gap-y-4 h-full max-md:h-full max-[800px]:max-h-[90%] max-h-[400px] overflow-y-scroll pr-2">`);
      if (!unref(notification).get_notification.length) {
        _push(`<div class="text-center">${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(notification).get_notification, (notice, i) => {
        _push(`<div class="${ssrRenderClass([{ "dark:bg-gray-700 bg-gray-100": notice.read === true }, "p-4 relative dark:hover:bg-gray-700 !bg-whiteSmoke border hover:bg-gray-100 cursor-pointer transition-all duration-200 rounded-lg dark:border-gray-500"])}">`);
        if (notice.read) {
          _push(`<div class="absolute bottom-1 right-2 text-[11px]"><svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>`);
          if (notice.read === true) {
            _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col gap-4 dark:text-white text-black"><div class="w-full"><p class="text-sm text-start">${ssrInterpolate(notice.text)}</p></div><div class="text-sm flex items-center gap-2"><p>${ssrInterpolate(new Date(notice.created_at).toLocaleDateString())}</p><p>${ssrInterpolate(new Date(notice.created_at).toLocaleTimeString().slice(0, 5))}</p></div></div></div>`);
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
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "header-link flex select-none items-center gap-x-2 hover:text-golden rounded-lg transition-all duration-200 cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white link-icon w-10 h-10 border rounded-lg flex items-center justify-center bg-porcelain"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><p class="dark:text-white text-sm"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentText", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white link-icon w-10 h-10 border rounded-lg flex items-center justify-center bg-porcelain" }, [
                renderSlot(_ctx.$slots, "headerContentIcon")
              ]),
              createVNode("p", { class: "dark:text-white text-sm" }, [
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
    const open = ref(false);
    const showExitModal = ref(false);
    const currentLang = ref("ru");
    const { locale } = useI18n();
    function toggleMenu() {
      open.value = !open.value;
    }
    function toggleModal() {
      showExitModal.value = !showExitModal.value;
    }
    function setLang(lang) {
      currentLang.value = lang;
      open.value = false;
      locale.value = lang;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center max-[800px]:justify-center gap-x-8" }, _attrs))}><div class="cursor-pointer transition-all duration-300">`);
      if (unref(colorMode).preference === "light") {
        _push(`<div class="max-[800px]:p-2 transition-all"><div class="w-10 h-10 flex hover:bg-porcelain items-center justify-center border rounded-lg"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1V3M11 19V21M3 11H1M5.31412 5.31412L3.8999 3.8999M16.6859 5.31412L18.1001 3.8999M5.31412 16.69L3.8999 18.1042M16.6859 16.69L18.1001 18.1042M21 11H19M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>`);
      } else {
        _push(`<div class="dark:bg-gray-500 hover:bg-porcelain max-[800px]:p-2 transition-all"><svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380.446 380.446" xml:space="preserve"><g><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M363.262,116.333c-2.68-1.227-6.508-2.734-11.101-4.075c-4.594-1.346-9.953-2.546-15.695-3.34
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
        class: [{ "!bg-opacity-0 border-none": unref(route).path === "/base/chat" || unref(route).path === `/base/chat/${unref(route).params.id}` }, "dark:hover:bg-gray-500 px-2 py-2 transition-all cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 flex items-center hover:bg-porcelain justify-center border rounded-lg"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M8 9.5H12M8 13H15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1971 3.23374 14.3397 3.65806 15.3845C3.73927 15.5845 3.77988 15.6845 3.798 15.7653C3.81572 15.8443 3.8222 15.9028 3.82221 15.9839C3.82222 16.0667 3.80718 16.1569 3.77711 16.3374L3.18413 19.8952C3.12203 20.2678 3.09098 20.4541 3.14876 20.5888C3.19933 20.7067 3.29328 20.8007 3.41118 20.8512C3.54589 20.909 3.73218 20.878 4.10476 20.8159L7.66265 20.2229C7.84309 20.1928 7.9333 20.1778 8.01613 20.1778C8.09715 20.1778 8.15566 20.1843 8.23472 20.202C8.31554 20.2201 8.41552 20.2607 8.61549 20.3419C9.6603 20.7663 10.8029 21 12 21Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 flex items-center hover:bg-porcelain justify-center border rounded-lg" }, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M8 9.5H12M8 13H15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1971 3.23374 14.3397 3.65806 15.3845C3.73927 15.5845 3.77988 15.6845 3.798 15.7653C3.81572 15.8443 3.8222 15.9028 3.82221 15.9839C3.82222 16.0667 3.80718 16.1569 3.77711 16.3374L3.18413 19.8952C3.12203 20.2678 3.09098 20.4541 3.14876 20.5888C3.19933 20.7067 3.29328 20.8007 3.41118 20.8512C3.54589 20.909 3.73218 20.878 4.10476 20.8159L7.66265 20.2229C7.84309 20.1928 7.9333 20.1778 8.01613 20.1778C8.09715 20.1778 8.15566 20.1843 8.23472 20.202C8.31554 20.2201 8.41552 20.2607 8.61549 20.3419C9.6603 20.7663 10.8029 21 12 21Z",
                    stroke: "#2A2A2A",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="dark:hover:bg-gray-500 p-2 max-[800px]:p-2 transition-all cursor-pointer"><div class="relative"><div class="w-10 h-10 flex items-center hover:bg-porcelain justify-center border rounded-lg"><svg height="25" width="25" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.09321 20C7.79832 20.6224 8.72462 21 9.73902 21C10.7535 21 11.6797 20.6224 12.3848 20M15.739 7C15.739 5.4087 15.1069 3.88258 13.9817 2.75736C12.8564 1.63214 11.3303 1 9.73902 1C8.14772 1 6.62162 1.63214 5.4964 2.75736C4.37118 3.88258 3.73904 5.4087 3.73904 7C3.73904 10.0902 2.95951 12.206 2.0887 13.6054C1.35417 14.7859 0.986897 15.3761 1.00036 15.5408C1.01528 15.7231 1.0539 15.7926 1.20081 15.9016C1.3335 16 1.93163 16 3.12789 16H16.3502C17.5464 16 18.1446 16 18.2772 15.9016C18.4242 15.7926 18.4628 15.7231 18.4777 15.5408C18.4912 15.3761 18.1239 14.7859 17.3894 13.6054C16.5185 12.206 15.739 10.0902 15.739 7Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="text-center text-[10px] rounded-full absolute -top-[2px] -right-[2px]"><div class="animate-ping absolute inline-flex w-full h-full min-w-[14px] min-h-[14px] max-w-full max-h-full rounded-full bg-sunset opacity-75"></div><div class="relative inline-flex justify-center rounded-full min-w-[14px] min-h-[14px] max-w-full max-h-full w-full h-full bg-sunset text-white">${ssrInterpolate(Array.isArray(unref(loadNotification).notification) ? unref(loadNotification).notification.filter((item) => !item.read).length : 0)}</div></div></div></div>`);
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
      _push(`<h3 class="dark:text-white select-none tracking-wider">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3></div><div class="relative max-[800px]:hidden"><div class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1"></div>`);
      if (unref(loadCurrentUser).openSettings) {
        _push(`<div class="flex flex-col gap-y-6 select-none">`);
        _push(ssrRenderComponent(_sfc_main$7, null, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.913 17.5H20.087M12.913 17.5L11 21.5M12.913 17.5L15.7783 11.509C16.0092 11.0263 16.1246 10.7849 16.2826 10.7086C16.4199 10.6423 16.5801 10.6423 16.7174 10.7086C16.8754 10.7849 16.9908 11.0263 17.2217 11.509L20.087 17.5M20.087 17.5L22 21.5M2 5.5H8M8 5.5H11.5M8 5.5V3.5M11.5 5.5H14M11.5 5.5C11.0039 8.45729 9.85259 11.1362 8.16555 13.3844M8.16555 13.3844C8.76265 13.8421 9.38747 14.2248 10 14.5M8.16555 13.3844C6.81302 12.3478 5.60276 10.9266 5 9.5M8.16555 13.3844C6.56086 15.5229 4.47143 17.2718 2 18.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12.913 17.5H20.087M12.913 17.5L11 21.5M12.913 17.5L15.7783 11.509C16.0092 11.0263 16.1246 10.7849 16.2826 10.7086C16.4199 10.6423 16.5801 10.6423 16.7174 10.7086C16.8754 10.7849 16.9908 11.0263 17.2217 11.509L20.087 17.5M20.087 17.5L22 21.5M2 5.5H8M8 5.5H11.5M8 5.5V3.5M11.5 5.5H14M11.5 5.5C11.0039 8.45729 9.85259 11.1362 8.16555 13.3844M8.16555 13.3844C8.76265 13.8421 9.38747 14.2248 10 14.5M8.16555 13.3844C6.81302 12.3478 5.60276 10.9266 5 9.5M8.16555 13.3844C6.56086 15.5229 4.47143 17.2718 2 18.5",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ])
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.$t("\u042F\u0437\u044B\u043A"))}:</h3><div${_scopeId}><button class="${ssrRenderClass([{ "!bg-gray-50": open.value }, "inline-flex justify-center items-center w-full rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"])}"${_scopeId}><img${ssrRenderAttr("src", currentLang.value === "ru" ? "/icons/ru.svg" : "/icons/us.svg")} class="w-5 h-5 mr-2 rounded-sm"${_scopeId}> ${ssrInterpolate(currentLang.value === "ru" ? "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" : "English")} <svg class="${ssrRenderClass([{ "!rotate-180": open.value }, "ml-2 h-5 w-5 transition-all ease-in-out duration-300"])}" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clip-rule="evenodd"${_scopeId}></path></svg></button>`);
              if (open.value) {
                _push2(`<div class="absolute z-10 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId}><div class="py-1 text-sm text-gray-700"${_scopeId}><button class="flex items-center w-full px-4 py-2 hover:bg-gray-100"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="w-5 h-5 mr-2 rounded-lg"${_scopeId}> \u0420\u0443\u0441\u0441\u043A\u0438\u0439 </button><button class="flex items-center w-full px-4 py-2 hover:bg-gray-100"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="w-5 h-5 mr-2 rounded-lg"${_scopeId}> English </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode("h3", null, toDisplayString(_ctx.$t("\u042F\u0437\u044B\u043A")) + ":", 1),
                  createVNode("div", null, [
                    createVNode("button", {
                      onClick: toggleMenu,
                      class: ["inline-flex justify-center items-center w-full rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none", { "!bg-gray-50": open.value }]
                    }, [
                      createVNode("img", {
                        src: currentLang.value === "ru" ? "/icons/ru.svg" : "/icons/us.svg",
                        class: "w-5 h-5 mr-2 rounded-sm"
                      }, null, 8, ["src"]),
                      createTextVNode(" " + toDisplayString(currentLang.value === "ru" ? "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" : "English") + " ", 1),
                      (openBlock(), createBlock("svg", {
                        class: ["ml-2 h-5 w-5 transition-all ease-in-out duration-300", { "!rotate-180": open.value }],
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z",
                          "clip-rule": "evenodd"
                        })
                      ], 2))
                    ], 2),
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        open.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute z-10 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        }, [
                          createVNode("div", { class: "py-1 text-sm text-gray-700" }, [
                            createVNode("button", {
                              onClick: ($event) => setLang("ru"),
                              class: "flex items-center w-full px-4 py-2 hover:bg-gray-100"
                            }, [
                              createVNode("img", {
                                src: _imports_0$1,
                                class: "w-5 h-5 mr-2 rounded-lg"
                              }),
                              createTextVNode(" \u0420\u0443\u0441\u0441\u043A\u0438\u0439 ")
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => setLang("en"),
                              class: "flex items-center w-full px-4 py-2 hover:bg-gray-100"
                            }, [
                              createVNode("img", {
                                src: _imports_1,
                                class: "w-5 h-5 mr-2 rounded-lg"
                              }),
                              createTextVNode(" English ")
                            ], 8, ["onClick"])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(loadCurrentUser).user.role.name_en !== "admin") {
          _push(ssrRenderComponent(_sfc_main$7, { to: "profile" }, {
            headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
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
                _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
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
                _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ];
              }
            }),
            headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$a, {
          class: "rounded-full flex items-center justify-center hover:bg-gray-200 gap-3 py-2 bg-porcelain border !text-sunset transition-all ease-in-out duration-300",
          onClick: toggleModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="exit"${_scopeId}> ${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  alt: "exit"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (showExitModal.value) {
        _push(ssrRenderComponent(_sfc_main$b, {
          onShowModal: ($event) => showExitModal.value = false,
          resizeClass: "!w-4/12 max-sm:!w-11/12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-8"${_scopeId}><p class="font-bold text-3xl text-center w-10/12 mx-auto max-sm:w-full max-sm:text-xl max-sm:mt-5"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?"))}</p><div class="flex items-center justify-between mt-[56px] gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, {
                class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                onClick: toggleModal
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
              _push2(ssrRenderComponent(_sfc_main$a, {
                class: "w-full rounded-full flex items-center justify-center hover:bg-red-700 gap-3 py-2 bg-sunset border !text-white transition-all ease-in-out duration-300",
                onClick: ($event) => {
                  unref(nuxtStorage).localStorage.removeItem("token");
                  unref(router).push("/");
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-8" }, [
                  createVNode("p", { class: "font-bold text-3xl text-center w-10/12 mx-auto max-sm:w-full max-sm:text-xl max-sm:mt-5" }, toDisplayString(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?")), 1),
                  createVNode("div", { class: "flex items-center justify-between mt-[56px] gap-3" }, [
                    createVNode(_sfc_main$a, {
                      class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                      onClick: toggleModal
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$a, {
                      class: "w-full rounded-full flex items-center justify-center hover:bg-red-700 gap-3 py-2 bg-sunset border !text-white transition-all ease-in-out duration-300",
                      onClick: ($event) => {
                        unref(nuxtStorage).localStorage.removeItem("token");
                        unref(router).push("/");
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
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
            _push2(`<h3${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439"))}</h3>`);
          } else {
            return [
              createVNode("h3", null, toDisplayString(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
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
        class: [{ "blur": unref(useTreeStore)().treeFullScreen === true }, "w-full bg-white py-4 px-10 flex dark:bg-gray-600 transition-all duration-300 dark:shadow-lg justify-end relative z-30"]
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
            unref(nuxtStorage).localStorage.removeItem("token");
            unref(router).push("/");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
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
const _imports_0 = "" + publicAssetsURL("img/Logo.webp");
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
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.to,
        onClick: ($event) => {
          unref(authUser).openSettings = false;
          unref(authUser).openNotification = false;
        },
        class: ["router-link flex pl-6 transition-all rounded-lg border-lg py-2 w-full items-center gap-x-3 text-black px-4", { "rounded-lg": !unref(authUser).activeNav }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="link-icon dark:fill-white fill-black transition-all w-10 h-10 rounded-lg flex items-center justify-center border bg-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "navIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (unref(authUser).activeNav) {
              _push2(`<div class="text-sm max-sm:text-base"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "navLink", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "link-icon dark:fill-white fill-black transition-all w-10 h-10 rounded-lg flex items-center justify-center border bg-white" }, [
                renderSlot(_ctx.$slots, "navIcon")
              ]),
              unref(authUser).activeNav ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-sm max-sm:text-base"
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
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="${ssrRenderClass([{
        "bg-golden": __props.active
      }, "block w-full text-start transition-all rounded-lg px-4 py-2"])}"><div class="items-center justify-between flex gap-4 max-sm:!justify-start"><div class="flex items-center"><div class="bg-white w-10 h-10 rounded-lg border flex items-center justify-center mr-2">`);
      ssrRenderSlot(_ctx.$slots, "navTitleIcon", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(authStore).activeNav) {
        _push(`<span class="dark:text-white text-black">`);
        ssrRenderSlot(_ctx.$slots, "navTitle", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass({ "rotate-180 transition-all": __props.active, "-rotate-0 transition-all": !__props.active })}"><svg class="dark:fill-white fill-black" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path></svg></div></div></button>`);
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
        class: ["container z-10 relative dark:border-none", { "blur": unref(useTreeStore)().treeFullScreen === true }]
      }, _attrs))} data-v-b4f2d93d><div class="${ssrRenderClass([{ "px-3 py-[33px]": !unref(loadCurrentUser).activeNav, "px-6 py-[23px]": unref(loadCurrentUser).activeNav }, "flex w-full items-center pt-8 transition-all justify-between text-center dark:bg-gray-600"])}" data-v-b4f2d93d><img${ssrRenderAttr("src", _imports_0)} alt="" class="${ssrRenderClass([{ "w-[80px] transition-all": unref(loadCurrentUser).activeNav, "w-[50px] transition-all": !unref(loadCurrentUser).activeNav }, "transition-all mr-auto"])}" data-v-b4f2d93d></div><div class="${ssrRenderClass([{ "pl-0": !unref(loadCurrentUser).activeNav, "max-md:w-full overflow-x-hidden ": unref(loadCurrentUser).activeNav, "top-0 fixed dark:border-none": unref(loadCurrentUser).my_scroll > 90, "max-[1151px]:w-[27%] max-[1149px]:w-full max-lg:w-full": unref(loadCurrentUser).activeNav && unref(loadCurrentUser).my_scroll > 100 }, "py-2 flex flex-col justify-between gap-y-2 transition-all duration-300 dark:bg-gray-600 max-h-screen max-[1150px]:pb-24 overflow-y-auto h-screen"])}" data-v-b4f2d93d>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white fill-black shrink-0" data-v-b4f2d93d${_scopeId}><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path d="M17 15.7276V14.1276C17 12.6366 15.9802 11.3837 14.6 11.0284M11.8 1.56024C12.9727 2.03496 13.8 3.18468 13.8 4.52764C13.8 5.87059 12.9727 7.02036 11.8 7.495M13 15.7276C13 14.2366 13 13.4912 12.7564 12.9031C12.4316 12.119 11.8086 11.496 11.0246 11.1712C10.4365 10.9276 9.69104 10.9276 8.2 10.9276H5.8C4.30898 10.9276 3.56348 10.9276 2.97542 11.1712C2.19132 11.496 1.56837 12.119 1.24358 12.9031C1 13.4912 1 14.2366 1 15.7276M10.2 4.52764C10.2 6.29495 8.76728 7.72764 7 7.72764C5.23269 7.72764 3.8 6.29495 3.8 4.52764C3.8 2.76032 5.23269 1.32764 7 1.32764C8.76728 1.32764 10.2 2.76032 10.2 4.52764Z" stroke="#2A2A2A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white fill-black shrink-0" }, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "17",
                  viewBox: "0 0 18 17",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M17 15.7276V14.1276C17 12.6366 15.9802 11.3837 14.6 11.0284M11.8 1.56024C12.9727 2.03496 13.8 3.18468 13.8 4.52764C13.8 5.87059 12.9727 7.02036 11.8 7.495M13 15.7276C13 14.2366 13 13.4912 12.7564 12.9031C12.4316 12.119 11.8086 11.496 11.0246 11.1712C10.4365 10.9276 9.69104 10.9276 8.2 10.9276H5.8C4.30898 10.9276 3.56348 10.9276 2.97542 11.1712C2.19132 11.496 1.56837 12.119 1.24358 12.9031C1 13.4912 1 14.2366 1 15.7276M10.2 4.52764C10.2 6.29495 8.76728 7.72764 7 7.72764C5.23269 7.72764 3.8 6.29495 3.8 4.52764C3.8 2.76032 5.23269 1.32764 7 1.32764C8.76728 1.32764 10.2 2.76032 10.2 4.52764Z",
                    stroke: "#2A2A2A",
                    "stroke-width": "1.4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        navTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")), 1)
            ];
          }
        }),
        navContent: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { to: "/base/profile" }, {
              navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><circle cx="12" cy="6" r="4" stroke-width="1.5" data-v-b4f2d93d${_scopeId2}></circle><path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="" stroke-width="1.5" stroke-linecap="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
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
                  _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))}</p>`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (((_c2 = (_b2 = (_a2 = unref(loadCurrentUser)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.role) == null ? void 0 : _c2.name_en) !== "admin") {
              _push2(ssrRenderComponent(_sfc_main$3, { to: "/base/users" }, {
                navIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><g id="User / Users_Group" data-v-b4f2d93d${_scopeId2}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></g></svg>`);
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
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")), 1)
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
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), 1)
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
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black px-1" data-v-b4f2d93d${_scopeId}><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path d="M4.2 11.9278L5.8 13.5278L9.4 9.92783M5.8 6.32783V4.08783C5.8 3.19175 5.8 2.7437 5.97439 2.40145C6.12778 2.10038 6.37255 1.85562 6.67362 1.70222C7.01587 1.52783 7.46392 1.52783 8.36 1.52783H14.44C15.3361 1.52783 15.7842 1.52783 16.1264 1.70222C16.4274 1.85562 16.6722 2.10038 16.8256 2.40145C17 2.7437 17 3.19175 17 4.08783V10.1678C17 11.0639 17 11.512 16.8256 11.8542C16.6722 12.1553 16.4274 12.4001 16.1264 12.5534C15.7842 12.7278 15.3361 12.7278 14.44 12.7278H12.2M3.56 17.5278H9.64C10.5361 17.5278 10.9842 17.5278 11.3264 17.3534C11.6274 17.2001 11.8722 16.9553 12.0256 16.6542C12.2 16.312 12.2 15.8639 12.2 14.9678V8.88783C12.2 7.99175 12.2 7.5437 12.0256 7.20145C11.8722 6.90038 11.6274 6.65562 11.3264 6.50222C10.9842 6.32783 10.5361 6.32783 9.64 6.32783H3.56C2.66392 6.32783 2.21587 6.32783 1.87362 6.50222C1.57255 6.65562 1.32778 6.90038 1.17439 7.20145C1 7.5437 1 7.99175 1 8.88783V14.9678C1 15.8639 1 16.312 1.17439 16.6542C1.32778 16.9553 1.57255 17.2001 1.87362 17.3534C2.21587 17.5278 2.66391 17.5278 3.56 17.5278Z" stroke="#2A2A2A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:fill-white fill-black px-1" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "19",
                    viewBox: "0 0 18 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M4.2 11.9278L5.8 13.5278L9.4 9.92783M5.8 6.32783V4.08783C5.8 3.19175 5.8 2.7437 5.97439 2.40145C6.12778 2.10038 6.37255 1.85562 6.67362 1.70222C7.01587 1.52783 7.46392 1.52783 8.36 1.52783H14.44C15.3361 1.52783 15.7842 1.52783 16.1264 1.70222C16.4274 1.85562 16.6722 2.10038 16.8256 2.40145C17 2.7437 17 3.19175 17 4.08783V10.1678C17 11.0639 17 11.512 16.8256 11.8542C16.6722 12.1553 16.4274 12.4001 16.1264 12.5534C15.7842 12.7278 15.3361 12.7278 14.44 12.7278H12.2M3.56 17.5278H9.64C10.5361 17.5278 10.9842 17.5278 11.3264 17.3534C11.6274 17.2001 11.8722 16.9553 12.0256 16.6542C12.2 16.312 12.2 15.8639 12.2 14.9678V8.88783C12.2 7.99175 12.2 7.5437 12.0256 7.20145C11.8722 6.90038 11.6274 6.65562 11.3264 6.50222C10.9842 6.32783 10.5361 6.32783 9.64 6.32783H3.56C2.66392 6.32783 2.21587 6.32783 1.87362 6.50222C1.57255 6.65562 1.32778 6.90038 1.17439 7.20145C1 7.5437 1 7.99175 1 8.88783V14.9678C1 15.8639 1 16.312 1.17439 16.6542C1.32778 16.9553 1.57255 17.2001 1.87362 17.3534C2.21587 17.5278 2.66391 17.5278 3.56 17.5278Z",
                      stroke: "#2A2A2A",
                      "stroke-width": "1.4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
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
                      _push3(`<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M15.1176 10.2647V5.23529C15.1176 3.7528 15.1176 3.01155 14.8291 2.44532C14.5754 1.94724 14.1704 1.54229 13.6724 1.28851C13.1061 1 12.3649 1 10.8824 1H5.23529C3.7528 1 3.01155 1 2.44532 1.28851C1.94724 1.54229 1.54229 1.94724 1.28851 2.44532C1 3.01155 1 3.7528 1 5.23529V14.4118C1 15.8943 1 16.6355 1.28851 17.2018C1.54229 17.6999 1.94724 18.1048 2.44532 18.3585C3.01155 18.6471 3.7528 18.6471 5.23529 18.6471H8.05882M9.82353 8.94118H4.52941M6.29412 12.4706H4.52941M11.5882 5.41177H4.52941M10.2647 16L12.0294 17.7647L16 13.7941" stroke="currentColor" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          width: "17",
                          height: "20",
                          viewBox: "0 0 17 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M15.1176 10.2647V5.23529C15.1176 3.7528 15.1176 3.01155 14.8291 2.44532C14.5754 1.94724 14.1704 1.54229 13.6724 1.28851C13.1061 1 12.3649 1 10.8824 1H5.23529C3.7528 1 3.01155 1 2.44532 1.28851C1.94724 1.54229 1.54229 1.94724 1.28851 2.44532C1 3.01155 1 3.7528 1 5.23529V14.4118C1 15.8943 1 16.6355 1.28851 17.2018C1.54229 17.6999 1.94724 18.1048 2.44532 18.3585C3.01155 18.6471 3.7528 18.6471 5.23529 18.6471H8.05882M9.82353 8.94118H4.52941M6.29412 12.4706H4.52941M11.5882 5.41177H4.52941M10.2647 16L12.0294 17.7647L16 13.7941",
                            stroke: "currentColor",
                            "stroke-width": "1.3125",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
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
                      width: "17",
                      height: "20",
                      viewBox: "0 0 17 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M15.1176 10.2647V5.23529C15.1176 3.7528 15.1176 3.01155 14.8291 2.44532C14.5754 1.94724 14.1704 1.54229 13.6724 1.28851C13.1061 1 12.3649 1 10.8824 1H5.23529C3.7528 1 3.01155 1 2.44532 1.28851C1.94724 1.54229 1.54229 1.94724 1.28851 2.44532C1 3.01155 1 3.7528 1 5.23529V14.4118C1 15.8943 1 16.6355 1.28851 17.2018C1.54229 17.6999 1.94724 18.1048 2.44532 18.3585C3.01155 18.6471 3.7528 18.6471 5.23529 18.6471H8.05882M9.82353 8.94118H4.52941M6.29412 12.4706H4.52941M11.5882 5.41177H4.52941M10.2647 16L12.0294 17.7647L16 13.7941",
                        stroke: "currentColor",
                        "stroke-width": "1.3125",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
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
            _push2(`${ssrInterpolate(_ctx.$t("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(loadCurrentUser).user.company_logo_url) {
              _push2(`<div class="dark:fill-white fill-black px-2" data-v-b4f2d93d${_scopeId}><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path d="M9 12.7278V9.52783M9 6.32783H9.008M17 9.52783C17 13.9461 13.4182 17.5278 9 17.5278C4.58172 17.5278 1 13.9461 1 9.52783C1 5.10955 4.58172 1.52783 9 1.52783C13.4182 1.52783 17 5.10955 17 9.52783Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<div class="w-[40px] h-[40px]" data-v-b4f2d93d${_scopeId}><img class="w-full rounded-full"${ssrRenderAttr("src", unref(loadCurrentUser).user.company_logo_url)} alt="" data-v-b4f2d93d${_scopeId}></div>`);
            }
          } else {
            return [
              !unref(loadCurrentUser).user.company_logo_url ? (openBlock(), createBlock("div", {
                key: 0,
                class: "dark:fill-white fill-black px-2"
              }, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "19",
                  viewBox: "0 0 18 19",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M9 12.7278V9.52783M9 6.32783H9.008M17 9.52783C17 13.9461 13.4182 17.5278 9 17.5278C4.58172 17.5278 1 13.9461 1 9.52783C1 5.10955 4.58172 1.52783 9 1.52783C13.4182 1.52783 17 5.10955 17 9.52783Z",
                    stroke: "black",
                    "stroke-width": "1.4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
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
                    _push3(`<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M11 1.26953V5.40007C11 5.96012 11 6.24015 11.109 6.45406C11.2049 6.64222 11.3578 6.7952 11.546 6.89108C11.7599 7.00007 12.0399 7.00007 12.6 7.00007H16.7305M13 12H5M13 16H5M7 8H5M11 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V7L11 1Z" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "18",
                        height: "22",
                        viewBox: "0 0 18 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M11 1.26953V5.40007C11 5.96012 11 6.24015 11.109 6.45406C11.2049 6.64222 11.3578 6.7952 11.546 6.89108C11.7599 7.00007 12.0399 7.00007 12.6 7.00007H16.7305M13 12H5M13 16H5M7 8H5M11 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V7L11 1Z",
                          stroke: "currentColor",
                          "stroke-width": "1.31",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")), 1)
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
                    _push3(`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M8 8H8.01M14 14H14.01M15 7L7 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8ZM14.5 14C14.5 14.2761 14.2761 14.5 14 14.5C13.7239 14.5 13.5 14.2761 13.5 14C13.5 13.7239 13.7239 13.5 14 13.5C14.2761 13.5 14.5 13.7239 14.5 14Z" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M8 8H8.01M14 14H14.01M15 7L7 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8ZM14.5 14C14.5 14.2761 14.2761 14.5 14 14.5C13.7239 14.5 13.5 14.2761 13.5 14C13.5 13.7239 13.7239 13.5 14 13.5C14.2761 13.5 14.5 13.7239 14.5 14Z",
                          stroke: "currentColor",
                          "stroke-width": "1.31",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0434\u0430\u0436\u0438"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")), 1)
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
                  _push3(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13",
                        stroke: "currentColor",
                        "stroke-width": "1.31",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loadCurrentUser).user.role === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430") {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
                  } else {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"))}</p>`);
                  }
                } else {
                  return [
                    unref(loadCurrentUser).user.role === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1))
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
                    _push3(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.0399 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.0399 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z",
                          stroke: "currentColor",
                          "stroke-width": "1.31",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B")), 1)
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
                    _push3(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12H17M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12H17M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z",
                          stroke: "currentColor",
                          "stroke-width": "1.31",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E")), 1)
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
                    _push3(`<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M18.5 6.27832L10 11.0006M10 11.0006L1.49997 6.27832M10 11.0006V20.5006M19 15.0591V6.94202C19 6.59938 19 6.42806 18.9495 6.27526C18.9049 6.14008 18.8318 6.016 18.7354 5.91131C18.6263 5.79297 18.4766 5.70977 18.177 5.54337L10.777 1.43226C10.4934 1.2747 10.3516 1.19592 10.2015 1.16503C10.0685 1.1377 9.9315 1.1377 9.7986 1.16503C9.6484 1.19592 9.5066 1.2747 9.223 1.43226L1.82297 5.54337C1.52345 5.70977 1.37369 5.79297 1.26463 5.91131C1.16816 6.016 1.09515 6.14008 1.05048 6.27526C1 6.42806 1 6.59938 1 6.94202V15.0591C1 15.4018 1 15.5731 1.05048 15.7259C1.09515 15.8611 1.16816 15.9852 1.26463 16.0898C1.37369 16.2082 1.52345 16.2914 1.82297 16.4578L9.223 20.5689C9.5066 20.7265 9.6484 20.8052 9.7986 20.8361C9.9315 20.8635 10.0685 20.8635 10.2015 20.8361C10.3516 20.8052 10.4934 20.7265 10.777 20.5689L18.177 16.4578C18.4766 16.2914 18.6263 16.2082 18.7354 16.0898C18.8318 15.9852 18.9049 15.8611 18.9495 15.7259C19 15.5731 19 15.4018 19 15.0591Z" stroke="currentColor" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "20",
                        height: "22",
                        viewBox: "0 0 20 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M18.5 6.27832L10 11.0006M10 11.0006L1.49997 6.27832M10 11.0006V20.5006M19 15.0591V6.94202C19 6.59938 19 6.42806 18.9495 6.27526C18.9049 6.14008 18.8318 6.016 18.7354 5.91131C18.6263 5.79297 18.4766 5.70977 18.177 5.54337L10.777 1.43226C10.4934 1.2747 10.3516 1.19592 10.2015 1.16503C10.0685 1.1377 9.9315 1.1377 9.7986 1.16503C9.6484 1.19592 9.5066 1.2747 9.223 1.43226L1.82297 5.54337C1.52345 5.70977 1.37369 5.79297 1.26463 5.91131C1.16816 6.016 1.09515 6.14008 1.05048 6.27526C1 6.42806 1 6.59938 1 6.94202V15.0591C1 15.4018 1 15.5731 1.05048 15.7259C1.09515 15.8611 1.16816 15.9852 1.26463 16.0898C1.37369 16.2082 1.52345 16.2914 1.82297 16.4578L9.223 20.5689C9.5066 20.7265 9.6484 20.8052 9.7986 20.8361C9.9315 20.8635 10.0685 20.8635 10.2015 20.8361C10.3516 20.8052 10.4934 20.7265 10.777 20.5689L18.177 16.4578C18.4766 16.2914 18.6263 16.2082 18.7354 16.0898C18.8318 15.9852 18.9049 15.8611 18.9495 15.7259C19 15.5731 19 15.4018 19 15.0591Z",
                          stroke: "currentColor",
                          "stroke-width": "1.31",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B"))}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B")), 1)
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
                    width: "18",
                    height: "22",
                    viewBox: "0 0 18 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M11 1.26953V5.40007C11 5.96012 11 6.24015 11.109 6.45406C11.2049 6.64222 11.3578 6.7952 11.546 6.89108C11.7599 7.00007 12.0399 7.00007 12.6 7.00007H16.7305M13 12H5M13 16H5M7 8H5M11 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21H12.2C13.8802 21 14.7202 21 15.362 20.673C15.9265 20.3854 16.3854 19.9265 16.673 19.362C17 18.7202 17 17.8802 17 16.2V7L11 1Z",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")), 1)
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
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M8 8H8.01M14 14H14.01M15 7L7 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8ZM14.5 14C14.5 14.2761 14.2761 14.5 14 14.5C13.7239 14.5 13.5 14.2761 13.5 14C13.5 13.7239 13.7239 13.5 14 13.5C14.2761 13.5 14.5 13.7239 14.5 14Z",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_sfc_main$3, {
                to: "/base/companies",
                class: "flex items-center gap-x-6"
              }, {
                navIcon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  unref(loadCurrentUser).user.role === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1))
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
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.0399 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B")), 1)
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
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12H17M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E")), 1)
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
                    width: "20",
                    height: "22",
                    viewBox: "0 0 20 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M18.5 6.27832L10 11.0006M10 11.0006L1.49997 6.27832M10 11.0006V20.5006M19 15.0591V6.94202C19 6.59938 19 6.42806 18.9495 6.27526C18.9049 6.14008 18.8318 6.016 18.7354 5.91131C18.6263 5.79297 18.4766 5.70977 18.177 5.54337L10.777 1.43226C10.4934 1.2747 10.3516 1.19592 10.2015 1.16503C10.0685 1.1377 9.9315 1.1377 9.7986 1.16503C9.6484 1.19592 9.5066 1.2747 9.223 1.43226L1.82297 5.54337C1.52345 5.70977 1.37369 5.79297 1.26463 5.91131C1.16816 6.016 1.09515 6.14008 1.05048 6.27526C1 6.42806 1 6.59938 1 6.94202V15.0591C1 15.4018 1 15.5731 1.05048 15.7259C1.09515 15.8611 1.16816 15.9852 1.26463 16.0898C1.37369 16.2082 1.52345 16.2914 1.82297 16.4578L9.223 20.5689C9.5066 20.7265 9.6484 20.8052 9.7986 20.8361C9.9315 20.8635 10.0685 20.8635 10.2015 20.8361C10.3516 20.8052 10.4934 20.7265 10.777 20.5689L18.177 16.4578C18.4766 16.2914 18.6263 16.2082 18.7354 16.0898C18.8318 15.9852 18.9049 15.8611 18.9495 15.7259C19 15.5731 19 15.4018 19 15.0591Z",
                      stroke: "currentColor",
                      "stroke-width": "1.31",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                navLink: withCtx(() => [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u0414\u0430\u043D\u043D\u044B\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0414\u0430\u043D\u043D\u044B\u0435")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black pl-3" data-v-b4f2d93d${_scopeId}><svg width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path stroke="currentColor" d="M702.537143 218.477714c31.085714-10.825143 55.003429-23.113143 69.924571-35.328 10.24-8.338286 13.458286-13.824 13.458286-16.018285s-3.218286-7.68-13.458286-16.091429c-14.921143-12.141714-38.765714-24.429714-69.924571-35.254857C634.368 92.16 540.013714 78.336 438.857143 78.336s-195.510857 13.897143-263.68 37.449143c-31.085714 10.825143-55.003429 23.113143-69.924572 35.328-10.24 8.338286-13.458286 13.750857-13.458285 16.018286 0 2.194286 3.218286 7.68 13.458285 16.091428 14.921143 12.141714 38.765714 24.429714 69.924572 35.254857 68.169143 23.625143 162.523429 37.449143 263.68 37.449143s195.510857-13.897143 263.68-37.449143zM69.485714 464.749714v128.804572c37.961143 40.009143 140.068571 88.722286 264.777143 103.277714 182.857143 21.284571 355.986286-18.651429 473.526857-98.304l0.438857-131.657143C683.008 540.525714 506.733714 571.465143 328.484571 550.619429c-110.372571-12.8-204.361143-46.08-259.072-85.869715z m0-80.457143c38.034286 39.936 140.068571 88.649143 264.777143 103.131429 183.222857 21.357714 356.717714-18.724571 474.258286-98.742857l0.512-145.993143C734.208 286.573714 596.48 315.977143 438.857143 315.977143c-156.964571 0-294.253714-29.257143-369.152-72.777143A132116.333714 132116.333714 0 0 0 69.485714 384.219429z m0.146286 289.865143l0.292571 108.105143-1.097142-7.460571c22.381714 74.020571 165.302857 133.485714 378.148571 133.485714 115.931429 0 206.774857-17.554286 276.626286-52.077714 19.602286-9.728 34.523429-17.92 49.152-28.598857 9.728-7.094857 16.091429-11.410286 26.550857-20.626286 10.825143-9.581714 27.501714-7.241143 37.156571 3.657143 9.581714 10.752 10.825143 28.306286 0 37.961143-11.702857 10.24-17.188571 14.848-28.598857 23.186285-17.042286 12.434286-36.425143 25.380571-58.806857 36.498286-77.092571 38.107429-155.648 60.854857-302.08 60.854857-243.931429 0-405.211429-77.165714-436.077714-179.2l-1.097143-3.657143v-3.803428L9.362286 628.077714a116682.532571 116682.532571 0 0 1 0.365714-455.68 52.662857 52.662857 0 0 1-0.292571-5.266285C9.508571 84.918857 201.728 18.285714 438.857143 18.285714c237.129143 0 429.348571 66.633143 429.348571 148.845715a53.028571 53.028571 0 0 1-0.804571 9.581714 23.405714 23.405714 0 0 1 1.024 7.094857l-1.682286 520.411429c-0.073143 14.482286-13.385143 26.185143-29.769143 26.112-16.384 0-29.622857-11.776-29.549714-26.331429v-27.355429c-125.074286 73.216-301.056 104.082286-478.939429 83.382858-110.226286-12.873143-204.214857-46.08-258.925714-85.869715z m668.525714-290.962285a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.380571 26.038857-25.380571 14.336 0 26.038857 11.337143 26.038857 25.380571 0 14.116571-11.702857 25.453714-26.038857 25.453715z m0 209.408a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453715z m0 212.114285a25.746286 25.746286 0 0 1-25.965714-25.526857c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453714z" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
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
                    createVNode("path", {
                      stroke: "currentColor",
                      d: "M702.537143 218.477714c31.085714-10.825143 55.003429-23.113143 69.924571-35.328 10.24-8.338286 13.458286-13.824 13.458286-16.018285s-3.218286-7.68-13.458286-16.091429c-14.921143-12.141714-38.765714-24.429714-69.924571-35.254857C634.368 92.16 540.013714 78.336 438.857143 78.336s-195.510857 13.897143-263.68 37.449143c-31.085714 10.825143-55.003429 23.113143-69.924572 35.328-10.24 8.338286-13.458286 13.750857-13.458285 16.018286 0 2.194286 3.218286 7.68 13.458285 16.091428 14.921143 12.141714 38.765714 24.429714 69.924572 35.254857 68.169143 23.625143 162.523429 37.449143 263.68 37.449143s195.510857-13.897143 263.68-37.449143zM69.485714 464.749714v128.804572c37.961143 40.009143 140.068571 88.722286 264.777143 103.277714 182.857143 21.284571 355.986286-18.651429 473.526857-98.304l0.438857-131.657143C683.008 540.525714 506.733714 571.465143 328.484571 550.619429c-110.372571-12.8-204.361143-46.08-259.072-85.869715z m0-80.457143c38.034286 39.936 140.068571 88.649143 264.777143 103.131429 183.222857 21.357714 356.717714-18.724571 474.258286-98.742857l0.512-145.993143C734.208 286.573714 596.48 315.977143 438.857143 315.977143c-156.964571 0-294.253714-29.257143-369.152-72.777143A132116.333714 132116.333714 0 0 0 69.485714 384.219429z m0.146286 289.865143l0.292571 108.105143-1.097142-7.460571c22.381714 74.020571 165.302857 133.485714 378.148571 133.485714 115.931429 0 206.774857-17.554286 276.626286-52.077714 19.602286-9.728 34.523429-17.92 49.152-28.598857 9.728-7.094857 16.091429-11.410286 26.550857-20.626286 10.825143-9.581714 27.501714-7.241143 37.156571 3.657143 9.581714 10.752 10.825143 28.306286 0 37.961143-11.702857 10.24-17.188571 14.848-28.598857 23.186285-17.042286 12.434286-36.425143 25.380571-58.806857 36.498286-77.092571 38.107429-155.648 60.854857-302.08 60.854857-243.931429 0-405.211429-77.165714-436.077714-179.2l-1.097143-3.657143v-3.803428L9.362286 628.077714a116682.532571 116682.532571 0 0 1 0.365714-455.68 52.662857 52.662857 0 0 1-0.292571-5.266285C9.508571 84.918857 201.728 18.285714 438.857143 18.285714c237.129143 0 429.348571 66.633143 429.348571 148.845715a53.028571 53.028571 0 0 1-0.804571 9.581714 23.405714 23.405714 0 0 1 1.024 7.094857l-1.682286 520.411429c-0.073143 14.482286-13.385143 26.185143-29.769143 26.112-16.384 0-29.622857-11.776-29.549714-26.331429v-27.355429c-125.074286 73.216-301.056 104.082286-478.939429 83.382858-110.226286-12.873143-204.214857-46.08-258.925714-85.869715z m668.525714-290.962285a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.380571 26.038857-25.380571 14.336 0 26.038857 11.337143 26.038857 25.380571 0 14.116571-11.702857 25.453714-26.038857 25.453715z m0 209.408a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453715z m0 212.114285a25.746286 25.746286 0 0 1-25.965714-25.526857c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453714z"
                    })
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
                      _push3(`<div class="dark:fill-white fill-black" data-v-b4f2d93d${_scopeId2}><svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path stroke="currentColor" d="M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z" data-v-b4f2d93d${_scopeId2}></path></svg></div>`);
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
                            createVNode("path", {
                              stroke: "currentColor",
                              d: "M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z"
                            })
                          ]))
                        ])
                      ];
                    }
                  }),
                  navLink: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0421\u043A\u043B\u0430\u0434"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("\u0421\u043A\u043B\u0430\u0434")), 1)
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
                        createVNode("path", {
                          stroke: "currentColor",
                          d: "M29.742 5.39c-0.002-0.012-0.010-0.022-0.012-0.034-0.014-0.057-0.032-0.106-0.055-0.152l0.002 0.004c-0.017-0.046-0.036-0.086-0.059-0.124l0.002 0.003c-0.033-0.044-0.069-0.082-0.108-0.117l-0.001-0.001c-0.023-0.028-0.046-0.053-0.071-0.076l-0-0-0.023-0.011c-0.044-0.027-0.095-0.050-0.149-0.067l-0.005-0.002c-0.034-0.016-0.073-0.031-0.115-0.043l-0.005-0.001-0.028-0.010-12.999-2c-0.034-0.006-0.074-0.009-0.114-0.009s-0.080 0.003-0.119 0.009l0.004-0.001-13.026 2.010c-0.054 0.014-0.101 0.032-0.146 0.054l0.004-0.002c-0.052 0.018-0.096 0.039-0.138 0.064l0.003-0.002-0.024 0.011c-0.025 0.023-0.047 0.048-0.068 0.074l-0.001 0.001c-0.041 0.036-0.078 0.075-0.11 0.118l-0.001 0.002c-0.020 0.034-0.039 0.074-0.055 0.115l-0.002 0.005c-0.021 0.042-0.039 0.090-0.052 0.141l-0.001 0.005c-0.003 0.013-0.011 0.023-0.013 0.036l-1 6.75c-0.005 0.033-0.008 0.071-0.008 0.11 0 0.361 0.255 0.663 0.595 0.734l0.005 0.001 1.445 0.296c-0.025 0.065-0.041 0.14-0.044 0.218l-0 0.002v12.5c0 0 0 0 0 0 0 0.36 0.254 0.66 0.592 0.733l0.005 0.001 12 2.5c0.046 0.010 0.099 0.016 0.153 0.016s0.107-0.006 0.158-0.017l-0.005 0.001 11.999-2.5c0.344-0.073 0.597-0.374 0.598-0.734v-12.5c-0.004-0.080-0.020-0.155-0.046-0.225l0.002 0.005 1.445-0.296c0.345-0.072 0.6-0.373 0.6-0.734 0-0.039-0.003-0.077-0.009-0.115l0.001 0.004zM16 4.259l8.351 1.285-8.351 1.446-8.351-1.446zM3.629 6.37l11.295 1.955-2.364 5.319-9.714-1.987zM4.75 13.578l8.1 1.657c0.046 0.010 0.099 0.016 0.153 0.016 0.303 0 0.564-0.181 0.681-0.441l0.002-0.005 1.564-3.52v16.294l-10.5-2.188zM27.25 25.391l-10.5 2.188v-16.294l1.564 3.52c0.12 0.264 0.382 0.445 0.685 0.445h0c0 0 0 0 0 0 0.053 0 0.105-0.006 0.155-0.017l-0.005 0.001 8.1-1.657zM19.441 13.645l-2.365-5.319 11.295-1.955 0.783 5.287z"
                        })
                      ]))
                    ])
                  ]),
                  navLink: withCtx(() => [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0421\u043A\u043B\u0430\u0434")), 1)
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
              _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0447\u0435\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0447\u0435\u0435")), 1)
              ];
            }
          }),
          navTitleIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:fill-white fill-black ml-1.5" data-v-b4f2d93d${_scopeId}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path d="M12 13.5278C12.5523 13.5278 13 13.0801 13 12.5278C13 11.9755 12.5523 11.5278 12 11.5278C11.4477 11.5278 11 11.9755 11 12.5278C11 13.0801 11.4477 13.5278 12 13.5278Z" fill="black" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path><path d="M19 13.5278C19.5523 13.5278 20 13.0801 20 12.5278C20 11.9755 19.5523 11.5278 19 11.5278C18.4477 11.5278 18 11.9755 18 12.5278C18 13.0801 18.4477 13.5278 19 13.5278Z" fill="black" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path><path d="M5 13.5278C5.55228 13.5278 6 13.0801 6 12.5278C6 11.9755 5.55228 11.5278 5 11.5278C4.44772 11.5278 4 11.9755 4 12.5278C4 13.0801 4.44772 13.5278 5 13.5278Z" fill="black" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:fill-white fill-black ml-1.5" }, [
                  (openBlock(), createBlock("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 13.5278C12.5523 13.5278 13 13.0801 13 12.5278C13 11.9755 12.5523 11.5278 12 11.5278C11.4477 11.5278 11 11.9755 11 12.5278C11 13.0801 11.4477 13.5278 12 13.5278Z",
                      fill: "black",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M19 13.5278C19.5523 13.5278 20 13.0801 20 12.5278C20 11.9755 19.5523 11.5278 19 11.5278C18.4477 11.5278 18 11.9755 18 12.5278C18 13.0801 18.4477 13.5278 19 13.5278Z",
                      fill: "black",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M5 13.5278C5.55228 13.5278 6 13.0801 6 12.5278C6 11.9755 5.55228 11.5278 5 11.5278C4.44772 11.5278 4 11.9755 4 12.5278C4 13.0801 4.44772 13.5278 5 13.5278Z",
                      fill: "black",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
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
                      _push3(`<svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-b4f2d93d${_scopeId2}><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-b4f2d93d${_scopeId2}></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-b4f2d93d${_scopeId2}></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-b4f2d93d${_scopeId2}></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-b4f2d93d${_scopeId2}></path></svg>`);
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
                      _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0427\u0430\u0442"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("\u0427\u0430\u0442")), 1)
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
                      _push3(`<svg width="25px" class="dark:stroke-white stroke-black" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId2}><path d="M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path><path d="M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId2}></path></svg>`);
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
                      _push3(`<p data-v-b4f2d93d${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041E\u0431\u043B\u0430\u043A\u043E"))}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u043B\u0430\u043A\u043E")), 1)
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
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0427\u0430\u0442")), 1)
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
                    createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u043B\u0430\u043A\u043E")), 1)
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
      _push(`<div class="h-full transition-all duration-500 mx-auto max-md:!ml-3" data-v-b4f2d93d>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        class: "rounded-full flex items-center gap-x-2 hover:text-sunset transition-all duration-200 p-2",
        onClick: ($event) => logOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 rounded-lg border flex items-center justify-center" data-v-b4f2d93d${_scopeId}><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4f2d93d${_scopeId}><path d="M4.2 4.7998L1 7.9998M1 7.9998L4.2 11.1998M1 7.9998H11.4M6.6 1.76304C7.61984 1.15042 8.80384 0.799805 10.0666 0.799805C13.8958 0.799805 17 4.02336 17 7.9998C17 11.9763 13.8958 15.1998 10.0666 15.1998C8.80384 15.1998 7.61984 14.8492 6.6 14.2366" stroke="#2A2A2A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-b4f2d93d${_scopeId}></path></svg></div>`);
            if (unref(loadCurrentUser).activeNav) {
              _push2(`<p class="font-medium text-sm dark:text-white text-black" data-v-b4f2d93d${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 rounded-lg border flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "16",
                  viewBox: "0 0 18 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M4.2 4.7998L1 7.9998M1 7.9998L4.2 11.1998M1 7.9998H11.4M6.6 1.76304C7.61984 1.15042 8.80384 0.799805 10.0666 0.799805C13.8958 0.799805 17 4.02336 17 7.9998C17 11.9763 13.8958 15.1998 10.0666 15.1998C8.80384 15.1998 7.61984 14.8492 6.6 14.2366",
                    stroke: "#2A2A2A",
                    "stroke-width": "1.4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ]),
              unref(loadCurrentUser).activeNav ? (openBlock(), createBlock("p", {
                key: 0,
                class: "font-medium text-sm dark:text-white text-black"
              }, toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)) : createCommentVNode("", true)
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
const TheNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b4f2d93d"]]);
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
          toast.info("\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C", { autoClose: 1500, theme: "auto" });
        });
      }
    });
    useHead({
      titleTemplate: (title) => {
        return title ? `${title} \u2022 ERP` : "ERP";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderContent = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="${ssrRenderClass([{ "hidden": !unref(user).activeNav, "max-[1150px]:block": unref(user).activeNav }, "w-screen h-screen z-20 fixed bg-black opacity-30 hidden"])}"></div><div class="flex w-full h-full bg-[#F7F6F9] dark:bg-bgPages"><div class="${ssrRenderClass([{ "max-[1150px]:-translate-x-32 transition-all duration-200": !unref(user).activeNav, "max-[600px]:w-full transition-all": unref(user).activeNav }, "bg-white transition-all duration-300 dark:bg-black max-[880px]:h-screen max-[1150px]:fixed z-50"])}"><div class="absolute bg-gray-300 rounded-l-lg px-2 py-1 z-[100] hidden max-[1150px]:block max-md:block right-2 top-6"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      _push(ssrRenderComponent(TheNavigation, {
        class: ["max-md:overflow-x-hidden", { "mr-24": unref(user).activeNav && unref(user).my_scroll > 90 }],
        activeNav: unref(user).activeNav
      }, null, _parent));
      _push(`</div><div class="w-full relative"><div class="${ssrRenderClass([{
        "blur": unref(treeStore).treeFullScreen === true,
        "max-[1150px]:!hidden": unref(user).activeNav
      }, "cursor-pointer bg-porcelain h-10 w-10 flex items-center justify-center rounded-lg absolute top-5 max-[1150px]:top-3 left-5 z-50 dark:fill-white fill-black"])}"><svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path></svg></div>`);
      _push(ssrRenderComponent(_component_HeaderContent, { class: "pl-14" }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "z-[1000]": unref(treeStore).treeFullScreen }, "relative z-10"])}">`);
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

export { _sfc_main as default };
//# sourceMappingURL=base-HyaGlkd3.mjs.map
