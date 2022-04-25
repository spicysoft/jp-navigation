<script>
import Vue from "vue";

import {
  SlpButton,
  SlpColumn,
  SlpContainer,
  SlpHorizontalRule,
  SlpRow,
  SlpTypography,
} from "slippers-ui";

import ChevronIcon from "../../assets/chevron.vue";
import CloseIcon from "../../assets/close.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import SearchIcon from "../../assets/search.vue";

import AwsLogo from "../../assets/aws.vue";
import GoogleCloudLogo from "../../assets/google_cloud.vue";
import HashiCorpLogo from "../../assets/hashicorp.vue";
import IbmLogo from "../../assets/ibm.vue";
import RedHatLogo from "../../assets/redhat.vue";
import VMwareTanzuLogo from "../../assets/tanzu.vue";

export default Vue.extend({
  name: "SlpNavigationDesktopMenu",
  components: {
    AwsLogo,
    GoogleCloudLogo,
    HashiCorpLogo,
    RedHatLogo,
    ChevronIcon,
    IbmLogo,
    VMwareTanzuLogo,
    CloseIcon,
    GitLabIcon,
    SearchIcon,
    SlpButton,
    SlpColumn,
    SlpContainer,
    SlpHorizontalRule,
    SlpRow,
    SlpTypography,
  },
  props: {
    activeCategoryIndex: {
      required: true,
      type: Number,
    },
    activeNavIndex: {
      required: true,
      type: Number,
    },
    data: {
      required: true,
      type: Object,
    },
    closeNavMenu: {
      required: true,
      type: Function,
    },
    setActiveCategory: {
      required: true,
      type: Function,
    },
  },
});
</script>

<template>
  <div class="menu">
    <SlpContainer class="menu_container">
      <SlpRow class="menu_row">
        <!-- TABS -->
        <SlpColumn :cols="3" class="menu_left-column">
          <SlpTypography variant="heading3" tag="h2" class="slp-mb-32">
            {{ data.items[activeNavIndex].title }}
          </SlpTypography>
          <!-- TAB -->
          <SlpButton
            v-for="(category, index) in data.items[activeNavIndex].categories"
            :key="category.title"
            class="menu_tab"
            :class="{ active: index === activeCategoryIndex }"
            variant="ghost"
            @click.native="setActiveCategory(index)"
          >
            {{ category.title }}
            <ChevronIcon direction="right" />
          </SlpButton>
        </SlpColumn>
        <!-- CONTENT AREA -->
        <SlpColumn :cols="9" class="menu_right-column">
          <!-- HEADER -->
          <div class="slp-p-8">
            <div class="close">
              <SlpButton variant="ghost" @click.native="closeNavMenu()">
                <SlpTypography variant="body3">
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
                v-bind="
                  data.items[activeNavIndex].categories[activeCategoryIndex].ga
                "
              >
                <SlpTypography variant="body3-bold" tag="span">{{
                  data.items[activeNavIndex].categories[activeCategoryIndex]
                    .link.text
                }}</SlpTypography>
                <ChevronIcon class="slp-ml-8" direction="right" />
              </SlpButton>
            </div>
            <SlpHorizontalRule class="slp-mb-48" />
          </div>
          <!-- CARD GRID -->
          <SlpRow>
            <SlpColumn
              v-for="subcategory in data.items[activeNavIndex].categories[
                activeCategoryIndex
              ].categories"
              :key="subcategory.title"
              :cols="4"
              class="card"
            >
              <a :href="subcategory.link" v-bind="subcategory.ga">
                <div class="card_content">
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
          <!-- LOGOS GRID -->
          <SlpRow
            v-if="
              data.items[activeNavIndex].categories[activeCategoryIndex].images
            "
            class="slp-mt-32"
          >
            <SlpColumn
              v-for="image in data.items[activeNavIndex].categories[
                activeCategoryIndex
              ].images"
              :key="image.link"
              :cols="3"
              class="logos"
            >
              <a :href="image.link" class="logos_image" v-bind="image.ga">
                <component :is="image.logo" />
              </a>
            </SlpColumn>
          </SlpRow>
        </SlpColumn>
      </SlpRow>
    </SlpContainer>
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

.menu {
  position: fixed;
  top: 116px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $color-surface-50;

  &_container {
    height: 100%;
  }

  &_row {
    height: 100%;
  }

  &_left-column {
    color: $color-text-50;
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

  &_tab {
    border: 1px solid $color-surface-700;
    border-radius: $border-radius-4 0 0 $border-radius-4;
    padding-left: $spacing-16 !important;
    width: 100%;
    color: $color-text-100;
    svg {
      fill: $color-text-100;
    }

    &:hover {
      color: $color-text-50;
      svg {
        fill: $color-text-50;
      }
    }

    &.active {
      background-color: $color-accent-400;
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

.close {
  display: flex;
  justify-content: flex-end;
  margin-bottom: $spacing-48;
}

.card {
  padding: $spacing-8 $spacing-16;
  border-radius: $border-radius-4;

  &:nth-child(3) {
    .card_content {
      margin-right: 0;
    }
  }

  &:hover {
    background-color: $color-surface-800;
  }

  &_content {
    margin-right: $spacing-32;

    &:not(last-item) {
      margin-bottom: $spacing-16;
    }
  }
}

.logos {
  padding-right: $spacing-32;

  &_image {
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
}
</style>
