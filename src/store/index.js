import { createStore } from "vuex";

//Create a state instance.

export const store = createStore({
  state: {
    todos: [
      { id: 1, title: "Todo one" },
      { id: 2, title: "Todo two" },
      { id: 3, title: "Todo three" },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {},
  mutations: {},
});
