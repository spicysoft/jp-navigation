<script>
import Vue from "vue";

import { SlpButton, SlpTypography } from "slippers-ui";

import AssigneeIcon from "../../assets/assignee.vue";
import ChevronIcon from "../../assets/chevron.vue";
import CloseIcon from "../../assets/close.vue";
import CommentIcon from "../../assets/comment.vue";
import GitLabIcon from "../../assets/gitlab2.vue";
import ProfileIcon from "../../assets/profile.vue";
import SearchIcon from "../../assets/search.vue";

export default Vue.extend({
  name: "SlpNavigationMobile",
  components: {
    AssigneeIcon,
    ChevronIcon,
    CloseIcon,
    CommentIcon,
    GitLabIcon,
    ProfileIcon,
    SearchIcon,
    SlpButton,
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
          <SlpButton variant="icon" href="/">
            <GitLabIcon />
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
        >
          <span v-if="item.categories">{{ item.title }}</span>
          <a v-else :href="item.link">{{ item.title }}</a>
          <ChevronIcon v-if="item.categories" direction="right" />
        </SlpButton>
        <li v-if="sectionIndex && sectionIndex == -1">
          <SlpButton
            variant="ghost"
            :href="data.login.link"
            class="nav-menu_icon"
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
          >
            <AssigneeIcon class="slp-mr-8" />
            {{ data.register.text }}
          </SlpButton>
        </li>
        <li v-if="sectionIndex && sectionIndex == -1">
          <SlpButton variant="ghost" class="nav-menu_icon">
            <SearchIcon class="slp-mr-8" />
            {{ data.search }}
          </SlpButton>
        </li>
        <li v-if="sectionIndex && sectionIndex === -1">
          <SlpButton
            variant="ghost"
            :href="data.sales.link"
            class="nav-menu_icon"
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
}
@import "~slippers-ui/dist/slippers-core.css";
</style>