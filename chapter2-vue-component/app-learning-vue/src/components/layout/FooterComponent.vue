<template>
  <h1> {{message}} </h1>
</template>

<script>
export default {
    data(){
        return{
            message: "This is footer"
        }
    }
}
</script>

<style scoped>
    h1{
        color: blue;
    }
</style>