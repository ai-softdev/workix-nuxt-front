import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, watch, unref, withCtx, createVNode, mergeProps, ref, createTextVNode, toDisplayString } from 'vue';
import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useDocumentStore } from './documents-BO3rBbpA.mjs';
import { u as useAuthStore } from './auth-BBm1bsU7.mjs';
import { _ as _sfc_main$9 } from './TheSearch-Dw2_cWOE.mjs';
import { P as Paginate } from '../_/vuejs-paginate-next.es.mjs';
import { useRoute, useRouter as useRouter$1 } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useCompanies } from './companies-CKV0eUOy.mjs';
import { _ as _sfc_main$a } from './TheInput-BfTT2E6G.mjs';
import { _ as _sfc_main$b } from './TheFileInput-Dirkv-sd.mjs';
import { _ as _sfc_main$c } from './TheButton-RleONNaZ.mjs';
import { _ as _sfc_main$8 } from './TheModal-DcnSgpbI.mjs';
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
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
import './chat-CHhRtVU6.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DocumentContentListElem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    useRouter();
    const domain = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-6 border rounded-3xl bg-whiteLilia dark:hover:bg-gray-700 hover:bg-gray-100 transition-all" }, _attrs))}><div class="cursor-pointer mb-4 pb-4 border-b hover:!text-golden text-black transition-all ease-in-out duration-300 flex items-center gap-3 justify-between"><div class="flex items-center gap-3"><div class="rounded-lg bg-white shadow-sm p-2 w-8 h-8 flex items-center justify-center"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      ssrRenderSlot(_ctx.$slots, "documentTitle", {}, null, _push, _parent);
      _push(`</div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999999 8L15 8M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-center mb-4">${ssrInterpolate(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"))}: </p><div class="flex items-center justify-center gap-x-2"><div class="w-6 h-6"><img class="rounded-full w-full"${ssrRenderAttr("src", unref(domain).get_server_domain + __props.item.author.photo)} alt=""></div><p class="text-mediumGray text-sm">`);
      ssrRenderSlot(_ctx.$slots, "documentUserName", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentContent/DocumentContentList/DocumentContentListElem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DocumentContentList",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter$1();
    const documentStore = useDocumentStore();
    const pageCount = ref(0);
    const limitItems = ref([5, 10, 20, 30, 50]);
    const page = ref(Number(route.query.page) || 1);
    const limit = ref(Number(route.query.limit) || 5);
    const query = ref(route.query.query || "");
    const type = ref(route.query.type || "from-me");
    const clickCallback = (pageNum) => {
      page.value = pageNum;
      updateQueryParams();
    };
    const updateQueryParams = () => {
      router.push({
        query: {
          page: page.value,
          limit: limit.value,
          query: query.value || void 0,
          type: type.value || void 0
        }
      });
      documentStore.loadAllDocument({
        page: page.value,
        limit: limit.value,
        query: query.value,
        type: type.value
      });
    };
    watch(() => documentStore.documentList, (newValue) => {
      if (newValue && newValue.count && limit.value) {
        pageCount.value = Math.ceil(newValue.count / limit.value);
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-6 rounded-3xl shadow-cards bg-white mb-8"><div class="flex items-center gap-10 justify-between"><div class="flex items-center gap-x-3 p-2 rounded-full border w-fit"><button class="${ssrRenderClass(["py-3 px-10 rounded-full font-medium", unref(type) === "from-me" ? "bg-golden" : ""])}">${ssrInterpolate(_ctx.$t("\u041C\u043E\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"))}</button><button class="${ssrRenderClass(["py-3 px-10 rounded-full font-medium", unref(type) === "through-me" ? "bg-golden" : ""])}">${ssrInterpolate(_ctx.$t("\u041E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"))}</button></div>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        class: "w-4/12",
        "model-value": unref(query),
        "onUpdate:modelValue": ($event) => query.value = $event,
        onSearch: updateQueryParams
      }, null, _parent));
      _push(`</div><div class="flex gap-x-2 gap-y-2 flex-wrap mt-6"><!--[-->`);
      ssrRenderList(unref(documentStore).get_all_document.results, (item) => {
        _push(ssrRenderComponent(_sfc_main$7, { item }, {
          documentTitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          documentFileName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.file_name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.file_name), 1)
              ];
            }
          }),
          documentUserName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.author.first_name + " " + item.author.last_name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.author.first_name + " " + item.author.last_name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="w-full flex items-center justify-end gap-4 pr-10 pb-5 max-md:pr-3 max-md:flex-col max-md:items-end">`);
      _push(ssrRenderComponent(unref(Paginate), {
        "page-count": unref(pageCount),
        "page-range": 3,
        "margin-pages": 2,
        "click-handler": clickCallback,
        "prev-text": "<",
        "next-text": ">",
        "container-class": "pagination",
        "page-class": "page-item",
        "force-page": unref(page)
      }, null, _parent));
      _push(`<div class="flex items-center gap-3"><p>\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:</p><select class="w-fit p-2.5 rounded-md border bg-white dark:bg-bgWhite text-black"><!--[-->`);
      ssrRenderList(unref(limitItems), (item) => {
        _push(`<option${ssrRenderAttr("value", item)}>${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentContent/DocumentContentList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DocumentContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("icons/info.svg");
const _imports_1 = "" + publicAssetsURL("icons/tick.svg");
const _imports_2 = "" + publicAssetsURL("icons/processed.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-x-6" }, _attrs))}><div class="w-full flex items-center gap-x-2"><div>`);
  ssrRenderSlot(_ctx.$slots, "infoIcon", {}, null, _push, _parent);
  _push(`</div><p class="tracking-wider">`);
  ssrRenderSlot(_ctx.$slots, "infoText", {}, null, _push, _parent);
  _push(`:</p></div><div class="flex gap-x-4"><p>`);
  ssrRenderSlot(_ctx.$slots, "infoCount", {}, null, _push, _parent);
  _push(`</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentInfo/DocumentInfoElem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DocumentInfoElem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocumentInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit bg-white px-5 py-6 rounded-3xl shadow-cards" }, _attrs))}><div class="w-full p-2 flex items-center gap-2 justify-center border rounded-full mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="info"><p>${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}</p></div><div class="flex flex-col gap-y-4">`);
      _push(ssrRenderComponent(DocumentInfoElem, null, {
        infoText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E")), 1)
            ];
          }
        }),
        infoCount: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(documentStore).documentList.count || 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(documentStore).documentList.count || 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(DocumentInfoElem, null, {
        infoIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="tick"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "tick"
              })
            ];
          }
        }),
        infoText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0435")), 1)
            ];
          }
        }),
        infoCount: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(documentStore).documentList.approved_count || 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(documentStore).documentList.approved_count || 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(DocumentInfoElem, null, {
        infoIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="processed"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "processed"
              })
            ];
          }
        }),
        infoText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        infoCount: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(documentStore).documentList.waiting_count || 0)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(documentStore).documentList.waiting_count || 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="dark:text-white text-lg mb-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocumentContentHeaderCreate",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UITheTitle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UITheTitle, { class: "text-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form class="flex gap-y-2 flex-col">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        type: "text",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        required: "",
        modelValue: unref(documentStore).createForm.title,
        "onUpdate:modelValue": ($event) => unref(documentStore).createForm.title = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, {
        type: "textarea",
        label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        modelValue: unref(documentStore).createForm.description,
        "onUpdate:modelValue": ($event) => unref(documentStore).createForm.description = $event
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(`</div><div class="flex justify-center gap-x-10 mt-4">`);
      _push(ssrRenderComponent(_sfc_main$c, {
        type: "danger",
        class: "px-2 py-1 rounded-lg",
        onClick: ($event) => {
          unref(documentStore).showCreateDoc = false;
          unref(documentStore).createForm = {};
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        type: "success",
        class: "px-2 py-1 rounded-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentContent/DocumentContentHeaderCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const document = useDocumentStore();
    const router = useRouter();
    const loadAuthStore = useAuthStore();
    const company = useCompanies();
    watch(() => loadAuthStore.user, (newValue) => {
      var _a, _b;
      if (((_b = (_a = loadAuthStore == null ? void 0 : loadAuthStore.user) == null ? void 0 : _a.role) == null ? void 0 : _b.name_en) === "admin") {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    watch(() => company.company, (newValue) => {
      var _a;
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "documents");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-4 justify-between"><p class="dark:text-white text-3xl font-bold">${ssrInterpolate(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"))}</p><button class="rounded-full py-3 px-8 font-medium bg-golden flex items-center gap-x-2 transition-all"> + ${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"))}</button>`);
      if (unref(document).showCreateDoc) {
        _push(ssrRenderComponent(_sfc_main$8, {
          type: "resize",
          onShowModal: ($event) => unref(document).showCreateDoc = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between gap-5 mt-8">`);
      _push(ssrRenderComponent(_sfc_main$5, { class: "!w-9/12" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { class: "!w-3/12" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/documents/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ql6-qBJG.mjs.map
