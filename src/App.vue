<template>
  <div>
    <div id="app">
      <div v-if="(isSignIn = true)" id="nav">
        |<router-link to="/thred">掲示板</router-link>|
        <!-- <router-link to="/index">授業情報検索</router-link>|
        <router-link to="/about">授業評価入力</router-link>| -->
        <router-link to="/signin">ログイン</router-link>|
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "Signin",
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
