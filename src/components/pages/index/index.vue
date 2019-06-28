<template>
  <div>
    <div>this is index page {{ greeting }}</div>
    <div>
      <router-link to="/list">head to list page</router-link>
      <div class="sec">
        <div>sessions: {{ sessions }}</div>
        <button @click="incr">increment sessions</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec {
  margin: 16px 0 0;
  border-top:1px solid silver;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data: function () {
    return {
      greeting: 1,
    }
  },
  computed: {
    ...mapState(['sessions'])
  },
  methods: {
    incr () {
      // eslint-disable-next-line
      console.log('before incrementing')
      this.$store.commit('incrSessions')
    }
  }
}
</script>
