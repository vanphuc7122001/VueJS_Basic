<template>
  <h1>The params default</h1>
</template>

<script>
export default {
    props: {
        theme: {
            default: "light"
        }
    },  
    setup(props, context){
        console.log('Prop' , props.theme);
        console.log('Context' , context.emit);
    }
}
</script>

<style>

</style>