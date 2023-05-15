<template>
  <div class="card text-center">
    <div class="card-header">
        <h1>Watcher</h1>
    </div>
    <div class="card-body">
      <h4 class="card-title">
        Count: 
        <span class="badge badge-success">
            {{ count }}
        </span>
      </h4>
      <p class="card-text">
        <button class="btn btn-success" @click="handleIncrement"> 
            Increment 1
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    setup(){
        const count = ref(0)
        const handleIncrement = () => {
            count.value+=1
        }


        watch(count, (newValue, oldValue) => {
            console.log(newValue, oldValue);
            count.value = newValue > 10 ? 1 : count.value++
        })
        return {
            count,
            handleIncrement
        }
    }
}
</script>

<style>

</style>