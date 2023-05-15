<template>
  <h1>This is homepage</h1>

  <p>ref string {{ firstName }}</p>

  <p>reactive person object {{ person.name }}</p>

  <p>reactive person object {{ person.weight }}</p>
  
  <p>ref object {{ job.salary }}</p>

  <button @click="handleClick">Click</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    setup(){
        let firstName = ref('Dang Van Phuc')
        const person = reactive({ // can not itself => object to new object
            name: "Name Person",
            age: 20
        })

        console.log(firstName);


        let job = ref({
            salary : 20
        })

        const handleClick = () => {
            firstName.value = 'Dang '
            console.log(person);
            person.name = 'car of dang van phuc'
            person.weight = 20

            job.value.salary = 100

        }
        return {
            firstName,
            handleClick,
            person,
            job
        }
    }
}
</script>

<style>

</style>