<template>
  <div class="signin">
    <h1>サインイン</h1>

    <input type="email" placeholder="メールアドレス" v-model="email" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button @click="signIn">サインイン</button>
    <p>
      アカウント登録はしましたか? <br />
      <router-link to="/signup"
        >ここをクリックしてアカウント登録をしてください</router-link
      >
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Signin",
  data() {
    return [
      {
        email: "",
        password: "",
        isSignIn: false,
      },
    ]
  },
  methods: {
    signIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (accounts) => {
            alert("サインイン成功です。")
            this.$router.push("/home")
            console.log("success", accounts)
            this.isSignIn = true
          },

          (error) => {
            alert(error.message)
          }
        )
    },
  },
}
</script>
