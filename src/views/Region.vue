<template>
  <div>
    <h3>Regions</h3>
    <div>{{regions}}</div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['regions']),
  },
}
</script>
