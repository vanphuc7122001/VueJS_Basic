<template>
<header>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Product</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</header>
</template>

<script>
export default {
    data(){
        return{
            message: "This is header"
        }
    }
}
</script>

<style scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: red;
        z-index: 1;
    }
    ul{
        margin-top: 8px;
        list-style: none;
    }
    li{
        display: inline-block;
        border: 1px solid red;
        border-radius: 3px;
        margin: 0 8px;
        
    }
    a{
        text-decoration: none;
        color: #000;
        display: block;
    }
    li:hover a{
        color: white;
        background-color: black;
    }
</style>