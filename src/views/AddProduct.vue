<template>
  <div class="form">
    <h1 class="subheading grey--text">Add Product</h1>

    <v-container class="my-5">
      <v-card-title>
        <h2>Product</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-text-field label="Quantity" v-model="quantity"></v-text-field>
          <v-text-field label="Price" v-model="price"></v-text-field>
          <v-textarea label="Description" v-model="description"></v-textarea>
          <v-btn class="success mx-0 mt-3" @click="submit">Add Product</v-btn>
        </v-form>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      name: '',
      quantity: '',
      price: '',
      description: '',
    }
  },
  methods: {
    submit() {
      console.log(this.name, this.description)
    }
  }
}
</script>
