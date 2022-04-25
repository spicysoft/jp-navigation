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
      <img
        class="test"
        src="https://i.guim.co.uk/img/media/d143e03bccd1150ef52b8b6abd7f3e46885ea1b3/0_182_5472_3283/master/5472.jpg?width=1020&quality=45&auto=format&fit=max&dpr=2&s=f10587e104d679498f5092e1bf4d158c"
      />
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

.test {
  max-width: 100%;
}
</style>
