import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      isSell: true,
      isLoggedIn: false,
      lang: 'ru',
      users: []
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SWITCH_TABS(state) {
      state.isSell = !state.isSell
    },
    SET_USERS(state, users) {
      state.users = users
    },
    LOG_IN(state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    async getUsers() {
      await axios.get('http://localhost:3000/users')
      .then((users) => {
        console.log(users.data);
        this.commit('SET_USERS', users.data)
      })
    }
  }
})

export default store