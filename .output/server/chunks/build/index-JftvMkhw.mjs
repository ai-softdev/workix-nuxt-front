import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, watchEffect, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, ref, withModifiers, mergeProps, createCommentVNode, reactive } from 'vue';
import { l as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './TheTextContent-D3-WrEaf.mjs';
import { _ as _sfc_main$b } from './TheSearch-Dw2_cWOE.mjs';
import { _ as _sfc_main$c } from './TheButton-DDcCSWqY.mjs';
import { _ as _sfc_main$d } from './TheModal-DcnSgpbI.mjs';
import { _ as _sfc_main$e } from './TheInput-BfTT2E6G.mjs';
import { u as useCompanies } from './companies-Dkc8gjfT.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import ruLocale from '@fullcalendar/core/locales/ru';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
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
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-wrap gap-y-4 justify-center gap-x-10 my-10 mx-auto w-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/adminUI/CompanyContentCreateElems.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CompanyContentCreateElems = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CompanyCreate",
  __ssrInlineRender: true,
  props: {
    showCreateCompany: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const createCompany = useCompanies();
    const createForm = ref({
      name: "",
      logo_file: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$c, {
        class: "w-full h-full",
        type: "signIn",
        onClick: ($event) => __props.showCreateCompany = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.showCreateCompany) {
        _push(ssrRenderComponent(_sfc_main$d, {
          onShowModal: ($event) => {
            __props.showCreateCompany = !__props.showCreateCompany;
            !__props.showCreateCompany ? createForm.value = {} : createForm.value = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$e, {
                      type: "text",
                      label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createForm).name,
                      "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$e, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreateCompany = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      class: "py-2 px-6 rounded-full",
                      t: "submit",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateCompany = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => {
                    unref(createCompany).createCompany(unref(createForm));
                    __props.showCreateCompany = false;
                  }, ["prevent"])
                }, [
                  createVNode(_sfc_main$a, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$e, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateCompany = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 40, ["onSubmit"])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/CompanyCreate.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("icons/chart.svg");
const _imports_1 = "" + publicAssetsURL("icons/company-statistic.svg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyDepartment",
  __ssrInlineRender: true,
  props: {
    more: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const departments = useCompanies();
    departments.loadDepartmentList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="dark:text-white text-3xl font-bold mb-6">${ssrInterpolate(_ctx.$t("\u041E\u0442\u0434\u0435\u043B\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p><div class="grid grid-cols-4 max-[1750px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-center gap-x-4 gap-y-4"><!--[-->`);
      ssrRenderList(unref(departments).get_all_department.results, (department) => {
        _push(`<div class="relative border p-5 rounded-3xl bg-white dark:border-gray-400"><div class="${ssrRenderClass({ "blur-[1px]": __props.more === department.id })}"><div class="font-bold pb-6 mb-6 border-b"><h2 class="text-md">${ssrInterpolate(department.name)}</h2></div><div class="flex flex-col gap-6"><div class="flex items-center justify-between gap-3"><p>${ssrInterpolate(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"))}</p><p class="break-words text-mediumGray">${ssrInterpolate(department.department_director_name ? department.department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442")}</p></div><div class="flex items-center justify-between gap-3"><p>${ssrInterpolate(_ctx.$t("\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C"))}</p><p class="break-words text-mediumGray">${ssrInterpolate(department.vice_department_director_name ? department.vice_department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442")}</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/base/companies/department/${department.id}`,
          class: "block p-2.5 rounded-full bg-golden text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyDepartment.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F", "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 IQ \u0442\u0435\u0441\u0442\u044B", "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C", "\u041F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u044C"],
      datasets: [
        {
          backgroundColor: ["rgba(109,252,118,0.4)", "rgba(252,155,0,0.91)", "rgba(0,121,255,0.4)", "rgba(255,9,0,0.68)"],
          data: [70, 70, 90, 100]
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PolarArea), mergeProps({
        class: "text-white",
        style: { "{color": "white" },
        data: unref(chartData),
        options: unref(chartOptions)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyChart.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const currentCompany = useCompanies();
    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      locales: [ruLocale],
      locale: "ru",
      events: [
        { title: "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 1", date: "2022-12-26" },
        { title: "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 2", date: "2022-12-27" }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden gap-y-10" }, _attrs))}><div class="grid grid-cols-3 max-[1020px]:grid-cols-1 gap-5 w-full"><div class="p-6 bg-white rounded-3xl"><div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit"><img${ssrRenderAttr("src", _imports_0)} alt="chart"> ${ssrInterpolate(_ctx.$t("\u0413\u0440\u0430\u0444\u0438\u043A"))}</div><div class="mt-8">`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div></div><div class="p-6 bg-white rounded-3xl"><div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit"><img${ssrRenderAttr("src", _imports_0)} alt="chart"> ${ssrInterpolate(_ctx.$t("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</div><div class="mt-8">${ssrInterpolate(unref(currentCompany).company.description || _ctx.$t("\u041D\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F"))}</div></div><div class="p-6 bg-white rounded-3xl"><div class="flex items-center gap-4 py-2 px-3 border rounded-full justify-center w-fit"><img${ssrRenderAttr("src", _imports_1)} alt="company-statistic"> ${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</div><div class="mt-8"><div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain"><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"><div><svg width="24" height="24" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12V21" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="font-medium">${ssrInterpolate(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B"))}:</p></div><div><p class="w-10 h-10 flex items-center justify-center dark:text-white">${ssrInterpolate(unref(currentCompany).company.objects_count || 0)}</p></div></div><div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain"><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18L19 15M19 15L22 18M19 15V21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"))}:</p></div><div><p class="w-10 h-10 flex items-center justify-center dark:text-white">${ssrInterpolate(unref(currentCompany).company.users_count || 0)}</p></div></div><div class="w-full flex items-center justify-between my-4 py-4 px-5 rounded-full gap-x-5 bg-porcelain"><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"><div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.0399 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}:</p></div><div><p class="w-10 h-10 flex items-center justify-center dark:text-white">${ssrInterpolate(unref(currentCompany).company.departments_count || 0)}</p></div></div></div></div></div><div class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div><div class="w-full mx-auto"><p class="dark:text-white text-3xl font-bold mb-6">${ssrInterpolate(_ctx.$t("\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439"))}</p><div class="bg-white rounded-3xl mt-6 p-6 shadow-cards">`);
      _push(ssrRenderComponent(unref(FullCalendar), { options: calendarOptions }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CompanyList",
  __ssrInlineRender: true,
  props: {
    companyBlock: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/companies/${__props.companyBlock.id}`,
        class: "transition-all cursor-pointer dark:bg-gray-400 dark:hover:bg-gray-300 dark:shadow-none shadow-xl hover:bg-gray-100 dark:border-none border-t border-t-gray-100 p-4 rounded-xl flex items-center gap-x-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.companyBlock.logo) {
              _push2(`<img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", __props.companyBlock.logo.replace(/\/png/g, "/webp"))} alt=""${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="tracking-widest"${_scopeId}>${ssrInterpolate(__props.companyBlock.name)}</h1>`);
          } else {
            return [
              __props.companyBlock.logo ? (openBlock(), createBlock("img", {
                key: 0,
                class: "w-[50px] h-[50px] rounded-full",
                src: __props.companyBlock.logo.replace(/\/png/g, "/webp"),
                alt: ""
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("h1", { class: "tracking-widest" }, toDisplayString(__props.companyBlock.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/CompanyList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 dark:text-white tracking-wider flex flex-col gap-y-4" }, _attrs))}><p class="flex items-center w-11/12 justify-between gap-x-10">`);
  ssrRenderSlot(_ctx.$slots, "statsName", {}, null, _push, _parent);
  _push(` <span class="bg-gray-300 py-2 px-4 rounded-full font-bold">`);
  ssrRenderSlot(_ctx.$slots, "statsValue", {}, null, _push, _parent);
  _push(`</span></p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/CompanyUI/CompanyStats.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CompanyStats = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyChangeInfoContent",
  __ssrInlineRender: true,
  setup(__props) {
    useCompanies();
    const form = reactive({
      title: "",
      description: "",
      email: "",
      address: "",
      file: null,
      phones: [""]
      // массив номеров
    });
    const handleFileChange = (e) => {
      const target = e.target;
      if (target.files && target.files.length > 0) {
        form.file = target.files[0];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 flex flex-col gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        label: "Email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        label: "\u0410\u0434\u0440\u0435\u0441",
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event
      }, null, _parent));
      _push(`<div><label class="font-medium mb-2 block">\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D(\u044B)</label><!--[-->`);
      ssrRenderList(unref(form).phones, (phone, index) => {
        _push(`<div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(_sfc_main$e, {
          label: `\u0422\u0435\u043B\u0435\u0444\u043E\u043D #${index + 1}`,
          modelValue: unref(form).phones[index],
          "onUpdate:modelValue": ($event) => unref(form).phones[index] = $event
        }, null, _parent));
        if (unref(form).phones.length > 1) {
          _push(`<button class="text-red-500 text-sm">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><button class="text-blue-500 text-sm">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440</button></div>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        type: "file",
        id: "upload-file",
        onInput: handleFileChange
      }, null, _parent));
      _push(`<button class="bg-blue-600 text-white px-4 py-2 rounded w-fit mt-4"> \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E </button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyChangeInfo/CurrentCompanyChangeInfoContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyChangeInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const changeShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="fill-white fixed bottom-6 right-20 bg-blueSemiLight p-2 rounded-full z-20 hover:bg-semiCyan"><svg width="30px" height="30px" viewBox="-0.5 0 16 16" id="settings-16px" xmlns="http://www.w3.org/2000/svg"><path id="Path_39" d="M-493.35-320H-494.7a1.865,1.865,0,0,1-1.863-1.862v-.626a.186.186,0,0,0-.091-.159l-.676-.394a.184.184,0,0,0-.183,0l-.539.311a1.845,1.845,0,0,1-1.414.186,1.855,1.855,0,0,1-1.133-.869l-.679-1.18a1.867,1.867,0,0,1,.68-2.541l.548-.316a.186.186,0,0,0,.092-.16v-.78a.186.186,0,0,0-.092-.16l-.547-.316a1.866,1.866,0,0,1-.681-2.541l.679-1.18a1.855,1.855,0,0,1,1.133-.869,1.837,1.837,0,0,1,1.414.187l.538.31a.181.181,0,0,0,.184,0l.676-.394a.186.186,0,0,0,.091-.159v-.626A1.865,1.865,0,0,1-494.7-336h1.353a1.865,1.865,0,0,1,1.864,1.862v.626a.187.187,0,0,0,.09.159l.677.394a.179.179,0,0,0,.183,0l.538-.311a1.841,1.841,0,0,1,1.415-.186,1.85,1.85,0,0,1,1.132.869l.679,1.18a1.866,1.866,0,0,1-.68,2.541l-.548.316a.186.186,0,0,0-.092.16v.78a.186.186,0,0,0,.092.16l.547.316a1.865,1.865,0,0,1,.681,2.541l-.679,1.18a1.85,1.85,0,0,1-1.132.869,1.842,1.842,0,0,1-1.415-.187l-.537-.31a.186.186,0,0,0-.184,0l-.677.394a.187.187,0,0,0-.09.159v.626A1.865,1.865,0,0,1-493.35-320Zm-4.076-4.063a1.185,1.185,0,0,1,.6.161l.676.4a1.181,1.181,0,0,1,.586,1.019v.626a.866.866,0,0,0,.866.865h1.353a.867.867,0,0,0,.867-.865v-.626a1.183,1.183,0,0,1,.585-1.019l.676-.4a1.185,1.185,0,0,1,1.186,0l.537.31a.849.849,0,0,0,.658.087.854.854,0,0,0,.525-.4l.68-1.179a.868.868,0,0,0-.317-1.181l-.546-.317a1.183,1.183,0,0,1-.59-1.022v-.78a1.183,1.183,0,0,1,.59-1.022h0l.547-.317a.868.868,0,0,0,.316-1.181l-.68-1.179a.854.854,0,0,0-.525-.4.871.871,0,0,0-.658.086l-.538.311a1.176,1.176,0,0,1-1.185,0l-.676-.4a1.183,1.183,0,0,1-.585-1.019v-.626a.867.867,0,0,0-.867-.865H-494.7a.866.866,0,0,0-.866.865v.626a1.181,1.181,0,0,1-.586,1.019l-.676.4a1.181,1.181,0,0,1-1.186,0l-.536-.31a.862.862,0,0,0-.658-.087.856.856,0,0,0-.526.4l-.68,1.179a.868.868,0,0,0,.317,1.181l.546.317a1.183,1.183,0,0,1,.59,1.022v.78a1.183,1.183,0,0,1-.59,1.022l-.547.317a.868.868,0,0,0-.316,1.181l.68,1.179a.856.856,0,0,0,.526.4.853.853,0,0,0,.658-.086l.537-.311A1.172,1.172,0,0,1-497.426-324.063Zm3.417-.711A3.23,3.23,0,0,1-497.235-328a3.23,3.23,0,0,1,3.226-3.226A3.23,3.23,0,0,1-490.782-328,3.23,3.23,0,0,1-494.009-324.774Zm0-5.455A2.232,2.232,0,0,0-496.238-328a2.232,2.232,0,0,0,2.229,2.229A2.233,2.233,0,0,0-491.778-328,2.233,2.233,0,0,0-494.009-330.229Z" transform="translate(501.528 336)"></path></svg></button>`);
      if (unref(changeShow)) {
        _push(ssrRenderComponent(_sfc_main$d, {
          onShowModal: ($event) => changeShow.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$a, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$a, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_sfc_main$2)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyChangeInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentUser = useAuthStore();
    const companies = useCompanies();
    const params = {
      page: 1,
      limit: 5,
      query: ""
    };
    watchEffect(() => {
      var _a;
      if (((_a = currentUser.user.role) == null ? void 0 : _a.name_en) !== "admin") {
        companies.loadCurrentCompany();
      } else {
        companies.loadCompanyList({ page: params.page, limit: params.limit, query: params.query });
      }
    });
    useSeoMeta({
      title: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
      description: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a = unref(currentUser).user.role) == null ? void 0 : _a.name_en) !== "admin") {
        _push(`<div><div class=""><p class="dark:text-white text-3xl font-bold mb-6">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E "))} ${ssrInterpolate(unref(companies).company.name)}</p>`);
        if (["company_admin", "director", "vice_director"].includes((_b = unref(currentUser).user.role) == null ? void 0 : _b.name_en)) {
          _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="">`);
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(`</div></div>`);
      } else if (((_c = unref(currentUser).user.role) == null ? void 0 : _c.name_en) === "admin") {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$a, { "text-type": "pageTitle" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-between items-center max-md:flex-col">`);
        _push(ssrRenderComponent(_sfc_main$b, { class: "my-10 w-6/12 max-md:w-full" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$8, { class: "w-2/12 max-md:w-full" }, null, _parent));
        _push(`</div><div class="flex gap-x-10 max-md:flex-col max-md:mt-5"><div class="w-full gap-y-10 flex flex-col max-md:order-2"><!--[-->`);
        ssrRenderList((_d = unref(companies)) == null ? void 0 : _d.get_all_company.results, (item) => {
          _push(ssrRenderComponent(_sfc_main$4, { "company-block": item }, null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(TheContentBlock, { class: "w-3/12 h-full transition-all rounded-md p-4 max-md:w-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-center text-lg tracking-widest font-bold dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}</h2>`);
              _push2(ssrRenderComponent(CompanyStats, null, {
                statsName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
                    ];
                  }
                }),
                statsValue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(companies).get_all_company.count > 0) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(unref(companies).get_all_company.count)}</p>`);
                    } else {
                      _push3(`<p${_scopeId2}>${ssrInterpolate("0")}</p>`);
                    }
                  } else {
                    return [
                      unref(companies).get_all_company.count > 0 ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(unref(companies).get_all_company.count), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString("0")))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("h2", { class: "text-center text-lg tracking-widest font-bold dark:text-white" }, toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1),
                createVNode(CompanyStats, null, {
                  statsName: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
                  ]),
                  statsValue: withCtx(() => [
                    unref(companies).get_all_company.count > 0 ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(unref(companies).get_all_company.count), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString("0")))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex justify-center gap-x-4 mt-10">`);
        if (((_e = unref(companies)) == null ? void 0 : _e.get_all_company.count) > 5) {
          _push(`<!--[-->`);
          ssrRenderList((_f = unref(companies)) == null ? void 0 : _f.get_all_company.links, (page, id) => {
            _push(`<div class="${ssrRenderClass([{ "bg-blue-400 text-white": page.active, "bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all": !page.active }, "px-4 py-2 rounded-full cursor-pointer"])}">${ssrInterpolate(page.label)}</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-JftvMkhw.mjs.map
