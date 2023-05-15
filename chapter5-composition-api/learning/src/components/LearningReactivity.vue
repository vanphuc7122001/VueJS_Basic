<template>
  <h1>Reactivity</h1>
  <p>{{ userName }}</p>
  <p>{{ user.name }}</p>
  <p>{{ uAge }}</p>
</template>

<script>
import { ref,reactive, isReactive  } from 'vue'
export default {
    setup(){
        let userName = ref('Dang Van Phuc')

        const user = reactive({
            name: "Pham Thanh Phong",
            age: 18
        })

        console.log("Able reactivity of user.name", isReactive(user.name)); // check watch user.name having able reactivity? 
        console.log("Able reactivity of user", isReactive(user)); // Check watch user having able reactivity? 

        setTimeout( () => {
            userName.value = 'Dang Van Phong'
            user.name = 'Pham Thanh Hoang',
            user.age = 20
        }, 2000)
        return {
            userName,
            user,
            uAge: user.age // this row not able reactivity
        }
    }
}
</script>

<style>

</style>