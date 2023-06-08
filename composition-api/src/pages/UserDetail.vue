<template>
  <div>
    <h1>Object contain userid : {{$route.params}}</h1>
    <p>Name : {{ user.id }}</p>
    <p>Age : {{ user.age }}</p>
    <img :src="user.avatar" alt="Ảnh" height="100">
    <p>Description : {{ user.description }}</p>
  </div>
</template>

<script>
import {ref } from 'vue';
import { useRoute } from 'vue-router'

import userService from '../services/user-service'



export default {
  setup(){
    const route = useRoute();
    const user = ref({});

    console.log(route.params.id);    

    const fetchUser = async () => {
        const res = await userService.getUser(route.params.id)
        user.value = {...res}
        console.log('run');
        console.log(res);
    }

    fetchUser()

    return {
      user
    }

  }
}
</script>

<style>

</style>