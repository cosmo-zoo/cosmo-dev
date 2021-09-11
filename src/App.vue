<template>
  <div id="app">
    <router-view />
    <router-link to="/Home"></router-link>
    <router-link to="/About"></router-link>
    <router-link to="/SignUp"></router-link>
    <router-link to="/signin"></router-link>
    <router-link to="/thred"></router-link>
    <div v-if="(isSignIn = true)">
      <div id="nav">
        <router-link to="/Home">
          welcome to NARAK
          <p>Click to Start</p>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div>ログインしてください</div>
      <router-link to="/signin">ログイン画面はこちら</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return (
      {
        username: "",
        password: "",
        isSignIn: false,
      },
      { username: "sawa", password: "hum", isSignIn: true }
    )
  },
  created: function () {
    // ログインしているかどうか判別 isSignInの結果を全部でやる
    // if (this.isSignIn === true) {
    // } else {
    // }
  },
}
</script>

=======

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
