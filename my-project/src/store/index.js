import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // vuex配置
  state: {
    userId: '',
  },
  mutations: {
    SET_USERID: (state, value) => {
      if (value === null) {
        state.userId = ''
        return
      }
      state.userId = value
      console.log(value, 'value')
      console.log(state, 'state')
    },
  },
  getters:{
    userId: state => state.userId,
  }
})

export default store
