<template>
  <div id="app">
    <SlpNavigation />
    <h1 class="app-header">Navigation repository</h1>
    <p class="app-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel diam
      sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
      ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
      auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex quis
      magna lobortis iaculis eu a lorem. Pellentesque porta nulla a rhoncus
      lacinia. Mauris eleifend faucibus libero, eget dignissim leo tempor id.
    </p>
    <SlpFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SlpFooter from "./components/Footer/Footer.vue";
import SlpNavigation from "./components/Navigation/Navigation.vue";

export default Vue.extend({
  name: "App",
  components: {
    SlpFooter,
    SlpNavigation,
  },
});
</script>

<style lang="scss">
.app-header {
  margin-top: 32px;
  margin-bottom: 64px;
}

.app-body {
  margin-bottom: 128px;
}
</style>
