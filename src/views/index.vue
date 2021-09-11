// 入力用タブ
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div id="app">
      <div id="nav">
        |
        <router-link to="/">Home</router-link> |
        <!-- <router-link to="/index">授業情報検索</router-link>|
        <router-link to="/about">授業評価入力</router-link>| -->
        <router-link to="/thred">おたより</router-link>|
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
}
</script>
