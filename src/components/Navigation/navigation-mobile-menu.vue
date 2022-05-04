<script>
import Vue from "vue";

import { SlpButton, SlpColumn, SlpRow, SlpTypography } from "slippers-ui";

import AssigneeIcon from "../../assets/assignee.vue";
import ChevronIcon from "../../assets/chevron.vue";
import CloseIcon from "../../assets/close.vue";
import CommentIcon from "../../assets/comment.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import ProfileIcon from "../../assets/profile.vue";
import SearchIcon from "../../assets/search.vue";

import AwsLogo from "../../assets/aws.vue";
import GoogleCloudLogo from "../../assets/google_cloud.vue";
import HashiCorpLogo from "../../assets/hashicorp.vue";
import IbmLogo from "../../assets/ibm.vue";
import RedHatLogo from "../../assets/redhat.vue";
import VMwareTanzuLogo from "../../assets/tanzu.vue";

export default Vue.extend({
  name: "SlpNavigationMobile",
  components: {
    AssigneeIcon,
    AwsLogo,
    ChevronIcon,
    CloseIcon,
    CommentIcon,
    GitLabIcon,
    GoogleCloudLogo,
    HashiCorpLogo,
    IbmLogo,
    ProfileIcon,
    RedHatLogo,
    SearchIcon,
    SlpButton,
    SlpColumn,
    SlpRow,
    SlpTypography,
    VMwareTanzuLogo,
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      activeTitle: "",
      activeChildren: this.data.items,
      sectionIndex: -1,
      categoryIndex: -1,
    };
  },
  methods: {
    setActiveNavItem(index) {
      // Clicked a section from the main navigation
      if (this.sectionIndex === -1) {
        this.sectionIndex = index;
      } else {
        // Clicked a category inside a section
        this.categoryIndex = index;
      }

      this.activeTitle = this.activeChildren[index].title;
      this.activeChildren = this.activeChildren[index].categories;
    },
    back() {
      // Clicked back from a subcategory
      if (this.categoryIndex !== -1) {
        this.categoryIndex = -1;
        this.activeTitle = this.data.items[this.sectionIndex].title;
        this.activeChildren = this.data.items[this.sectionIndex].categories;
      } else {
        // Clicked back from a category
        this.sectionIndex = -1;
        this.activeTitle = "";
        this.activeChildren = this.data.items;
      }
    },
    emitSearchEvent() {
      let clickEvent = new Event("searchClickHamburger", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
  },
});
</script>

<template>
  <div class="nav-menu">
    <div>
      <div>
        <div
          v-if="sectionIndex && sectionIndex == -1"
          class="nav-menu-top_logo"
        >
          <SlpButton variant="icon" href="/" data-nav="logo" aria-label="Home">
            <GitLabIcon ariaId="tanukiHomeMobileMenu" />
          </SlpButton>
          <SlpButton variant="icon" @click.native="$emit('onClose')">
            <CloseIcon />
          </SlpButton>
        </div>
        <div v-else class="nav-menu-top_back">
          <SlpButton variant="ghost" @click.native="back()">
            <ChevronIcon class="slp-mr-16" direction="left" />
            <SlpTypography variant="body3-bold" tag="span">{{
              activeTitle
            }}</SlpTypography>
          </SlpButton>
          <SlpButton variant="icon" @click.native="$emit('onClose')">
            <CloseIcon />
          </SlpButton>
        </div>
      </div>
      <ul>
        <SlpButton
          v-for="(item, index) in activeChildren"
          :key="item.title"
          tag="li"
          variant="ghost"
          class="nav-menu-item"
          :href="item.categories ? '' : item.link"
          @click.native="item.categories ? setActiveNavItem(index) : ''"
          v-bind="item.ga"
        >
          <span v-if="item.categories">{{ item.title }}</span>
          <a v-else :href="item.link">{{ item.title }}</a>
          <ChevronIcon v-if="item.categories" direction="right" />
        </SlpButton>
        <SlpRow
          v-if="
            sectionIndex !== -1 &&
            categoryIndex !== -1 &&
            data.items[sectionIndex].categories[categoryIndex].images
          "
          class="logos-container"
        >
          <SlpColumn
            v-for="image in data.items[sectionIndex].categories[categoryIndex]
              .images"
            :key="image.link"
            :cols="4"
            class="logos"
            size="sm"
          >
            <a :href="image.link" class="logos_image" v-bind="image.ga">
              <component :is="image.logo" />
            </a>
          </SlpColumn>
        </SlpRow>
        <li v-if="sectionIndex && sectionIndex == -1">
          <SlpButton
            variant="ghost"
            :href="data.login.link"
            class="nav-menu_icon"
            v-bind="data.login.ga"
          >
            <ProfileIcon class="slp-mr-8" />
            {{ data.login.text }}
          </SlpButton>
        </li>
        <li v-if="sectionIndex && sectionIndex == -1">
          <SlpButton
            variant="ghost"
            :href="data.register.link"
            class="nav-menu_icon"
            v-bind="data.register.ga"
          >
            <AssigneeIcon class="slp-mr-8" />
            {{ data.register.text }}
          </SlpButton>
        </li>
        <li v-if="sectionIndex && sectionIndex == -1">
          <SlpButton
            variant="ghost"
            class="nav-menu_icon"
            @click.native="emitSearchEvent()"
          >
            <SearchIcon class="slp-mr-8" />
            {{ data.search }}
          </SlpButton>
        </li>
        <li v-if="sectionIndex && sectionIndex === -1">
          <SlpButton
            variant="ghost"
            :href="data.sales.link"
            class="nav-menu_icon"
            v-bind="data.sales.ga"
          >
            <CommentIcon class="slp-mr-8" />
            {{ data.sales.text }}
          </SlpButton>
        </li>
      </ul>
    </div>
    <SlpButton
      :href="data.free_trial.link"
      variant="primary"
      class="nav-menu-bottom"
      v-bind="data.free_trial.ga"
    >
      {{ data.free_trial.text }}
    </SlpButton>
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

.nav-menu {
  position: fixed;
  background-color: $color-surface-50;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: $spacing-8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-top {
    &_back,
    &_logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    &_back {
      border-bottom: 1px solid $color-surface-300;
    }
  }

  &-bottom {
    display: flex;
    justify-content: center;
  }

  &-item {
    width: 100%;
    border-radius: 0px;
    justify-content: space-between;
    border-bottom: 1px solid $color-surface-300 !important;

    a {
      color: $color-text-300;
    }
  }

  &_icon {
    color: $color-text-300;
  }

  // Explicitly set span color to fix iOS 15 safari but
  span {
    color: $color-text-300;
  }
}

.logos-container {
  width: 100%;
}

.logos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: $spacing-16;

  &_image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }

  svg {
    height: 100%;
    width: 100%;
  }
}

@import "~slippers-ui/dist/slippers-core.css";
</style>
