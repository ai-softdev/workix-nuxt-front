import { useSSRContext, defineComponent, withCtx, createTextVNode, toDisplayString, mergeProps, unref, createVNode, openBlock, createBlock, createCommentVNode, ref, watchSyncEffect, withDirectives, vModelText, Fragment, renderList, vModelSelect, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './TheButton-Df-Mgad_.mjs';
import { _ as _sfc_main$a } from './TheInput-BhoKAMvc.mjs';
import { _ as _sfc_main$9 } from './TheModal-DtMcuqX0.mjs';
import { _ as _sfc_main$5 } from './TheTextContent-Bd9flYOl.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useUserStore } from './users-9jO4n7vu.mjs';
import { u as useCompanies } from './companies-DBZEnG6X.mjs';
import { u as useAuthStore } from './auth-DQm4aBcD.mjs';
import VueDatePicker from '@vuepic/vue-datepicker';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CNB8XBKy.mjs';
import { _ as _sfc_main$7 } from './TheFilter-B4Nxpp64.mjs';
import { _ as _sfc_main$6 } from './TheSearch-Dbfux0Mw.mjs';
import { k as useSeoMeta } from './server.mjs';
import '../_/nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
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
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-wrap justify-center gap-x-10 my-10 mx-auto w-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserUI/UserContentCreateElems.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UserContentCreateElems = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "UserCreate",
  __ssrInlineRender: true,
  props: {
    showCreateUser: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    const company = useCompanies();
    const userList = useUserStore();
    const createForm = ref({
      email: "",
      first_name: "",
      last_name: "",
      patronymic: "",
      password: "",
      phone: "",
      photo: "",
      position: "",
      date_of_birth: (/* @__PURE__ */ new Date()).toDateString(),
      company_id: Number(),
      department_id: Number(),
      role_id: Number(),
      permissions: {}
    });
    function loads() {
      userList.loadPositionList();
      userList.loadUserList();
      company.loadDepartmentList();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loadCurrentUser).current_user.permissions) {
        _push(ssrRenderComponent(_sfc_main$8, {
          class: "max-md:w-full w-full px-4 text-sm",
          type: "signIn",
          onClick: ($event) => {
            var _a;
            __props.showCreateUser = true;
            loads();
            ((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) === "admin" ? unref(company).loadCompanyList({ page: 1, limit: 1e3, query: "" }) : "";
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showCreateUser) {
        _push(ssrRenderComponent(_sfc_main$9, {
          onShowModal: ($event) => {
            __props.showCreateUser = !__props.showCreateUser;
            !__props.showCreateUser ? createForm.value = {} : createForm.value = {};
          },
          "show-create-user": __props.showCreateUser
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form enctype="multipart/form-data"${_scopeId}>`);
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "text",
                      label: _ctx.$t("\u0418\u043C\u044F"),
                      modelValue: unref(createForm).first_name,
                      "onUpdate:modelValue": ($event) => unref(createForm).first_name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "text",
                      label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
                      modelValue: unref(createForm).last_name,
                      "onUpdate:modelValue": ($event) => unref(createForm).last_name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "text",
                      label: _ctx.$t("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                      modelValue: unref(createForm).patronymic,
                      "onUpdate:modelValue": ($event) => unref(createForm).patronymic = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u0418\u043C\u044F"),
                          modelValue: unref(createForm).first_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).first_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
                          modelValue: unref(createForm).last_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).last_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                          modelValue: unref(createForm).patronymic,
                          "onUpdate:modelValue": ($event) => unref(createForm).patronymic = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "text",
                      label: "Email",
                      modelValue: unref(createForm).email,
                      "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "password",
                      label: _ctx.$t("\u041F\u0430\u0440\u043E\u043B\u044C"),
                      modelValue: unref(createForm).password,
                      "onUpdate:modelValue": ($event) => unref(createForm).password = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: "Email",
                          modelValue: unref(createForm).email,
                          "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "password",
                          label: _ctx.$t("\u041F\u0430\u0440\u043E\u043B\u044C"),
                          modelValue: unref(createForm).password,
                          "onUpdate:modelValue": ($event) => unref(createForm).password = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full flex flex-col"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"))}</p>`);
                    _push3(ssrRenderComponent(unref(VueDatePicker), {
                      modelValue: unref(createForm).date_of_birth,
                      "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event,
                      "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                      "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                      placeholder: "Start Typing ...",
                      "text-input": "",
                      class: "w-full max-lg:hidden rounded-lg p-2 dark:border-none mx-auto outline-semiCyan outline-1",
                      "auto-apply": "",
                      "multi-calendars-solo": ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<input type="date"${ssrRenderAttr("value", unref(createForm).date_of_birth)} class="max-lg:block border outline-semiCyan dark:outline-none outline-1 dark:border-none hidden p-4 dark:bg-gray-300 dark:text-black mb-4 rounded-lg"${_scopeId2}></div><div class="w-6/12 flex flex-col max-lg:w-full gap-y-1"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"))}</p>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      type: "tel",
                      class: "w-full rounded-lg p-2 outline-1",
                      id: "phone",
                      placeholder: "+998 (__) ___-__-__",
                      modelValue: unref(createForm).phone,
                      "onUpdate:modelValue": ($event) => unref(createForm).phone = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F")), 1),
                        createVNode(unref(VueDatePicker), {
                          modelValue: unref(createForm).date_of_birth,
                          "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event,
                          "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                          "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                          placeholder: "Start Typing ...",
                          "text-input": "",
                          class: "w-full max-lg:hidden rounded-lg p-2 dark:border-none mx-auto outline-semiCyan outline-1",
                          "auto-apply": "",
                          "multi-calendars-solo": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "cancel-text"]),
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event,
                          class: "max-lg:block border outline-semiCyan dark:outline-none outline-1 dark:border-none hidden p-4 dark:bg-gray-300 dark:text-black mb-4 rounded-lg"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(createForm).date_of_birth]
                        ])
                      ]),
                      createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full gap-y-1" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430")), 1),
                        createVNode(_sfc_main$a, {
                          type: "tel",
                          class: "w-full rounded-lg p-2 outline-1",
                          id: "phone",
                          placeholder: "+998 (__) ___-__-__",
                          modelValue: unref(createForm).phone,
                          "onUpdate:modelValue": ($event) => unref(createForm).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 flex flex-col max-lg:w-full"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0424\u043E\u0442\u043E"))}</p><label class="cursor-pointer hover:bg-semiCyan rounded-lg border-dashed border p-4 transition-all mt-2"${_scopeId2}><input type="file" name="file"${ssrRenderAttr("label", "\u0424\u043E\u0442\u043E")} class="dark:text-white cursor-pointer"${_scopeId2}></label></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0424\u043E\u0442\u043E")), 1),
                        createVNode("label", { class: "cursor-pointer hover:bg-semiCyan rounded-lg border-dashed border p-4 transition-all mt-2" }, [
                          createVNode("input", {
                            type: "file",
                            name: "file",
                            label: "\u0424\u043E\u0442\u043E",
                            class: "dark:text-white cursor-pointer",
                            onInput: ($event) => unref(createForm).photo = $event.target.files[0]
                          }, null, 40, ["onInput"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
                    if (!((_a = unref(userList)) == null ? void 0 : _a.get_position_list)) {
                      _push3(ssrRenderComponent(_sfc_main$a, {
                        type: "text",
                        name: "text",
                        label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
                        class: "dark:text-white cursor-pointer",
                        modelValue: unref(createForm).position,
                        "onUpdate:modelValue": ($event) => unref(createForm).position = $event
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<select type="text"${ssrRenderAttr("modelValue", unref(createForm).position)} class="w-full dark:bg-gray-300 rounded-lg p-2.5 mt-2 border dark:border-none outline-semiCyan outline-1 text-black"${_scopeId2}><!--[-->`);
                      ssrRenderList((_b = unref(userList)) == null ? void 0 : _b.get_position_list, (position) => {
                        _push3(`<option${ssrRenderAttr("value", position.name)}${_scopeId2}>${ssrInterpolate(position.name)}</option>`);
                      });
                      _push3(`<!--]--></select>`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1),
                        !((_c = unref(userList)) == null ? void 0 : _c.get_position_list) ? (openBlock(), createBlock(_sfc_main$a, {
                          key: 0,
                          type: "text",
                          name: "text",
                          label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
                          class: "dark:text-white cursor-pointer",
                          modelValue: unref(createForm).position,
                          "onUpdate:modelValue": ($event) => unref(createForm).position = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : withDirectives((openBlock(), createBlock("select", {
                          key: 1,
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).position = $event,
                          modelValue: unref(createForm).position,
                          class: "w-full dark:bg-gray-300 rounded-lg p-2.5 mt-2 border dark:border-none outline-semiCyan outline-1 text-black"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(userList)) == null ? void 0 : _d.get_position_list, (position) => {
                            return openBlock(), createBlock("option", {
                              value: position.name
                            }, toDisplayString(position.name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue", "modelValue"])), [
                          [vModelSelect, unref(createForm).position]
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(`<div class="w-full"${_scopeId2}>`);
                    if (unref(loadCurrentUser).user.role.name_en === "admin") {
                      _push3(`<p class="text-md dark:text-white tracking-widest mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
                    } else {
                      _push3(`<p class="text-md dark:text-white tracking-widest mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"))}</p>`);
                    }
                    if (((_a = unref(loadCurrentUser)) == null ? void 0 : _a.user.role.name_en) === "admin") {
                      _push3(`<select type="text" class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"${_scopeId2}><!--[-->`);
                      ssrRenderList((_c = (_b = unref(company)) == null ? void 0 : _b.get_all_company) == null ? void 0 : _c.results, (companyItem) => {
                        _push3(`<option class="text-black"${ssrRenderAttr("value", companyItem.id)}${_scopeId2}>${ssrInterpolate(companyItem.name)}</option>`);
                      });
                      _push3(`<!--]--></select>`);
                    } else if (unref(loadCurrentUser).user.role.name_en === "company_admin") {
                      _push3(`<div${_scopeId2}><p class="text-md dark:text-white tracking-widest mb-2"${_scopeId2}>${ssrInterpolate(unref(loadCurrentUser).user.company)}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    if (unref(loadCurrentUser).user.role.name_en === "company_admin") {
                      _push3(`<div class="w-full"${_scopeId2}><p class="text-md dark:text-white tracking-widest mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u0434\u0435\u043B"))}</p><select type="text" class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"${_scopeId2}><!--[-->`);
                      ssrRenderList((_d = unref(company)) == null ? void 0 : _d.get_all_department.results, (department) => {
                        _push3(`<option${ssrRenderAttr("value", department.id)}${_scopeId2}>${ssrInterpolate(department.name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "w-full" }, [
                        unref(loadCurrentUser).user.role.name_en === "admin" ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-md dark:text-white tracking-widest mb-2"
                        }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-md dark:text-white tracking-widest mb-2"
                        }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1)),
                        ((_e = unref(loadCurrentUser)) == null ? void 0 : _e.user.role.name_en) === "admin" ? withDirectives((openBlock(), createBlock("select", {
                          key: 2,
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).company_id = $event,
                          class: "w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_g = (_f = unref(company)) == null ? void 0 : _f.get_all_company) == null ? void 0 : _g.results, (companyItem) => {
                            return openBlock(), createBlock("option", {
                              class: "text-black",
                              value: companyItem.id
                            }, toDisplayString(companyItem.name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"])), [
                          [vModelSelect, unref(createForm).company_id]
                        ]) : unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", { key: 3 }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-widest mb-2" }, toDisplayString(unref(loadCurrentUser).user.company), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-widest mb-2" }, toDisplayString(_ctx.$t("\u041E\u0442\u0434\u0435\u043B")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).department_id = $event,
                          class: "w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_h = unref(company)) == null ? void 0 : _h.get_all_department.results, (department) => {
                            return openBlock(), createBlock("option", {
                              value: department.id
                            }, toDisplayString(department.name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).department_id]
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$8, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreateUser = false
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
                    _push3(ssrRenderComponent(_sfc_main$8, {
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
                      createVNode(_sfc_main$8, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateUser = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$8, {
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
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), 1)
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  enctype: "multipart/form-data",
                  onSubmit: withModifiers(($event) => {
                    var _a;
                    return ((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) === "admin" ? unref(userList).createAdmin(unref(createForm)) : unref(userList).createUser(unref(createForm));
                  }, ["prevent"])
                }, [
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u0418\u043C\u044F"),
                          modelValue: unref(createForm).first_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).first_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
                          modelValue: unref(createForm).last_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).last_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: _ctx.$t("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                          modelValue: unref(createForm).patronymic,
                          "onUpdate:modelValue": ($event) => unref(createForm).patronymic = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "text",
                          label: "Email",
                          modelValue: unref(createForm).email,
                          "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                        createVNode(_sfc_main$a, {
                          type: "password",
                          label: _ctx.$t("\u041F\u0430\u0440\u043E\u043B\u044C"),
                          modelValue: unref(createForm).password,
                          "onUpdate:modelValue": ($event) => unref(createForm).password = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F")), 1),
                        createVNode(unref(VueDatePicker), {
                          modelValue: unref(createForm).date_of_birth,
                          "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event,
                          "select-text": _ctx.$t("\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),
                          "cancel-text": _ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                          placeholder: "Start Typing ...",
                          "text-input": "",
                          class: "w-full max-lg:hidden rounded-lg p-2 dark:border-none mx-auto outline-semiCyan outline-1",
                          "auto-apply": "",
                          "multi-calendars-solo": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "cancel-text"]),
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event,
                          class: "max-lg:block border outline-semiCyan dark:outline-none outline-1 dark:border-none hidden p-4 dark:bg-gray-300 dark:text-black mb-4 rounded-lg"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(createForm).date_of_birth]
                        ])
                      ]),
                      createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full gap-y-1" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430")), 1),
                        createVNode(_sfc_main$a, {
                          type: "tel",
                          class: "w-full rounded-lg p-2 outline-1",
                          id: "phone",
                          placeholder: "+998 (__) ___-__-__",
                          modelValue: unref(createForm).phone,
                          "onUpdate:modelValue": ($event) => unref(createForm).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0424\u043E\u0442\u043E")), 1),
                        createVNode("label", { class: "cursor-pointer hover:bg-semiCyan rounded-lg border-dashed border p-4 transition-all mt-2" }, [
                          createVNode("input", {
                            type: "file",
                            name: "file",
                            label: "\u0424\u043E\u0442\u043E",
                            class: "dark:text-white cursor-pointer",
                            onInput: ($event) => unref(createForm).photo = $event.target.files[0]
                          }, null, 40, ["onInput"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1),
                          !((_a = unref(userList)) == null ? void 0 : _a.get_position_list) ? (openBlock(), createBlock(_sfc_main$a, {
                            key: 0,
                            type: "text",
                            name: "text",
                            label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
                            class: "dark:text-white cursor-pointer",
                            modelValue: unref(createForm).position,
                            "onUpdate:modelValue": ($event) => unref(createForm).position = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : withDirectives((openBlock(), createBlock("select", {
                            key: 1,
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).position = $event,
                            modelValue: unref(createForm).position,
                            class: "w-full dark:bg-gray-300 rounded-lg p-2.5 mt-2 border dark:border-none outline-semiCyan outline-1 text-black"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(userList)) == null ? void 0 : _b.get_position_list, (position) => {
                              return openBlock(), createBlock("option", {
                                value: position.name
                              }, toDisplayString(position.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue", "modelValue"])), [
                            [vModelSelect, unref(createForm).position]
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => {
                      var _a, _b, _c, _d;
                      return [
                        createVNode("div", { class: "w-full" }, [
                          unref(loadCurrentUser).user.role.name_en === "admin" ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-md dark:text-white tracking-widest mb-2"
                          }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-md dark:text-white tracking-widest mb-2"
                          }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1)),
                          ((_a = unref(loadCurrentUser)) == null ? void 0 : _a.user.role.name_en) === "admin" ? withDirectives((openBlock(), createBlock("select", {
                            key: 2,
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).company_id = $event,
                            class: "w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList((_c = (_b = unref(company)) == null ? void 0 : _b.get_all_company) == null ? void 0 : _c.results, (companyItem) => {
                              return openBlock(), createBlock("option", {
                                class: "text-black",
                                value: companyItem.id
                              }, toDisplayString(companyItem.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue"])), [
                            [vModelSelect, unref(createForm).company_id]
                          ]) : unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", { key: 3 }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-widest mb-2" }, toDisplayString(unref(loadCurrentUser).user.company), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full"
                        }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-widest mb-2" }, toDisplayString(_ctx.$t("\u041E\u0442\u0434\u0435\u043B")), 1),
                          withDirectives(createVNode("select", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).department_id = $event,
                            class: "w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(company)) == null ? void 0 : _d.get_all_department.results, (department) => {
                              return openBlock(), createBlock("option", {
                                value: department.id
                              }, toDisplayString(department.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).department_id]
                          ])
                        ])) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(UserContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$8, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateUser = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$8, {
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserCreate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserContentList",
  __ssrInlineRender: true,
  props: {
    userItem: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-2 flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/users/${__props.userItem.id}`,
        class: "transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-700 dark:hover:bg-gray-800 p-4 rounded-lg items-center max-md:flex max-md:w-full max-sm:flex-col max-sm:gap-y-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center max-md:w-4/12 gap-x-4 max-lg:mx-auto"${_scopeId}><img class="w-14 h-14 rounded-full"${ssrRenderAttr("src", __props.userItem.photo)} alt=""${_scopeId}><h2 class="tracking-widest font-bold break-words"${_scopeId}>${ssrInterpolate(__props.userItem.first_name + " " + __props.userItem.last_name)}</h2></div><div class="flex flex-col items-center justify-center my-2 max-md:w-4/12 mx-auto"${_scopeId}><div${_scopeId}>`);
            if (unref(loadCurrentUser).user.role_en === "admin") {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            } else {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"))}</p>`);
            }
            _push2(`</div><div class="text-center flex flex-col gap-y-2 tes-sm"${_scopeId}>`);
            if (unref(loadCurrentUser).user.role_en === "admin") {
              _push2(`<h2 class="tracking-widest text-sm text-gray-600"${_scopeId}>(${ssrInterpolate(__props.userItem.role)})</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="tracking-widest text-md"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</h2></div></div><div class="flex flex-col items-center text-center"${_scopeId}>`);
            if (["company_admin", "director", "vice_director"].includes(unref(loadCurrentUser).user.role_en)) {
              _push2(`<h2 class="tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"))}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p${_scopeId}>20.20.2025</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center max-md:w-4/12 gap-x-4 max-lg:mx-auto" }, [
                createVNode("img", {
                  class: "w-14 h-14 rounded-full",
                  src: __props.userItem.photo,
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("h2", { class: "tracking-widest font-bold break-words" }, toDisplayString(__props.userItem.first_name + " " + __props.userItem.last_name), 1)
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-center my-2 max-md:w-4/12 mx-auto" }, [
                createVNode("div", null, [
                  unref(loadCurrentUser).user.role_en === "admin" ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-lg font-bold tracking-widest mb-2"
                  }, toDisplayString(_ctx.$t("\u0420\u043E\u043B\u044C | \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1)) : (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-lg font-bold tracking-widest mb-2"
                  }, toDisplayString(_ctx.$t("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C")), 1))
                ]),
                createVNode("div", { class: "text-center flex flex-col gap-y-2 tes-sm" }, [
                  unref(loadCurrentUser).user.role_en === "admin" ? (openBlock(), createBlock("h2", {
                    key: 0,
                    class: "tracking-widest text-sm text-gray-600"
                  }, "(" + toDisplayString(__props.userItem.role) + ")", 1)) : createCommentVNode("", true),
                  createVNode("h2", { class: "tracking-widest text-md" }, toDisplayString(__props.userItem.position), 1)
                ])
              ]),
              createVNode("div", { class: "flex flex-col items-center text-center" }, [
                ["company_admin", "director", "vice_director"].includes(unref(loadCurrentUser).user.role_en) ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: "tracking-widest font-bold"
                }, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")), 1)) : createCommentVNode("", true),
                createVNode("p", null, "20.20.2025")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserContentList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UserContent",
  __ssrInlineRender: true,
  props: {
    userChecked: {
      type: String,
      default: "user-list"
    },
    showUserInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    const userList = useUserStore();
    ref("");
    const params = {
      page: 1,
      limit: 15,
      query: "",
      user_type: "user-list"
    };
    watchSyncEffect(() => {
      var _a, _b;
      if (((_a = loadCurrentUser.user.role) == null ? void 0 : _a.name_en) === "admin") {
        userList.loadAdminList({ page: params.page, limit: params.limit, query: params.query });
      } else if (((_b = loadCurrentUser.user.role) == null ? void 0 : _b.name_en) === "company_admin") {
        userList.loadUserList({
          page: params.page,
          limit: params.limit,
          query: params.query
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_UserCreate = __nuxt_component_0$1;
      const _component_UserContentList = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="${ssrRenderClass({ "flex flex-wrap items-center justify-between": ["company_admin", "admin"].includes((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) })}"><div class="mb-10 mt-12 text-lg flex gap-x-10">`);
      if (((_b = unref(loadCurrentUser).user.role) == null ? void 0 : _b.name_en) === "admin") {
        _push(`<p class="dark:text-white tracking-widest">${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
      } else {
        _push(`<p class="dark:text-white tracking-widest">${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
      }
      _push(`</div><div class="${ssrRenderClass({ "flex items-center justify-evenly my-10": ((_c = unref(loadCurrentUser).user.role) == null ? void 0 : _c.name_en) === "admin", "w-2/12 max-lg:w-4/12 max-sm:w-full max-sm:mb-6 max-sm:mx-auto": unref(loadCurrentUser).user.role_en !== "admin" })}">`);
      if (((_d = unref(loadCurrentUser)) == null ? void 0 : _d.user.role) === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430") {
        _push(`<div class="flex gap-x-10"><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.userChecked === "user-list" }, "p-2 rounded-xl dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("\u0412\u0441\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"))}</button><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.userChecked === "admin-list" }, "p-2 rounded-xl dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UserCreate, null, null, _parent));
      _push(`</div></div><div class="w-full"><div class="flex gap-x-10 max-lg:flex-wrap max-md:justify-center"><div class="flex w-9/12 justify-between max-lg:justify-center gap-x-10 items-center max-md:flex-wrap max-md:mt-10 max-md:justify-center">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "w-full",
        "model-value": params.query,
        "onUpdate:modelValue": ($event) => params.query = $event,
        onSearch: ($event) => unref(userList).loadUserList(params)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div></div><div class="flex max-md:flex-wrap justify-center max-md:mt-10"><div class="flex flex-wrap gap-x-6 max-md:order-2 max-lg:justify-center">`);
      if (((_e = unref(userList)) == null ? void 0 : _e.get_user_list.count) > 0) {
        _push(`<!--[-->`);
        ssrRenderList((_f = unref(userList)) == null ? void 0 : _f.get_user_list.results, (userItem) => {
          _push(ssrRenderComponent(_component_UserContentList, {
            "user-item": userItem,
            class: "max-md:w-full"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex flex-wrap justify-center gap-x-4 mt-10">`);
      if (unref(userList).get_user_list.count > 5) {
        _push(`<!--[-->`);
        ssrRenderList((_h = (_g = unref(userList)) == null ? void 0 : _g.get_user_list) == null ? void 0 : _h.links, (page, id) => {
          _push(`<div class="${ssrRenderClass([{ "bg-blue-400 text-white": page.active, "bg-gray-200 text-black": !page.active }, "px-4 py-2 rounded-full cursor-pointer"])}">${ssrInterpolate(page.label)}</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useSeoMeta({
      title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0434\u0430\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserContent = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="dark:text-gray-300 tracking-widest text-sm">${ssrInterpolate(_ctx.$t("\u0414\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0445\u0440\u0430\u043D\u0438\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445 \u0434\u0430\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B"))}</p><div>`);
      _push(ssrRenderComponent(_component_UserContent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B6YRPcpX.mjs.map
