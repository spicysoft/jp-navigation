import Vue from "vue";
import Components from "slippers-ui";

import 'slippers-ui/src/styles/_variables.scss';
import 'slippers-ui/src/styles/base.scss';
import 'slippers-ui/dist/slippers-core.css';

// Register Slipper components with Vue
Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
