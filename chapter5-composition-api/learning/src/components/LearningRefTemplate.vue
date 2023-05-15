<template>
    <div class="card text-center">
    <div class="card-header">
        <h1>Ref template</h1>
    </div>
    <div class="card-body">
        <input type="text" value="2" id="age" ref="tagInput">
        <br>
        <button class="btn btn-info" @click="handleSubmit">Click</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const tagInput = ref(null)
        const handleSubmit = () => {
            console.log(tagInput.value.id);
        }
        return {
            tagInput,
            handleSubmit
        }
    }
}
</script>

<style>

</style>