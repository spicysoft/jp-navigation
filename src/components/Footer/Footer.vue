<script>
import { SlpContainer, SlpRow, SlpColumn, SlpTypography } from "slippers-ui";

import GitLabIcon from "../../assets/gitlab.vue";

import data from "./footer.json";

export default {
  name: "SlpFooter",
  components: {
    SlpContainer,
    SlpRow,
    SlpColumn,
    SlpTypography,
    GitLabIcon,
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
    emitPageSource() {
      let clickEvent = new Event("viewPageSource", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
    emitIDE() {
      let clickEvent = new Event("webIDE", { bubbles: true });
      document.dispatchEvent(clickEvent);
    },
  },
};
</script>

<template>
  <footer id="be-footer" class="footer">
    <SlpContainer>
      <SlpRow class="footer__navigation">
        <SlpColumn :cols="2" class="logo">
          <GitLabIcon />
        </SlpColumn>
        <SlpColumn :cols="10" class="content"><div></div></SlpColumn>
      </SlpRow>
      <div class="footer__cta">
        <div class="source">
          <p>
            GitLabさんの<a href="https://about.gitlab.com/handbook/">Handbook</a
            >を日本語翻訳しているサイトです
          </p>
          <SlpTypography tag="p">
            Git は、Software Freedom Conservancy
            の商標です。'GitLab'での使用はライセンスをうけています
          </SlpTypography>
          <p>
            <button
              @click="emitPageSource()"
              data-ga-name="page source"
              data-ga-location="footer"
            >
              ソースコード
            </button>
            を閲覧する —
            <button
              @click="emitIDE()"
              data-ga-name="web ide"
              data-ga-location="footer"
            >
              Web IDE
            </button>
            で編集する — ぜひ
            <a
              href="https://gitlab.com/tech4u_dev/jp-www-gitlab-com/blob/master/CONTRIBUTING.md"
              data-ga-name="please contribute"
              data-ga-location="footer"
              >手伝ってください</a
            >.
          </p>
          <p>&copy; {{ currentYear }} GitLab B.V.</p>
        </div>
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
    transition: 0.3s;

    &:hover {
      color: $color-accent-400;
    }
  }

  .footer__cta {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: $spacing-16;
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

    button {
      color: $color-text-50;
      text-decoration: underline;
      border: none;
      padding: 0;
      cursor: pointer;
      font-weight: $font-weight-bold;
      font-size: $text-body-3;
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
    font-family: "Inter", sans-serif !important;
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
