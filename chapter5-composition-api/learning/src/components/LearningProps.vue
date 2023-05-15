<template>
  <h1>Props</h1>
  <img :src="image" alt="" class="img-thumbnail">
</template>

<script>
import { toRefs } from 'vue'
export default {
    props:{
        image: {
            type: String
        }
    },
    setup(props){
        const {image} = toRefs(props)
        console.log(image.value);
    }
}
</script>

<style>

</style>