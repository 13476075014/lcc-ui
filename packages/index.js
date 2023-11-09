/* Automatically generated by './build/bin/es-entry.js' */

import Checkbox from './checkbox/index.js';
import Packages from './packages/index.js';
import Input from './input/index.js';
import Select from './select/index.js';

const components = [
  Checkbox,
Packages,
Input,
Select
];

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.2.3',
  install,
  Checkbox,
Packages,
Input,
Select
};