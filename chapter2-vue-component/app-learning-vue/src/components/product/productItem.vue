<template>
  <div v-if="proItem" class="card">
    <div class="card-header">{{price}}</div>
    <div class="card-body">
      <img
        :src="proItem.urlImage"
        alt=""
        class="card-img"
      />
      <p> {{localUser}} </p>
    </div>
    <div class="card-footer">
      <h6>{{proItem.nameProduct}}</h6>
      <button class="btn btn-primary w-100" @click="handleSelected(proItem)">Select</button>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    handleSelected(proItem){
      this.$emit("custom-handle-selected", proItem)
    },
  }
  ,
    props:{
        proItem: {
            type: Object
        },
        price: {
          type: [String, Number],
          default: '30.000$',
          validator(value){
            if(value.length > 3) return true
            else  return false
          }
        }
    },
  // cách 1
  inject: {
    localUser:{
      from: 'user'
    }
  },
  // cách 2
  //inject: ['user']
};
</script>

<style>
</style>