import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Select } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "@/assets/element-variables.scss";

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

// configure language
locale.use(lang);

Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
