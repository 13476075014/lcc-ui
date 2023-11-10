(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LCCXUI"] = factory();
	else
		root["LCCXUI"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/checkbox/index.vue?vue&type=template&id=9cbe8634&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n  checkbox:这里是1\n")]);
};
var staticRenderFns = [];
render._withStripped = true;

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/checkbox/index.vue?vue&type=script&lang=js&
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'lcc-checkbox'
});
;// CONCATENATED MODULE: ./packages/checkbox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/checkbox/index.vue





/* normalize component */
;
var component = normalizeComponent(
  packages_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_checkbox = (component.exports);
;// CONCATENATED MODULE: ./packages/checkbox/index.js

packages_checkbox.install = function (Vue) {
  Vue.component(packages_checkbox.name, packages_checkbox);
};
/* harmony default export */ var packages_checkbox_0 = (packages_checkbox);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/input/index.vue?vue&type=template&id=6de5a59e&
var inputvue_type_template_id_6de5a59e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n  input：这里是2\n")]);
};
var inputvue_type_template_id_6de5a59e_staticRenderFns = [];
inputvue_type_template_id_6de5a59e_render._withStripped = true;

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/input/index.vue?vue&type=script&lang=js&
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'lcc-input'
});
;// CONCATENATED MODULE: ./packages/input/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./packages/input/index.vue





/* normalize component */
;
var input_component = normalizeComponent(
  packages_inputvue_type_script_lang_js_,
  inputvue_type_template_id_6de5a59e_render,
  inputvue_type_template_id_6de5a59e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
;// CONCATENATED MODULE: ./packages/input/index.js

input.install = function (Vue) {
  Vue.component(input.name, input);
};
/* harmony default export */ var packages_input = (input);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/select/index.vue?vue&type=template&id=dc410c46&
var selectvue_type_template_id_dc410c46_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n  select：这里是3\n")]);
};
var selectvue_type_template_id_dc410c46_staticRenderFns = [];
selectvue_type_template_id_dc410c46_render._withStripped = true;

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/select/index.vue?vue&type=script&lang=js&
/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'lcc-select'
});
;// CONCATENATED MODULE: ./packages/select/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./packages/select/index.vue





/* normalize component */
;
var select_component = normalizeComponent(
  packages_selectvue_type_script_lang_js_,
  selectvue_type_template_id_dc410c46_render,
  selectvue_type_template_id_dc410c46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_select = (select_component.exports);
;// CONCATENATED MODULE: ./packages/select/index.js

packages_select.install = function (Vue) {
  Vue.component(packages_select.name, packages_select);
};
/* harmony default export */ var packages_select_0 = (packages_select);
;// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/libs-entry.js' */




const components = [packages_checkbox_0, packages_input, packages_select_0];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src = ({
  version: '0.3.3',
  install,
  Checkbox: packages_checkbox_0,
  Input: packages_input,
  Select: packages_select_0
});
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});