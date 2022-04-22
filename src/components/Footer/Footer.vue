<script>
import { SlpContainer, SlpRow, SlpColumn, SlpTypography } from "slippers-ui";

import CCIcon from "../../assets/creative-commons.vue";
import GitLabIcon from "../../assets/gitlab.vue";
import SlpTwitter from "../../assets/fa-twitter.vue";
import SlpFacebook from "../../assets/fa-facebook.vue";
import SlpYoutube from "../../assets/fa-youtube.vue";
import SlpLinkedin from "../../assets/fa-linkedin.vue";

import data from "./footer.json";

export default {
  name: "SlpFooter",
  components: {
    SlpContainer,
    SlpRow,
    SlpColumn,
    SlpTypography,
    CCIcon,
    GitLabIcon,
    SlpTwitter,
    SlpFacebook,
    SlpYoutube,
    SlpLinkedin,
  },
  data() {
    return {
      content: data,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    emitOneTrustEvent() {
      let clickEvent = new Event("oneTrustShowSettings", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
  },
};
</script>

<template>
  <footer class="footer">
    <SlpContainer>
      <SlpRow class="footer__navigation">
        <SlpColumn :cols="2" class="logo">
          <GitLabIcon />
        </SlpColumn>
        <SlpColumn :cols="10" class="content">
          <div v-for="item in content" :key="item.heading" class="column">
            <h3 class="column__heading">
              {{ item.heading }}
            </h3>
            <ul class="links">
              <li
                v-for="link in item.links"
                :key="link.name"
                class="links__item"
              >
                <button
                  v-if="link.is_actually_onetrust_button"
                  :id="link.id"
                  class="ot-sdk-show-settings"
                  @click="emitOneTrustEvent()"
                >
                  {{ link.name }}
                </button>
                <a
                  v-else
                  :href="link.url"
                  class="link"
                  :data-ga-name="link.name"
                  data-ga-location="footer"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </SlpColumn>
      </SlpRow>
      <div class="footer__cta">
        <div class="source">
          <SlpTypography tag="p">
            Git is a trademark of Software Freedom Conservancy and our use of
            'GitLab' is under license
          </SlpTypography>
          <p>
            View
            <a
              href="https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/sites/marketing/source/index.html.haml"
              data-ga-name="page source"
              data-ga-location="footer"
              >page source</a
            >
            — Edit in
            <a
              href="https://gitlab.com/-/ide/project/gitlab-com/www-gitlab-com/edit/master/-/sites/marketing/source/index.html.haml"
              data-ga-name="web ide"
              data-ga-location="footer"
              >Web IDE</a
            >
            — please
            <a
              href="https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/CONTRIBUTING.md"
              data-ga-name="please contribute"
              data-ga-location="footer"
              >contribute</a
            >.
            <CCIcon />
          </p>
          <p>&copy; {{ currentYear }} GitLab B.V.</p>
        </div>
        <ul class="social__links">
          <li class="social__links--item">
            <a
              href="https://twitter.com/gitlab"
              data-ga-name="twitter"
              data-ga-location="footer"
            >
              <SlpTwitter class="social__links--icon" />
            </a>
          </li>
          <li class="social__links--item">
            <a
              href="https://www.facebook.com/gitlab"
              data-ga-name="facebook"
              data-ga-location="footer"
            >
              <SlpFacebook class="social__links--icon" />
            </a>
          </li>
          <li class="social__links--item">
            <a
              href="https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg"
              data-ga-name="youtube"
              data-ga-location="footer"
            >
              <SlpYoutube class="social__links--icon" />
            </a>
          </li>
          <li class="social__links--item">
            <a
              href="https://www.linkedin.com/company/gitlab-com"
              data-ga-name="linkedin"
              data-ga-location="footer"
            >
              <SlpLinkedin class="social__links--icon" />
            </a>
          </li>
        </ul>
      </div>
    </SlpContainer>
  </footer>
</template>

<style lang="scss" scoped>
@import "~slippers-ui/src/styles/_variables.scss";
@import "~slippers-ui/src/styles/base.scss";
@import "~slippers-ui/dist/slippers-core.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

a:not(.slp-btn) {
  text-decoration: none;
  color: $color-text-link-100;
}

p > a:not(.slp-btn),
li a:not(.slp-btn) {
  color: $color-text-link-100;

  &:hover {
    text-decoration: underline;
  }
}

*,
::before,
::after {
  box-sizing: border-box;
}

.footer {
  background-color: $color-surface-700;
  color: $color-text-50;
  padding: 40px $spacing-16;

  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .logo {
    margin: 0 auto 0 0;
  }

  .content {
    display: flex;
    margin-top: $spacing-48;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
  }

  .column {
    max-width: 130px;
    width: 100%;
    flex: 1 0 auto;
    min-width: 2rem;

    &__heading {
      margin-bottom: $spacing-16;
      font-size: $font-size-default;
      font-weight: $font-weight-bold;
    }
  }

  .links {
    &__item {
      margin-bottom: $spacing-8;
    }
  }

  .link {
    font-size: $text-body-2;
    color: $color-text-50;
  }

  .social__links--icon {
    width: 24px;
    height: auto;
    color: $color-text-50;
  }

  .footer__cta {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: $spacing-96;
  }

  .source {
    p {
      margin-bottom: $spacing-8;
      font-size: $text-body-3;
    }

    a {
      font-weight: $font-weight-bold;
      color: $color-text-50;
      text-decoration: underline;
    }

    img {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
    }
  }

  .social__links {
    display: flex;
    align-items: center;
    margin-top: $spacing-32;
    width: 100%;
    gap: 15px;
  }

  // OneTrust button in footer
  #ot-sdk-btn.ot-sdk-show-settings,
  #ot-sdk-btn.optanon-show-settings {
    color: $color-text-50 !important;
    border: 0 !important;
    border: none !important;
    padding: 0 !important;
    font-size: 14px !important;
    font-family: "Source Sans Pro", sans-serif !important;
    text-align: left !important;

    &:hover {
      text-decoration: underline;
      background: inherit;
    }
  }
}

@media (min-width: 768px) {
  .footer {
    .column {
      max-width: 160px;
    }
  }
}

@media (min-width: 1220px) {
  .footer {
    &__navigation {
      flex-direction: row;
    }

    .content {
      margin-top: 0;
    }
  }
}

@media (min-width: 829px) {
  .footer {
    .footer__cta {
      align-items: center;
    }

    .social__links {
      margin-top: 0;
      width: inherit;
    }
  }
}
</style>
