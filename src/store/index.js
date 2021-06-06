import { createStore } from "vuex";
import axios from "axios";

//Create a state instance.
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
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
        const res = await axios.get(BASE_URL);
        commit("setTodos", res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async addTodo({ commit }, title) {
      try {
        const res = await axios.post(BASE_URL, { title, complete: false });
        commit("newTodo", res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async deleteTodo({ commit }, id) {
      try {
        await axios.delete(`${BASE_URL}/${id}`); //will be problem!!!
        commit("removeTodo", id);
      } catch (err) {
        console.log(err.message);
      }
    },
    async filterTodos({ commit }, amount) {
      try {
        const res = await axios.get(`${BASE_URL}?_limit=${amount}`);
        commit("filterTodos", res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    filterTodos: (state, todos) => (state.todos = todos),
  },
});
