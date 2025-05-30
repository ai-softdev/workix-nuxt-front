import { _ as _sfc_main$5 } from "./TheButton-RleONNaZ.js";
import { defineComponent, ref, watchEffect, watch, watchSyncEffect, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { l as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useCompanies } from "./companies-CKV0eUOy.js";
import { useRoute } from "vue-router";
import { _ as _sfc_main$1 } from "./TheTextContent-D3-WrEaf.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-JYk0wevu.js";
import { _ as _sfc_main$3 } from "./TheModal-DcnSgpbI.js";
import { T as TheCheckbox } from "./TheCheckbox-BeTHd7Fs.js";
import { _ as _sfc_main$4 } from "./TheInput-CZSlzGOT.js";
import "./axios-DrAfoKzV.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
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
import "vue3-toastify";
import "./nuxt-link-CNB8XBKy.js";
import "./chat-CHhRtVU6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
            _push2(`${ssrInterpolate(_ctx.$t("Страница компании " + unref(currentCompany).company.name))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница компании " + unref(currentCompany).company.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/companies" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Список компаний"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Список компаний")), 1)
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
      _push(`</div><div class="flex items-start gap-10 w-full max-md:flex-col"><div class="flex flex-col gap-4 mt-10 w-8/12 max-md:w-full"><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("Описание"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.description)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("Email"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.email)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("Адрес"))}: </p><p>${ssrInterpolate(unref(currentCompany).company.address)}</p></div><div class="flex flex-col gap-2"><p>${ssrInterpolate(_ctx.$t("Администраторы компании"))}: </p><div class="bg-bgWhite p-3 rounded-lg flex flex-col gap-3 items-start">`);
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: openAdminModal,
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
      _push(`<!--[-->`);
      ssrRenderList(unref(currentCompany).company_administrators, (item, index) => {
        _push(`<div class="bg-bgWhite p-3 w-full border rounded-lg">${ssrInterpolate(item.last_name + " " + item.first_name)}</div>`);
      });
      _push(`<!--]--></div></div></div><div class="flex flex-col gap-2 w-4/12 max-md:w-full"><p>${ssrInterpolate(_ctx.$t("Модули компании"))}: </p><div class="flex flex-col gap-3 bg-bgWhite p-3 rounded-lg max-h-[400px] min-h-[400px] h-full overflow-y-scroll">`);
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: openModuleModal,
        class: "mb-2 border p-3 rounded-lg !text-black dark:!text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Изменить `);
          } else {
            return [
              createTextVNode(" Изменить ")
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
              _push2(`<button class="absolute top-3 right-3"${_scopeId}> x </button><div class="flex flex-col gap-2 min-h-[400px] min-w-[400px] max-md:min-w-full"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Модули"))}: </p><div class="grid grid-cols-2 gap-3 max-md:grid-cols-1"${_scopeId}><!--[-->`);
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
                    _push3(` Сохранить `);
                  } else {
                    return [
                      createTextVNode(" Сохранить ")
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
                  createVNode("p", null, toDisplayString(_ctx.$t("Модули")) + ": ", 1),
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
                      createTextVNode(" Сохранить ")
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
              _push2(`<button class="absolute top-3 right-3"${_scopeId}> x </button><div class="flex flex-col gap-5"${_scopeId}><p${_scopeId}> Создание администратора: </p><div class="flex items-center gap-5 max-md:flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).first_name,
                "onUpdate:modelValue": ($event) => unref(adminForm).first_name = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "Имя"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).last_name,
                "onUpdate:modelValue": ($event) => unref(adminForm).last_name = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "Фамилия"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).patronymic,
                "onUpdate:modelValue": ($event) => unref(adminForm).patronymic = $event,
                class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                placeholder: "Отчество"
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
                placeholder: "Пароль"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "default",
                modelValue: unref(adminForm).phone,
                "onUpdate:modelValue": ($event) => unref(adminForm).phone = $event,
                class: "w-[300px] max-md:w-full mx-auto bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                placeholder: "Номер телефона"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UITheButton, {
                class: "mt-2 !text-black dark:!text-white",
                onClick: createAdministrator
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Сохранить `);
                  } else {
                    return [
                      createTextVNode(" Сохранить ")
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
                  createVNode("p", null, " Создание администратора: "),
                  createVNode("div", { class: "flex items-center gap-5 max-md:flex-col" }, [
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).first_name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).first_name = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "Имя"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).last_name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).last_name = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "Фамилия"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      type: "default",
                      modelValue: unref(adminForm).patronymic,
                      "onUpdate:modelValue": ($event) => unref(adminForm).patronymic = $event,
                      class: "bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none max-md:w-full",
                      placeholder: "Отчество"
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
                      placeholder: "Пароль"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$4, {
                    type: "default",
                    modelValue: unref(adminForm).phone,
                    "onUpdate:modelValue": ($event) => unref(adminForm).phone = $event,
                    class: "w-[300px] max-md:w-full mx-auto bg-transparent bg-opacity-0 rounded-lg border-2 border-semiCyan outline-none",
                    placeholder: "Номер телефона"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UITheButton, {
                    class: "mt-2 !text-black dark:!text-white",
                    onClick: createAdministrator
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Сохранить ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-g_n3rEs5.js.map
