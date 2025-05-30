import { i as defineStore, a as useRouter, l as useSeoMeta, x as useMouse, y as useWindowScroll } from './server.mjs';
import { useSSRContext, defineComponent, watch, mergeProps, ref, watchEffect, onUpdated, unref, isRef, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withModifiers, withDirectives, vModelText, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './ContextMenu-nHXVbC_w.mjs';
import { v as viewSelect, u as uploadFile, _ as __nuxt_component_2 } from './SelectMenu-B7jAIDgV.mjs';
import { _ as __nuxt_component_3 } from './Icon-jARSlWRz.mjs';
import { a as axios, n as nuxtStorage } from '../_/nuxt-storage.mjs';
import { toast } from 'vue3-toastify';
import { u as useAuthStore } from './auth-DQm4aBcD.mjs';
import { useRouter as useRouter$1 } from 'vue-router';
import { _ as _sfc_main$9 } from './TheTextContent-D3-WrEaf.mjs';
import { _ as _sfc_main$8 } from './TheModal-ew6BiXDI.mjs';
import { _ as _sfc_main$a } from './TheInput-BhoKAMvc.mjs';
import { _ as _sfc_main$b } from './TheButton-DHlwvJQT.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { T as TheContentBlock } from './TheContentBlock-CceRERsm.mjs';
import { u as useCompanies } from './companies-BCJ1LT8i.mjs';
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
import './selectMenu-BN_nbNrV.mjs';
import '@tanstack/vue-virtual';
import './Icon-0volylWR.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
import 'axios';

const useCloudStore = defineStore("cloud", {
  state: () => ({
    bin: {
      folders: [],
      files: []
    },
    folder: {
      name: "",
      parent_id: "",
      updated_at: "",
      id: null,
      folders: {
        id: "",
        name: ""
      },
      files: {
        file_url: "",
        name: "",
        updated_at: ""
      }
    },
    moveObject: {},
    showObjectElem: false,
    showAccessSetting: false,
    hasFileInBin: false,
    file: "",
    src: "",
    fileSizeInfo: false,
    fileReadInfo: false,
    fileChecked: false,
    fileUpload: null
  }),
  getters: {
    get_hasFileInBin: (state) => state.hasFileInBin,
    get_all_folders(folder) {
      return this.folder;
    },
    get_folder(folder) {
      return this.folder;
    },
    get_bin(folder) {
      return this.bin;
    },
    get_all_files(files) {
      return this.folder.files;
    }
  },
  actions: {
    async loadAllFolders() {
      await axios.get(`file-manager/folder/main-folder`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
      });
    },
    async loadFolder(params) {
      await axios.get(`file-manager/folder/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
      });
    },
    async loadFiles(params) {
      await axios.get(`file-manager/files/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.folder.files = res.data;
      });
    },
    async loadhasFileInBin() {
      await axios.get(`file-manager/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        if (response.data.folders.length > 0 || response.data.files.length > 0) {
          this.hasFileInBin = true;
        } else {
          this.hasFileInBin = false;
        }
      });
    },
    async loadBin(params) {
      await axios.get(`file-manager/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.bin = response.data;
        this.folder = this.bin;
      });
    },
    async moveToBin(params) {
      await axios.delete(`file-manager/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", { theme: "auto", autoClose: 1500 });
        this.hasFileInBin = true;
        if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        } else if (!this.folder.parent_id) {
          this.loadAllFolders();
        }
      });
    },
    async moveFromBin(params) {
      await axios.delete(`file-manager/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D", { theme: "auto", autoClose: 1500 });
        this.hasFileInBin = true;
        this.folder = res.data;
        this.loadBin({ bin: this.bin });
      });
    },
    async deleteInBin(params) {
      await axios.delete(`file-manager/bin/delete?${params.delete_type}=${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1500 });
        this.folder = res.data;
        this.loadBin({ bin: this.bin });
      });
    },
    async delete(params) {
      await axios.delete(`file-manager/folder-file/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1500 });
        this.folder = res.data;
        this.loadBin({ bin: this.bin });
      });
    },
    async create_folder(params) {
      await axios.post(`file-manager/folder/create`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
        this.loadAllFolders();
      });
    },
    async update_folder(params) {
      await axios.patch(`file-manager/folder/update/${params.folder_id}`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        if (!this.folder.parent_id) {
          this.loadAllFolders();
        } else if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        }
        toast.success("\u041F\u0430\u043F\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430", { autoClose: 1500, theme: "auto" });
      });
    },
    async update_file(params) {
      await axios.patch(`file-manager/file/update/${params.file_id}`, {
        name: params.name,
        folder_id: params.folder_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        if (!this.folder.parent_id) {
          this.loadAllFolders();
        } else if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        }
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0451\u043D", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFoldersItem",
  __ssrInlineRender: true,
  props: {
    folderLink: {
      type: String,
      default: ""
    },
    activeFolder: {
      type: String,
      default: ""
    },
    changeView: {
      type: String,
      default: "list"
    },
    typeElem: {
      type: String,
      default: ""
    },
    contextMenu: {
      type: Number,
      default: null
    },
    showRead: {
      type: Boolean,
      default: false
    },
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex relative cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white", { "flex-col": __props.changeView === "tile" }]
      }, _attrs))}><div class="${ssrRenderClass([{ "flex-col": __props.changeView === "tile" }, "flex items-center gap-x-6"])}"><div>`);
      ssrRenderSlot(_ctx.$slots, "folderSvg", {}, null, _push, _parent);
      _push(`</div><div class="">`);
      ssrRenderSlot(_ctx.$slots, "folderName", {
        class: { "text-base": __props.changeView === "tile" }
      }, null, _push, _parent);
      _push(`</div></div><div class="${ssrRenderClass([{ "hidden": __props.changeView === "tile" }, "flex justify-evenly gap-x-10 items-center"])}"><p>`);
      ssrRenderSlot(_ctx.$slots, "folderDate", {}, null, _push, _parent);
      _push(`</p><p>`);
      ssrRenderSlot(_ctx.$slots, "folderMemory", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFoldersItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFilesItem",
  __ssrInlineRender: true,
  props: {
    folderLink: {
      type: String,
      default: ""
    },
    changeView: {
      type: String,
      default: "list"
    },
    typeElem: {
      type: String,
      default: ""
    },
    contextMenu: {
      type: Number,
      default: null
    },
    showRead: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        draggable: __props.typeElem === "file",
        class: ["flex relative transition-all duration-200 cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white", { "flex-col": __props.changeView === "tile" }]
      }, _attrs))}><div class="${ssrRenderClass([{ "flex-col": __props.changeView === "tile" }, "flex items-center gap-x-6"])}"><div>`);
      ssrRenderSlot(_ctx.$slots, "fileSvg", {}, null, _push, _parent);
      _push(`</div><div>`);
      ssrRenderSlot(_ctx.$slots, "fileName", {
        class: { "text-base": __props.changeView === "tile" }
      }, null, _push, _parent);
      _push(`</div></div><div class="${ssrRenderClass([{ "hidden": __props.changeView === "tile" }, "flex justify-evenly gap-x-10 items-center"])}"><p>`);
      ssrRenderSlot(_ctx.$slots, "fileDate", {}, null, _push, _parent);
      _push(`</p><p>`);
      ssrRenderSlot(_ctx.$slots, "fileMemory", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFilesItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIContextMenuItem",
  __ssrInlineRender: true,
  props: {
    menuType: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.menuType === "uploadCloudFiles") {
        _push(`<label${ssrRenderAttrs(mergeProps({
          for: "uploadCloudFiles",
          class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
        }, _attrs))}><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><span>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</span><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></label>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, _attrs))}><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><p>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</p><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIContextMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFolders",
  __ssrInlineRender: true,
  props: {
    createShow: {
      type: Boolean,
      default: false
    },
    showRead: {
      type: Boolean,
      default: false
    },
    folderObject: {
      type: Object,
      default: () => {
      }
    },
    elemObject: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const currentUser = useAuthStore();
    useRouter$1();
    const cloudStore = useCloudStore();
    cloudStore.loadAllFolders();
    const accessControl = {
      text: "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430",
      autoClose: 1e3,
      theme: "auto"
    };
    const activeElem = ref({ id: 0, type: "" });
    const cart = ref(true);
    const createFolder = ref({
      name: ""
    });
    const props = __props;
    const selected = ref(viewSelect[0]);
    const { x, y } = useMouse();
    const { y: windowY } = useWindowScroll();
    const folderSettingShow = ref(false);
    const fileSettingShow = ref(false);
    const cloudSettingShow = ref(false);
    const folderVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    const fileVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    const cloudVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    ref({ getBoundingClientRect: () => ({}) });
    watchEffect(() => {
      props.createShow ? cloudSettingShow.value = false : cloudSettingShow.value;
      props.createShow ? fileSettingShow.value = false : fileSettingShow.value;
      props.showRead ? folderSettingShow.value = false : folderSettingShow.value;
      props.showRead ? fileSettingShow.value = false : fileSettingShow.value;
    });
    onUpdated(() => {
      cloudStore.loadhasFileInBin();
    });
    const startDrag = (event, elem) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("elemID", elem.id);
      event.dataTransfer.setData("elemName", elem.name);
      activeElem.value.id = elem.id;
    };
    const onDrop = (event, elem) => {
      const elemID = event.dataTransfer.getData("elemID");
      const elemName = event.dataTransfer.getData("elemName");
      if (activeElem.value.type === "folder" && activeElem.value.id !== elem.id) {
        cloudStore == null ? void 0 : cloudStore.update_folder({ folder_id: elemID, parent_id: elem.id, name: elemName });
      } else if (activeElem.value.type === "file") {
        cloudStore == null ? void 0 : cloudStore.update_file({ folder_id: elem.id, name: elemName, file_id: elemID });
      } else {
        toast.info("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F, \u043D\u0435 \u043F\u044B\u0442\u0430\u0439\u0441\u044F!", { theme: "auto", autoClose: 1e3 });
      }
      event.target.classList.remove("dragged-over");
    };
    const onDropCart = (event, elem) => {
      console.log(elem);
      const elemID = event.dataTransfer.getData("elemID");
      event.dataTransfer.getData("elemName");
      if (activeElem.value.type === "folder") {
        cloudStore == null ? void 0 : cloudStore.moveToBin({ elem_type: "folder_id", elem_id: elemID });
      } else if (activeElem.value.type === "file") {
        cloudStore == null ? void 0 : cloudStore.moveToBin({ elem_type: "file_id", elem_id: elemID });
      }
      event.target.classList.remove("dragged-over");
    };
    function dragOver(event) {
      event.target.classList.add("dragged-over");
      event.preventDefault();
    }
    function dragEnter(event) {
      event.target.classList.add("dragged-enter");
      event.preventDefault();
    }
    function dragLeave(event) {
      event.target.classList.remove("dragged-over");
      event.target.classList.remove("dragged-enter");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_UContextMenu = __nuxt_component_0;
      const _component_USelectMenu = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-a042928c><div class="absolute w-full h-full z-0 left-0 top-0" data-v-a042928c></div>`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        class: "",
        modelValue: unref(cloudSettingShow),
        "onUpdate:modelValue": ($event) => isRef(cloudSettingShow) ? cloudSettingShow.value = $event : null,
        "virtual-element": unref(cloudVirtualElem)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              onClick: ($event) => __props.createShow = true,
              class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-a042928c${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      "data-v-965c8b16": "",
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              onClick: () => {
              },
              "menu-type": "uploadCloudFiles"
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-a042928c${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B")), 1)
                  ];
                }
              }),
              ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input id="uploadCloudFiles" class="hidden" type="file" multiple data-v-a042928c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", {
                      onClick: ($event) => cloudSettingShow.value = false,
                      onChange: ($event) => unref(uploadFile)($event.target.files[0], unref(cloudStore)),
                      onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value),
                      id: "uploadCloudFiles",
                      class: "hidden",
                      type: "file",
                      multiple: ""
                    }, null, 40, ["onClick", "onChange", "onInput"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                onClick: ($event) => __props.createShow = true,
                class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    "data-v-965c8b16": "",
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M12 11L12 16",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M14.5 13.5L9.5 13.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                      "stroke-width": "2"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
                onClick: () => {
                },
                "menu-type": "uploadCloudFiles"
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createVNode("span", null, toDisplayString(_ctx.$t("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B")), 1)
                ]),
                ContextMenuContent: withCtx(() => [
                  createVNode("input", {
                    onClick: ($event) => cloudSettingShow.value = false,
                    onChange: ($event) => unref(uploadFile)($event.target.files[0], unref(cloudStore)),
                    onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value),
                    id: "uploadCloudFiles",
                    class: "hidden",
                    type: "file",
                    multiple: ""
                  }, null, 40, ["onClick", "onChange", "onInput"])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-10 w-full h-full" data-v-a042928c><div class="flex max-[500px]:flex-col justify-between items-center" data-v-a042928c><h2 class="text-lg dark:text-white tracking-widest mb-6" data-v-a042928c>${ssrInterpolate(_ctx.$t("\u0424\u0430\u0439\u043B\u044B \u0438 \u043F\u0430\u043F\u043A\u0438"))}</h2><div data-v-a042928c>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        options: unref(viewSelect)
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(selected).icon,
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(selected).label)}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: unref(selected).icon,
                class: "w-4 h-4"
              }, null, 8, ["name"]),
              createTextVNode(" " + toDisplayString(unref(selected).label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(cloudStore).showObjectElem && ((_a = __props.elemObject) == null ? void 0 : _a.id) !== ((_b = unref(cloudStore).get_all_folders) == null ? void 0 : _b.id)) {
        _push(`<div class="relative z-[20] w-7/12 flex justify-center mx-auto px-4 py-3 h-[50px] border rounded-lg text-center" data-v-a042928c><p class="tracking-widest w-full" data-v-a042928c>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435") + ": " + ((_c = __props.elemObject) == null ? void 0 : _c.name))}</p><div class="flex gap-x-10" data-v-a042928c><button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full" data-v-a042928c>${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}</button><button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full" data-v-a042928c>${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C"))}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative flex items-center max-md:justify-center max-md:mt-6 gap-x-2 overflow-hidden" data-v-a042928c><button data-v-a042928c><span class="text-sm tracking-widest" data-v-a042928c>${ssrInterpolate(_ctx.$t("\u0413\u043B\u0430\u0432\u043D\u0430\u044F"))}</span></button>`);
      if (unref(cloudStore).get_folder.parent_id !== null) {
        _push(`<div data-v-a042928c><svg class="dark:fill-gray-400 fill-black" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-inspector="pages/base/chat/[id].vue:25:11" data-v-a042928c><path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" data-v-inspector="pages/base/chat/[id].vue:25:140" data-v-a042928c></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cloudStore).get_folder.parent_id !== null) {
        _push(`<button class="flex items-center" data-v-a042928c><span class="text-sm tracking-widest" data-v-a042928c>${ssrInterpolate(unref(cloudStore).folder.name)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "flex-col flex w-full ": unref(selected).type === "list", "flex-wrap max-[400px]:flex-col max-[400px]:items-center ": unref(selected).type === "tile" }, "flex mt-4 gap-x-2 gap-y-3 max-md:justify-center select-none pr-2 mb-20"])}" data-v-a042928c><!--[-->`);
      ssrRenderList((_d = unref(cloudStore)) == null ? void 0 : _d.get_folder.folders, (folders, i) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass({ "w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12": unref(selected).type === "tile" })}" data-v-a042928c><div class="${ssrRenderClass([{ "w-full": unref(selected).type === "list" }, "relative"])}" data-v-a042928c>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          onDrop: ($event) => onDrop($event, folders),
          onDragover: dragOver,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          draggable: !((_a2 = unref(currentUser).user.permissions) == null ? void 0 : _a2.find((e) => e.name_en === "folder.create")) || !((_b2 = unref(cloudStore).get_folder) == null ? void 0 : _b2.active) ? false : true,
          onDragstart: ($event) => {
            startDrag($event, folders);
            unref(activeElem).type = "folder";
          },
          class: ["w-full transition-all rounded-full duration-200", { "dark:bg-gray-700 bg-gray-200": ((_c2 = unref(activeElem)) == null ? void 0 : _c2.id) === (folders == null ? void 0 : folders.id), "hover:dark:bg-gray-700 hover:bg-gray-100": ((_d2 = unref(activeElem)) == null ? void 0 : _d2.id) === (folders == null ? void 0 : folders.id), "relative": unref(selected).type === "tile" }],
          onDblclick: ($event) => !__props.showRead ? unref(cloudStore).loadFolder({ id: folders == null ? void 0 : folders.id }) : __props.showRead,
          "change-view": unref(selected).type,
          onContextmenu: async () => {
            var _a3;
            const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
            const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
            unref(folderVirtualElem).getBoundingClientRect = () => ({
              width: 0,
              height: 0,
              top,
              left
            });
            unref(activeElem).id = folders == null ? void 0 : folders.id;
            unref(activeElem).type = "folder";
            __props.folderObject = { ...folders };
            unref(folderSettingShow) ? cloudSettingShow.value = false : cloudSettingShow.value = false;
            unref(folderSettingShow) ? fileSettingShow.value = false : fileSettingShow.value = false;
            __props.showRead = false;
            if ((_a3 = unref(currentUser).user.permissions) == null ? void 0 : _a3.find((e) => e.name_en === "folder.create")) {
              folderSettingShow.value = true;
            } else {
              unref(toast).info(`${accessControl.text}`, { ...accessControl });
              folderSettingShow.value = false;
            }
          },
          onClick: ($event) => {
            var _a3;
            unref(activeElem).id = folders == null ? void 0 : folders.id;
            unref(activeElem).type = "folder";
            unref(activeElem).id === ((_a3 = __props.folderObject) == null ? void 0 : _a3.id) ? __props.showRead = true : __props.showRead = false;
            __props.showRead && __props.folderObject ? __props.folderObject = {} : __props.folderObject;
          }
        }, {
          folderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-a042928c${_scopeId}><svg class="${ssrRenderClass([{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, "icon"])}" width="50px" height="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId}><path d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333   38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFA000" data-v-a042928c${_scopeId}></path><path d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFCA28" data-v-a042928c${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: [{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, "icon"],
                    width: "50px",
                    height: "50px",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333   38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z",
                      fill: "#FFA000"
                    }),
                    createVNode("path", {
                      d: "M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z",
                      fill: "#FFCA28"
                    })
                  ], 2))
                ])
              ];
            }
          }),
          folderName: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3, _c3, _d3;
            if (_push2) {
              if (((_a3 = __props.folderObject) == null ? void 0 : _a3.id) === (folders == null ? void 0 : folders.id) && __props.showRead) {
                _push2(`<form class="flex items-center" data-v-a042928c${_scopeId}><input class="${ssrRenderClass([{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"])}" type="text"${ssrRenderAttr("value", unref(createFolder).name)}${ssrRenderAttr("placeholder", __props.folderObject.name)} data-v-a042928c${_scopeId}><button type="submit" class="${ssrRenderClass({ "absolute top-2 left-2": unref(selected).type === "tile" })}" data-v-a042928c${_scopeId}><svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" data-v-a042928c${_scopeId}><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5" data-v-a042928c${_scopeId}></path><path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId}></path></svg></button></form>`);
              } else {
                _push2(`<div data-v-a042928c${_scopeId}>${ssrInterpolate(((_b3 = folders.name) == null ? void 0 : _b3.length) > 20 ? folders.name.slice(0, 30) + "..." : folders.name)}</div>`);
              }
            } else {
              return [
                ((_c3 = __props.folderObject) == null ? void 0 : _c3.id) === (folders == null ? void 0 : folders.id) && __props.showRead ? (openBlock(), createBlock("form", {
                  key: 0,
                  onClick: withModifiers(() => {
                  }, ["stop"]),
                  onSubmit: withModifiers(($event) => {
                    var _a4;
                    unref(cloudStore).update_folder({ folder_id: (_a4 = __props.folderObject) == null ? void 0 : _a4.id, name: unref(createFolder).name, parent_id: folders.id });
                    __props.showRead = false;
                    unref(createFolder).name = "";
                  }, ["prevent"]),
                  class: "flex items-center"
                }, [
                  withDirectives(createVNode("input", {
                    ref_for: true,
                    ref: "target",
                    class: [{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"],
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(createFolder).name = $event,
                    placeholder: __props.folderObject.name
                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(createFolder).name]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: { "absolute top-2 left-2": unref(selected).type === "tile" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-green-500",
                      width: "30px",
                      height: "30px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
                        "stroke-width": "1.5"
                      }),
                      createVNode("path", {
                        d: "M8.5 12.5L10.5 14.5L15.5 9.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ], 2)
                ], 40, ["onClick", "onSubmit"])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(((_d3 = folders.name) == null ? void 0 : _d3.length) > 20 ? folders.name.slice(0, 30) + "..." : folders.name), 1))
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(selected).type === "tile" && unref(activeElem).id === (folders == null ? void 0 : folders.id)) {
          _push(`<div class="absolute top-2 right-2" data-v-a042928c><svg class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UContextMenu, {
          modelValue: unref(folderSettingShow),
          "onUpdate:modelValue": ($event) => isRef(folderSettingShow) ? folderSettingShow.value = $event : null,
          "virtual-element": unref(folderVirtualElem)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (folders.active === true) {
                _push2(`<div class="relative z-[100]" data-v-a042928c${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    __props.showRead = true;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, null, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    __props.elemObject = { ...__props.folderObject, type: "folder" };
                    unref(cloudStore).showObjectElem = true;
                    fileSettingShow.value = false;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10" stroke-width="1.5" stroke-linecap="round" data-v-a042928c${_scopeId2}></path><path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => unref(cloudStore).moveToBin({ elem_type: "folder_id", elem_id: __props.folderObject.id })
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => unref(cloudStore).showAccessSetting = true
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (folders.active === false) {
                _push2(`<div class="relative z-[100]" data-v-a042928c${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    unref(cloudStore).moveFromBin({ elem_type: "folder_id", elem_id: __props.folderObject.id });
                  },
                  class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    unref(cloudStore).deleteInBin({ delete_type: "folder_id", id: unref(activeElem).id });
                  },
                  class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                folders.active === true ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      __props.showRead = true;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, null, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      __props.elemObject = { ...__props.folderObject, type: "folder" };
                      unref(cloudStore).showObjectElem = true;
                      fileSettingShow.value = false;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => unref(cloudStore).moveToBin({ elem_type: "folder_id", elem_id: __props.folderObject.id })
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => unref(cloudStore).showAccessSetting = true
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                folders.active === false ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$5, { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      unref(cloudStore).moveFromBin({ elem_type: "folder_id", elem_id: __props.folderObject.id });
                    },
                    class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      unref(cloudStore).deleteInBin({ delete_type: "folder_id", id: unref(activeElem).id });
                    },
                    class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList((_e = unref(cloudStore)) == null ? void 0 : _e.get_all_files, (file) => {
        var _a2, _b2;
        _push(`<div class="${ssrRenderClass({ "w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12": unref(selected).type === "tile" })}" data-v-a042928c><div class="${ssrRenderClass([{ "w-full": unref(selected).type === "list" }, "relative"])}" data-v-a042928c>`);
        _push(ssrRenderComponent(_sfc_main$6, {
          onDragstart: ($event) => {
            startDrag($event, file);
            unref(activeElem).type = "file";
          },
          draggable: !((_a2 = unref(currentUser).user.permissions) == null ? void 0 : _a2.find((e) => e.name_en === "folder.create")) || !((_b2 = unref(cloudStore).get_folder) == null ? void 0 : _b2.active) ? false : true,
          "change-view": unref(selected).type,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          onContextmenu: () => {
            var _a3;
            const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
            const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
            unref(fileVirtualElem).getBoundingClientRect = () => ({
              width: 0,
              height: 0,
              top,
              left
            });
            __props.folderObject = { ...file };
            unref(activeElem).id = file.id;
            unref(activeElem).type = "file";
            fileSettingShow.value = true;
            unref(fileSettingShow) ? cloudSettingShow.value = false : cloudSettingShow.value = false;
            unref(fileSettingShow) ? folderSettingShow.value = false : folderSettingShow.value = false;
            __props.showRead = false;
            if ((_a3 = unref(currentUser).user.permissions) == null ? void 0 : _a3.find((e) => e.name_en === "folder.create")) {
              fileSettingShow.value = true;
            } else {
              unref(toast).info(`${accessControl.text}`, { ...accessControl });
              fileSettingShow.value = false;
            }
          },
          onClick: ($event) => {
            unref(activeElem).id = file == null ? void 0 : file.id;
            unref(activeElem).type = "file";
          },
          class: { "dark:bg-gray-700 bg-gray-200": unref(activeElem).id === (file == null ? void 0 : file.id), "hover:dark:bg-gray-700 hover:bg-gray-100": unref(activeElem).id === (file == null ? void 0 : file.id), "relative": unref(selected).type === "tile" }
        }, {
          fileSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass({ "w-[100px] h-[100px]": unref(selected).type === "tile" })}" width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve" data-v-a042928c${_scopeId}><g data-v-a042928c${_scopeId}><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z" data-v-a042928c${_scopeId}></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z" data-v-a042928c${_scopeId}></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z" data-v-a042928c${_scopeId}></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                      C42.2,42.8,41.9,43.1,41.5,43.1z" data-v-a042928c${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: { "w-[100px] h-[100px]": unref(selected).type === "tile" },
                  width: "50px",
                  height: "50px",
                  viewBox: "0 0 56 64",
                  "enable-background": "new 0 0 56 64",
                  "xml:space": "preserve"
                }, [
                  createVNode("g", null, [
                    createVNode("path", {
                      fill: "#8C181A",
                      d: "M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"
                    }),
                    createVNode("path", {
                      fill: "#6B0D12",
                      d: "M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"
                    }),
                    createVNode("path", {
                      opacity: "0.5",
                      fill: "#FFFFFF",
                      "enable-background": "new",
                      d: "M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"
                    })
                  ]),
                  createVNode("path", {
                    fill: "#FFFFFF",
                    d: "M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7\n                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z\n                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1\n                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7\n                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7\n                      C42.2,42.8,41.9,43.1,41.5,43.1z"
                  })
                ], 2))
              ];
            }
          }),
          fileName: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            if (_push2) {
              if (((_a3 = __props.folderObject) == null ? void 0 : _a3.id) === (file == null ? void 0 : file.id) && __props.showRead) {
                _push2(`<form class="flex items-center" data-v-a042928c${_scopeId}><input class="${ssrRenderClass([{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"])}" type="text"${ssrRenderAttr("value", unref(createFolder).name)}${ssrRenderAttr("placeholder", __props.folderObject.name)} data-v-a042928c${_scopeId}><button type="submit" class="${ssrRenderClass({ "absolute top-2 left-2": unref(selected).type === "tile" })}" data-v-a042928c${_scopeId}><svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" data-v-a042928c${_scopeId}><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5" data-v-a042928c${_scopeId}></path><path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId}></path></svg></button></form>`);
              } else {
                _push2(`<div data-v-a042928c${_scopeId}>${ssrInterpolate(file.name)}</div>`);
              }
            } else {
              return [
                ((_b3 = __props.folderObject) == null ? void 0 : _b3.id) === (file == null ? void 0 : file.id) && __props.showRead ? (openBlock(), createBlock("form", {
                  key: 0,
                  onClick: withModifiers(() => {
                  }, ["stop"]),
                  onSubmit: withModifiers(($event) => {
                    var _a4, _b4;
                    unref(cloudStore).update_file({ file_id: (_a4 = __props.folderObject) == null ? void 0 : _a4.id, name: unref(createFolder).name, folder_id: (_b4 = _ctx.folder) == null ? void 0 : _b4.id });
                    __props.showRead = false;
                    unref(createFolder).name = "";
                  }, ["prevent"]),
                  class: "flex items-center"
                }, [
                  withDirectives(createVNode("input", {
                    ref_for: true,
                    ref: "target",
                    class: [{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"],
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(createFolder).name = $event,
                    placeholder: __props.folderObject.name
                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(createFolder).name]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: { "absolute top-2 left-2": unref(selected).type === "tile" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-green-500",
                      width: "30px",
                      height: "30px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
                        "stroke-width": "1.5"
                      }),
                      createVNode("path", {
                        d: "M8.5 12.5L10.5 14.5L15.5 9.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ], 2)
                ], 40, ["onClick", "onSubmit"])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(file.name), 1))
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(selected).type === "tile" && unref(activeElem).id === (file == null ? void 0 : file.id)) {
          _push(`<div class="absolute top-2 right-2" data-v-a042928c><svg class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UContextMenu, {
          modelValue: unref(fileSettingShow),
          "onUpdate:modelValue": ($event) => isRef(fileSettingShow) ? fileSettingShow.value = $event : null,
          "virtual-element": unref(fileVirtualElem)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (file.active === true) {
                _push2(`<div class="relative z-[100]" data-v-a042928c${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    __props.showRead = true;
                    _ctx.email.focus();
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    unref(cloudStore).moveToBin({ elem_type: "file_id", elem_id: file.id });
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    __props.elemObject = { ...file, type: "file" };
                    unref(cloudStore).showObjectElem = true;
                    fileSettingShow.value = false;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10" stroke-width="1.5" stroke-linecap="round" data-v-a042928c${_scopeId2}></path><path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => unref(cloudStore).showAccessSetting = true
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (file.active === false) {
                _push2(`<div class="relative z-[100]" data-v-a042928c${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, null, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => unref(cloudStore).moveFromBin({ elem_type: "file_id", elem_id: file.id })
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  onClick: ($event) => {
                    unref(cloudStore).deleteInBin({ delete_type: "file_id", id: unref(activeElem).id });
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a042928c${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                file.active === true ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      __props.showRead = true;
                      _ctx.email.focus();
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      unref(cloudStore).moveToBin({ elem_type: "file_id", elem_id: file.id });
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      __props.elemObject = { ...file, type: "file" };
                      unref(cloudStore).showObjectElem = true;
                      fileSettingShow.value = false;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => unref(cloudStore).showAccessSetting = true
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                file.active === false ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$5, null, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => unref(cloudStore).moveFromBin({ elem_type: "file_id", elem_id: file.id })
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$5, {
                    onClick: ($event) => {
                      unref(cloudStore).deleteInBin({ delete_type: "file_id", id: unref(activeElem).id });
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(cart)) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onDrop: ($event) => onDropCart($event, _ctx.folders),
          onDragover: dragOver,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          "type-elem": "cart",
          "change-view": unref(selected).type,
          class: ["", { "w-full": unref(selected).type === "list", "w-2/12 max-[1300px]:w-4/12 max-md:w-5/12": unref(selected).type === "tile" }],
          onDblclick: ($event) => {
            var _a2;
            unref(cloudStore).loadBin({ bin: (_a2 = unref(cloudStore)) == null ? void 0 : _a2.get_bin });
            cart.value = false;
          }
        }, {
          folderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(cloudStore).get_hasFileInBin || unref(cloudStore).get_bin.files.length > 0 || unref(cloudStore).get_bin.folders.length > 0) {
                _push2(`<svg class="" class="${ssrRenderClass([{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, ""])}" width="50px" height="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId}><path d="M512 454.4L270.933333 213.333333 554.666667 36.266667 817.066667 213.333333z" fill="#FFA000" data-v-a042928c${_scopeId}></path><path d="M512 454.4L270.933333 213.333333 362.666667 100.266667 817.066667 213.333333z" fill="#FFCA28" data-v-a042928c${_scopeId}></path><path d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z" fill="#3fb1c9" data-v-a042928c${_scopeId}></path><path d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z" fill="#0077B6" data-v-a042928c${_scopeId}></path></svg>`);
              } else {
                _push2(`<svg class="${ssrRenderClass({ "w-[100px] h-[100px]": unref(selected).type == "tile", "w-[50px] h-[50px]": unref(selected).type == "list" })}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-a042928c${_scopeId}><path d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z" fill="#3fb1c9" data-v-a042928c${_scopeId}></path><path d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z" fill="#0077B6" data-v-a042928c${_scopeId}></path></svg>`);
              }
            } else {
              return [
                unref(cloudStore).get_hasFileInBin || unref(cloudStore).get_bin.files.length > 0 || unref(cloudStore).get_bin.folders.length > 0 ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: ["", { "w-[100px] h-[100px]": unref(selected).type === "tile" }],
                  width: "50px",
                  height: "50px",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M512 454.4L270.933333 213.333333 554.666667 36.266667 817.066667 213.333333z",
                    fill: "#FFA000"
                  }),
                  createVNode("path", {
                    d: "M512 454.4L270.933333 213.333333 362.666667 100.266667 817.066667 213.333333z",
                    fill: "#FFCA28"
                  }),
                  createVNode("path", {
                    d: "M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z",
                    fill: "#3fb1c9"
                  }),
                  createVNode("path", {
                    d: "M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z",
                    fill: "#0077B6"
                  })
                ], 2)) : (openBlock(), createBlock("svg", {
                  key: 1,
                  class: { "w-[100px] h-[100px]": unref(selected).type == "tile", "w-[50px] h-[50px]": unref(selected).type == "list" },
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z",
                    fill: "#3fb1c9"
                  }),
                  createVNode("path", {
                    d: "M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z",
                    fill: "#0077B6"
                  })
                ], 2))
              ];
            }
          }),
          folderName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(cloudStore).showAccessSetting) {
        _push(ssrRenderComponent(_sfc_main$8, {
          onShowModal: unref(cloudStore).showAccessSetting
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.createShow) {
        _push(ssrRenderComponent(_sfc_main$8, {
          onShowModal: ($event) => __props.createShow = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$9, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div data-v-a042928c${_scopeId}><form data-v-a042928c${_scopeId}><h3 data-v-a042928c${_scopeId}>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</h3>`);
              _push2(ssrRenderComponent(_sfc_main$a, {
                type: "text",
                modelValue: unref(createFolder).name,
                "onUpdate:modelValue": ($event) => unref(createFolder).name = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex justify-center gap-x-10 mt-10" data-v-a042928c${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, {
                class: "px-10 py-2 rounded-full",
                t: "submit",
                type: "danger",
                onClick: ($event) => __props.createShow = false
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
                class: "px-10 py-2 rounded-full",
                t: "submit",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form></div>`);
            } else {
              return [
                createVNode(_sfc_main$9, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      unref(cloudStore).create_folder({ parent_id: unref(activeElem).id, name: unref(createFolder).name });
                      __props.createShow = false;
                    }, ["prevent"])
                  }, [
                    createVNode("h3", null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                    createVNode(_sfc_main$a, {
                      type: "text",
                      modelValue: unref(createFolder).name,
                      "onUpdate:modelValue": ($event) => unref(createFolder).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                      createVNode(_sfc_main$b, {
                        class: "px-10 py-2 rounded-full",
                        t: "submit",
                        type: "danger",
                        onClick: ($event) => __props.createShow = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$b, {
                        class: "px-10 py-2 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ])
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
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFolders.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheCloudUIFolders = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a042928c"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIStructureFolder",
  __ssrInlineRender: true,
  props: {
    showFolder: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "p-2 flex items-center gap-x-4 hover:bg-gray-700 transition-all duration-200 cursor-pointer rounded-lg"
      }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "structureSvg", {}, null, _push, _parent);
      _push(`</div><p class="tracking-widest text-sm">`);
      ssrRenderSlot(_ctx.$slots, "structureName", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/CloudUIStructure/TheCloudUIStructureFolder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUiStructure",
  __ssrInlineRender: true,
  props: {
    showFolder: {
      type: Array,
      default: () => []
    },
    showCreateFolder: {
      type: Boolean,
      default: false
    },
    activeStructure: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useMouse();
    useWindowScroll();
    const isOpen = ref(false);
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    const loadCloud = useCloudStore();
    const createFolderForm = ref({
      name: "",
      parent_id: loadCloud.folder.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["max-[840px]:hidden h-full", { "max-[840px]:!block": __props.activeStructure === true }]
      }, _attrs))} data-v-e8efd8d7>`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="" data-v-e8efd8d7${_scopeId}><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-e8efd8d7${_scopeId}><div data-v-e8efd8d7${_scopeId}><svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path></svg></div><p data-v-e8efd8d7${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-e8efd8d7${_scopeId}><div data-v-e8efd8d7${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-e8efd8d7${_scopeId}></path></svg></div><p data-v-e8efd8d7${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-e8efd8d7${_scopeId}><div data-v-e8efd8d7${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path></svg></div><p data-v-e8efd8d7${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M10 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M14 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M4 7H20",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, {
        class: ["max-[840px]:rounded-r-none h-full", { "max-[840px]:shadow-none max-[840px]:border-r-0": !__props.activeStructure }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e8efd8d7${_scopeId}><div class="${ssrRenderClass([{ "max-[840px]:hidden": __props.activeStructure === false }, "absolute bg-gray-300 rounded-l-lg px-2 hidden max-[840px]:block right-0 top-0"])}" data-v-e8efd8d7${_scopeId}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId}><path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path></svg></div></div><div class="${ssrRenderClass([{ "max-[840px]:hidden": !__props.activeStructure }, "flex cursor-pointer dark:hover:bg-gray-500 p-2 transition-all duration-200 items-center gap-x-4 my-4 justify-center mx-auto"])}" data-v-e8efd8d7${_scopeId}><div data-v-e8efd8d7${_scopeId}><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId}><path d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId}></path><path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-e8efd8d7${_scopeId}></path></svg></div><p class="tracking-widest dark:text-white" data-v-e8efd8d7${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"))}</p></div>`);
            if (__props.showCreateFolder) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                onShowModal: ($event) => __props.showCreateFolder = !__props.showCreateFolder
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$9, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<form data-v-e8efd8d7${_scopeId2}><div class="flex items-center justify-center gap-x-10 my-10" data-v-e8efd8d7${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      class: "w-6/12",
                      label: _ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createFolderForm).name,
                      "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="w-6/12 flex flex-col gap-y-2" data-v-e8efd8d7${_scopeId2}><p class="tracking-widest dark:text-white" data-v-e8efd8d7${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438"))}</p><select class="w-full p-2.5 rounded-md dark:bg-gray-300" data-v-e8efd8d7${_scopeId2}><option value="" data-v-e8efd8d7${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"))}</option></select></div></div><div class="flex justify-center gap-x-10" data-v-e8efd8d7${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$b, {
                      class: "py-2 px-6 rounded-full",
                      type: "danger",
                      onClick: ($event) => __props.showCreateFolder = false
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
                    _push3(`</div></form>`);
                  } else {
                    return [
                      createVNode(_sfc_main$9, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => unref(loadCloud).create_folder(unref(createFolderForm)), ["prevent"])
                      }, [
                        createVNode("div", { class: "flex items-center justify-center gap-x-10 my-10" }, [
                          createVNode(_sfc_main$a, {
                            class: "w-6/12",
                            label: _ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                            modelValue: unref(createFolderForm).name,
                            "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "w-6/12 flex flex-col gap-y-2" }, [
                            createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1),
                            createVNode("select", { class: "w-full p-2.5 rounded-md dark:bg-gray-300" }, [
                              createVNode("option", { value: "" }, toDisplayString(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435")), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-center gap-x-10" }, [
                          createVNode(_sfc_main$b, {
                            class: "py-2 px-6 rounded-full",
                            type: "danger",
                            onClick: ($event) => __props.showCreateFolder = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_sfc_main$b, {
                            class: "py-2 px-6 rounded-full",
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass({ "max-[840px]:hidden": !__props.activeStructure })}" data-v-e8efd8d7${_scopeId}><div data-v-e8efd8d7${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              structureName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 `);
                } else {
                  return [
                    createTextVNode(" \u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 ")
                  ];
                }
              }),
              structureSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId2}><path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              structureName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 `);
                } else {
                  return [
                    createTextVNode(" \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 ")
                  ];
                }
              }),
              structureSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8efd8d7${_scopeId2}><path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e8efd8d7${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => this.$emit("activeStructures")
              }, [
                createVNode("div", {
                  class: ["absolute bg-gray-300 rounded-l-lg px-2 hidden max-[840px]:block right-0 top-0", { "max-[840px]:hidden": __props.activeStructure === false }]
                }, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951",
                      stroke: "#000000",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ], 2)
              ], 8, ["onClick"]),
              createVNode("div", {
                class: [{ "max-[840px]:hidden": !__props.activeStructure }, "flex cursor-pointer dark:hover:bg-gray-500 p-2 transition-all duration-200 items-center gap-x-4 my-4 justify-center mx-auto"],
                onClick: ($event) => __props.showCreateFolder = true
              }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 11L12 16",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M14.5 13.5L9.5 13.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                      "stroke-width": "2"
                    })
                  ]))
                ]),
                createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
              ], 10, ["onClick"]),
              __props.showCreateFolder ? (openBlock(), createBlock(_sfc_main$8, {
                key: 0,
                onShowModal: ($event) => __props.showCreateFolder = !__props.showCreateFolder
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => unref(loadCloud).create_folder(unref(createFolderForm)), ["prevent"])
                  }, [
                    createVNode("div", { class: "flex items-center justify-center gap-x-10 my-10" }, [
                      createVNode(_sfc_main$a, {
                        class: "w-6/12",
                        label: _ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                        modelValue: unref(createFolderForm).name,
                        "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "w-6/12 flex flex-col gap-y-2" }, [
                        createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), 1),
                        createVNode("select", { class: "w-full p-2.5 rounded-md dark:bg-gray-300" }, [
                          createVNode("option", { value: "" }, toDisplayString(_ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center gap-x-10" }, [
                      createVNode(_sfc_main$b, {
                        class: "py-2 px-6 rounded-full",
                        type: "danger",
                        onClick: ($event) => __props.showCreateFolder = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$b, {
                        class: "py-2 px-6 rounded-full",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true),
              createVNode("div", {
                class: { "max-[840px]:hidden": !__props.activeStructure }
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$3, null, {
                    structureName: withCtx(() => [
                      createTextVNode(" \u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 ")
                    ]),
                    structureSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$3, null, {
                    structureName: withCtx(() => [
                      createTextVNode(" \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 ")
                    ]),
                    structureSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    _: 1
                  })
                ])
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/CloudUIStructure/TheCloudUiStructure.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheCloudUiStructure = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e8efd8d7"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CloudContent",
  __ssrInlineRender: true,
  props: {
    activeStructure: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full gap-x-10 h-full relative" }, _attrs))}><div class="${ssrRenderClass([{ "!hidden": !__props.activeStructure }, "absolute top-0 right-0 w-full bg-black bg-opacity-40 rounded-lg z-[22] hidden max-[840px]:block"])}"></div><div class="${ssrRenderClass([{ "max-[425px]:w-full": __props.activeStructure }, "flex flex-col h-full max-[840px]:absolute max-[840px]:z-40 max-[840px]:dark:bg-gray-600 max-[840px]:bg-white gap-y-10 !z-[23]"])}">`);
      _push(ssrRenderComponent(TheCloudUiStructure, {
        "active-structure": __props.activeStructure,
        onActiveStructures: ($event) => __props.activeStructure = !__props.activeStructure
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "max-[840px]:!block": !__props.activeStructure }, "hidden"])}"><div class="cursor-pointer absolute top-8 max-[840px]:top-6 left-5 !z-0 dark:fill-white fill-black"><svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path></svg></div></div></div>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-full overflow-x-hidden relative p-10 max-[500px]:p-2 rounded-lg z-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0430\u0439\u043B\u043E\u0432"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0430\u0439\u043B\u043E\u0432")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TheCloudUIFolders, { class: "z-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0430\u0439\u043B\u043E\u0432")), 1)
                ]),
                _: 1
              }),
              createVNode(TheCloudUIFolders, { class: "z-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContextMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"${_scopeId}><div${_scopeId}><svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2"${_scopeId}></path></svg></div><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"${_scopeId}><div${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      "data-v-965c8b16": "",
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M10 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M14 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M4 7H20",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0423\u0431\u0440\u0430\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), 1)
                ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "file_manager");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    useSeoMeta({
      title: "\u0424\u0430\u0439\u043B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
      description: "\u0424\u0430\u0439\u043B\u043E\u0432\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0444\u0430\u0439\u043B\u0430\u043C\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/cloud/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUkZXl4Y.mjs.map
