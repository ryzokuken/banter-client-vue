import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");

const socket = io("localhost:3000");

socket.on("connect", () => console.log("connected!"));
