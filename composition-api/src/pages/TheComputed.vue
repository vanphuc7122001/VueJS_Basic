<template>
  <h1>Learning vue computed</h1>
  <br>
  <p>Customers</p>
  <input type="text" v-model="searchText">
  <ul>
    <li v-for="(customer, index) in customerFiled" :key="index"> {{ customer }}</li>
  </ul>
</template>

<script>
import { reactive,ref, watch, watchEffect, computed } from 'vue'
export default {
  setup(){
    const customers = reactive([
      'Phuc', 'Truong', 'Hieu'
    ])
    
    let searchText = ref('')

    watch(searchText , (newValue, oldValue) =>{
      console.log('New value: ' + newValue);
      console.log('Old value: ' + oldValue);
    })

    watchEffect( () => {
      if(searchText.value){
        console.log('Having value: ' + searchText.value);
      }
      else{
        console.log('No value: ' + searchText.value);
      }
    })

    let customerFiled = computed( () => customers.filter( customer => customer.toLocaleLowerCase().includes(searchText.value)))

    return {
      customers,
      searchText,
      customerFiled
    }
  }

}
</script>

<style>

</style>