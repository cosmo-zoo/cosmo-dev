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
    <input type="email" placeholder="メールアドレス" v-model="email" />
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
      email: "",
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
