// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
import { store } from "./store/index";
import * as socketIoClient from "socket.io-client";
import * as sailsIo from "sails.io.js";
import { Message } from "element-ui";
import { Notification } from "element-ui";

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store: store,
  router,
  components: { App },
  template: "<App/>"
});
