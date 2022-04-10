<template>
  <div>
    <h3>Users</h3>
    <div> 
      <p>{{allUsers}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Users",
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  }
}
</script>
