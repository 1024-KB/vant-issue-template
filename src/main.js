import Vue from "vue";
import router from "./router/index";

import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
