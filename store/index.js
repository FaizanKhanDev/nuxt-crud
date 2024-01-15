import Vue from 'vue'
import Vuex from 'vuex'
import Student from './student'

Vue.use(Vuex)


const store = () => new Vuex.Store({
  modules:{
    'student':Student
  },

  state:{
    firstName:"John",
  },

  actions:{},

  mutations:{},

  getters:{},
});

export const strict = false;
export default store;
