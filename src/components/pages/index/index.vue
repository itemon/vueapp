<template>
  <div>
    <div>this is index page {{ greeting }}</div>
    <div>
      <router-link to="/list">head to list page</router-link>
      <div class="sec">
        <div>sessions: {{ sessions }}</div>
        <button @click="incr">increment sessions</button>
      </div>
      <div class="sec">
        <div>sessions: {{ globalGreeting || 'No global greeting' }}</div>
        <button @click="viewGreeting">View Remote Greeting</button>
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
    ...mapState(['sessions', 'globalGreeting'])
  },
  methods: {
    incr () {
      // eslint-disable-next-line
      console.log('before incrementing')
      this.$store.commit('incrSessions')
    },
    viewGreeting () {
      // eslint-disable-next-line
      console.log('before view remote greeting')
      this.$store.dispatch('VIEW_REMOTE_GREETING')
    }
  }
}
</script>
