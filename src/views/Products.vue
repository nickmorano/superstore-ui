<template>
  <div class="products">
    <h1 class="subheading grey--text">Products</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="product in allProducts" :key="product.id">
          <v-card flat>hello</v-card>
        </v-flex>
      </v-layout>  
    </v-container>

    <div> 
      <p>{{ allProducts }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Products",
  methods: {
    ...mapActions(['fetchProducts'])
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
}
</script>
