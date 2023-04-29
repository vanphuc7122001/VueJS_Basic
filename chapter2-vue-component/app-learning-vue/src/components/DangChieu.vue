<template>
  <h2>Đang Chiếu</h2>
  <label for="showing">Message</label>
  <input type="text" id="showing" v-model="msg">
  <p> {{msg}} </p>
</template>

<script>
export default {
  data(){
    return{
      msg: ''
    }
  }
}
</script>

<style>

</style>