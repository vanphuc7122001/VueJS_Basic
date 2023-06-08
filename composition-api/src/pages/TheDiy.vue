<template>
  <div>
    <h1>Test diy</h1>
  {{ injectTest.state.count }}
  <button @click="injectTest.setCount()">Change count </button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){
      const injectTest = inject('diy')
      
      return {
        injectTest
      }
    }
}
</script>

<style>

</style>