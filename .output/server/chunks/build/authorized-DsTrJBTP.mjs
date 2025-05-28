import { J as defineNuxtRouteMiddleware, K as useRequestHeader, e as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const authorized = defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader("Authorization"))
    ;
  return navigateTo("/");
});

export { authorized as default };
//# sourceMappingURL=authorized-DsTrJBTP.mjs.map
