import { createStore } from "vuex";
import axios from "axios";

//Create a state instance.

export const store = createStore({
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        commit("setTodos", res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
  },
});
