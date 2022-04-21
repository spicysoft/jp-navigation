<script>
import Vue from "vue";

import { SlpButton } from "slippers-ui";

import SlpNavigationMobileMenu from "./navigation-mobile-menu.vue";

import ArrowIcon from "../../assets/arrow.vue";
import AssigneeIcon from "../../assets/assignee.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import HamburgerIcon from "../../assets/hamburger.vue";
import ProfileIcon from "../../assets/profile.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationMobile",
  components: {
    ArrowIcon,
    AssigneeIcon,
    GitLabIcon,
    HamburgerIcon,
    ProfileIcon,
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
  },
});
</script>

<template>
  <div>
    <div class="tablet">
      <SlpButton variant="icon" href="/">
        <GitLabIcon />
      </SlpButton>
      <div>
        <SlpButton :href="data.sales.link" variant="secondary" class="slp-mr-8">
          {{ data.sales.text }}
        </SlpButton>
        <SlpButton :href="data.free_trial.link" variant="primary">
          {{ data.free_trial.text }}
        </SlpButton>
        <SlpButton variant="icon" :href="data.login.link" class="slp-ml-16">
          <ProfileIcon />
        </SlpButton>
        <SlpButton variant="icon" :href="data.register.link" class="slp-ml-16">
          <AssigneeIcon />
        </SlpButton>
        <SlpButton variant="icon" class="slp-ml-16">
          <SearchIcon />
        </SlpButton>
        <SlpButton
          variant="icon"
          class="slp-ml-16"
          @click.native="toggleNavMenu()"
        >
          <HamburgerIcon />
        </SlpButton>
      </div>
    </div>
    <div class="phone">
      <SlpButton
        :href="data.free_trial.link"
        variant="primary"
        class="navigation-top"
      >
        {{ data.free_trial.text }}
        <ArrowIcon class="slp-ml-4" direction="right" fill="#fff" />
      </SlpButton>
      <div class="navigation-bottom">
        <SlpButton variant="icon">
          <SearchIcon />
        </SlpButton>
        <SlpButton variant="icon" href="/">
          <GitLabIcon :size="24" />
        </SlpButton>
        <SlpButton
          variant="icon"
          class="slp-ml-16"
          @click.native="toggleNavMenu()"
        >
          <HamburgerIcon />
        </SlpButton>
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
  margin: $spacing-16 $spacing-8;

  @media (max-width: $breakpoint-sm) {
    display: none;
  }
}

.phone {
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
    margin: $spacing-16;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
@import "~slippers-ui/dist/slippers-core.css";
</style>
