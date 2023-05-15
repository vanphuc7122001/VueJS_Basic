<template>
  <div class="card text-center">
    <div class="card-body">
      <h1 class="card-title">Life Cycle Hooks</h1>
      <p class="card-text">Body</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount,onMounted } from 'vue';
export default {
  setup(){
    console.log('beforeCreate and created');
    onBeforeMount( () => {
      console.log('onBeforeMount');
    })
    onMounted( () => {
      console.log('onMounted');

    })
  }
}
</script>

<style>

</style>