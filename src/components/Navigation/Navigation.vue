<script>
import Vue from "vue";
import SlpNavigationDesktop from "./navigation-desktop.vue";
import SlpNavigationMobile from "./navigation-mobile.vue";

import data from "./navigation.json";

export default Vue.extend({
  name: "SlpNavigation",
  components: {
    SlpNavigationDesktop,
    SlpNavigationMobile,
  },
  data() {
    return {
      data,
    };
  },
});
</script>

<template>
  <nav class="navigation">
    <slp-navigation-desktop class="navigation-desktop" :data="data" />
    <slp-navigation-mobile class="navigation-mobile" :data="data" />
  </nav>
</template>

<style lang="scss" scoped>
@import "~slippers-ui/src/styles/_variables.scss";
@import "~slippers-ui/src/styles/base.scss";
@import "~slippers-ui/dist/slippers-core.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
}

.navigation {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1025;
  background-color: $color-surface-50;

  &-mobile {
    @media (min-width: $breakpoint-lg) {
      display: none;
    }
  }

  &-desktop {
    display: none;
    @media (min-width: $breakpoint-lg) {
      display: block;
    }
  }
}
</style>
