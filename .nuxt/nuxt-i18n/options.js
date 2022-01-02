import locale6010b66b from '../..\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n\\en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","dateTimeFormats":{"en":{"long":{"year":"numeric","month":"short","day":"numeric","weekday":"short"}},"fr":{"long":{"year":"numeric","month":"long","day":"numeric","weekday":"short"}}}},
  vueI18nLoader: false,
  locales: [{"code":"ru","iso":"ru-RU","file":"ru-RU.js","name":"Русский"},{"code":"fr","iso":"fr-FR","file":"fr-FR.js","name":"Français"},{"code":"ja","iso":"ja-JP","file":"ja-JP.js","name":"日本語"},{"code":"en","iso":"en-US","file":"en-US.js","name":"English"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\thoma\\OneDrive\\Documents\\remote python\\doc\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ru","iso":"ru-RU","file":"ru-RU.js","name":"Русский"},{"code":"fr","iso":"fr-FR","file":"fr-FR.js","name":"Français"},{"code":"ja","iso":"ja-JP","file":"ja-JP.js","name":"日本語"},{"code":"en","iso":"en-US","file":"en-US.js","name":"English"}],
  localeCodes: ["ru","fr","ja","en"],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'ru-RU.js': () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n\\ru-RU.js' /* webpackChunkName: "lang-ru-RU.js" */),
  'fr-FR.js': () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n\\fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
  'ja-JP.js': () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n\\ja-JP.js' /* webpackChunkName: "lang-ja-JP.js" */),
}
