import { _ as _sfc_main$5 } from './TheButton-BYEThwSU.mjs';
import { defineComponent, ref, watchEffect, watch, watchSyncEffect, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { k as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useCompanies } from './companies-DBZEnG6X.mjs';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$1 } from './TheTextContent-Bd9flYOl.mjs';
import { _ as _sfc_main$2 } from './TheBreadcrumbs-CyXOlUWJ.mjs';
import { _ as _sfc_main$3 } from './TheModal-DtMcuqX0.mjs';
import { T as TheCheckbox } from './TheCheckbox-Bx4cWQzY.mjs';
import { _ as _sfc_main$4 } from './TheInput-BhoKAMvc.mjs';
import '../_/nuxt-storage.mjs';
import 'axios';
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
import 'tailwind-merge';
import 'animejs';
import 'vue3-toastify';
import './nuxt-link-CNB8XBKy.mjs';
import './chat-atQsJcZS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentCompany = useCompanies();
    const showModuleModal = ref(false);
    const showAdminModal = ref(false);
    const companyModules = ref([]);
    let adminForm = ref({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      patronymic: "",
      phone: "",
      company_id: ""
    });
    const openModuleModal = () => {
      showModuleModal.value = !showModuleModal.value;
    };
    const openAdminModal = () => {
      showAdminModal.value = !showAdminModal.value;
    };
    const changeModules = () => {
      openModuleModal();
      let array = [];
      companyModules.value.forEach((item) => {
        if (item.value) {
          array.push(item.id);
        }
      });
      currentCompany.editModules({ id: route.params.id, data: array });
    };
    const createAdministrator = () => {
      openAdminModal();
      adminForm.value.company_id = route.params.id;
      currentCompany.createAdministrator({ data: adminForm.value, company_id: route.params.id });
    };
    watchEffect(() => {
      currentCompany.loadCompany({ id: route.params.id });
      currentCompany.loadModules();
      currentCompany.loadCompanyAdministrators({ company_id: route.params.id });
    });
    watch(() => currentCompany.modules, (newModules) => {
      companyModules.value = [];
      currentCompany.modules.forEach((module) => {
        const isModuleExists = currentCompany.company.modules.some((companyModule) => companyModule.id === module.id);
        companyModules.value.push({
          ...module,
          value: isModuleExists
        });
      });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentCompany.company.name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UITheButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 " + unref(currentCompany).company.name))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 " + unref(currentCompany).company.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/companies" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentCompany).company.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentCompany).company.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-start gap-10 w-full max-md:flex-col"><div class="flex flex-col gap-4 mt-10 w-8/12 max-md:w-full"><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.description)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("Email"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.email)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("\u0410\u0434\u0440\u0435\u0441"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.address)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}: </p><div class="bg-bgWhite p-3 rounded-lg flex flex-col gap-3 items-start">`);
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: openAdminModal,
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
      _push(`<!--[-->`);
      ssrRenderList(unref(currentCompany).company_administrators, (item, index) => {
        _push(`<div class="bg-bgWhite p-3 w-full border rounded-lg">${ssrInterpolate(item.last_name + " " + item.first_name)}</div>`);
      });
      _push(`<!--]--></div></div></div><div class="flex flex-col gap-2 w-4/12 max-md:w-full"><p>${ssrInterpolate(_ctx.$t("\u041C\u043E\u0434\u0443\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}: </p><div class="flex flex-col gap-3 bg-bgWhite p-3 rounded-lg max-h-[400px] min-h-[400px] h-full overflow-y-scroll">`);
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: openModuleModal,
        class: "mb-2 border p-3 rounded-lg !text-black dark:!text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(currentCompany).company.modules, (item, index) => {
        _push(`<div class="bg-bgWhite p-3 w-full border rounded-lg">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (unref(showModuleModal)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "resize",
          onShowModal: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="absolute top-3 right-3"${_scopeId}> x </button><div class="flex flex-col gap-2 min-h-[400px] min-w-[400px] max-md:min-w-full"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u041C\u043E\u0434\u0443\u043B\u0438"))}: </p><div class="grid grid-cols-2 gap-3 max-md:grid-cols-1"${_scopeId}><!--[-->`);
              ssrRenderList(unref(companyModules), (item, index) => {
                _push2(`<div class="bg-[#8881] p-3 w-full border rounded-lg"${_scopeId}>`);
                _push2(ssrRenderComponent(TheCheckbox, { item }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_component_UITheButton, {
                class: "mt-2 !text-black dark:!text-white",
                onClick: changeModules
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                  } else {
                    return [
                      createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("button", {
                  class: "absolute top-3 right-3",
                  onClick: openModuleModal
                }, " x "),
                createVNode("div", { class: "flex flex-col gap-2 min-h-[400px] min-w-[400px] max-md:min-w-full" }, [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041C\u043E\u0434\u0443\u043B\u0438")) + ": ", 1),
                  createVNode("div", { class: "grid grid-cols-2 gap-3 max-md:grid-cols-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(companyModules), (item, index) => {
                      return openBlock(), createBlock("div", { class: "bg-[#8881] p-3 w-full border rounded-lg" }, [
                        createVNode(TheCheckbox, { item }, null, 8, ["item"])
                      ]);
                    }), 256))
                  ]),
                  createVNode(_component_UITheButton, {
                    class: "mt-2 !text-black dark:!text-white",
                    onClick: changeModules
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showAdminModal)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "resize",
          onShowModal: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="absolute top-3 right-3"${_scopeId}> x </button><div class="flex flex-col gap-5"${_scopeId}><p${_scopeId}> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430: </p><div class="flex items-center gap-5 max-md:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).first_name,
                "onUpdate:modelValue": ($event) => unref(adminForm).first_name = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "\u0418\u043C\u044F"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).last_name,
                "onUpdate:modelValue": ($event) => unref(adminForm).last_name = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).patronymic,
                "onUpdate:modelValue": ($event) => unref(adminForm).patronymic = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-2 items-center gap-5 max-md:grid-cols-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).email,
                "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
                class: "w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                placeholder: "Email"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).password,
                "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
                class: "w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).phone,
                "onUpdate:modelValue": ($event) => unref(adminForm).phone = $event,
                class: "w-[300px] max-md:w-full mx-auto bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UITheButton, {
                class: "mt-2 !text-black dark:!text-white",
                onClick: createAdministrator
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                  } else {
                    return [
                      createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("button", {
                  class: "absolute top-3 right-3",
                  onClick: openAdminModal
                }, " x "),
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("p", null, " \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430: "),
                  createVNode("div", { class: "flex items-center gap-5 max-md:flex-col" }, [
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).first_name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).first_name = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "\u0418\u043C\u044F"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).last_name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).last_name = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).patronymic,
                      "onUpdate:modelValue": ($event) => unref(adminForm).patronymic = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 items-center gap-5 max-md:grid-cols-1" }, [
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).email,
                      "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
                      class: "w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                      placeholder: "Email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).password,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
                      class: "w-full bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$4, {
                    type: "default",
                    modelValue: unref(adminForm).phone,
                    "onUpdate:modelValue": ($event) => unref(adminForm).phone = $event,
                    class: "w-[300px] max-md:w-full mx-auto bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UITheButton, {
                    class: "mt-2 !text-black dark:!text-white",
                    onClick: createAdministrator
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Dq5O_9QQ.mjs.map
