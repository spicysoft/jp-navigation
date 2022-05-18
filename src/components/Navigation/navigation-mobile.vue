<script>
import Vue from "vue";

import { SlpButton } from "slippers-ui";

import SlpNavigationMobileMenu from "./navigation-mobile-menu.vue";

import GitLabIcon from "../../assets/gitlab2.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationMobile",
  components: {
    GitLabIcon,
    SearchIcon,
    SlpButton,
    SlpNavigationMobileMenu,
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleNavMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    emitSearchEvent() {
      let clickEvent = new Event("searchClick", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
  },
});
</script>

<template>
  <div>
    <div class="tablet">
      <SlpButton variant="icon" href="/">
        <GitLabIcon ariaId="tanukiHomeTablet" />
      </SlpButton>
      <div>
        <SlpButton
          variant="icon"
          class="slp-ml-16"
          @click.native="emitSearchEvent()"
        >
          <SearchIcon />
        </SlpButton>
        <SlpButton variant="icon" class="slp-ml-16"> </SlpButton>
      </div>
    </div>
    <div class="phone">
      <div class="navigation-bottom">
        <SlpButton variant="icon" @click.native="emitSearchEvent()">
          <SearchIcon />
        </SlpButton>
        <SlpButton variant="icon" href="/" data-nav="logo" aria-label="Home">
          <GitLabIcon ariaId="tanukiHomeMobile" :size="24" />
        </SlpButton>
        <SlpButton variant="icon" class="slp-ml-16"> </SlpButton>
      </div>
    </div>
    <SlpNavigationMobileMenu
      v-if="isMenuOpen"
      :data="data"
      @onClose="toggleNavMenu()"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "~slippers-ui/src/styles/_variables.scss";
@import "~slippers-ui/src/styles/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
}

.tablet {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-16 $spacing-8;
  background-color: $color-surface-50;

  @media (max-width: $breakpoint-sm) {
    display: none;
  }
}

.phone {
  background-color: $color-surface-50;

  @media (min-width: $breakpoint-sm) {
    display: none;
  }

  .navigation-top {
    width: 100%;
    border-radius: 0;
    justify-content: center;

    &:hover {
      svg {
        fill: #000000;
      }
    }
  }

  .navigation-bottom {
    padding: $spacing-16;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
@import "~slippers-ui/dist/slippers-core.css";
</style>
