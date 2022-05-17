<script>
import Vue from "vue";

import { SlpButton } from "slippers-ui";

import SlpNavigationDesktopMenu from "./navigation-desktop-menu.vue";

import ChevronIcon from "../../assets/chevron.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationDesktop",
  components: {
    ChevronIcon,
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
      <!-- TOP NAVIGATION BAR -->
      <div class="navigation-top">
        <SlpButton
          id="supportDropdown"
          class="support"
          :class="{ active: isSupportOpen }"
          variant="ghost"
          @click.native="(e) => handleSupportDropdown(e)"
          @focusout.native="(e) => handleSupportDropdown(e)"
        >
          {{ data.support.text }}
          <ChevronIcon class="slp-ml-8" direction="down" fill="#74717A" />
          <div class="support-dropdown" :class="{ active: isSupportOpen }">
            <ul>
              <li
                v-for="supportItem in data.support.items"
                :key="supportItem.title"
                class="support-dropdown_item"
              >
                <a v-bind="supportItem.ga" :href="supportItem.link">
                  {{ supportItem.text }}
                </a>
              </li>
            </ul>
          </div>
        </SlpButton>
        <SlpButton
          :href="data.login.link"
          class="navigation-item-top slp-ml-24"
          variant="ghost"
          :title="data.login.text"
          v-bind="data.login.ga"
        >
          {{ data.login.text }}
        </SlpButton>
        <span>/</span>
        <SlpButton
          :href="data.register.link"
          class="navigation-item-top slp-mr-24"
          variant="ghost"
          :title="data.register.text"
          v-bind="data.register.ga"
        >
          {{ data.register.text }}
        </SlpButton>
        <SlpButton
          variant="icon"
          aria-label="Search"
          @click.native="emitSearchEvent()"
        >
          <SearchIcon />
        </SlpButton>
      </div>
      <!-- BOTTOM NAVIGATION BAR -->
      <div class="navigation-bottom">
        <div class="navigation-bottom-left">
          <SlpButton
            class="slp-mr-8"
            variant="icon"
            href="/"
            data-nav="logo"
            aria-label="Home"
          >
            <GitLabIcon ariaId="tanukiHomeDesktop" />
          </SlpButton>
          <ul>
            <li
              v-for="(navItem, index) in data.items"
              v-show="!navItem.mobileOnly"
              :key="navItem.title"
              class="navigation-item"
            >
              <SlpButton
                variant="ghost"
                class="navigation-item_button"
                :class="{ active: index === activeNavIndex }"
                :href="navItem.link"
                v-bind="navItem.ga"
                :title="navItem.title"
                @click.native="setActiveNavItem(index, $event)"
              >
                {{ navItem.title }}
                <ChevronIcon v-if="navItem.categories" direction="down" />
              </SlpButton>
            </li>
          </ul>
        </div>
        <div class="navigation-bottom-right">
          <SlpButton
            :href="data.sales.link"
            variant="tertiary"
            class="slp-mr-8"
            v-bind="data.sales.ga"
          >
            {{ data.sales.text }}
          </SlpButton>
          <SlpButton
            :href="data.free_trial.link"
            variant="primary"
            v-bind="data.free_trial.ga"
          >
            {{ data.free_trial.text }}
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
