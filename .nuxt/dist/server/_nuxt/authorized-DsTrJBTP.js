import { J as defineNuxtRouteMiddleware, K as useRequestHeader, e as navigateTo } from "../server.mjs";
import "vue";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
import "vue/server-renderer";
const authorized = defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader("Authorization"))
    ;
  return navigateTo("/");
});
export {
  authorized as default
};
//# sourceMappingURL=authorized-DsTrJBTP.js.map
