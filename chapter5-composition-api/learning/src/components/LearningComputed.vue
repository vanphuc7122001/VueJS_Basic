<template>
  <div class="card">
    <h1>Computed</h1>
    <div class="card-body">
      <div class="form-group">
        <label for="">FirstName</label>
        <!-- <input type="text" class="form-control" @input="setFirstName"> -->
        <input type="text" class="form-control" v-model="firstName">
      </div>
      <div class="form-group">
        <label for="">LastName</label>
        <!-- <input type="text" class="form-control" @input="setLastName"> -->
        <input type="text" class="form-control" v-model="lastName">
      </div>
    </div>
    <div class="card-footer">
      <h3 class="text-info">Ho va Ten : {{ fullName }}</h3>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup(){
    let firstName = ref('')
    let lastName = ref('')

    const setFirstName = (event) => {
      firstName.value = event.target.value
    }

    const setLastName = (event) => { // method
      lastName.value = event.target.value
    }

    const fullName = computed( () => lastName.value + " " + firstName.value) // computed


    return {
      setFirstName,
      setLastName,
      fullName,
      firstName, // having to return values using v-modle
      lastName
    }
  }
}
</script>

<style>

</style>