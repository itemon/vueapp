import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    sessions: 100
  },
  mutations: {
    incrSessions(state) {
      state.sessions += 1
    }
  }
})

export default store
