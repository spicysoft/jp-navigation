<template>
  <div id="app">
    <SlpNavigation />
    <SlpContainer>
      <h1 class="app-header">Navigation repository</h1>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel am
        sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex is
        magna lobortis iaculis eu a lorem. Pellentesque porta nulla a rhoncus
        lacinia. Mauris eleifend faucibus libero, eget dignissim leo tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel di
        sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex qu
        magna lobortis iaculis eu a lorem. Pellentesque porta nulla a rhoncus
        lacinia. Mauris eleifend faucibus libero, eget dignissim leo tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel di
        sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex qu
        magna lobortis iaculis eu a lorem. Pellentesque porta nulla a rhoncus
        lacinia. Mauris eleifend faucibus libero, eget dignissim leo tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel di
        sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex qu
        magna lobortis iaculis eu a lorem. Pellentesque porta nulla a rhoncus
        lacinia. Mauris eleifend faucibus libero, eget dignissim leo tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
      <p class="app-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam sit amet augue euismod bibendum id ac leo. Pellentesque diam nisi,
        ultrices ac lectus tempus, laoreet posuere purus. Sed vel nulla eget sem
        auctor auctor. Donec maximus maximus sem sed semper. Suspendisse a ex
        quis magna lobortis iaculis eu a lorem. Pellentesque porta nulla a
        rhoncus lacinia. Mauris eleifend faucibus libero, eget dignissim leo
        tempor id.
      </p>
    </SlpContainer>
    <SlpFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SlpFooter from "./components/Footer/Footer.vue";
import SlpNavigation from "./components/Navigation/Navigation.vue";
import { SlpContainer } from "slippers-ui";

export default Vue.extend({
  name: "App",
  components: {
    SlpContainer,
    SlpFooter,
    SlpNavigation,
  },
});
</script>

<style lang="scss">
.app-header {
  margin-top: 128px;
  margin-bottom: 64px;
}

.app-body {
  margin-bottom: 128px;
}
</style>
