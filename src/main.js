import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Row, Col, Button, Select, Option, Form, FormItem, Radio, RadioGroup, Input, Checkbox, Divider, Card, Switch, CheckboxGroup, Drawer, Container, Menu, Submenu, MenuItem, Header, Aside, Main, Table, TableColumn} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "@/assets/element-variables.scss";

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

// configure language
locale.use(lang);

Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Divider);
Vue.use(Card);
Vue.use(Switch);
Vue.use(Drawer);
Vue.use(Container);
Vue.use(Container);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
