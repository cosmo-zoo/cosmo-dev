<template>
  <div class="signup">
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
