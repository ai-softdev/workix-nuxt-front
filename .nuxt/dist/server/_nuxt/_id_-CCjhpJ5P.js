import { a as useRouter, l as useSeoMeta } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, watchEffect, watchSyncEffect, createTextVNode, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { u as useObjects } from "./objects-DMzYlhLA.js";
import { useRoute } from "vue-router";
import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { u as useAuthStore } from "./auth-Cv6xi175.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-BV4tnjik.js";
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
import "./axios-Q2E2Xj-P.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
const _imports_0 = "" + __publicAssetsURL("icons/people.svg");
const _imports_1 = "" + __publicAssetsURL("icons/time.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ObjectParticipants",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    useAuthStore();
    useObjects();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "flex dark:hover:bg-gray-700 p-2 rounded-3xl bg-whiteSmoke items-center gap-x-2 hover:shadow-sm transition-all ease-in-out duration-300",
        to: `/base/users/${__props.user.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[50px] h-[50px] rounded-full bg-white shadow"${_scopeId}><img${ssrRenderAttr("src", __props.user.photo)} alt="user-img"${_scopeId}></div><p${_scopeId}>${ssrInterpolate(__props.user.first_name + " " + __props.user.last_name)}</p>`);
          } else {
            return [
              createVNode("div", { class: "w-[50px] h-[50px] rounded-full bg-white shadow" }, [
                createVNode("img", {
                  src: __props.user.photo,
                  alt: "user-img"
                }, null, 8, ["src"])
              ]),
              createVNode("p", null, toDisplayString(__props.user.first_name + " " + __props.user.last_name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectParticipants.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentObject = useObjects();
    useRouter();
    watchEffect(() => {
      currentObject.loadObject({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentObject.objects.name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start"><button class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(_ctx.$t("Назад"))}</button><div class="flex items-center flex-wrap gap-x-3">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/objects` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Объекты"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Объекты")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Страница объекта "))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница объекта ")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center gap-4 my-8 max-sm:flex-col max-sm:items-start"><p class="dark:text-white text-3xl font-bold max-sm:text-start">${ssrInterpolate(_ctx.$t("Страница объекта "))}</p><div class="font-bold px-8 py-2 shadow-object rounded-full bg-white">${ssrInterpolate(unref(currentObject).get_objects.name)}</div></div><div class="flex mt-6 gap-x-4 max-[1100px]:flex-col max-[1100px]:gap-5"><div class="w-9/12 flex flex-col gap-5 max-[1100px]:w-full max-[1100px]:order-2"><div class="bg-white p-6 rounded-3xl shadow-objectDescription"><p class="px-4 py-2 rounded-full border w-fit mb-6 font-bold">${ssrInterpolate(_ctx.$t("Описание"))}</p><p class="text-start">${ssrInterpolate(unref(currentObject).objects.description || _ctx.$t("Нет описания"))}</p></div><div class="bg-white p-6 rounded-3xl shadow-objectDescription"><p class="px-4 py-2 rounded-full border w-fit mb-6 font-bold">${ssrInterpolate(_ctx.$t("Изображение объекта"))}</p><div class="flex flex-col items-center gap-4"><!--[-->`);
      ssrRenderList(unref(currentObject).objects.pictures, (item, index) => {
        _push(`<div class="relative w-8/12 max-[656px]:w-full"><div class="absolute bg-white rounded-lg shadow font-bold w-8 h-8 top-6 left-6 flex items-center justify-center">${ssrInterpolate(index + 1)}</div><img class="block w-full h-full object-cover rounded-3xl shadow"${ssrRenderAttr("src", item.picture)} alt="picture"></div>`);
      });
      _push(`<!--]--></div></div></div><div class="w-3/12 flex flex-col gap-5 max-[1100px]:w-full"><div class="bg-white p-6 rounded-3xl shadow-objectDescription"><div class="mx-auto border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="people"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("Участники"))}</h2></div><div class="flex flex-col gap-3">`);
      if (((_a = unref(currentObject).get_objects.participants) == null ? void 0 : _a.length) > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(currentObject).get_objects.participants, (user) => {
          _push(ssrRenderComponent(_sfc_main$1, { user }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div><p>${ssrInterpolate(_ctx.$t("Участники отсутствуют"))}</p></div>`);
      }
      _push(`</div></div><div class="bg-white p-6 rounded-3xl shadow-objectDescription"><div class="mx-auto border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-6"><img${ssrRenderAttr("src", _imports_1)} alt="time"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("Дата создания:"))}</h2></div><p class="bg-whiteSmoke px-4 py-2 w-fit rounded-full mx-auto">${ssrInterpolate(new Date(unref(currentObject).get_objects.created_at).toLocaleDateString())}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/objects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CCjhpJ5P.js.map
