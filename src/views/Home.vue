<template>
  <!--サインイン後のホーム画面-->
  <div class="Home">
    <header>
      <div class="title"><img src="img/NARAKlogo.jpeg" alt="logo" /></div>

      <!-- サインインしたら表示をサインアウトに変える -->
      <!-- <button v-on:click="login" id="login">
        サインイン
      </button> -->
    </header>
    <body>
      <button v-on:click="home" id="a">ホーム</button>
      <button v-on:click="search" id="a">授業検索</button>
      <button v-on:click="eval" id="a">授業評価</button>
      <!-- 掲示板を導入する -->
      <button>掲示板</button>
      <!-- 優先順位は低いよ -->
      <!--  -->
      <!-- <div>新着授業評価情報</div> -->
    </body>
  </div>
</template>

<script>
export default {
  /*ログインボタンの表示の切り替え*/

  /*ボタンを押したらそれぞれのページに飛べるようにする*/
  methods: {
    /*ホームに飛ぶ関数*/
    home: function() {
      location.href = "Home";
    },
    /*新規登録ページに飛ぶ関数*/
    signup: function() {
      location.href = "SignUp";
    },
    /*ログインページに飛ぶ関数*/
    login: function() {
      location.href = "SignIn";
    },
    /*検索ページに飛ぶ関数*/
    search: function() {
      location.href = "About";
    },
    /*評価ページに飛ぶ関数*/
    eval: function() {
      location.href = "About";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  display: contents;
  width: 180px;
  height: 40px;
  line-height: 40px;
  margin: 12px;
  padding: 1px;
  display: block;
  background: rgb(7, 17, 17);
  text-align: center;
  align-content: center;
  border: 1px solid #dee2ce;
  color: #dee2ce;
  font-size: 100%;

  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  box-shadow: 0px 0px 0px 4px rgb(7, 17, 17);
  transition: all 0.5s ease;
}
</style>
