<template>
  <div class="products">
    <h1 class="subheading grey--text">Products</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="product in allProducts" :key="product.id">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt4">

            </v-responsive>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            </v-img>
            <v-card-text>
              <div class="subheading">{{ product.name }}</div>
              <div class="subheading">Product Brand</div>
              <div class="grey--text">{{ product.price }} SEK</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <span>Add to cart</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>  
    </v-container>
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
