import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { useSSRContext, defineComponent, ref, watchEffect, watchSyncEffect, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, withModifiers, Fragment, renderList, Transition, createCommentVNode, withDirectives, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useTaskList } from './tasks-RoJoTOhB.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { u as useCompanies } from './companies-DK9t2HLw.mjs';
import { _ as _sfc_main$5 } from './TheTextContent-0-tZhPDG.mjs';
import { _ as _sfc_main$2 } from './TheBreadcrumbs-BV4tnjik.mjs';
import { _ as _sfc_main$3 } from './TheButton-Bz9xS3BF.mjs';
import { _ as _sfc_main$4 } from './TheModal-CjGVpCB-.mjs';
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
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

const _imports_0 = "" + publicAssetsURL("icons/author.svg");
const _imports_1 = "" + publicAssetsURL("icons/ispolniteli.svg");
const _imports_2 = "" + publicAssetsURL("icons/sroki.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TasksUserCheckbox",
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
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-30216c86><label class="${ssrRenderClass([{ "bg-blueSemiLight text-white": __props.item.value === true }, "container w-full relative py-2 px-6 text-black transition-all rounded-lg border"])}" data-v-30216c86><span class="relative z-10 dark:text-white" data-v-30216c86>${ssrInterpolate(((_a = __props.item) == null ? void 0 : _a.first_name) + " " + ((_b = __props.item) == null ? void 0 : _b.last_name))}</span><input type="checkbox"${ssrIncludeBooleanAttr(__props.item.value) ? " checked" : ""} data-v-30216c86><span class="checkmark w-full h-full absolute top-0 left-0" data-v-30216c86></span></label></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksUserCheckbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TasksUserCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-30216c86"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    showCancelError: {
      type: Boolean,
      default: false
    },
    showAddPerformer: {
      type: Boolean,
      default: false
    },
    showDeleteTask: {
      type: Boolean,
      default: false
    },
    model_value: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const currentUser = useAuthStore();
    const route = useRoute();
    useRouter();
    const currentTask = useTaskList();
    const department = useCompanies();
    department.loadDepartmentList();
    const updateForm = ref({});
    ref({});
    watchEffect(() => {
      currentTask.loadCurrentTask({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentTask.task.title}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))} data-v-b4783328><div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start" data-v-b4783328><button class="px-6 py-2 rounded-[30px] border-2 font-bold text-mediumGray bg-white flex items-center gap-2" data-v-b4783328><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4783328><path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path></svg> ${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0430\u0434"))}</button><div class="flex items-center flex-wrap gap-x-3" data-v-b4783328>`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": `/base/tasks` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-b4783328><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4783328><path d="M4.032 0.48H5.24L2.168 12H0.96L4.032 0.48Z" fill="#1E1E1E" data-v-b4783328></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentTask).task.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentTask).task.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="dark:text-white text-3xl font-bold my-8" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}</p><div class="flex w-full gap-4 max-[1200px]:flex-col" data-v-b4783328><div class="w-10/12 max-lg:w-full flex flex-col gap-4 max-[1200px]:order-2 max-[1200px]:w-full" data-v-b4783328><div class="p-6 rounded-3xl bg-white shadow-objectDescription" data-v-b4783328><div class="mb-8" data-v-b4783328><p class="font-bold mb-4" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))}</p><div class="w-full border p-4 bg-whiteSmoke rounded-3xl min-h-[200px]" data-v-b4783328>${ssrInterpolate(unref(currentTask).task.description)}</div></div><div class="mb-8" data-v-b4783328><p class="font-bold mb-4" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B"))}</p><div class="w-full flex border border-dashed p-4 rounded-3xl" data-v-b4783328><!--[-->`);
      ssrRenderList((_a = unref(currentTask).task) == null ? void 0 : _a.task_files, (files2) => {
        var _a2;
        _push(`<a class="flex items-center gap-2 bg-whiteSmoke p-3 rounded-2xl hover:shadow"${ssrRenderAttr("href", files2.file)}${ssrRenderAttr("download", files2.file_name)}${ssrRenderAttr("title", files2.file_name)} data-v-b4783328><div class="w-9 h-9 rounded-lg bg-white shadow flex items-center justify-center" data-v-b4783328><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4783328><path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke="#2A2A2A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path></svg></div><p class="" data-v-b4783328>${ssrInterpolate(((_a2 = files2.file_name) == null ? void 0 : _a2.length) > 10 ? files2.file_name.slice(0, 10) + "..." : files2.file_name)}</p></a>`);
      });
      _push(`<!--]-->`);
      if (((_b = unref(currentTask).task.task_files) == null ? void 0 : _b.length) === 0) {
        _push(`<div class="w-full text-center mb-4 min-h-[100px]" data-v-b4783328><p data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0424\u0430\u0439\u043B\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex items-center justify-between max-[756px]:flex-col max-[756px]:gap-4" data-v-b4783328><p class="text-md text-mediumGray" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F") + " " + new Date(unref(currentTask).task.updated_at).toLocaleDateString() + ", " + new Date(unref(currentTask).task.updated_at).toLocaleTimeString())}</p><button class="flex items-center gap-3 rounded-full border py-2.5 px-10 font-bold text-redOrange hover:text-white hover:bg-redOrange transition-all ease-in-out duration-300" data-v-b4783328><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4783328><path d="M15.5556 6.33388V5.62276C15.5556 4.62712 15.5556 4.12929 15.3618 3.749C15.1914 3.41449 14.9194 3.14252 14.5849 2.97209C14.2046 2.77832 13.7068 2.77832 12.7111 2.77832H11.2889C10.2932 2.77832 9.79541 2.77832 9.41513 2.97209C9.08061 3.14252 8.80865 3.41449 8.63821 3.749C8.44444 4.12929 8.44444 4.62712 8.44444 5.62276V6.33388M10.2222 11.2228V15.6672M13.7778 11.2228V15.6672M4 6.33388H20M18.2222 6.33388V16.2894C18.2222 17.7829 18.2222 18.5296 17.9316 19.1001C17.6759 19.6019 17.268 20.0098 16.7662 20.2654C16.1957 20.5561 15.4491 20.5561 13.9556 20.5561H10.0444C8.55097 20.5561 7.80423 20.5561 7.2338 20.2654C6.73204 20.0098 6.32409 19.6019 6.06843 19.1001C5.77778 18.5296 5.77778 17.7829 5.77778 16.2894V6.33388" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path></svg> ${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435"))}</button></div></div><div class="w-4/12 h-fit flex flex-col gap-5 max-[1200px]:w-full" data-v-b4783328><div class="p-6 rounded-3xl bg-white shadow-objectDescription" data-v-b4783328><div class="border rounded-full mx-auto px-3 py-2 w-fit flex items-center gap-3 mb-6" data-v-b4783328><img${ssrRenderAttr("src", _imports_0)} alt="author" data-v-b4783328><h2 class="dark:text-white" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0410\u0432\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}</h2></div><div class="bg-whiteSmoke py-2 px-4 rounded-full w-fit mx-auto" data-v-b4783328>${ssrInterpolate(((_d = (_c = unref(currentTask).task) == null ? void 0 : _c.author) == null ? void 0 : _d.first_name) + " " + ((_f = (_e = unref(currentTask).task) == null ? void 0 : _e.author) == null ? void 0 : _f.last_name))}</div></div><div class="p-6 rounded-3xl bg-white shadow-objectDescription" data-v-b4783328><div class="border rounded-full mx-auto px-3 py-2 w-fit flex items-center gap-3 mb-6" data-v-b4783328><img${ssrRenderAttr("src", _imports_1)} alt="ispolniteli" data-v-b4783328><h2 class="dark:text-white" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438"))}</h2></div><div class="mt-2" data-v-b4783328><p class="text-center font-medium" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/users/${(_g = unref(currentTask).task.main_performer) == null ? void 0 : _g.id}`,
        class: "flex mt-2 items-center gap-2 bg-whiteSmoke rounded-3xl p-2 max-[1200px]:w-fit max-[1200px]:mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(`<div class="w-8 h-8 rounded-full shadow flex items-center justify-center bg-white" data-v-b4783328${_scopeId}><img class="w-4 h-4 rounded-full"${ssrRenderAttr("src", (_a2 = unref(currentTask).task.main_performer) == null ? void 0 : _a2.photo)} alt="logo" data-v-b4783328${_scopeId}></div><p data-v-b4783328${_scopeId}>${ssrInterpolate(((_b2 = unref(currentTask).task.main_performer) == null ? void 0 : _b2.first_name) + " " + ((_c2 = unref(currentTask).task.main_performer) == null ? void 0 : _c2.last_name))}</p>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-full shadow flex items-center justify-center bg-white" }, [
                createVNode("img", {
                  class: "w-4 h-4 rounded-full",
                  src: (_d2 = unref(currentTask).task.main_performer) == null ? void 0 : _d2.photo,
                  alt: "logo"
                }, null, 8, ["src"])
              ]),
              createVNode("p", null, toDisplayString(((_e2 = unref(currentTask).task.main_performer) == null ? void 0 : _e2.first_name) + " " + ((_f2 = unref(currentTask).task.main_performer) == null ? void 0 : _f2.last_name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4" data-v-b4783328><p class="text-center font-medium" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"))}</p>`);
      if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
        _push(`<div class="mt-4 flex gap-x-6 justify-around" data-v-b4783328>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "w-6/12 dark:hover:bg-gray-500 hover:bg-gray-300 !text-black dark:!text-white rounded-full border dark:border-gray-500 transition-all duration-200",
          onClick: ($event) => {
            __props.showAddPerformer = true;
            unref(updateForm).department.participants = unref(department).get_all_department.participants.map((e) => {
              var _a2;
              e.value = ((_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((i) => i.id == e.id).length) != 0;
            });
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-4 flex flex-col max-lg:w-full max-lg:gap-x-4 max-h-[500px] h-full gap-y-4 overflow-y-auto px-2" data-v-b4783328><!--[-->`);
      ssrRenderList(unref(currentTask).task.performers, (user) => {
        _push(`<div class="flex relative items-center p-2 gap-x-6 bg-whiteSmoke rounded-3xl max-[1200px]:w-fit max-[1200px]:mx-auto" data-v-b4783328>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/base/users/${user.id}`,
          class: "w-11/12 flex items-center gap-x-4 max-[1200px]:!w-fit max-[1200px]:mx-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-8 h-8 rounded-full shadow flex items-center justify-center bg-white" data-v-b4783328${_scopeId}><img class="w-4 h-4 rounded-full"${ssrRenderAttr("src", user == null ? void 0 : user.photo)} alt="logo" data-v-b4783328${_scopeId}></div><p class="flex items-center" data-v-b4783328${_scopeId}>${ssrInterpolate(user.last_name.slice(0, 1) + ". " + user.first_name)}</p>`);
            } else {
              return [
                createVNode("div", { class: "w-8 h-8 rounded-full shadow flex items-center justify-center bg-white" }, [
                  createVNode("img", {
                    class: "w-4 h-4 rounded-full",
                    src: user == null ? void 0 : user.photo,
                    alt: "logo"
                  }, null, 8, ["src"])
                ]),
                createVNode("p", { class: "flex items-center" }, toDisplayString(user.last_name.slice(0, 1) + ". " + user.first_name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
          _push(`<div class="absolute cursor-pointer dark:stroke-white stroke-black right-0 px-2 py-1 hover:bg-red-400 max-sm:hidden transition-all duration-200 rounded-l-lg hover:stroke-white" name="fade" data-v-b4783328><div data-v-b4783328><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b4783328><path d="M10 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path><path d="M14 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path><path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path><path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-b4783328></path></svg></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
          _push(`<div class="absolute cursor-pointer dark:stroke-white stroke-black right-0 top-0 px-2 py-1 bg-red-400 hidden max-sm:block transition-all duration-200 rounded-tr-lg rounded-l-lg hover:stroke-white" name="fade" data-v-b4783328><div data-v-b4783328><p data-v-b4783328>X</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="p-6 rounded-3xl bg-white shadow-objectDescription" data-v-b4783328><div class="border rounded-full mx-auto px-3 py-2 w-fit flex items-center gap-3 mb-6" data-v-b4783328><img${ssrRenderAttr("src", _imports_2)} alt="sroki" data-v-b4783328><h2 class="dark:text-white" data-v-b4783328>${ssrInterpolate(_ctx.$t("\u0421\u0440\u043E\u043A\u0438"))}</h2></div><div class="mt-2 flex flex-col items-center gap-4" data-v-b4783328><div class="flex items-center gap-2" data-v-b4783328><p data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0447\u0430\u043B\u043E \u0441\u0440\u043E\u043A\u0430:"))}</p><div class="bg-whiteSmoke p-3 rounded-full" data-v-b4783328>${ssrInterpolate(new Date(unref(currentTask).task.created_at).toLocaleDateString())}</div></div><div class="flex items-center gap-2" data-v-b4783328><p data-v-b4783328>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043D\u0435\u0446 \u0441\u0440\u043E\u043A\u0430:"))}</p><div class="bg-whiteSmoke p-3 rounded-full" data-v-b4783328>${ssrInterpolate(new Date(unref(currentTask).task.deadline).toLocaleDateString())}</div></div></div></div></div></div>`);
      if (unref(currentTask).task.status === "watching" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
        _push(`<div class="flex flex-wrap gap-y-4 justify-center mb-10 gap-x-4" data-v-b4783328>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "px-10 py-2 rounded-full",
          type: "danger",
          onClick: ($event) => __props.showCancelError = true
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
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "px-10 py-2 rounded-full",
          type: "success",
          onClick: ($event) => unref(currentTask).change_taskStatus({ id: unref(currentTask).task.id, task_status: "make-completed" })
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showAddPerformer) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => __props.showAddPerformer = !__props.showAddPerformer
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(currentUser).user.role_en === "company_admin" || unref(currentUser).user.role_en === "director" || unref(currentUser).user.role_en === "vice_director") {
                _push2(`<form class="mt-6" data-v-b4783328${_scopeId}><div data-v-b4783328${_scopeId}><p data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}</p><div class="flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6" data-v-b4783328${_scopeId}><!--[-->`);
                ssrRenderList(unref(department).get_all_department.results, (item) => {
                  _push2(`<div class="${ssrRenderClass([{ "dark:bg-gray-500 bg-gray-200": unref(updateForm) === item }, "border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200"])}" data-v-b4783328${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                });
                _push2(`<!--]--></div></div><div data-v-b4783328${_scopeId}><p data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"))}</p><div class="flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6" data-v-b4783328${_scopeId}><!--[-->`);
                ssrRenderList(unref(updateForm).participants, (performer) => {
                  _push2(ssrRenderComponent(TasksUserCheckbox, { item: performer }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div><div class="flex justify-center gap-x-10" data-v-b4783328${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$3, {
                  class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                  type: "danger",
                  onClick: ($event) => __props.showAddPerformer = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$3, {
                  class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                  type: "success"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></form>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439")), 1)
                  ]),
                  _: 1
                }),
                unref(currentUser).user.role_en === "company_admin" || unref(currentUser).user.role_en === "director" || unref(currentUser).user.role_en === "vice_director" ? (openBlock(), createBlock("form", {
                  key: 0,
                  class: "mt-6",
                  onSubmit: withModifiers(($event) => {
                    var _a2;
                    unref(currentTask).addUser_task({ id: unref(currentTask).task.id, performers: (_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((e) => e.value).map((i) => i.id).join(",") });
                    __props.showAddPerformer = false;
                  }, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1),
                    createVNode("div", { class: "flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(department).get_all_department.results, (item) => {
                        return openBlock(), createBlock("div", {
                          class: ["border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200", { "dark:bg-gray-500 bg-gray-200": unref(updateForm) === item }],
                          onClick: ($event) => updateForm.value = item
                        }, toDisplayString(item.name), 11, ["onClick"]);
                      }), 256))
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("p", null, toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439")), 1),
                    createVNode(Transition, { name: "left-fade" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(updateForm).participants, (performer) => {
                            return openBlock(), createBlock(TasksUserCheckbox, { item: performer }, null, 8, ["item"]);
                          }), 256))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex justify-center gap-x-10" }, [
                    createVNode(_sfc_main$3, {
                      class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                      type: "danger",
                      onClick: ($event) => __props.showAddPerformer = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$3, {
                      class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 40, ["onSubmit"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showCancelError) {
        _push(ssrRenderComponent(_sfc_main$4, {
          class: "!w-[200px]",
          onShowModal: ($event) => __props.showCancelError = !__props.showCancelError
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form class="mt-10" data-v-b4783328${_scopeId}><div data-v-b4783328${_scopeId}><p class="mb-4" data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u044F"))}</p><textarea class="w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg" data-v-b4783328${_scopeId}>${ssrInterpolate(unref(updateForm).comment)}</textarea></div><div class="flex justify-center gap-x-10" data-v-b4783328${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "py-2 w-2/12 rounded-full",
                type: "danger",
                onClick: ($event) => __props.showCancelError = false
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
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "py-2 w-2/12 rounded-full",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435")), 1)
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => {
                    unref(currentTask).change_taskStatus({ task_status: "make-rejected", id: unref(currentTask).task.id, comment: unref(updateForm).comment });
                    __props.showCancelError = false;
                  }, ["prevent"]),
                  class: "mt-10"
                }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "mb-4" }, toDisplayString(_ctx.$t("\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u044F")), 1),
                    withDirectives(createVNode("textarea", {
                      class: "w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg",
                      "onUpdate:modelValue": ($event) => unref(updateForm).comment = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(updateForm).comment]
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center gap-x-10" }, [
                    createVNode(_sfc_main$3, {
                      class: "py-2 w-2/12 rounded-full",
                      type: "danger",
                      onClick: ($event) => __props.showCancelError = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$3, {
                      class: "py-2 w-2/12 rounded-full",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showDeleteTask) {
        _push(ssrRenderComponent(_sfc_main$4, {
          onShowModal: ($event) => __props.showDeleteTask = !__props.showDeleteTask,
          resizeClass: "!w-4/12 max-[1000px]:!w-11/12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="font-bold text-3xl text-center mt-12" data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C?"))}</p><p class="text-redOrange mt-8 text-center" data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435!"))}</p><p class="text-center mt-2" data-v-b4783328${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435"))}</p><div class="flex items-center justify-between mt-6 gap-3" data-v-b4783328${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                onClick: ($event) => __props.showDeleteTask = false
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
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "w-full rounded-full flex items-center justify-center hover:bg-red-700 gap-3 py-2 bg-sunset border !text-white transition-all ease-in-out duration-300",
                onClick: ($event) => {
                  unref(currentTask).delete_task({ id: unref(currentTask).task.id }, _ctx.$router);
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
                createVNode("p", { class: "font-bold text-3xl text-center mt-12" }, toDisplayString(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C?")), 1),
                createVNode("p", { class: "text-redOrange mt-8 text-center" }, toDisplayString(_ctx.$t("\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435!")), 1),
                createVNode("p", { class: "text-center mt-2" }, toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435")), 1),
                createVNode("div", { class: "flex items-center justify-between mt-6 gap-3" }, [
                  createVNode(_sfc_main$3, {
                    class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                    onClick: ($event) => __props.showDeleteTask = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$3, {
                    class: "w-full rounded-full flex items-center justify-center hover:bg-red-700 gap-3 py-2 bg-sunset border !text-white transition-all ease-in-out duration-300",
                    onClick: ($event) => {
                      unref(currentTask).delete_task({ id: unref(currentTask).task.id }, _ctx.$router);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tasks/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4783328"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CZdlXs2c.mjs.map
