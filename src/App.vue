<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/About">Search</router-link> |
      <router-link to="/SignUp">SignUp</router-link> |
      <router-link to="/SignIn">SignIn</router-link> | -->

      <router-link to="/Home">
        welcome to NARAK
        <p>Click to Start</p>
      </router-link>
      <router-link to="/Home"></router-link>
      <router-link to="/About"></router-link>
      <router-link to="/SignUp"></router-link>
      <router-link to="/SignIn"></router-link>
      <!-- 掲示板 -->
      <router-link to="/thred"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
