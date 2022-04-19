<template>
  <div id="app">
    <SlpFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SlpFooter from "./components/Footer/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    SlpFooter,
  },
});
</script>
