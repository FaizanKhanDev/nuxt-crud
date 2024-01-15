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

}
const mutations = {}


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
