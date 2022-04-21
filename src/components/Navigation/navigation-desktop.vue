<script>
import Vue from "vue";

import {
  SlpButton,
  SlpColumn,
  SlpContainer,
  SlpRow,
  SlpTypography,
} from "slippers-ui";

import ChevronIcon from "../../assets/chevron.vue";
import CloseIcon from "../../assets/close.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationDesktop",
  components: {
    ChevronIcon,
    CloseIcon,
    GitLabIcon,
    SearchIcon,
    SlpButton,
    SlpColumn,
    SlpContainer,
    SlpRow,
    SlpTypography,
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      activeNavIndex: -1,
      activeCategoryIndex: 0,
      isNavOpen: false,
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
      }
    },
    setActiveCategory(categoryIndex) {
      this.activeCategoryIndex = categoryIndex;
    },
    closeNavMenu() {
      this.activeNavIndex = -1;
      this.activeCategoryIndex = 0;
      this.isNavOpen = false;
    },
  },
});
</script>

<template>
  <div class="slp-px-24 slp-py-16">
    <div class="navigation-top">
      <SlpButton
        class="navigation-item-support"
        :href="data.support.link"
        variant="ghost"
      >
        {{ data.support.text }}
        <ChevronIcon class="slp-ml-8" direction="down" />
      </SlpButton>
      <SlpButton
        :href="data.login.link"
        class="navigation-item-top slp-ml-24"
        variant="ghost"
        :title="data.login.text"
      >
        {{ data.login.text }}
      </SlpButton>
      <span>/</span>
      <SlpButton
        :href="data.register.link"
        class="navigation-item-top slp-mr-24"
        variant="ghost"
        :title="data.register.text"
      >
        {{ data.register.text }}
      </SlpButton>
      <SearchIcon />
    </div>
    <div class="navigation-bottom">
      <div class="navigation-bottom-left">
        <SlpButton class="slp-mr-8" variant="icon" href="/">
          <GitLabIcon />
        </SlpButton>
        <ul>
          <SlpButton
            v-for="(navItem, index) in data.items"
            :key="navItem.title"
            tag="li"
            variant="ghost"
            class="navigation-item"
            :class="{ active: index === activeNavIndex }"
            :href="navItem.link"
            :title="navItem.title"
            @click.native="setActiveNavItem(index, $event)"
          >
            {{ navItem.title }}
            <ChevronIcon v-if="navItem.categories" direction="down" />
          </SlpButton>
        </ul>
      </div>
      <div class="navigation-bottom-right">
        <SlpButton :href="data.sales.link" variant="secondary" class="slp-mr-8">
          {{ data.sales.text }}
        </SlpButton>
        <SlpButton :href="data.free_trial.link" variant="primary">
          {{ data.free_trial.text }}
        </SlpButton>
      </div>
    </div>
    <div v-if="activeNavIndex >= 0" class="nav-menu">
      <SlpContainer class="nav-menu_container">
        <SlpRow class="nav-menu_row">
          <SlpColumn :cols="3" class="nav-menu_left-column">
            <SlpTypography variant="heading3" tag="h2" class="slp-mb-32">
              {{ data.items[activeNavIndex].title }}
            </SlpTypography>
            <SlpButton
              v-for="(category, index) in data.items[activeNavIndex].categories"
              :key="category.title"
              class="nav-menu_category-button"
              :class="{ active: index === activeCategoryIndex }"
              variant="ghost"
              @click.native="setActiveCategory(index, $event)"
            >
              {{ category.title }}
              <ChevronIcon class="slp-ml-8" direction="right" fill="#fff" />
            </SlpButton>
          </SlpColumn>
          <SlpColumn :cols="9" class="nav-menu_right-column">
            <div class="slp-p-8">
              <div class="nav-menu_close-button">
                <SlpButton variant="ghost" @click.native="closeNavMenu()">
                  <SlpTypography
                    class="nav-menu_close-button-text"
                    variant="body3"
                  >
                    {{ data.close }}
                  </SlpTypography>
                  <CloseIcon class="slp-ml-8" />
                </SlpButton>
              </div>
              <div
                class="slp-flex slp-align-items-center slp-justify-content-between"
              >
                <SlpTypography variant="heading4" tag="h3">
                  {{
                    data.items[activeNavIndex].categories[activeCategoryIndex]
                      .header
                  }}
                </SlpTypography>
                <SlpButton
                  v-if="
                    data.items[activeNavIndex].categories[activeCategoryIndex]
                      .link
                  "
                  :href="
                    data.items[activeNavIndex].categories[activeCategoryIndex]
                      .link.link
                  "
                  variant="ghost"
                >
                  <SlpTypography variant="body3-bold" tag="span">{{
                    data.items[activeNavIndex].categories[activeCategoryIndex]
                      .link.text
                  }}</SlpTypography>
                  <ChevronIcon class="slp-ml-8" direction="right" />
                </SlpButton>
              </div>
              <div class="horizontal-line" />
            </div>
            <SlpRow>
              <SlpColumn
                v-for="subcategory in data.items[activeNavIndex].categories[
                  activeCategoryIndex
                ].categories"
                :key="subcategory.title"
                :cols="4"
                class="nav-menu_card"
              >
                <a :href="subcategory.link">
                  <div class="nav-menu_card-inner">
                    <SlpTypography variant="body3-bold" tag="h4">
                      {{ subcategory.title }}
                    </SlpTypography>
                    <SlpTypography variant="body3" tag="P">
                      {{ subcategory.description }}
                    </SlpTypography>
                  </div>
                </a>
              </SlpColumn>
            </SlpRow>
            <SlpRow
              v-if="
                data.items[activeNavIndex].categories[activeCategoryIndex]
                  .images
              "
              class="slp-mt-32"
            >
              <SlpColumn
                v-for="image in data.items[activeNavIndex].categories[
                  activeCategoryIndex
                ].images"
                :key="image.image_url"
                :cols="3"
                class="nav-menu_img-card-container"
              >
                <a :href="image.link" class="nav-menu_img-card">
                  <img :src="image.image_url" />
                </a>
              </SlpColumn>
            </SlpRow>
          </SlpColumn>
        </SlpRow>
      </SlpContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~slippers-ui/src/styles/_variables.scss";
@import "~slippers-ui/src/styles/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

// Override default link styling in nav
a {
  color: $color-text-300;
}

*,
::before,
::after {
  box-sizing: border-box;
}

.navigation-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .navigation-item-top {
    display: inline-block;
    padding-right: 0px;
    &:hover {
      font-weight: $font-weight-bold;
    }
  }

  .navigation-item-support {
    &:hover {
      font-weight: $font-weight-bold;
    }
  }

  /* To prevent layout shift on bold hover */
  .navigation-item-top::before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
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

    .navigation-item {
      position: relative;
      display: inline-block;

      &:hover {
        font-weight: $font-weight-bold;
        svg {
          display: block;
        }
      }

      &.active {
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

      &:not(:last-child) {
        margin-right: $spacing-16;
      }
    }

    /* To prevent layout shift on bold hover */
    .navigation-item::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }

  .navigation-bottom-right {
    display: flex;
    align-items: center;
  }
}

.nav-menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 136px;
  bottom: 0;
  background-color: $color-surface-50;

  &_container {
    height: 100%;
  }

  &_row {
    height: 100%;
  }

  &_left-column {
    color: $color-text-50;
    text-align: end;
    padding-top: $spacing-48;

    &:before {
      content: "";
      position: absolute;
      background-color: $color-surface-700;
      top: 0px;
      left: -4000px;
      right: 0px;
      bottom: 0px;
      z-index: -1;
    }
  }

  &_category-button {
    border: 1px solid $color-surface-700;
    border-radius: $border-radius-4 0 0 $border-radius-4;
    padding-left: $spacing-16;
    width: 100%;
    color: $color-text-50;

    &.active {
      background-color: $color-accent-400;
      font-weight: $font-weight-bold;
      border: 1px solid $color-accent-400;
      color: $color-text-300;

      svg {
        fill: #000000;
      }
    }
  }

  &_right-column {
    padding: $spacing-24;
  }
}

.nav-menu_close-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: $spacing-48;

  &-text {
    &:hover {
      font-weight: $font-weight-bold;
    }
  }
}

.horizontal-line {
  border-top: 1px solid $color-surface-400;
  margin-bottom: $spacing-48;
  margin-top: $spacing-8;
}

.nav-menu_card {
  padding: $spacing-8 $spacing-16;
  border-radius: $border-radius-4;

  &:nth-child(3) {
    .card-inner {
      margin-right: 0;
    }
  }

  &:hover {
    background-color: $color-surface-800;
  }
}

.nav-menu_img-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  padding: $spacing-32;
  border: 1px solid $color-surface-200;
  margin-bottom: 32px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.nav-menu_img-card-container {
  padding-right: $spacing-32;
}

.nav-menu_card-inner {
  margin-right: $spacing-32;

  &:not(last-item) {
    margin-bottom: $spacing-16;
  }
}
@import "~slippers-ui/dist/slippers-core.css";
</style>