<template>
  <div class="layout-padding">
    Poop
    <q-btn @click="getAccessToken">FB</q-btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods: {
    getAccessToken: () => {
      axios.get('graph.facebook.com')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
