<template>
  <div class="signup">
    <h1>アカウント登録</h1>
    <input type="email" placeholder="メールアドレス" v-model="username" />
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
      isSignIn: false,
    }
  },
  methods: {
    SignUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (accounts) => {
            alert("アカウントが作成されました。")
            this.$router.push("/home")
            console.log("success", accounts)
          },
          (error) => {
            alert(error.message)
          }
        )
    },
  },
}
</script>
