<template>
  <div>
    <v-toolbar dark>
        <v-toolbar-title
          @click="redirectToHome">Integration
        </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text @click="redirectToUsers">Users</v-btn>
        <v-btn text @click="redirectToProducts">Products</v-btn>
        <v-btn text @click="redirectToAddProduct">Add Product</v-btn>
        <v-btn text @click="redirectToLogin">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {

  computed: {
  },

  methods: {
    redirectToHome () {
      this.$router.push('/')
    },
    redirectToUsers () {
      this.$router.push('/users')
    },
    redirectToProducts () {
      this.$router.push('/products')
    },
    redirectToAddProduct () {
      this.$router.push('/addProduct')
    },
    redirectToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
