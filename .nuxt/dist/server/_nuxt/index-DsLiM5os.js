import { mergeProps, useSSRContext, ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, Fragment, renderList, vModelSelect, withModifiers, defineComponent, watch, watchSyncEffect } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./TheButton-RleONNaZ.js";
import { _ as _sfc_main$8 } from "./TheInput-BfTT2E6G.js";
import { _ as _sfc_main$6 } from "./TheModal-DcnSgpbI.js";
import { _ as _sfc_main$7 } from "./TheTextContent-D3-WrEaf.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useUserStore } from "./users-BEPo3Qg_.js";
import { u as useCompanies } from "./companies-CKV0eUOy.js";
import { u as useAuthStore } from "./auth-BBm1bsU7.js";
import "@vuepic/vue-datepicker";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-CNB8XBKy.js";
import "hookable";
import { _ as _sfc_main$9 } from "./TheSearch-Dw2_cWOE.js";
import Paginate from "vuejs-paginate-next";
import { useRoute, useRouter } from "vue-router";
import { l as useSeoMeta } from "../server.mjs";
import "./axios-DrAfoKzV.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
import "#internal/nitro";
import "ofetch";
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
const _imports_0 = "" + __publicAssetsURL("icons/email.svg");
const _imports_1 = "" + __publicAssetsURL("icons/phone.svg");
const _imports_2 = "" + __publicAssetsURL("icons/password.svg");
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
    const previewUrl = ref(null);
    const createForm = ref({
      email: "",
      first_name: "",
      last_name: "",
      patronymic: "",
      password: "",
      phone: "",
      photo: "",
      position: "",
      head_user_id: "",
      date_of_birth: (/* @__PURE__ */ new Date()).toDateString(),
      company_id: Number(),
      department_id: Number(),
      department: {},
      role_id: Number(),
      permissions: {}
    });
    function loads() {
      userList.loadPositionList();
      userList.loadUserList();
      company.loadDepartmentList();
    }
    function createAdmin() {
      var _a;
      if ((_a = createForm.value.department) == null ? void 0 : _a.id) {
        createForm.value.department_id = createForm.value.department.id;
      }
      userList.createAdmin(createForm.value);
      createForm.value = {
        email: "",
        first_name: "",
        last_name: "",
        patronymic: "",
        password: "",
        phone: "",
        photo: "",
        position: "",
        head_user_id: "",
        date_of_birth: (/* @__PURE__ */ new Date()).toDateString(),
        company_id: Number(),
        department_id: Number(),
        department: {},
        role_id: Number(),
        permissions: {}
      };
    }
    function createUser() {
      var _a;
      if ((_a = createForm.value.department) == null ? void 0 : _a.id) {
        createForm.value.department_id = createForm.value.department.id;
      }
      userList.createUser(createForm.value);
      createForm.value = {
        email: "",
        first_name: "",
        last_name: "",
        patronymic: "",
        password: "",
        phone: "",
        photo: "",
        position: "",
        head_user_id: "",
        date_of_birth: (/* @__PURE__ */ new Date()).toDateString(),
        company_id: Number(),
        department_id: Number(),
        department: {},
        role_id: Number(),
        permissions: {}
      };
    }
    const showDropdown = ref(false);
    const filteredPositions = ref([]);
    const filterPositions = () => {
      if (!createForm.value.position) {
        filteredPositions.value = userList.get_position_list;
      } else {
        filteredPositions.value = userList.get_position_list.filter(
          (position) => position.name.toLowerCase().includes(createForm.value.position.toLowerCase())
        );
      }
      showDropdown.value = true;
    };
    const selectPosition = (name) => {
      createForm.value.position = name;
      showDropdown.value = false;
    };
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        createForm.value.photo = file;
        previewUrl.value = URL.createObjectURL(file);
      } else {
        createForm.value.photo = null;
        previewUrl.value = null;
      }
    }
    const hideDropdown = () => {
      setTimeout(() => {
        showDropdown.value = false;
      }, 200);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loadCurrentUser).current_user.permissions) {
        _push(ssrRenderComponent(_sfc_main$5, {
          class: "max-md:w-full w-full text-sm",
          type: "golden",
          onClick: ($event) => {
            var _a;
            __props.showCreateUser = true;
            loads();
            ((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) === "admin" ? unref(company).loadCompanyList({ page: 1, limit: 1e3, query: "" }) : "";
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` + ${ssrInterpolate(_ctx.$t("Создать пользователя"))}`);
            } else {
              return [
                createTextVNode(" + " + toDisplayString(_ctx.$t("Создать пользователя")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showCreateUser) {
        _push(ssrRenderComponent(_sfc_main$6, {
          onShowModal: ($event) => {
            __props.showCreateUser = !__props.showCreateUser;
            !__props.showCreateUser ? createForm.value = {} : createForm.value = {};
          },
          "show-create-user": __props.showCreateUser
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="p-6 !pb-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, { class: "!text-start font-bold !text-3xl" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Создание пользователя"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Создание пользователя")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form enctype="multipart/form-data"${_scopeId}><div class="grid grid-cols-2 gap-4 mt-8 pb-6 border-b mb-6"${_scopeId}><div class="w-full max-lg:w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "text",
                label: _ctx.$t("Имя"),
                modelValue: unref(createForm).first_name,
                "onUpdate:modelValue": ($event) => unref(createForm).first_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full max-lg:w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "text",
                label: _ctx.$t("Фамилия"),
                modelValue: unref(createForm).last_name,
                "onUpdate:modelValue": ($event) => unref(createForm).last_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full max-lg:w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "text",
                label: _ctx.$t("Отчество"),
                modelValue: unref(createForm).patronymic,
                "onUpdate:modelValue": ($event) => unref(createForm).patronymic = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full max-lg:w-full flex flex-col"${_scopeId}><p class="text-md font-medium dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("Дата рождения"))}</p>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "date",
                class: "w-full rounded-lg outline-1",
                id: "date",
                placeholder: "Выбрать",
                modelValue: unref(createForm).date_of_birth,
                "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="w-full"${_scopeId}><div class="text-md font-medium dark:text-white flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="email"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Почта"))}</p></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "text",
                modelValue: unref(createForm).email,
                "onUpdate:modelValue": ($event) => unref(createForm).email = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full flex flex-col"${_scopeId}><div class="text-md font-medium dark:text-white flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="phone"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Номер телефона"))}</p></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "tel",
                class: "w-full",
                id: "phone",
                placeholder: "+998 (__) ___-__-__",
                modelValue: unref(createForm).phone,
                "onUpdate:modelValue": ($event) => unref(createForm).phone = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-full"${_scopeId}><div class="text-md font-medium dark:text-white flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="password"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Пароль"))}</p></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                type: "password",
                modelValue: unref(createForm).password,
                "onUpdate:modelValue": ($event) => unref(createForm).password = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 flex flex-col max-lg:w-full"${_scopeId2}>`);
                    if (unref(previewUrl)) {
                      _push3(`<div class="mt-4"${_scopeId2}><img${ssrRenderAttr("src", unref(previewUrl))} alt="Превью" class="mx-auto w-32 h-32 object-cover rounded-lg shadow-icons"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-md font-medium dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("Фото"))}</p><label class="cursor-pointer bg-whiteSmoke hover:bg-gray-100 rounded-lg border-dashed border p-4 transition-all mt-2"${_scopeId2}><input type="file" name="file"${ssrRenderAttr("label", "Фото")} class="dark:text-white cursor-pointer"${_scopeId2}></label></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full" }, [
                        unref(previewUrl) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-4"
                        }, [
                          createVNode("img", {
                            src: unref(previewUrl),
                            alt: "Превью",
                            class: "mx-auto w-32 h-32 object-cover rounded-lg shadow-icons"
                          }, null, 8, ["src"])
                        ])) : createCommentVNode("", true),
                        createVNode("p", { class: "text-md font-medium dark:text-white" }, toDisplayString(_ctx.$t("Фото")), 1),
                        createVNode("label", { class: "cursor-pointer bg-whiteSmoke hover:bg-gray-100 rounded-lg border-dashed border p-4 transition-all mt-2" }, [
                          createVNode("input", {
                            type: "file",
                            name: "file",
                            label: "Фото",
                            class: "dark:text-white cursor-pointer",
                            onInput: handleImageUpload
                          }, null, 32)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full relative"${_scopeId2}><p class="text-md dark:text-white font-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("Должность"))}</p><input type="text"${ssrRenderAttr("value", unref(createForm).position)} class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"${_scopeId2}>`);
                    if (unref(showDropdown) && unref(filteredPositions).length) {
                      _push3(`<ul class="absolute z-10 bg-white dark:bg-gray-800 w-full rounded-lg mt-1 border border-gray-300 dark:border-gray-600 shadow-md max-h-40 overflow-y-auto"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(filteredPositions), (position) => {
                        _push3(`<li class="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"${_scopeId2}>${ssrInterpolate(position.name)}</li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full relative" }, [
                        createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Должность")), 1),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).position = $event,
                          class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1",
                          onFocus: ($event) => showDropdown.value = true,
                          onBlur: hideDropdown,
                          onInput: filterPositions
                        }, null, 40, ["onUpdate:modelValue", "onFocus"]), [
                          [vModelText, unref(createForm).position]
                        ]),
                        unref(showDropdown) && unref(filteredPositions).length ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: "absolute z-10 bg-white dark:bg-gray-800 w-full rounded-lg mt-1 border border-gray-300 dark:border-gray-600 shadow-md max-h-40 overflow-y-auto"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPositions), (position) => {
                            return openBlock(), createBlock("li", {
                              key: position.name,
                              onMousedown: ($event) => selectPosition(position.name),
                              class: "p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                            }, toDisplayString(position.name), 41, ["onMousedown"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    if (unref(loadCurrentUser).user.role.name_en === "company_admin") {
                      _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}><p class="text-md dark:text-white font-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("Отдел"))}</p><select type="text" class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"${_scopeId2}><!--[-->`);
                      ssrRenderList((_a2 = unref(company)) == null ? void 0 : _a2.get_all_department.results, (department) => {
                        _push3(`<option${ssrRenderAttr("value", department)}${_scopeId2}>${ssrInterpolate(department.name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-6/12 max-lg:w-full"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Отдел")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                          class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(company)) == null ? void 0 : _b2.get_all_department.results, (department) => {
                            return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).department]
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if ((_b = (_a = unref(createForm).department) == null ? void 0 : _a.participants) == null ? void 0 : _b.length) {
                _push2(ssrRenderComponent(UserContentCreateElems, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2;
                    if (_push3) {
                      _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}><p class="text-md dark:text-white font-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("Руководитель"))}</p>`);
                      if (!((_a2 = unref(userList)) == null ? void 0 : _a2.get_position_list)) {
                        _push3(ssrRenderComponent(_sfc_main$8, {
                          type: "text",
                          name: "text",
                          label: "Руководитель",
                          class: "dark:text-white cursor-pointer",
                          modelValue: unref(createForm).head_user_id,
                          "onUpdate:modelValue": ($event) => unref(createForm).head_user_id = $event
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<select class="dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(createForm).department.participants, (participant) => {
                        _push3(`<option${ssrRenderAttr("value", participant.id)}${_scopeId2}>${ssrInterpolate(participant.first_name)} ${ssrInterpolate(participant.last_name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                          createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Руководитель")), 1),
                          !((_b2 = unref(userList)) == null ? void 0 : _b2.get_position_list) ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 0,
                            type: "text",
                            name: "text",
                            label: "Руководитель",
                            class: "dark:text-white cursor-pointer",
                            modelValue: unref(createForm).head_user_id,
                            "onUpdate:modelValue": ($event) => unref(createForm).head_user_id = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(createForm).head_user_id = $event,
                            class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).department.participants, (participant) => {
                              return openBlock(), createBlock("option", {
                                key: participant.id,
                                value: participant.id
                              }, toDisplayString(participant.first_name) + " " + toDisplayString(participant.last_name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).head_user_id]
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(UserContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                      t: "button",
                      onClick: ($event) => __props.showCreateUser = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Отменить"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
                      t: "submit",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Создать"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                        t: "button",
                        onClick: ($event) => __props.showCreateUser = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$5, {
                        class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form></div>`);
            } else {
              return [
                createVNode("div", { class: "p-6 !pb-0" }, [
                  createVNode(_sfc_main$7, { class: "!text-start font-bold !text-3xl" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Создание пользователя")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    enctype: "multipart/form-data",
                    onSubmit: withModifiers(($event) => {
                      var _a2;
                      return ((_a2 = unref(loadCurrentUser).user.role) == null ? void 0 : _a2.name_en) === "admin" ? createAdmin() : createUser();
                    }, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mt-8 pb-6 border-b mb-6" }, [
                      createVNode("div", { class: "w-full max-lg:w-full" }, [
                        createVNode(_sfc_main$8, {
                          type: "text",
                          label: _ctx.$t("Имя"),
                          modelValue: unref(createForm).first_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).first_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full max-lg:w-full" }, [
                        createVNode(_sfc_main$8, {
                          type: "text",
                          label: _ctx.$t("Фамилия"),
                          modelValue: unref(createForm).last_name,
                          "onUpdate:modelValue": ($event) => unref(createForm).last_name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full max-lg:w-full" }, [
                        createVNode(_sfc_main$8, {
                          type: "text",
                          label: _ctx.$t("Отчество"),
                          modelValue: unref(createForm).patronymic,
                          "onUpdate:modelValue": ($event) => unref(createForm).patronymic = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full max-lg:w-full flex flex-col" }, [
                        createVNode("p", { class: "text-md font-medium dark:text-white" }, toDisplayString(_ctx.$t("Дата рождения")), 1),
                        createVNode(_sfc_main$8, {
                          type: "date",
                          class: "w-full rounded-lg outline-1",
                          id: "date",
                          placeholder: "Выбрать",
                          modelValue: unref(createForm).date_of_birth,
                          "onUpdate:modelValue": ($event) => unref(createForm).date_of_birth = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", { class: "text-md font-medium dark:text-white flex items-center gap-2" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "email"
                          }),
                          createVNode("p", null, toDisplayString(_ctx.$t("Почта")), 1)
                        ]),
                        createVNode(_sfc_main$8, {
                          type: "text",
                          modelValue: unref(createForm).email,
                          "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full flex flex-col" }, [
                        createVNode("div", { class: "text-md font-medium dark:text-white flex items-center gap-2" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "phone"
                          }),
                          createVNode("p", null, toDisplayString(_ctx.$t("Номер телефона")), 1)
                        ]),
                        createVNode(_sfc_main$8, {
                          type: "tel",
                          class: "w-full",
                          id: "phone",
                          placeholder: "+998 (__) ___-__-__",
                          modelValue: unref(createForm).phone,
                          "onUpdate:modelValue": ($event) => unref(createForm).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", { class: "text-md font-medium dark:text-white flex items-center gap-2" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "password"
                          }),
                          createVNode("p", null, toDisplayString(_ctx.$t("Пароль")), 1)
                        ]),
                        createVNode(_sfc_main$8, {
                          type: "password",
                          modelValue: unref(createForm).password,
                          "onUpdate:modelValue": ($event) => unref(createForm).password = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(UserContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-6/12 flex flex-col max-lg:w-full" }, [
                          unref(previewUrl) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4"
                          }, [
                            createVNode("img", {
                              src: unref(previewUrl),
                              alt: "Превью",
                              class: "mx-auto w-32 h-32 object-cover rounded-lg shadow-icons"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true),
                          createVNode("p", { class: "text-md font-medium dark:text-white" }, toDisplayString(_ctx.$t("Фото")), 1),
                          createVNode("label", { class: "cursor-pointer bg-whiteSmoke hover:bg-gray-100 rounded-lg border-dashed border p-4 transition-all mt-2" }, [
                            createVNode("input", {
                              type: "file",
                              name: "file",
                              label: "Фото",
                              class: "dark:text-white cursor-pointer",
                              onInput: handleImageUpload
                            }, null, 32)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(UserContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-6/12 max-lg:w-full relative" }, [
                          createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Должность")), 1),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).position = $event,
                            class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1",
                            onFocus: ($event) => showDropdown.value = true,
                            onBlur: hideDropdown,
                            onInput: filterPositions
                          }, null, 40, ["onUpdate:modelValue", "onFocus"]), [
                            [vModelText, unref(createForm).position]
                          ]),
                          unref(showDropdown) && unref(filteredPositions).length ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "absolute z-10 bg-white dark:bg-gray-800 w-full rounded-lg mt-1 border border-gray-300 dark:border-gray-600 shadow-md max-h-40 overflow-y-auto"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPositions), (position) => {
                              return openBlock(), createBlock("li", {
                                key: position.name,
                                onMousedown: ($event) => selectPosition(position.name),
                                class: "p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                              }, toDisplayString(position.name), 41, ["onMousedown"]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(UserContentCreateElems, null, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          unref(loadCurrentUser).user.role.name_en === "company_admin" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-6/12 max-lg:w-full"
                          }, [
                            createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Отдел")), 1),
                            withDirectives(createVNode("select", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                              class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(company)) == null ? void 0 : _a2.get_all_department.results, (department) => {
                                return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(createForm).department]
                            ])
                          ])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    ((_d = (_c = unref(createForm).department) == null ? void 0 : _c.participants) == null ? void 0 : _d.length) ? (openBlock(), createBlock(UserContentCreateElems, { key: 0 }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", { class: "w-6/12 max-lg:w-full" }, [
                            createVNode("p", { class: "text-md dark:text-white font-medium" }, toDisplayString(_ctx.$t("Руководитель")), 1),
                            !((_a2 = unref(userList)) == null ? void 0 : _a2.get_position_list) ? (openBlock(), createBlock(_sfc_main$8, {
                              key: 0,
                              type: "text",
                              name: "text",
                              label: "Руководитель",
                              class: "dark:text-white cursor-pointer",
                              modelValue: unref(createForm).head_user_id,
                              "onUpdate:modelValue": ($event) => unref(createForm).head_user_id = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(createForm).head_user_id = $event,
                              class: "dark:text-white w-full dark:bg-gray-300 bg-whiteSmoke rounded-full p-2 dark:border-none text-black border focus:outline-golden mt-2 outline-1"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).department.participants, (participant) => {
                                return openBlock(), createBlock("option", {
                                  key: participant.id,
                                  value: participant.id
                                }, toDisplayString(participant.first_name) + " " + toDisplayString(participant.last_name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(createForm).head_user_id]
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(UserContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!bg-gray-200 gap-3 py-2 !bg-porcelain !border transition-all ease-in-out duration-300",
                          t: "button",
                          onClick: ($event) => __props.showCreateUser = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_sfc_main$5, {
                          class: "w-4/12 rounded-full flex items-center justify-center !text-black hover:!shadow-golden gap-3 py-2 !bg-golden !border transition-all ease-in-out duration-300",
                          t: "submit",
                          type: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                          ]),
                          _: 1
                        })
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
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/base/users/${__props.userItem.id}`,
        class: "transition-all bg-white shadow-cards hover:shadow-hoverCards border border-white hover:border-golden dark:border-none dark:shadow-none dark:bg-gray-700 dark:hover:bg-gray-800 py-6 px-5 rounded-3xl items-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-x-2 pb-4 border-b"${_scopeId}><div class="flex items-center justify-center rounded-md px-1 w-[33px] h-[33px] shadow-md"${_scopeId}><img class="w-[22px] h-[22px] rounded-full"${ssrRenderAttr("src", __props.userItem.photo)} alt="logo"${_scopeId}></div><h2 class="font-bold text-sm break-words"${_scopeId}>${ssrInterpolate(__props.userItem.first_name + " " + __props.userItem.last_name)}</h2></div><div class="mt-4 flex flex-col gap-2"${_scopeId}>`);
            if (unref(loadCurrentUser).user.role_en === "admin") {
              _push2(`<div class="flex items-start justify-between gap-10 min-h-10"${_scopeId}><p class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Роль | Должность"))}: </p><p class="text-mediumGray text-right"${_scopeId}> (${ssrInterpolate(__props.userItem.role)}) </p></div>`);
            } else {
              _push2(`<div class="flex items-start justify-between gap-10 min-h-10"${_scopeId}><p class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Должность"))}: </p><p class="text-mediumGray text-right"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</p></div>`);
            }
            _push2(`</div><div class="flex items-center justify-between gap-10 mt-2"${_scopeId}><p class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Дата регистрации"))}: </p><p class="text-mediumGray"${_scopeId}>${ssrInterpolate(new Date(__props.userItem.created_at).toLocaleString().slice(0, 10))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-x-2 pb-4 border-b" }, [
                createVNode("div", { class: "flex items-center justify-center rounded-md px-1 w-[33px] h-[33px] shadow-md" }, [
                  createVNode("img", {
                    class: "w-[22px] h-[22px] rounded-full",
                    src: __props.userItem.photo,
                    alt: "logo"
                  }, null, 8, ["src"])
                ]),
                createVNode("h2", { class: "font-bold text-sm break-words" }, toDisplayString(__props.userItem.first_name + " " + __props.userItem.last_name), 1)
              ]),
              createVNode("div", { class: "mt-4 flex flex-col gap-2" }, [
                unref(loadCurrentUser).user.role_en === "admin" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-start justify-between gap-10 min-h-10"
                }, [
                  createVNode("p", { class: "font-bold" }, toDisplayString(_ctx.$t("Роль | Должность")) + ": ", 1),
                  createVNode("p", { class: "text-mediumGray text-right" }, " (" + toDisplayString(__props.userItem.role) + ") ", 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex items-start justify-between gap-10 min-h-10"
                }, [
                  createVNode("p", { class: "font-bold" }, toDisplayString(_ctx.$t("Должность")) + ": ", 1),
                  createVNode("p", { class: "text-mediumGray text-right" }, toDisplayString(__props.userItem.position), 1)
                ]))
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-10 mt-2" }, [
                createVNode("p", { class: "font-bold" }, toDisplayString(_ctx.$t("Дата регистрации")) + ": ", 1),
                createVNode("p", { class: "text-mediumGray" }, toDisplayString(new Date(__props.userItem.created_at).toLocaleString().slice(0, 10)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
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
    const route = useRoute();
    const router = useRouter();
    const page = ref(Number(route.query.page) || 1);
    const limit = ref(Number(route.query.limit) || 10);
    const pageCount = ref(0);
    const limitItems = ref([5, 10, 20, 30, 50]);
    const params = {
      page: 1,
      limit: 10,
      query: ref(""),
      user_type: "user-list"
    };
    const clickCallback = (pageNum) => {
      page.value = pageNum;
      updateQueryParams();
    };
    const searchByName = () => {
      page.value = 1;
      updateQueryParams();
    };
    const updateQueryParams = () => {
      router.push({
        query: {
          page: page.value,
          limit: limit.value,
          itemName: params.query.value || void 0
        }
      });
    };
    watch(() => route.query, (newQuery) => {
      page.value = Number(newQuery.page) || 1;
      limit.value = Number(newQuery.limit) || 10;
      params.query.value = newQuery.itemName || "";
      userList.loadUserList({ page: page.value, limit: limit.value, query: params.query.value });
    });
    watch(() => userList.user, (newValue) => {
      pageCount.value = Math.ceil(userList.user.count / limit.value);
    });
    watchSyncEffect(() => {
      var _a, _b;
      if (((_a = loadCurrentUser.user.role) == null ? void 0 : _a.name_en) === "admin") {
        userList.loadAdminList({ page: params.page, limit: params.limit, query: params.query.value });
      } else if (((_b = loadCurrentUser.user.role) == null ? void 0 : _b.name_en) === "company_admin") {
        userList.loadUserList({
          page: params.page,
          limit: params.limit,
          query: params.query.value
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_UserCreate = __nuxt_component_0$1;
      const _component_UserContentList = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="${ssrRenderClass([{ "flex items-center justify-between": ["company_admin", "admin"].includes((_a = unref(loadCurrentUser).user.role) == null ? void 0 : _a.name_en) }, "flex items-center justify-between gap-10 max-[768px]:flex-col max-[768px]:items-start"])}"><div class="text-lg flex gap-x-10">`);
      if (((_b = unref(loadCurrentUser).user.role) == null ? void 0 : _b.name_en) === "admin") {
        _push(`<p class="dark:text-white text-3xl font-bold">${ssrInterpolate(_ctx.$t("Список администраторов компании"))}</p>`);
      } else {
        _push(`<p class="dark:text-white text-3xl font-bold">${ssrInterpolate(_ctx.$t("Список всех пользователей компании"))}</p>`);
      }
      _push(`</div><div class="${ssrRenderClass({ "flex items-center justify-evenly": ((_c = unref(loadCurrentUser).user.role) == null ? void 0 : _c.name_en) === "admin", "w-2/12 max-lg:w-4/12 max-sm:w-full max-sm:mb-6 max-sm:mx-auto": unref(loadCurrentUser).user.role_en !== "admin" })}">`);
      if (((_d = unref(loadCurrentUser)) == null ? void 0 : _d.user.role) === "Администратор сайта") {
        _push(`<div class="flex gap-x-10"><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.userChecked === "user-list" }, "p-2 rounded-xl dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("Все пользователи"))}</button><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.userChecked === "admin-list" }, "p-2 rounded-xl dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("Администраторы компаний"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UserCreate, null, null, _parent));
      _push(`</div></div><div class="w-full mt-4 max-[636px]:mt-0"><div class="flex items-center justify-between max-[636px]:flex-col gap-x-10 max-lg:flex-wrap max-md:justify-center"><p class="text-mediumGray w-5/12 max-[636px]:w-full">${ssrInterpolate(_ctx.$t("Данная страница хранит информацию о пользователях данной платформы"))}</p><div class="w-5/12 max-[636px]:w-full max-[636px]:mt-5 flex items-center gap-3 h-10">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        class: "w-full",
        "model-value": params.query,
        "onUpdate:modelValue": ($event) => params.query = $event,
        onSearch: searchByName
      }, null, _parent));
      _push(`</div></div><div class="mt-8 grid grid-cols-4 max-[1350px]:grid-cols-2 max-[636px]:grid-cols-1 gap-5 max-md:mt-10">`);
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
      _push(`</div>`);
      if (!((_i = (_h = (_g = unref(userList)) == null ? void 0 : _g.get_user_list) == null ? void 0 : _h.results) == null ? void 0 : _i.length)) {
        _push(`<div><p class="text-center">${ssrInterpolate(_ctx.$t("По вашему запросу никого не найдено."))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full flex items-center justify-end border-t gap-4 pr-10 pb-5 pt-5 max-md:pr-3 max-md:flex-col max-md:items-end">`);
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
      _push(`<div class="flex items-center gap-3"><p>Строк на странице:</p><select class="w-fit p-2.5 rounded-md border bg-white dark:bg-bgWhite text-black"><!--[-->`);
      ssrRenderList(unref(limitItems), (item) => {
        _push(`<option${ssrRenderAttr("value", item)}>${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div></div></div>`);
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
      title: "Пользователи",
      description: "Список пользователей данной платформы"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserContent = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UserContent, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DsLiM5os.js.map
