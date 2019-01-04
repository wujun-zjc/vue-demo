// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/css-init.css';       //初始化css
import Vue from 'vue'
import router from './router'

import App from './App'
import Api from './Api'

import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';

Vue.config.productionTip = false

Vue.use(Api)

import Pageheader from './components/page-header'
Vue.component('page-header', Pageheader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
