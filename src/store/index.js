import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    sessions: 100,
    globalGreeting: ''
  },
  mutations: {
    incrSessions(state) {
      state.sessions += 1
    },
    addGreeting(state, payload) {
      state.globalGreeting = payload
    }
  },
  actions: {
    VIEW_REMOTE_GREETING ({ commit }) {
      // using built in network lib
      fetch (
        'http://localhost:8081/api',
        { method: 'post' }
      )
      .then(res => res.json())
      .then(res => {
        // eslint-disable-next-line
        console.log('view actions => ', res)
        commit('addGreeting', res.data.join('-'))
      })
    }
  }
})

export default store
