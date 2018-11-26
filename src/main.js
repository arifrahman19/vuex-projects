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

let url = "http://localhost:1337";

let io = sailsIo(socketIoClient);
io.sails.url = url;
io.sails.environment = process.env.NODE_ENV || "development";
io.sails.useCORSRouteToGetCookie = false;
io.sails.autoConnect = true;
io.sails.reconnection = true;

new Vue({
  el: "#app",
  store: store,
  router,
  components: { App },
  template: "<App/>"
});

console.info("mau nge post 1", "");
io.socket.post("/join", { message: "this.message" }, message => {
  Message.success("Join");
  console.log("mau nge post" + message);
});
io.socket.on("update", function(msg) {
  store.dispatch("refresh");
  Notification({
    title: "Title",
    message: msg
  });
  console.log("event update" + msg);
});

io.socket.on("connect", function onConnect() {
  console.log("This socket is now connected to the Sails server.");
});
io.socket.on("disconnect", function onDisconnect() {
  console.log("This socket lost connection to the Sails server");
});
