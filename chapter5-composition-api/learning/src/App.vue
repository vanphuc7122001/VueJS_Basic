<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <LearningReactivity />
    <div class="my-3">
      <LearningProps image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_36.jpg" />
    </div>
    <div class="mt-3">
      <LearningMethod />
    </div>
    <div class="mt-3">
      <LearningComputed />
    </div>
    <div class="mt-3">
      <LearningWatch />
    </div>
    <div class="mt-3">
      <LearningRefTemplate />
    </div>
    <div class="mt-3">
      <LearningProvideInject />
    </div>
    <div class="mt-3">
      <LearningLifeCycle />
    </div>
  </div>
</template>

<script>

import LearningReactivity from "./components/LearningReactivity.vue";
import LearningProps from "./components/LearningProps.vue";
import LearningMethod from "./components/LearningMethod.vue";
import LearningComputed from "./components/LearningComputed.vue";
import LearningWatch from "./components/LearningWatch.vue";
import LearningRefTemplate from "./components/LearningRefTemplate.vue";
import LearningProvideInject from "./components/LearningProvideInject.vue";
import LearningLifeCycle from "./components/LearningLifeCycle.vue";
import { provide, ref } from 'vue'
export default {
  name: 'App',
  components: {
    LearningReactivity,
    LearningProps,
    LearningMethod,
    LearningComputed,
    LearningWatch,
    LearningRefTemplate,
    LearningProvideInject,
    LearningLifeCycle
  },
  setup(){
    const userName = ref('Dang Van Phuc')
    provide('userName', userName.value)

    return {
      userName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
