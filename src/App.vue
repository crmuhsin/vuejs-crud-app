<template>
  <div id="app">
    <h1 class="text-center">Employee Inventory</h1>
    <UI></UI>
  </div>
</template>

<script>
import UI from "./components/UI.vue";

export default {
  name: "app",
  components: {
    UI
  }
};
</script>

<style>
#app {
  margin-top: 50px;
}
</style>
