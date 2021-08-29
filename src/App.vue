<template>
  <div id="app">
    <Home></Home>
    <ClassSearch></ClassSearch>
  </div>
</template>

<script>
import Home from "./components/2.Home.vue";
import ClassSearch from "./components/4.SearchPage.vue";

export default {
  name: "App",
  components: {
    Home,
    ClassSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
