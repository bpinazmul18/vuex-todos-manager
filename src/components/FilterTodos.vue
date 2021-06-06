<template>
  <div>
    Filter Todos:
    <select @change="onchange" v-model="amount">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      amount: 200,
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
    onchange() {
      this.filterTodos(this.amount);
    },
  },
};
</script>

<style scoped>
select {
  margin-top: 24px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
