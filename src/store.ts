import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFullScreen: false,
    currentBar: 'Weather Charts',
  },
  mutations: {
    updateFullScreen: state=> {
      state.isFullScreen = !state.isFullScreen;
    },
    setSidebar (state, newBar) {
      state.currentBar = newBar;
    }
  },
  actions: {

  }
})
