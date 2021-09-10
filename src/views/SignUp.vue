<template>
  <div class="signup">
    <h1>アカウント登録</h1>
    <input type="user" placeholder="ユーザー名" v-model="username" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button v-on:click="SignUp()" class="SignUp">登録</button>
    <p>
      <router-link to="/signin">サインインはこちらからできます</router-link>
    </p>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    SinUp: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => {
            alert("サインイン成功です。")
            this.$router.push("/home")
            console.log("success", user)
          },
          (error) => {
            alert(error.message)
          }
        )
    },
  },
}
</script>
