import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, unref, mergeProps, createSlots, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, isRef, createCommentVNode, watchEffect, withDirectives, Fragment, renderList, vModelSelect, withModifiers } from 'vue';
import { a as useRouter, l as useSeoMeta } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useTaskList } from './tasks-RoJoTOhB.mjs';
import { T as TheSceleton } from './TheSceleton-CoixK6br.mjs';
import { _ as _sfc_main$b } from './TheButton-Bz9xS3BF.mjs';
import { _ as _sfc_main$c } from './TheModal-CjGVpCB-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import VueDatePicker from '@vuepic/vue-datepicker';
import { startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear } from 'date-fns';
import { _ as __nuxt_component_0 } from './nuxt-link-CNB8XBKy.mjs';
import { u as useAuthStore } from './auth-Cv6xi175.mjs';
import { T as TaskContentCreateElems } from './TaskContentCreateElems-B_LyAK55.mjs';
import { _ as _sfc_main$d } from './TheSearch-Dw2_cWOE.mjs';
import { toast } from 'vue3-toastify';
import { _ as _sfc_main$e } from './TheTextContent-0-tZhPDG.mjs';
import { _ as _sfc_main$f } from './TheInput-BfTT2E6G.mjs';
import { u as useCompanies } from './companies-DK9t2HLw.mjs';
import { T as TheCheckbox } from './TheCheckbox-C05sx-UI.mjs';
import { u as useNotification } from './notification-D1Ny8bJK.mjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
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
import './chat-D3-ILc9-.mjs';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TasksReportBlock",
  __ssrInlineRender: true,
  props: {
    task: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    useTaskList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full h-fit flex gap-4 max-[400px]:w-400px transition-all hover:-translate-y-3 p-6 rounded-3xl shadow-objectDescription bg-white",
        task: __props.task
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "TaskReportSvg", {}, null, _push, _parent);
      _push(`<div class="flex flex-col gap-4"><p class="font-bold text-lg">`);
      ssrRenderSlot(_ctx.$slots, "TaskReportTitle", {}, null, _push, _parent);
      _push(`</p><p class="text-md rounded-full border px-3 py-1 w-fit">`);
      ssrRenderSlot(_ctx.$slots, "TaskReportSubtitle", {}, null, _push, _parent);
      _push(`</p><div>`);
      ssrRenderSlot(_ctx.$slots, "TaskSceleton", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksReportBlock.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TasksReport",
  __ssrInlineRender: true,
  props: {
    stats: {
      type: Object
    },
    taskNumber: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const taskList = useTaskList();
    function performingStat(status) {
      return Array.isArray(taskList.get_stats) ? taskList.get_stats.find((stat) => stat.status === status) : null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-x-5 gap-y-6 max-[1170px]:w-full max-[756px]:grid-cols-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-azure bg-opacity-10 rounded-3xl"${_scopeId}><svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M27.0503 18.4853V9.26471C27.0503 6.5468 27.0503 5.18785 26.5214 4.14975C26.0561 3.23661 25.3138 2.49421 24.4006 2.02894C23.3624 1.5 22.0036 1.5 19.2856 1.5H8.93267C6.21477 1.5 4.85582 1.5 3.81772 2.02894C2.90458 2.49421 2.16217 3.23661 1.69691 4.14975C1.16797 5.18785 1.16797 6.5468 1.16797 9.26471V26.0882C1.16797 28.8062 1.16797 30.165 1.69691 31.2032C2.16217 32.1164 2.90458 32.8587 3.81772 33.324C4.85582 33.8529 6.21477 33.8529 8.93267 33.8529H14.1091M17.3444 16.0588H7.63856M10.8739 22.5294H7.63856M20.5797 9.58824H7.63856M18.1533 29L21.3886 32.2353L28.668 24.9559" stroke="#2196F3" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-azure bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "30",
                  height: "35",
                  viewBox: "0 0 30 35",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M27.0503 18.4853V9.26471C27.0503 6.5468 27.0503 5.18785 26.5214 4.14975C26.0561 3.23661 25.3138 2.49421 24.4006 2.02894C23.3624 1.5 22.0036 1.5 19.2856 1.5H8.93267C6.21477 1.5 4.85582 1.5 3.81772 2.02894C2.90458 2.49421 2.16217 3.23661 1.69691 4.14975C1.16797 5.18785 1.16797 6.5468 1.16797 9.26471V26.0882C1.16797 28.8062 1.16797 30.165 1.69691 31.2032C2.16217 32.1164 2.90458 32.8587 3.81772 33.324C4.85582 33.8529 6.21477 33.8529 8.93267 33.8529H14.1091M17.3444 16.0588H7.63856M10.8739 22.5294H7.63856M20.5797 9.58824H7.63856M18.1533 29L21.3886 32.2353L28.668 24.9559",
                    stroke: "#2196F3",
                    "stroke-width": "2.1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0431\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0431\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !((_a = unref(taskList).get_stats) == null ? void 0 : _a.count) && unref(taskList).get_tasks.results ? {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = unref(taskList).get_tasks) == null ? void 0 : _a2.count) + _ctx.$t(" \u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = unref(taskList).get_tasks) == null ? void 0 : _b.count) + _ctx.$t(" \u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#F4C1071F] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M22.0013 3.66699L28.6013 10.267C33.0013 -1.28301 45.2846 11.0003 33.7346 15.4003L40.3346 22.0003L33.7346 28.6003C29.3346 17.0503 17.0513 29.3337 28.6013 33.7337L22.0013 40.3337L15.4013 33.7337C11.0013 45.2837 -1.28203 33.0003 10.268 28.6003L3.66797 22.0003L10.268 15.4003C14.668 26.9503 26.9513 14.667 15.4013 10.267L22.0013 3.66699Z" stroke="#EAB70A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#F4C1071F] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "44",
                  height: "44",
                  viewBox: "0 0 44 44",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M22.0013 3.66699L28.6013 10.267C33.0013 -1.28301 45.2846 11.0003 33.7346 15.4003L40.3346 22.0003L33.7346 28.6003C29.3346 17.0503 17.0513 29.3337 28.6013 33.7337L22.0013 40.3337L15.4013 33.7337C11.0013 45.2837 -1.28203 33.0003 10.268 28.6003L3.66797 22.0003L10.268 15.4003C14.668 26.9503 26.9513 14.667 15.4013 10.267L22.0013 3.66699Z",
                    stroke: "#EAB70A",
                    "stroke-width": "2.1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("performing") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("performing")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("performing")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#E5E0FFCC] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M31.5 31.5L24.25 24.25M14.8333 6.5C19.4357 6.5 23.1667 10.231 23.1667 14.8333M28.1667 14.8333C28.1667 22.1972 22.1972 28.1667 14.8333 28.1667C7.46953 28.1667 1.5 22.1972 1.5 14.8333C1.5 7.46953 7.46953 1.5 14.8333 1.5C22.1972 1.5 28.1667 7.46953 28.1667 14.8333Z" stroke="#8977EA" stroke-width="2.17241" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#E5E0FFCC] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "33",
                  height: "33",
                  viewBox: "0 0 33 33",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M31.5 31.5L24.25 24.25M14.8333 6.5C19.4357 6.5 23.1667 10.231 23.1667 14.8333M28.1667 14.8333C28.1667 22.1972 22.1972 28.1667 14.8333 28.1667C7.46953 28.1667 1.5 22.1972 1.5 14.8333C1.5 7.46953 7.46953 1.5 14.8333 1.5C22.1972 1.5 28.1667 7.46953 28.1667 14.8333Z",
                    stroke: "#8977EA",
                    "stroke-width": "2.17241",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("watching") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("watching")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("watching")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#C6EBE873] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M3.66797 18.3333C3.66797 18.3333 3.89039 16.7764 10.334 10.3327C16.7777 3.88909 27.2248 3.88909 33.6686 10.3327C35.9515 12.6157 37.4257 15.4013 38.091 18.3333M3.66797 18.3333V7.33333M3.66797 18.3333H14.668M40.3346 25.6667C40.3346 25.6667 40.1123 27.2235 33.6686 33.6673C27.2248 40.111 16.7777 40.111 10.334 33.6673C8.05103 31.3843 6.5769 28.5987 5.91166 25.6667M40.3346 25.6667V36.6667M40.3346 25.6667H29.3346" stroke="#43B7AD" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#C6EBE873] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "44",
                  height: "44",
                  viewBox: "0 0 44 44",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M3.66797 18.3333C3.66797 18.3333 3.89039 16.7764 10.334 10.3327C16.7777 3.88909 27.2248 3.88909 33.6686 10.3327C35.9515 12.6157 37.4257 15.4013 38.091 18.3333M3.66797 18.3333V7.33333M3.66797 18.3333H14.668M40.3346 25.6667C40.3346 25.6667 40.1123 27.2235 33.6686 33.6673C27.2248 40.111 16.7777 40.111 10.334 33.6673C8.05103 31.3843 6.5769 28.5987 5.91166 25.6667M40.3346 25.6667V36.6667M40.3346 25.6667H29.3346",
                    stroke: "#43B7AD",
                    "stroke-width": "2.1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0412\u043E\u0437\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0437\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("returned") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("returned")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("returned")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#D3CFCF66] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M7.69143 26.8258H16.9786M3.97657 1.28613H20.6934C21.5604 1.28613 21.9938 1.28613 22.3249 1.45483C22.6162 1.60324 22.8528 1.84003 23.0013 2.13128C23.17 2.46238 23.17 2.89583 23.17 3.7627V6.97377C23.17 7.73095 23.17 8.10954 23.0844 8.46581C23.0086 8.78169 22.8835 9.08366 22.7138 9.36064C22.5224 9.67304 22.2546 9.94074 21.7192 10.4762L17.182 15.0135C16.569 15.6264 16.2624 15.933 16.1477 16.2864C16.0466 16.5972 16.0466 16.9322 16.1477 17.243C16.2624 17.5964 16.569 17.903 17.182 18.516L21.7192 23.0532C22.2546 23.5886 22.5224 23.8564 22.7138 24.1687C22.8835 24.4458 23.0086 24.7478 23.0844 25.0635C23.17 25.4199 23.17 25.7985 23.17 26.5557V29.7667C23.17 30.6337 23.17 31.0671 23.0013 31.3981C22.8528 31.6895 22.6162 31.9261 22.3249 32.0746C21.9938 32.2433 21.5604 32.2433 20.6934 32.2433H3.97657C3.10969 32.2433 2.67625 32.2433 2.34515 32.0746C2.0539 31.9261 1.81711 31.6895 1.6687 31.3981C1.5 31.0671 1.5 30.6337 1.5 29.7667V26.5557C1.5 25.7985 1.5 25.4199 1.58553 25.0635C1.66136 24.7478 1.78645 24.4458 1.95618 24.1687C2.14762 23.8564 2.41533 23.5886 2.95074 23.0532L7.48809 18.516C8.10107 17.903 8.40755 17.5964 8.52238 17.243C8.62339 16.9322 8.62339 16.5972 8.52238 16.2864C8.40756 15.933 8.10105 15.6264 7.48809 15.0135L2.95074 10.4762C2.41534 9.94076 2.14762 9.67304 1.95618 9.36064C1.78645 9.08366 1.66136 8.78169 1.58553 8.46581C1.5 8.10954 1.5 7.73095 1.5 6.97377V3.7627C1.5 2.89583 1.5 2.46238 1.6687 2.13128C1.81711 1.84003 2.0539 1.60324 2.34515 1.45483C2.67625 1.28613 3.10969 1.28613 3.97657 1.28613Z" stroke="#2A2A2A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#D3CFCF66] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "25",
                  height: "34",
                  viewBox: "0 0 25 34",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M7.69143 26.8258H16.9786M3.97657 1.28613H20.6934C21.5604 1.28613 21.9938 1.28613 22.3249 1.45483C22.6162 1.60324 22.8528 1.84003 23.0013 2.13128C23.17 2.46238 23.17 2.89583 23.17 3.7627V6.97377C23.17 7.73095 23.17 8.10954 23.0844 8.46581C23.0086 8.78169 22.8835 9.08366 22.7138 9.36064C22.5224 9.67304 22.2546 9.94074 21.7192 10.4762L17.182 15.0135C16.569 15.6264 16.2624 15.933 16.1477 16.2864C16.0466 16.5972 16.0466 16.9322 16.1477 17.243C16.2624 17.5964 16.569 17.903 17.182 18.516L21.7192 23.0532C22.2546 23.5886 22.5224 23.8564 22.7138 24.1687C22.8835 24.4458 23.0086 24.7478 23.0844 25.0635C23.17 25.4199 23.17 25.7985 23.17 26.5557V29.7667C23.17 30.6337 23.17 31.0671 23.0013 31.3981C22.8528 31.6895 22.6162 31.9261 22.3249 32.0746C21.9938 32.2433 21.5604 32.2433 20.6934 32.2433H3.97657C3.10969 32.2433 2.67625 32.2433 2.34515 32.0746C2.0539 31.9261 1.81711 31.6895 1.6687 31.3981C1.5 31.0671 1.5 30.6337 1.5 29.7667V26.5557C1.5 25.7985 1.5 25.4199 1.58553 25.0635C1.66136 24.7478 1.78645 24.4458 1.95618 24.1687C2.14762 23.8564 2.41533 23.5886 2.95074 23.0532L7.48809 18.516C8.10107 17.903 8.40755 17.5964 8.52238 17.243C8.62339 16.9322 8.62339 16.5972 8.52238 16.2864C8.40756 15.933 8.10105 15.6264 7.48809 15.0135L2.95074 10.4762C2.41534 9.94076 2.14762 9.67304 1.95618 9.36064C1.78645 9.08366 1.66136 8.78169 1.58553 8.46581C1.5 8.10954 1.5 7.73095 1.5 6.97377V3.7627C1.5 2.89583 1.5 2.46238 1.6687 2.13128C1.81711 1.84003 2.0539 1.60324 2.34515 1.45483C2.67625 1.28613 3.10969 1.28613 3.97657 1.28613Z",
                    stroke: "#2A2A2A",
                    "stroke-width": "2.1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("expired") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("expired")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("expired")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#F443361F] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M9.03964 9.03866L34.963 34.962M34.9628 9.03864L9.03951 34.962M40.3346 22.0003C40.3346 32.1255 32.1264 40.3337 22.0013 40.3337C11.8761 40.3337 3.66797 32.1255 3.66797 22.0003C3.66797 11.8751 11.8761 3.66699 22.0013 3.66699C32.1264 3.66699 40.3346 11.8751 40.3346 22.0003Z" stroke="#F44336" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#F443361F] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "44",
                  height: "44",
                  viewBox: "0 0 44 44",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M9.03964 9.03866L34.963 34.962M34.9628 9.03864L9.03951 34.962M40.3346 22.0003C40.3346 32.1255 32.1264 40.3337 22.0013 40.3337C11.8761 40.3337 3.66797 32.1255 3.66797 22.0003C3.66797 11.8751 11.8761 3.66699 22.0013 3.66699C32.1264 3.66699 40.3346 11.8751 40.3346 22.0003Z",
                    stroke: "#F44336",
                    "stroke-width": "2.1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("rejected") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("rejected")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("rejected")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[86px] h-[86px] flex items-center justify-center bg-[#4CAF501F] bg-opacity-10 rounded-3xl"${_scopeId}><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M40.3346 20.3241V22.0108C40.3324 25.9642 39.0522 29.8111 36.685 32.9774C34.318 36.1439 30.9907 38.4604 27.1995 39.5813C23.4082 40.7022 19.3563 40.5676 15.6478 39.1975C11.9394 37.8275 8.77316 35.2953 6.62139 31.9788C4.46963 28.6623 3.44758 24.739 3.70771 20.794C3.96782 16.8492 5.49618 13.0941 8.06481 10.0888C10.6334 7.08349 14.1047 4.98903 17.961 4.11776C21.8172 3.24648 25.8518 3.64511 29.463 5.25415M40.3346 7.33366L22.0013 25.6853L16.5013 20.1853" stroke="#4CAF50" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[86px] h-[86px] flex items-center justify-center bg-[#4CAF501F] bg-opacity-10 rounded-3xl" }, [
                (openBlock(), createBlock("svg", {
                  width: "44",
                  height: "44",
                  viewBox: "0 0 44 44",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M40.3346 20.3241V22.0108C40.3324 25.9642 39.0522 29.8111 36.685 32.9774C34.318 36.1439 30.9907 38.4604 27.1995 39.5813C23.4082 40.7022 19.3563 40.5676 15.6478 39.1975C11.9394 37.8275 8.77316 35.2953 6.62139 31.9788C4.46963 28.6623 3.44758 24.739 3.70771 20.794C3.96782 16.8492 5.49618 13.0941 8.06481 10.0888C10.6334 7.08349 14.1047 4.98903 17.961 4.11776C21.8172 3.24648 25.8518 3.64511 29.463 5.25415M40.3346 7.33366L22.0013 25.6853L16.5013 20.1853",
                    stroke: "#4CAF50",
                    "stroke-width": "2.3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !performingStat("completed") ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TheSceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(TheSceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = performingStat("completed")) == null ? void 0 : _a2.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = performingStat("completed")) == null ? void 0 : _b.count) + " " + _ctx.$t("\u0437\u0430\u0434\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksReport.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer select-none" }, _attrs))}><div class="flex items-center gap-x-2"><div class="flex items-center gap-x-4"><div>`);
  ssrRenderSlot(_ctx.$slots, "filterIcon", {}, null, _push, _parent);
  _push(`</div><p class="uppercase dark:text-white tracking-widest font-bold">`);
  ssrRenderSlot(_ctx.$slots, "filterTitle", {}, null, _push, _parent);
  _push(`</p></div><div>`);
  ssrRenderSlot(_ctx.$slots, "filterChevron", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TaskUIFilter/TaskFilter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TaskFilter = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 pb-2 border-opacity-5 border-black justify-between max-sm:justify-start max-sm:gap-x-10 my-4 items-center cursor-pointer rounded-lg p-2" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "statusColor", {}, null, _push, _parent);
  _push(`</div><p class="text-start">`);
  ssrRenderSlot(_ctx.$slots, "statusName", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TaskUIFilter/TaskFilterStatus.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TaskFilterStatus = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TasksContentSearch",
  __ssrInlineRender: true,
  props: {
    moveElem: Boolean,
    showFilter: Boolean,
    showStatus: [String, Boolean],
    activeStatus: [String, Boolean],
    searchInput: String
  },
  setup(__props) {
    ref({
      query: ""
    });
    const date = ref();
    const presetRanges = ref([
      { label: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F", range: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] },
      { label: "\u0412 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435", range: [startOfMonth(/* @__PURE__ */ new Date()), endOfMonth(/* @__PURE__ */ new Date())] },
      {
        label: "\u0412 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435",
        range: [startOfMonth(subMonths(/* @__PURE__ */ new Date(), 1)), endOfMonth(subMonths(/* @__PURE__ */ new Date(), 1))]
      },
      { label: "\u0412 \u044D\u0442\u043E\u043C \u0433\u043E\u0434\u0443", range: [startOfYear(/* @__PURE__ */ new Date()), endOfYear(/* @__PURE__ */ new Date())] },
      { label: "\u041F\u043E \u0441\u0440\u043E\u043A\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F", range: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
    ]);
    const localShowStatus = ref("status");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-x-10 max-md:flex-wrap max-md:gap-y-4 max-md:items-center" }, _attrs))}><div class="w-fit max-md:w-full flex max-md:justify-center items-center gap-x-2"><div class="cursor-pointer relative transition-all"><svg class="dark:stroke-gray-200 stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke-width="1.5"></circle><path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke-width="1.5" stroke-linecap="round"></path><circle cx="12" cy="16" r="1" class="dark:fill-white fill-black"></circle></svg>`);
      if (__props.moveElem) {
        _push(`<div class="absolute dark:bg-gray-700 bg-white w-[220px] max-md:left-0 right-0 top-10 z-10 shadow-md rounded-3xl p-4"><h3 class="text-center">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"))}</h3>`);
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#EAB70A] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#EAB70A] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#8977EA] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#8977EA] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#43B7AD] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#43B7AD] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#2A2A2A] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#2A2A2A] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#F44336] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#F44336] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(TaskFilterStatus, null, {
          statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#4CAF50] w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#4CAF50] w-[25px] h-[25px] rounded-full" })
              ];
            }
          }),
          statusName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
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
      _push(ssrRenderComponent(_sfc_main$b, {
        onClick: ($event) => __props.showFilter = !__props.showFilter,
        type: "button",
        class: "rounded-xl p-3 bg-white border hover:bg-gray-400 transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H19.4C19.9601 1 20.2401 1 20.454 1.10899C20.6422 1.20487 20.7951 1.35785 20.891 1.54601C21 1.75992 21 2.03995 21 2.6V3.26939C21 3.53819 21 3.67259 20.9672 3.79756C20.938 3.90831 20.8901 4.01323 20.8255 4.10776C20.7526 4.21443 20.651 4.30245 20.4479 4.4785L14.0521 10.0215C13.849 10.1975 13.7474 10.2856 13.6745 10.3922C13.6099 10.4868 13.562 10.5917 13.5328 10.7024C13.5 10.8274 13.5 10.9618 13.5 11.2306V16.4584C13.5 16.6539 13.5 16.7517 13.4685 16.8363C13.4406 16.911 13.3953 16.9779 13.3363 17.0315C13.2695 17.0922 13.1787 17.1285 12.9971 17.2012L9.5971 18.5612C9.2296 18.7082 9.0458 18.7817 8.89827 18.751C8.76927 18.7242 8.65605 18.6476 8.58325 18.5377C8.5 18.4122 8.5 18.2142 8.5 17.8184V11.2306C8.5 10.9618 8.5 10.8274 8.46715 10.7024C8.43805 10.5917 8.39014 10.4868 8.32551 10.3922C8.25258 10.2856 8.15102 10.1975 7.94789 10.0215L1.55211 4.4785C1.34898 4.30245 1.24742 4.21443 1.17449 4.10776C1.10986 4.01323 1.06195 3.90831 1.03285 3.79756C1 3.67259 1 3.53819 1 3.26939V2.6Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M1 2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H19.4C19.9601 1 20.2401 1 20.454 1.10899C20.6422 1.20487 20.7951 1.35785 20.891 1.54601C21 1.75992 21 2.03995 21 2.6V3.26939C21 3.53819 21 3.67259 20.9672 3.79756C20.938 3.90831 20.8901 4.01323 20.8255 4.10776C20.7526 4.21443 20.651 4.30245 20.4479 4.4785L14.0521 10.0215C13.849 10.1975 13.7474 10.2856 13.6745 10.3922C13.6099 10.4868 13.562 10.5917 13.5328 10.7024C13.5 10.8274 13.5 10.9618 13.5 11.2306V16.4584C13.5 16.6539 13.5 16.7517 13.4685 16.8363C13.4406 16.911 13.3953 16.9779 13.3363 17.0315C13.2695 17.0922 13.1787 17.1285 12.9971 17.2012L9.5971 18.5612C9.2296 18.7082 9.0458 18.7817 8.89827 18.751C8.76927 18.7242 8.65605 18.6476 8.58325 18.5377C8.5 18.4122 8.5 18.2142 8.5 17.8184V11.2306C8.5 10.9618 8.5 10.8274 8.46715 10.7024C8.43805 10.5917 8.39014 10.4868 8.32551 10.3922C8.25258 10.2856 8.15102 10.1975 7.94789 10.0215L1.55211 4.4785C1.34898 4.30245 1.24742 4.21443 1.17449 4.10776C1.10986 4.01323 1.06195 3.90831 1.03285 3.79756C1 3.67259 1 3.53819 1 3.26939V2.6Z",
                  stroke: "black",
                  "stroke-width": "1.6",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (__props.showFilter) {
        _push(ssrRenderComponent(_sfc_main$c, {
          onShowModal: ($event) => __props.showFilter = !__props.showFilter
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div class="relative"${_scopeId}><h2 class="text-center font-bold text-2xl max-md:text-xl dark:text-white tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043E\u0438\u0441\u043A\u0443"))}</h2></div><div class="flex justify-center mx-auto my-10 max-lg:flex-col items-center gap-y-10"${_scopeId}>`);
              _push2(ssrRenderComponent(TaskFilter, {
                class: ["p-4", { "box": unref(localShowStatus) === "status" }],
                onShowEvent: ($event) => {
                  localShowStatus.value = !unref(localShowStatus);
                  localShowStatus.value = "status";
                }
              }, {
                filterIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="fill-black dark:fill-gray-100" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"${_scopeId2}></path><circle cx="18" cy="6" r="3"${_scopeId2}></circle></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "fill-black dark:fill-gray-100",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"
                        }),
                        createVNode("circle", {
                          cx: "18",
                          cy: "6",
                          r: "3"
                        })
                      ]))
                    ];
                  }
                }),
                filterTitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443")), 1)
                    ];
                  }
                }),
                filterChevron: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="${ssrRenderClass([{ "rotate-180": __props.showStatus === "status" }, "transition-all dark:stroke-white stroke-black"])}" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "status" }],
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M17 9.5L12 14.5L7 9.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], 2))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(localShowStatus) === "status") {
                _push2(`<div class="grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-sm:grid-cols-1"${_scopeId}>`);
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "performing" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "performing";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#EAB70A] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#EAB70A] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "watching" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "watching";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#8977EA] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#8977EA] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "returned" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "returned";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#43B7AD] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#43B7AD] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "expired" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "expired";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#2A2A2A] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#2A2A2A] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "rejected" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "rejected";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#F44336] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#F44336] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "completed" }],
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "completed";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#4CAF50] w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#4CAF50] w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (__props.showStatus === "date") {
                _push2(`<div class="flex items-center justify-center mx-auto w-full"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(VueDatePicker), {
                  class: "mx-auto max-md:flex-col flex justify-center",
                  modelValue: unref(date),
                  "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
                  range: "",
                  inline: "",
                  "preset-ranges": unref(presetRanges)
                }, {
                  yearly: withCtx(({ label, range, presetDateRange }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}></span>`);
                    } else {
                      return [
                        createVNode("span", {
                          onClick: ($event) => presetDateRange(range)
                        }, null, 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center justify-between mt-6 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, {
                class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                onClick: ($event) => __props.showFilter = false
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
              _push2(ssrRenderComponent(_sfc_main$b, {
                class: "w-full rounded-full flex items-center justify-center gap-3 py-2 hover:shadow-golden bg-golden border !text-white transition-all ease-in-out duration-300",
                onClick: ($event) => {
                  _ctx.$emit("setFilters", __props.activeStatus);
                  __props.showFilter = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u0438\u0441\u043A"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0438\u0441\u043A")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("h2", { class: "text-center font-bold text-2xl max-md:text-xl dark:text-white tracking-widest" }, toDisplayString(_ctx.$t("\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043E\u0438\u0441\u043A\u0443")), 1)
                  ]),
                  createVNode("div", { class: "flex justify-center mx-auto my-10 max-lg:flex-col items-center gap-y-10" }, [
                    createVNode(TaskFilter, {
                      class: ["p-4", { "box": unref(localShowStatus) === "status" }],
                      onShowEvent: ($event) => {
                        localShowStatus.value = !unref(localShowStatus);
                        localShowStatus.value = "status";
                      }
                    }, {
                      filterIcon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: "fill-black dark:fill-gray-100",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"
                          }),
                          createVNode("circle", {
                            cx: "18",
                            cy: "6",
                            r: "3"
                          })
                        ]))
                      ]),
                      filterTitle: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443")), 1)
                      ]),
                      filterChevron: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "status" }],
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M17 9.5L12 14.5L7 9.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      _: 1
                    }, 8, ["class", "onShowEvent"])
                  ]),
                  unref(localShowStatus) === "status" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-sm:grid-cols-1"
                  }, [
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "performing" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "performing";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#EAB70A] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"]),
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "watching" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "watching";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#8977EA] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"]),
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "returned" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "returned";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#43B7AD] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"]),
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "expired" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "expired";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#2A2A2A] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"]),
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "rejected" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "rejected";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#F44336] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"]),
                    createVNode(TaskFilterStatus, {
                      class: ["!justify-start", { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "completed" }],
                      onActiveStatus: ($event) => {
                        __props.activeStatus = !__props.activeStatus;
                        __props.activeStatus = "completed";
                      }
                    }, {
                      statusColor: withCtx(() => [
                        createVNode("div", { class: "bg-[#4CAF50] w-[25px] h-[25px] rounded-full" })
                      ]),
                      statusName: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "onActiveStatus"])
                  ])) : __props.showStatus === "date" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex items-center justify-center mx-auto w-full"
                  }, [
                    createVNode(unref(VueDatePicker), {
                      class: "mx-auto max-md:flex-col flex justify-center",
                      modelValue: unref(date),
                      "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
                      range: "",
                      inline: "",
                      "preset-ranges": unref(presetRanges)
                    }, {
                      yearly: withCtx(({ label, range, presetDateRange }) => [
                        createVNode("span", {
                          onClick: ($event) => presetDateRange(range)
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "preset-ranges"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center justify-between mt-6 gap-3" }, [
                    createVNode(_sfc_main$b, {
                      class: "w-full rounded-full flex items-center justify-center !text-black hover:bg-gray-200 gap-3 py-2 bg-porcelain border transition-all ease-in-out duration-300",
                      onClick: ($event) => __props.showFilter = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$b, {
                      class: "w-full rounded-full flex items-center justify-center gap-3 py-2 hover:shadow-golden bg-golden border !text-white transition-all ease-in-out duration-300",
                      onClick: ($event) => {
                        _ctx.$emit("setFilters", __props.activeStatus);
                        __props.showFilter = false;
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u0438\u0441\u043A")), 1)
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
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksContentSearch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><table><tr><th class="opacity-80 tracking-widest cursor-pointer">`);
  ssrRenderSlot(_ctx.$slots, "tableHead", {}, null, _push, _parent);
  _push(`</th></tr><tr><td class="text-sm tracking-widest">`);
  ssrRenderSlot(_ctx.$slots, "tableBody", {}, null, _push, _parent);
  _push(`</td></tr></table></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TaskTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TasksContentBlock",
  __ssrInlineRender: true,
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/tasks/${__props.task.id}`,
        class: "cursor-pointer hover:translate-x-4 transition-all px-6 py-2 rounded-3xl flex flex-col justify-between bg-white shadow-objectDescription p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex relative justify-between max-[425px]:gap-y-6"${_scopeId}><div class="flex w-full max-sm:flex-col max-sm:gap-y-6 max-sm:items-center max-sm:text-center justify-around"${_scopeId}>`);
            _push2(ssrRenderComponent(TaskTable, null, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.task.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.task.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TaskTable, null, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(__props.task.created_at).toLocaleDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(__props.task.created_at).toLocaleDateString()), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TaskTable, { class: "text-center" }, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0421\u0440\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u0440\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(__props.task.deadline).toLocaleDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(__props.task.deadline).toLocaleDateString()), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(loadCurrentUser).user.role_en === "company_admin") {
              _push2(ssrRenderComponent(TaskTable, { class: "text-center" }, {
                tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439")), 1)
                    ];
                  }
                }),
                tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-orange-500": __props.task.status === "performing", "bg-red-500": __props.task.status === "rejected", "bg-green-500": __props.task.status === "completed", "bg-blue-500": __props.task.status === "watching" }, "absolute z-0 -right-6 -top-2 w-[30px] h-[30px] opacity-80 rounded-bl-2xl rounded-tr-lg"])}"${_scopeId}></div></div><div class="my-10 font-bold tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.task.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex relative justify-between max-[425px]:gap-y-6" }, [
                createVNode("div", { class: "flex w-full max-sm:flex-col max-sm:gap-y-6 max-sm:items-center max-sm:text-center justify-around" }, [
                  createVNode(TaskTable, null, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(__props.task.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(TaskTable, null, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(new Date(__props.task.created_at).toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(TaskTable, { class: "text-center" }, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u0440\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(new Date(__props.task.deadline).toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }),
                  unref(loadCurrentUser).user.role_en === "company_admin" ? (openBlock(), createBlock(TaskTable, {
                    key: 0,
                    class: "text-center"
                  }, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: ["absolute z-0 -right-6 -top-2 w-[30px] h-[30px] opacity-80 rounded-bl-2xl rounded-tr-lg", { "bg-orange-500": __props.task.status === "performing", "bg-red-500": __props.task.status === "rejected", "bg-green-500": __props.task.status === "completed", "bg-blue-500": __props.task.status === "watching" }]
                }, null, 2)
              ]),
              createVNode("div", { class: "my-10 font-bold tracking-widest" }, [
                createVNode("p", null, toDisplayString(__props.task.description), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksContentBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TasksContent",
  __ssrInlineRender: true,
  props: {
    showTask: {
      type: Boolean,
      default: false
    },
    changeInfo: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    showCreate: {
      type: Boolean,
      default: false
    },
    task_info: {
      type: Object,
      required: true,
      default: () => {
      }
    },
    taskChecked: {
      type: String,
      default: "list"
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    const tasksList = useTaskList();
    const companies = useCompanies();
    const timezone = ref("UTC");
    const createForm = ref({
      title: "",
      description: "",
      deadline: "",
      author_file_file: "",
      performers: [],
      department: {},
      participants: [],
      worth: 0,
      main_performer_id: {},
      performer_file: ""
    });
    const params = {
      page: 1,
      limit: 5,
      query: "",
      task_type: "task-list"
    };
    const filteredParticipants = ref([]);
    function onDepartmentChange() {
      const selectedDepartment = createForm.value.department;
      companies.loadDepartment({ id: selectedDepartment.id });
    }
    function setFilters(status) {
      tasksList.loadTasksLists({ page: 1, limit: params.limit, status: `&status=${status}`, query: params.query });
    }
    function validationForm() {
      if ((createForm == null ? void 0 : createForm.value.deadline) === "") {
        toast.error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0440\u043E\u043A", { theme: "auto", autoClose: 1500 });
      }
    }
    watchEffect(() => {
      var _a;
      tasksList.loadTasksLists({ page: params.page, limit: params.limit, query: params.query });
      tasksList.loadTasksStats({ task_filter: params.task_type });
      const participants = companies.current_department.participants;
      const currentUserId = (_a = loadCurrentUser.user) == null ? void 0 : _a.id;
      if (participants && currentUserId) {
        filteredParticipants.value = participants.filter(
          (participant) => participant.id !== currentUserId
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<!--[--><div class="my-6"><form><div class="flex items-center gap-3 max-[768px]:flex-col"><div class="w-6/12 flex items-center gap-3 max-[768px]:w-full">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        class: "w-full",
        "model-value": params.query,
        "onUpdate:modelValue": ($event) => params.query = $event,
        onSearch: ($event) => unref(tasksList).loadTasksLists({ ...params, query: params.query })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { onSetFilters: setFilters }, null, _parent));
      _push(`</div><button class="w-3/12 max-[768px]:w-full flex items-center gap-2 justify-center ml-auto bg-golden px-10 py-2.5 rounded-full font-bold max-md:py-2 active:scale-95 transition-all duration-200"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1V15M1.5 8H15.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435"))}</button></div></form>`);
      if (unref(tasksList).get_tasks.results) {
        _push(`<div id="content" class="mx-auto"><div class="flex gap-x-2.5 my-10 flex-wrap max-md:mx-auto max-md:justify-center gap-y-5"><button class="${ssrRenderClass([{ "bg-golden border-golden text-white": __props.taskChecked === "all" }, "p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"])}">${ssrInterpolate(_ctx.$t("\u041E\u0431\u0449\u0435\u0435"))}</button><button class="${ssrRenderClass([{ "bg-golden border-golden text-white": __props.taskChecked === "to-me" }, "p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"])}">${ssrInterpolate(_ctx.$t("\u0414\u043B\u044F \u041C\u0435\u043D\u044F"))}</button><button class="${ssrRenderClass([{ "bg-golden border-golden text-white": __props.taskChecked === "from-me" }, "p-2 border rounded-full dark:text-white px-4 py-2 font-bold text-mediumGray"])}">${ssrInterpolate(_ctx.$t("\u041E\u0442 \u041C\u0435\u043D\u044F"))}</button></div>`);
        if (params.query === "") {
          _push(`<!--[-->`);
          ssrRenderList((_a = unref(tasksList)) == null ? void 0 : _a.get_tasks.results, (task) => {
            _push(ssrRenderComponent(_sfc_main$4, { task }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (params.query !== "") {
          _push(`<!--[-->`);
          ssrRenderList((_b = unref(tasksList)) == null ? void 0 : _b.get_search_task.results, (taskSearch) => {
            _push(ssrRenderComponent(_sfc_main$4, { task: taskSearch }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if ((_c = unref(loadCurrentUser).user.permissions) == null ? void 0 : _c.find((value) => value.name_en === "task.create")) {
          _push(`<div class="flex mt-10 items-center gap-x-10"><div class="flex gap-x-4"><!--[-->`);
          ssrRenderList(3, (i) => {
            _push(ssrRenderComponent(TheSceleton, {
              "border-radius": "5px",
              width: "100px",
              height: "20px"
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          _push(ssrRenderComponent(TheSceleton, {
            "border-radius": "10px",
            width: "150px",
            height: "30px"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex mt-10 flex-col gap-y-6"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(TheSceleton, {
            class: "opacity-50",
            "border-radius": "5px",
            width: "92%",
            height: "120px"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      }
      if (((_d = unref(tasksList)) == null ? void 0 : _d.get_tasks.count) === 0) {
        _push(`<div class="text-center mt-10 flex flex-col items-center gap-y-6 gap-x-10"><p class="text-2xl dark:text-white">${ssrInterpolate(_ctx.$t("\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center gap-x-4">`);
      if (unref(tasksList).get_tasks.count > 5) {
        _push(`<!--[-->`);
        ssrRenderList(unref(tasksList).get_tasks.links, (page, id) => {
          _push(`<div class="${ssrRenderClass([{ "bg-blue-400 text-white": page.active, "bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all": !page.active }, "px-4 py-2 rounded-full cursor-pointer"])}">${ssrInterpolate(page.label)}</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$c, {
          onShowModal: ($event) => {
            __props.showCreate = !__props.showCreate;
            !__props.showCreate ? unref(createForm).description = "" : unref(createForm);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$e, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director") {
                      _push3(`<div class="w-full max-lg:w-full"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$f, {
                        type: "text",
                        label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                        modelValue: unref(createForm).title,
                        "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$f, {
                        type: "text",
                        label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                        modelValue: unref(createForm).title,
                        "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u0434\u0435\u043B"))}</p><select type="text" class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(companies).get_all_department.results, (department) => {
                      _push3(`<option${ssrRenderAttr("value", department)}${_scopeId2}>${ssrInterpolate(department.name)}</option>`);
                    });
                    _push3(`<!--]--></select></div>`);
                  } else {
                    return [
                      unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full max-lg:w-full"
                      }, [
                        createVNode(_sfc_main$f, {
                          type: "text",
                          label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                          modelValue: unref(createForm).title,
                          "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "w-6/12 max-lg:w-full"
                      }, [
                        createVNode(_sfc_main$f, {
                          type: "text",
                          label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                          modelValue: unref(createForm).title,
                          "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])),
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u0434\u0435\u043B")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                          class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1",
                          onChange: onDepartmentChange
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_all_department.results, (department) => {
                            return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                          }), 256))
                        ], 40, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).department]
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439"))}</p><select type="text" class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(filteredParticipants), (main_performer) => {
                      _push3(`<option${ssrRenderAttr("value", main_performer == null ? void 0 : main_performer.id)}${_scopeId2}>${ssrInterpolate(main_performer.first_name + " " + main_performer.last_name)}</option>`);
                    });
                    _push3(`<!--]--></select></div><div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg"${_scopeId2}><p class="text-md dark:text-white tracking-wider text-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438"))}</p><!--[-->`);
                    ssrRenderList((_a2 = unref(companies).current_department) == null ? void 0 : _a2.participants, (performer) => {
                      _push3(`<div${ssrRenderAttr("for", "checkbox-" + (performer == null ? void 0 : performer.id))}${_scopeId2}>`);
                      if (performer.id !== unref(loadCurrentUser).user.id) {
                        _push3(`<label class="cursor-pointer"${_scopeId2}>`);
                        _push3(ssrRenderComponent(TheCheckbox, {
                          item: performer,
                          id: "checkbox-" + (performer == null ? void 0 : performer.id)
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="ml-10"${_scopeId2}>${ssrInterpolate(performer.first_name + " " + performer.last_name)}</span></label>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                          class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredParticipants), (main_performer) => {
                            return openBlock(), createBlock("option", {
                              value: main_performer == null ? void 0 : main_performer.id,
                              key: main_performer == null ? void 0 : main_performer.id
                            }, toDisplayString(main_performer.first_name + " " + main_performer.last_name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).main_performer_id]
                        ])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(companies).current_department) == null ? void 0 : _b2.participants, (performer) => {
                          return openBlock(), createBlock("div", {
                            for: "checkbox-" + (performer == null ? void 0 : performer.id)
                          }, [
                            performer.id !== unref(loadCurrentUser).user.id ? (openBlock(), createBlock("label", {
                              key: 0,
                              class: "cursor-pointer"
                            }, [
                              createVNode(TheCheckbox, {
                                item: performer,
                                id: "checkbox-" + (performer == null ? void 0 : performer.id)
                              }, null, 8, ["item", "id"]),
                              createVNode("span", { class: "ml-10" }, toDisplayString(performer.first_name + " " + performer.last_name), 1)
                            ])) : createCommentVNode("", true)
                          ], 8, ["for"]);
                        }), 256))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full text-black"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$f, {
                      type: "textarea",
                      label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"),
                      modelValue: unref(createForm).description,
                      "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border"${_scopeId2}><div class="text-center tracking-widest pt-4 pb-10"${_scopeId2}><h2 class="dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u043A \u0437\u0430\u0434\u0430\u043D\u0438\u044E"))}</h2><h2 class="text-gray-300"${_scopeId2}>(${ssrInterpolate(_ctx.$t("\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"))})</h2></div>`);
                    _push3(ssrRenderComponent(_sfc_main$f, {
                      class: "",
                      type: "file",
                      id: "upload-file",
                      onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full text-black" }, [
                        createVNode(_sfc_main$f, {
                          type: "textarea",
                          label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"),
                          modelValue: unref(createForm).description,
                          "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border" }, [
                        createVNode("div", { class: "text-center tracking-widest pt-4 pb-10" }, [
                          createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u043A \u0437\u0430\u0434\u0430\u043D\u0438\u044E")), 1),
                          createVNode("h2", { class: "text-gray-300" }, "(" + toDisplayString(_ctx.$t("\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E")) + ")", 1)
                        ]),
                        createVNode(_sfc_main$f, {
                          class: "",
                          type: "file",
                          id: "upload-file",
                          onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                        }, null, 8, ["onInput"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}><p class="text-md dark:text-white tracking-wider mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0421\u0440\u043E\u043A \u0434\u043E"))}</p>`);
                    _push3(ssrRenderComponent(unref(VueDatePicker), {
                      modelValue: unref(createForm).deadline,
                      "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                      "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                      "min-date": /* @__PURE__ */ new Date(),
                      timezone: unref(timezone),
                      "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                      placeholder: "Start Typing ...",
                      "text-input": "",
                      class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                      "auto-apply": "",
                      inline: "",
                      "multi-calendars-solo": ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider mb-2" }, toDisplayString(_ctx.$t("\u0421\u0440\u043E\u043A \u0434\u043E")), 1),
                        createVNode(unref(VueDatePicker), {
                          modelValue: unref(createForm).deadline,
                          "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                          "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                          "min-date": /* @__PURE__ */ new Date(),
                          timezone: unref(timezone),
                          "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                          placeholder: "Start Typing ...",
                          "text-input": "",
                          class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                          "auto-apply": "",
                          inline: "",
                          "multi-calendars-solo": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "min-date", "timezone", "cancel-text"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$b, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreate = false
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
                    _push3(ssrRenderComponent(_sfc_main$b, {
                      class: "py-2 px-6 rounded-full",
                      t: "submit",
                      type: "success",
                      onClick: ($event) => validationForm()
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
                      createVNode(_sfc_main$b, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$b, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success",
                        onClick: ($event) => validationForm()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_sfc_main$e, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      var _a2;
                      unref(tasksList).create_task({ ...unref(createForm), performers: (_a2 = unref(filteredParticipants)) == null ? void 0 : _a2.filter((e) => e.value).map((i) => i.id) });
                      __props.showCreate = false;
                    }, ["prevent"])
                  }, [
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full max-lg:w-full"
                        }, [
                          createVNode(_sfc_main$f, {
                            type: "text",
                            label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                            modelValue: unref(createForm).title,
                            "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-6/12 max-lg:w-full"
                        }, [
                          createVNode(_sfc_main$f, {
                            type: "text",
                            label: _ctx.$t("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
                            modelValue: unref(createForm).title,
                            "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ])),
                        createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2" }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u0434\u0435\u043B")), 1),
                          withDirectives(createVNode("select", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                            class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1",
                            onChange: onDepartmentChange
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_all_department.results, (department) => {
                              return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                            }), 256))
                          ], 40, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).department]
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2" }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439")), 1),
                            withDirectives(createVNode("select", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                              class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredParticipants), (main_performer) => {
                                return openBlock(), createBlock("option", {
                                  value: main_performer == null ? void 0 : main_performer.id,
                                  key: main_performer == null ? void 0 : main_performer.id
                                }, toDisplayString(main_performer.first_name + " " + main_performer.last_name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(createForm).main_performer_id]
                            ])
                          ]),
                          createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg" }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438")), 1),
                            (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(companies).current_department) == null ? void 0 : _a2.participants, (performer) => {
                              return openBlock(), createBlock("div", {
                                for: "checkbox-" + (performer == null ? void 0 : performer.id)
                              }, [
                                performer.id !== unref(loadCurrentUser).user.id ? (openBlock(), createBlock("label", {
                                  key: 0,
                                  class: "cursor-pointer"
                                }, [
                                  createVNode(TheCheckbox, {
                                    item: performer,
                                    id: "checkbox-" + (performer == null ? void 0 : performer.id)
                                  }, null, 8, ["item", "id"]),
                                  createVNode("span", { class: "ml-10" }, toDisplayString(performer.first_name + " " + performer.last_name), 1)
                                ])) : createCommentVNode("", true)
                              ], 8, ["for"]);
                            }), 256))
                          ])
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-6/12 max-lg:w-full text-black" }, [
                          createVNode(_sfc_main$f, {
                            type: "textarea",
                            label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"),
                            modelValue: unref(createForm).description,
                            "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border" }, [
                          createVNode("div", { class: "text-center tracking-widest pt-4 pb-10" }, [
                            createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u043A \u0437\u0430\u0434\u0430\u043D\u0438\u044E")), 1),
                            createVNode("h2", { class: "text-gray-300" }, "(" + toDisplayString(_ctx.$t("\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E")) + ")", 1)
                          ]),
                          createVNode(_sfc_main$f, {
                            class: "",
                            type: "file",
                            id: "upload-file",
                            onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                          }, null, 8, ["onInput"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-wider mb-2" }, toDisplayString(_ctx.$t("\u0421\u0440\u043E\u043A \u0434\u043E")), 1),
                          createVNode(unref(VueDatePicker), {
                            modelValue: unref(createForm).deadline,
                            "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                            "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                            "min-date": /* @__PURE__ */ new Date(),
                            timezone: unref(timezone),
                            "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                            placeholder: "Start Typing ...",
                            "text-input": "",
                            class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                            "auto-apply": "",
                            inline: "",
                            "multi-calendars-solo": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "min-date", "timezone", "cancel-text"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, {
                          class: "py-2 px-6 rounded-full",
                          t: "button",
                          type: "danger",
                          onClick: ($event) => __props.showCreate = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_sfc_main$b, {
                          class: "py-2 px-6 rounded-full",
                          t: "submit",
                          type: "success",
                          onClick: ($event) => validationForm()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("icons/notification-form.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheNotificationContent",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="border hover:bg-gray-100 transition-all w-full px-6 py-5 rounded-2xl bg-whiteLilia"><p class="text-md font-medium">${ssrInterpolate(__props.item.text)}</p></div><p class="text-romance text-end">${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F: ") + new Date(__props.item.created_at).toLocaleDateString())}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TheNotificationContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TasksNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="border rounded-full px-3 py-2 w-fit flex items-center gap-3 mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="notification-form"><h2 class="dark:text-white">${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445"))}</h2></div><div class="flex flex-col gap-4 max-h-[230px] overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(notification).get_notification, (item) => {
        _push(ssrRenderComponent(_sfc_main$2, { item }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksNotification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TasksNotification = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const statsList = useTaskList();
    Chart.register(ArcElement, Tooltip, Legend);
    Chart.defaults.color = "#b6b6b6";
    const STATUS_CONFIG = {
      completed: { label: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435", color: "#4CAF50" },
      performing: { label: "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435", color: "#EAB70A" },
      watching: { label: "\u041D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435", color: "#8977EA" },
      rejected: { label: "\u041E\u0442\u043A\u043B\u043E\u043D\u0451\u043D\u043D\u044B\u0435", color: "#F44336" },
      returned: { label: "\u0412\u043E\u0437\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443", color: "#43B7AD" },
      expired: { label: "\u0418\u0441\u0442\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0441\u0440\u043E\u043A\u0443", color: "#2A2A2A" }
    };
    const chartStats = computed(() => {
      const labels = [];
      const data = [];
      const backgroundColor = [];
      const stats = statsList == null ? void 0 : statsList.stats;
      if (Array.isArray(stats)) {
        stats.forEach((item) => {
          const config = STATUS_CONFIG[item.status];
          if (config) {
            labels.push(config.label);
            data.push(item.count);
            backgroundColor.push(config.color);
          }
        });
      }
      return { labels, data, backgroundColor };
    });
    const chartData = computed(() => ({
      labels: chartStats.value.labels,
      datasets: [
        {
          backgroundColor: chartStats.value.backgroundColor,
          data: chartStats.value.data
        }
      ]
    }));
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    const router = useRouter();
    const loadAuthStore = useAuthStore();
    const company = useCompanies();
    useTaskList();
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
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "tasks");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "\u0417\u0430\u0434\u0430\u043D\u0438\u044F",
      description: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="dark:text-white text-3xl font-bold mb-8">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u043C\u0438"))}</p><div class="mt-8 flex max-[1170px]:flex-col max-lg:items-center justify-between gap-5"><div class="flex flex-col w-8/12 max-[1170px]:w-full gap-y-10">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div><div class="flex flex-col w-4/12 max-[1170px]:w-full gap-y-5">`);
      if (unref(chartData).datasets[0].data[0] != void 0) {
        _push(`<div class="${ssrRenderClass([{ "h-[400px]": unref(statsList).get_tasks.count > 0 }, "dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 rounded-3xl p-4 w-full bg-white shadow-objectDescription"])}">`);
        if (unref(statsList).get_tasks.count > 0) {
          _push(ssrRenderComponent(unref(Pie), {
            class: "cursor-pointer",
            data: unref(chartData),
            options: unref(chartOptions)
          }, null, _parent));
        } else {
          _push(`<p class="text-xl min-h-[200px] flex items-center justify-center dark:text-white text-center">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))}</p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 rounded-3xl bg-white shadow-objectDescription px-6 py-5 w-full">`);
      _push(ssrRenderComponent(TasksNotification, null, null, _parent));
      _push(`</div></div></div><div class="w-full mt-10">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tasks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BWOJjvlH.mjs.map
