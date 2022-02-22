exports.ids = [3];
exports.modules = {

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppPageBottom.vue?vue&type=template&id=5fb27858&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.link)?_c('div',{staticClass:"pt-4 pb-4 lg:px-8 flex flex-col sm:flex-row justify-between"},[]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppPageBottom.vue?vue&type=template&id=5fb27858&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppPageBottom.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var AppPageBottomvue_type_script_lang_js_ = ({
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['settings', 'githubUrls']),

    link() {
      if (!this.settings.github) {
        return;
      }

      return [this.githubUrls.repo, 'edit', this.settings.defaultBranch, this.settings.defaultDir, `content${this.document.path}${this.document.extension}`].filter(path => !!path).join('/');
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppPageBottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppPageBottomvue_type_script_lang_js_ = (AppPageBottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppPageBottom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppPageBottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cd2b2a4c"
  
)

/* harmony default export */ var AppPageBottom = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-page-bottom.js.map