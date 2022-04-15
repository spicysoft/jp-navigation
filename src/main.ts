import Vue from "vue";
import App from "./App.vue";
import Components from "slippers-ui";

import "slippers-ui/src/styles/_variables.scss";
import "slippers-ui/src/styles/base.scss";
import "slippers-ui/dist/slippers-core.css";

// Register Slipper components with Vue
Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
