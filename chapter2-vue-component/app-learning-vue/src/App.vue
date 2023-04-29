<template>
  <GlobalComponent></GlobalComponent>
  <HeaderComponent></HeaderComponent>
  <SlotBtnComponent>
      <h2>This is Slot Component</h2>
  </SlotBtnComponent>
  <ProductList></ProductList>
  <DynamicComponent></DynamicComponent>
  <FooterComponent>

  </FooterComponent>
</template>

<script>


import DynamicComponent from "./components/ComponentDynamic.vue"
import SlotBtnComponent from "./components/SlotBtnComponent.vue"
import HeaderComponent from "./components/layout/HeaderComponent.vue"
import FooterComponent from "./components/layout/FooterComponent.vue"
import ProductList from "./components/product/ProductList.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    ProductList,
    SlotBtnComponent,
    DynamicComponent
  }
  ,
  provide(){
    return {
      user: 'Đăng Văn Phúc'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
