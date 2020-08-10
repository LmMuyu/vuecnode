import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./plugins/element/element";
import imgLazy from "@/comment/imgLazy";
import Tab from "@/comment/tab";

import "element-ui/lib/theme-chalk/index.css";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.directive("imgLazy", imgLazy);

Vue.prototype.$tab = Tab;
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
