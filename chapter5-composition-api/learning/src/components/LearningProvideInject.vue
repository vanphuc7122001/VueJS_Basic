<template>
  <div class="card text-center">
    <div class="card-body">
      <h1 class="card-title">
        Provide  / Inject
      </h1>
      <p class="card-text">{{ name }}</p>
    </div>
  </div>
</template>

<script>
    import { inject } from 'vue'

export default {
  setup(){
    const name = inject('userName')
    return {
      name
    }
  }
}
</script>

<style>

</style>