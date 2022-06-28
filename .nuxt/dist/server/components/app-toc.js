exports.ids = [5];
exports.modules = {

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppToc.vue?vue&type=template&id=675380ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.toc.length)?_c('div',{staticClass:"w-full lg:w-1/4 block relative"},[_vm._ssrNode("<div class=\"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("py-4 lg:py-8",{
        'lg:pl-8 lg:pr-2': _vm.settings.layout !== 'single',
        'lg:px-8': _vm.settings.layout === 'single'
      }))+">","</nav>",[_vm._ssrNode("<p class=\"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs\">"+_vm._ssrEscape(_vm._s(_vm.$t('toc.title')))+"</p> "),_c('scrollactive',{attrs:{"highlight-first-item":"","active-class":"text-primary-500","offset":0,"tag":"ul"}},_vm._l((_vm.toc),function(link){return _c('li',{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{
            'border-t border-dashed dark:border-gray-800 first:border-t-0': link.depth === 2
          }},[_c('a',{staticClass:"block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1",class:{
              'py-2': link.depth === 2,
              'ml-2 pb-2': link.depth === 3,
              'ml-3 pb-2': link.depth === 4,
              'ml-4 pb-2': link.depth === 5,
              'ml-5 pb-2': link.depth === 6
            },attrs:{"href":("#" + (link.id))}},[_vm._v(_vm._s(link.text))])])}),0)],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppToc.vue?vue&type=template&id=675380ee&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppToc.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppTocvue_type_script_lang_js_ = ({
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['settings'])
  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppToc.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppTocvue_type_script_lang_js_ = (AppTocvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppToc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppTocvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56fe04fa"
  
)

/* harmony default export */ var AppToc = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-toc.js.map