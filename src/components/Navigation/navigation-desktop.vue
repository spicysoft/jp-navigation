<script>
import Vue from "vue";

import { SlpButton } from "slippers-ui";

import SlpNavigationDesktopMenu from "./navigation-desktop-menu.vue";

import GitLabIcon from "../../assets/gitlab2.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationDesktop",
  components: {
    GitLabIcon,
    SearchIcon,
    SlpButton,
    SlpNavigationDesktopMenu,
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      activeCategoryIndex: 0,
      activeNavIndex: -1,
      isNavOpen: false,
      isSupportOpen: false,
    };
  },
  methods: {
    setActiveNavItem(navIndex) {
      if (navIndex === this.activeNavIndex && this.isNavOpen) {
        this.closeNavMenu();
      } else {
        this.isNavOpen = true;
        this.activeNavIndex = navIndex;
        this.activeCategoryIndex = 0;
        this.$refs.navigation.style.backgroundColor = "rgb(255, 255, 255, 1)";
      }
    },
    setActiveCategory(categoryIndex) {
      this.activeCategoryIndex = categoryIndex;
    },
    closeNavMenu() {
      this.activeNavIndex = -1;
      this.activeCategoryIndex = 0;
      this.isNavOpen = false;
      this.$refs.navigation.style.backgroundColor = null;
    },
    emitSearchEvent() {
      this.closeNavMenu();
      this.isSupportOpen = false;
      let clickEvent = new Event("searchClick", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
    handleSupportDropdown(e) {
      // On focusout, close the menu unless the new focused target is within the dropdown.
      if (e.type == "focusout") {
        if (
          !(
            this.isSupportOpen && !!e.relatedTarget?.closest("#supportDropdown")
          )
        ) {
          this.isSupportOpen = false;
        }
      } else if (e.type == "click") {
        this.isSupportOpen = !this.isSupportOpen;
      }
    },
  },
});
</script>

<template>
  <div>
    <SlpNavigationDesktopMenu
      v-if="activeNavIndex >= 0"
      :activeCategoryIndex="activeCategoryIndex"
      :activeNavIndex="activeNavIndex"
      :closeNavMenu="closeNavMenu"
      :setActiveCategory="setActiveCategory"
      :data="data"
    />
    <div class="navigation" ref="navigation">
      <!-- BOTTOM NAVIGATION BAR -->
      <div class="navigation-bottom">
        <div class="navigation-bottom-left">
          <SlpButton
            class="slp-mr-8"
            variant="ghost"
            href="/handbook"
            data-nav="logo"
            aria-label="Home"
          >
            <GitLabIcon ariaId="tanukiHomeDesktop" />
            <span style="margin-left: 1em">ハンドブック日本語版</span>
          </SlpButton>
        </div>
        <div class="navigation-bottom-right">
          <SlpButton
            variant="icon"
            aria-label="Search"
            @click.native="emitSearchEvent()"
          >
            <SearchIcon />
          </SlpButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~slippers-ui/src/styles/_variables.scss";
@import "~slippers-ui/src/styles/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "~slippers-ui/dist/slippers-core.css";

// Override default link styling in nav
a {
  color: $color-text-300;
}

*,
::before,
::after {
  box-sizing: border-box;
}

.navigation {
  background-color: rgb($color-surface-50, 0.9);
  padding: $spacing-4 $spacing-24 $spacing-16 $spacing-24;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.navigation-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: $text-body-2;
  line-height: $line-height-body-2;

  .navigation-item-top {
    display: inline-block;
    padding-right: 0px;
    color: $color-text-200;
    &:hover {
      color: $color-text-300;
    }
  }

  .support {
    position: relative;
    color: $color-text-200;

    &.active,
    &:hover {
      color: $color-text-300;

      svg {
        fill: $color-text-300;
      }
    }

    .support-dropdown {
      display: none;
      z-index: 10000002;
      position: absolute;
      width: 220px;
      top: 40px;
      left: -50%;
      background-color: $color-surface-600;
      padding: $spacing-16;
      text-align: left;

      &_item {
        &:not(:last-child) {
          margin-bottom: $spacing-16;
        }

        &:hover {
          a {
            color: $color-text-50;
          }
        }
      }

      a {
        color: $color-text-100;
      }

      &.active {
        display: block;
      }
    }

    .support-dropdown::after {
      content: " ";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent $color-surface-600 transparent;
    }
  }
}

.navigation-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: $spacing-16;

  &.centered {
    justify-content: center;
  }

  .navigation-bottom-left {
    display: flex;
    align-items: center;
    color: $color-text-200 !important;

    .navigation-item {
      display: inline-block;

      &:not(:last-child) {
        margin-right: $spacing-16;
      }

      &_button {
        position: relative;
        color: $color-text-200;

        &:hover {
          color: $color-text-300;
          svg {
            display: block;
          }
        }

        &.active {
          color: $color-text-300;
          svg {
            display: block;
          }
        }

        svg {
          display: none;
          position: absolute;
          bottom: -6px;
          left: calc(50% - 8px);
        }
      }
    }
  }

  .navigation-bottom-right {
    display: flex;
    align-items: center;
  }
}
</style>
