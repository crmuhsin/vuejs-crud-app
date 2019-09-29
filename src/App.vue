<template>
  <div id="app">
    <!-- <h1 class="text-center">Employee Inventory</h1> -->
    <!-- <UI></UI> -->
    <Time></Time>
    <!-- <my-chart></my-chart> -->
  </div>
</template>

<script>
import Time from "./components/Time.vue";
// import UI from "./components/UI.vue";
// import myChart from "./components/myChart.vue";

export default {
  name: "app",
  components: {
    // myChart,
    // UI,
    Time
  }
};
</script>

<style>
#app {
  margin-top: 50px;
}
</style>
