import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f852be6 = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\_.vue' /* webpackChunkName: "pages/_" */))
const _2a00dae4 = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\releases.vue' /* webpackChunkName: "pages/releases" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fr",
    component: _3f852be6,
    name: "index___fr"
  }, {
    path: "/ja",
    component: _3f852be6,
    name: "index___ja"
  }, {
    path: "/releases",
    component: _2a00dae4,
    name: "releases___en"
  }, {
    path: "/ru",
    component: _3f852be6,
    name: "index___ru"
  }, {
    path: "/fr/releases",
    component: _2a00dae4,
    name: "releases___fr"
  }, {
    path: "/ja/releases",
    component: _2a00dae4,
    name: "releases___ja"
  }, {
    path: "/ru/releases",
    component: _2a00dae4,
    name: "releases___ru"
  }, {
    path: "/ja/*",
    component: _3f852be6,
    name: "all___ja"
  }, {
    path: "/fr/*",
    component: _3f852be6,
    name: "all___fr"
  }, {
    path: "/ru/*",
    component: _3f852be6,
    name: "all___ru"
  }, {
    path: "/",
    component: _3f852be6,
    name: "index___en"
  }, {
    path: "/*",
    component: _3f852be6,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
