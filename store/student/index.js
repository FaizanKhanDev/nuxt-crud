import { getField, updateField } from 'vuex-map-fields'


const state = () => ({
  newStudent: {
    firstName: "",
    lastName: ""
  },

  studentList: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",

    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      id: 4,
      firstName: "Faizan",
      lastName: "Doe",
    },
    {
      id: 5,
      firstName: "Khizar",
      lastName: "Jhon",
    },
    {
      id: 6,
      firstName: "Bilal",
      lastName: "Doe",
    },
    {
      id: 3,
      firstName: "Jack",
      lastName: "Doe",
    }
  ],
});
const actions = {
  async createNewStudent({ state, commit, dispatch, getters }, params) {
    commit('setNewStudent', state.newStudent)
  },
  async editStudent({ state, commit, dispatch, getters }, params) {},
  async deleteStudent({ state, commit, dispatch, getters }, params) {},
  async updateStudent({ state, commit, dispatch, getters }, params) {}
}
const mutations = {
  setNewStudent(state, value) {
    state.studentList.push(value)
  }

}


const getters = {
  getField,

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}

