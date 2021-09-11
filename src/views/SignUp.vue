<template>
  <div class="signup">
    <div id="container">
      <button v-on:click="home" id="item">ホーム</button>
      <button v-on:click="search" id="item">授業検索</button>
      <button v-on:click="eval" id="item">授業評価</button>
      <!-- 掲示板を導入する -->
      <button>掲示板</button>
    </div>
    <h1>アカウント登録</h1>
    <input type="text" placeholder="ユーザー名" v-model="username" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button>登録</button>
    <p>
      <router-link to="/signin">サインインはこちらからできます</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
