// store.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    isAdminLoggedIn: false,
  },
  mutations: {
    setAdminLoggedIn(state, value) {
      state.isAdminLoggedIn = value;
    }, 
  },
  actions: {
    loginAdmin({ commit }, { username, password }) {
      const adminCredentials = {
        username: 'Aryan',
        password: '1234',
      };

      if (username === adminCredentials.username && password === adminCredentials.password) {
        commit('setAdminLoggedIn', true);
        return true;
      } else {
        return false;
      }
    },
  },
  getters: {
    isAdminLoggedIn: (state) => state.isAdminLoggedIn,
  },
});
