<template>
  <h2>This is Dynamic Component</h2>
  <button class="btn btn-info" @click="toggle()">
    toggleDynamicComponent
  </button>
  <!-- Keep-alive keep somethings living in interface  -->
  <keep-alive> 
      <component :is="currentComponent"></component>
  </keep-alive>
</template>

<script>


import Showing from "./DangChieu.vue"
import SoonShowing from "./SapChieu.vue"
export default {
  components: {
    Showing,
    SoonShowing,
  },
  data(){
    return {
      currentComponent: 'Showing',
    }
  },
  methods:{
    toggle(){
      if(this.currentComponent === 'Showing'){
        this.currentComponent = 'SoonShowing'
      }else{
        this.currentComponent = 'Showing'
      }
    }
  }

}
</script>

<style>

</style>