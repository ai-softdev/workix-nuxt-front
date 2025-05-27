import { _ as __nuxt_component_0 } from "./nuxt-link-CNB8XBKy.js";
import { _ as _sfc_main$5 } from "./TheButton-DHlwvJQT.js";
import { defineComponent, ref, watch, withCtx, createTextVNode, toDisplayString, createVNode, unref, isRef, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "./TheTextContent-Bd9flYOl.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-CyXOlUWJ.js";
import Paginate from "vuejs-paginate-next";
import { u as useSales } from "./sales-B0ny6huI.js";
import { T as ThePreloader } from "./ThePreloader-CANyVwVn.js";
import { u as useCompanies } from "./companies-BCJ1LT8i.js";
import { u as useAuthStore } from "./auth-DQm4aBcD.js";
import { _ as _sfc_main$4 } from "./TheInput-BhoKAMvc.js";
import { _ as _sfc_main$3 } from "./TheModal-DtMcuqX0.js";
import "../server.mjs";
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
import "./axios-DrAfoKzV.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "" + __publicAssetsURL("icons/table-arrow.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loadAuthStore = useAuthStore();
    const company = useCompanies();
    const route = useRoute();
    const router = useRouter();
    const sales = useSales();
    const showFiltersModal = ref(false);
    const page = ref(Number(route.query.page) || 1);
    const limit = ref(Number(route.query.limit) || 5);
    const itemName = ref(route.query.itemName || "");
    const min_price = ref(Number(route.query.min_price) || "");
    const max_price = ref(Number(route.query.max_price) || "");
    const min_count = ref(Number(route.query.min_count) || "");
    const max_count = ref(Number(route.query.max_count) || "");
    const limitItems = ref([5, 10, 20, 30, 50]);
    const orderBy = ref([]);
    const orderString = ref("");
    const updateQueryParams = () => {
      router.push({
        query: {
          page: page.value,
          limit: limit.value,
          itemName: itemName.value || void 0,
          min_price: min_price.value || "",
          max_price: max_price.value || "",
          min_count: min_count.value || "",
          max_count: max_count.value || "",
          order_by: orderString.value || ""
        }
      });
    };
    const clickCallback = (pageNum) => {
      page.value = pageNum;
      updateQueryParams();
    };
    const openFiltersModal = () => {
      showFiltersModal.value = !showFiltersModal.value;
    };
    const pageCount = ref(0);
    const getSortDirection = (field) => {
      if (orderBy.value.includes(field))
        return "rotate-0";
      if (orderBy.value.includes(`-${field}`))
        return "rotate-180";
      return "rotate-180";
    };
    const downloadFile = () => {
      sales.loadSalesListFile();
    };
    watch(orderBy.value, (newVal) => {
      orderString.value = newVal.join(",");
    });
    watch(() => sales.sales, (newValue) => {
      pageCount.value = Math.ceil(sales.sales.count / limit.value);
    });
    watch(() => route.query, (newQuery) => {
      page.value = Number(newQuery.page) || 1;
      limit.value = Number(newQuery.limit) || 5;
      itemName.value = newQuery.itemName || "";
      sales.loadSalesList({ page: page.value, limit: limit.value, name: itemName.value, min_price: min_price.value, max_price: max_price.value, min_count: min_count.value, max_count: max_count.value, order_by: orderString.value });
    });
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
      let permission = (_a = company.company.modules) == null ? void 0 : _a.find((item) => item.name_en === "sales");
      if (!permission) {
        if ((void 0).history.length > 1) {
          router.push("/base/profile");
        } else {
          router.push("/");
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UITheButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Страница продаж"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница продаж")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="flex items-center gap-x-4 max-md:mt-10 max-md:flex-col max-md:items-start max-md:gap-y-4"><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Профиль"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Профиль")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Продажи"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Продажи")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/base/sales/item-create",
        class: "ml-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UITheButton, { class: "border p-3 rounded-lg !text-black dark:!text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Добавить товар `);
                } else {
                  return [
                    createTextVNode(" Добавить товар ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UITheButton, { class: "border p-3 rounded-lg !text-black dark:!text-white" }, {
                default: withCtx(() => [
                  createTextVNode(" Добавить товар ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: downloadFile,
        class: "border p-3 rounded-lg !text-black dark:!text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Экспортировать в файл `);
          } else {
            return [
              createTextVNode(" Экспортировать в файл ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-fit sales-up-table rounded-lg border mt-10 overflow-hidden"><div class="p-4 flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UITheButton, {
        onClick: openFiltersModal,
        class: "border p-3 rounded-lg !text-black dark:!text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Фильтры `);
          } else {
            return [
              createTextVNode(" Фильтры ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-4/12 max-md:w-full relative flex items-center"><div class="absolute rotate-90 ml-2"><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><input${ssrRenderAttr("value", unref(itemName))} type="text" class="w-full rounded-lg dark:bg-gray-500 outline-none pl-10 h-[50px]" placeholder="Найти товар..."></div></div><div class="w-full sales-table">`);
      if ((_b = (_a = unref(sales).sales) == null ? void 0 : _a.results) == null ? void 0 : _b.length) {
        _push(`<table><thead class="bg-gray-200 dark:bg-bgWhite"><tr><th> № </th><th><button class="flex items-center gap-3"> Наименование <img class="${ssrRenderClass(getSortDirection("name"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Кол-во продаж <img class="${ssrRenderClass(getSortDirection("sales_count"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Цена за единицу <img class="${ssrRenderClass(getSortDirection("price_per_count"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Сумма <img class="${ssrRenderClass(getSortDirection("total"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> НДС <img class="${ssrRenderClass(getSortDirection("vat"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Сумма с НДС <img class="${ssrRenderClass(getSortDirection("total_with_vat"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Наименование компании <img class="${ssrRenderClass(getSortDirection("company_sale_to"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th><th><button class="flex items-center gap-3"> Агент <img class="${ssrRenderClass(getSortDirection("agent"))}"${ssrRenderAttr("src", _imports_0)} alt="table-arrow"></button></th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(sales).sales.results, (item, index) => {
          _push(`<tr><td>${ssrInterpolate(unref(limit) * (unref(page) - 1) + index + 1)}</td><td>${ssrInterpolate(item.name)}</td><td>${ssrInterpolate(item.sales_count)}</td><td>${ssrInterpolate(item.price_per_count)}</td><td>${ssrInterpolate(item.total)}</td><td>${ssrInterpolate(item.vat)}</td><td>${ssrInterpolate(item.total_with_vat)}</td><td>${ssrInterpolate(item.company_sale_to)}</td><td>${ssrInterpolate(item.agent.last_name + " " + item.agent.first_name + " " + item.agent.patronymic)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = (_c = unref(sales).sales) == null ? void 0 : _c.results) == null ? void 0 : _d.length) === 0) {
        _push(`<div class="min-h-[300px] min-w-[89vw] bg-gray-200 dark:bg-bgWhite text-center flex items-center justify-center"> Товаров пока нет </div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_e = unref(sales).sales) == null ? void 0 : _e.results)) {
        _push(`<div class="relative min-h-[400px] min-w-[89vw]"><div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>`);
        _push(ssrRenderComponent(ThePreloader, null, null, _parent));
        _push(`</div>`);
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
      _push(`<div class="flex items-center gap-3"><p>Строк на странице:</p><select class="w-fit p-2.5 rounded-md bg-[#8881] dark:bg-bgWhite text-black"><!--[-->`);
      ssrRenderList(unref(limitItems), (item) => {
        _push(`<option${ssrRenderAttr("value", item)}>${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div></div></div></div>`);
      if (unref(showFiltersModal)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "resize",
          onShowModal: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="absolute top-3 right-3"${_scopeId}> x </button><div class="flex flex-col gap-5"${_scopeId}><p${_scopeId}> Фильтры: </p><form class="flex items-center gap-5 flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                modelValue: unref(min_price),
                "onUpdate:modelValue": ($event) => isRef(min_price) ? min_price.value = $event : null,
                class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                type: "number",
                label: "Минимальная цена"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                modelValue: unref(max_price),
                "onUpdate:modelValue": ($event) => isRef(max_price) ? max_price.value = $event : null,
                class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                type: "number",
                label: "Максимальная цена"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                modelValue: unref(min_count),
                "onUpdate:modelValue": ($event) => isRef(min_count) ? min_count.value = $event : null,
                class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                type: "number",
                label: "Минимальное количество"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                modelValue: unref(max_count),
                "onUpdate:modelValue": ($event) => isRef(max_count) ? max_count.value = $event : null,
                class: "w-full bg-transparent bg-opacity-0 rounded-lg outline-none",
                type: "number",
                label: "Максимальное количество"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UITheButton, { class: "mt-2 !text-black dark:!text-white" }, {
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
              _push2(`</form></div>`);
            } else {
              return [
                createVNode("button", {
                  class: "absolute top-3 right-3",
                  onClick: openFiltersModal
                }, " x "),
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("p", null, " Фильтры: "),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      updateQueryParams();
                      showFiltersModal.value = false;
                    }, ["prevent"]),
                    class: "flex items-center gap-5 flex-col"
                  }, [
                    createVNode(_sfc_main$4, {
                      modelValue: unref(min_price),
                      "onUpdate:modelValue": ($event) => isRef(min_price) ? min_price.value = $event : null,
                      class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                      type: "number",
                      label: "Минимальная цена"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      modelValue: unref(max_price),
                      "onUpdate:modelValue": ($event) => isRef(max_price) ? max_price.value = $event : null,
                      class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                      type: "number",
                      label: "Максимальная цена"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      modelValue: unref(min_count),
                      "onUpdate:modelValue": ($event) => isRef(min_count) ? min_count.value = $event : null,
                      class: "bg-transparent bg-opacity-0 rounded-lg outline-none max-md:w-full",
                      type: "number",
                      label: "Минимальное количество"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      modelValue: unref(max_count),
                      "onUpdate:modelValue": ($event) => isRef(max_count) ? max_count.value = $event : null,
                      class: "w-full bg-transparent bg-opacity-0 rounded-lg outline-none",
                      type: "number",
                      label: "Максимальное количество"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UITheButton, { class: "mt-2 !text-black dark:!text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Сохранить ")
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/sales/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CpMpewa6.js.map
