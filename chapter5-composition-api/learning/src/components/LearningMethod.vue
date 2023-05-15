<template>
  <h1>Method</h1>
  {{ user.name }}
  {{ userAge }}
  <br>
  <button class="btn btn-info" @click="handleSubmit">Change</button>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup(){
    const user = reactive({
      name: "Dang Van Phuc"
    })
    
    const userAge = ref(18)

    const handleSubmit = () => {
      user.name = 'Vo Van Thach'
      userAge.value = 20
    }

    return {
      user,
      userAge,
      handleSubmit
    }
  }
}
</script>

<style>

</style>