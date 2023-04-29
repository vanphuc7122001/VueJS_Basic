<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div
          v-for="(productItem, index) in productItems"
          class="col-3"
          :key="index"
        >
          <productItem
            :proItem="productItem"
            :price="'20.000$'"
            @custom-handle-selected="handleSelect"
          ></productItem>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import productItem from "./productItem.vue";

export default {
  methods: {
    handleSelect(proItem){
        console.log('work ' + proItem.nameProduct);
    }
  },
  components: {
    productItem,
  },
  data() {
    return {
      productItems: [
        {
          urlImage:
            "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg.webp",
          nameProduct: "MacBook Air M1 13 inch 2020",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/280x280/ts/product/5d/08/7e/14864d6c4a480ec6ea94cd8d299a62b0.jpg.webp",
          nameProduct: "MacBook Pro M2 13 2022",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/750x750/ts/product/02/da/99/365a3bfac744b8b1a75a2b007c79a9a3.png.webp",
          nameProduct: "MacBook Air M2 2022",
        },
        {
          urlImage:
            "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg.webp",
          nameProduct: "MacBook Air M1 13 inch 2020",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  min-height: 70vh;
}
</style>