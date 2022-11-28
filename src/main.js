import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Vue from 'vue';
import App from './App.vue';

library.add(fas, far, fab);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
