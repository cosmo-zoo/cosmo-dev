<template>
  <!--サインイン後のホーム画面-->
  <div class="Home">
    <header>
      <!-- サインインしたら表示をサインアウトに変える -->
      <!-- <button v-on:click="login" id="login">
        サインイン
      </button> -->
      <!-- <nav>
        <a href="">login</a>
      </nav> -->
    </header>
    <body>
      <img v-bind:href="imgPath" src="@/assets/img/logo.png" alt="logo" />

      <div id="container">
        <!-- <button v-on:click="home" id="item">ホーム</button> -->
        <button v-on:click="search" id="item">授業検索</button>
        <button v-on:click="eval" id="item">授業評価</button>
        <!-- 掲示板を導入する -->
        <button v-on:click="thred" id="item">掲示板</button>
      </div>
      <!-- 優先順位は低いよ -->
      <!--  -->
      <!-- <div>新着授業評価情報</div> -->
    </body>
    <footer>
      <p>copyright 2021 cosmo-zoo</p>
    </footer>
  </div>
</template>

<script>
{
  /*画像をモジュールとして読み込む*/
  ("@/assets/img/logo.png");
}

export default {
  /*ログインボタンの表示の切り替え*/

  /*ボタンを押したらそれぞれのページに飛べるようにする*/
  methods: {
    /*ボタンの色変更*/
    color1: function() {
      document.bgColor = "rgb(7, 17, 17)";
      document.fgColor = "#dee2ce";
    },
    color2: function() {
      document.bgColor = "rgb(7, 17, 17,50)";
      document.fgColor = "#dee2ce";
    },

    /*ホームに飛ぶ関数*/
    home: function() {
      location.href = "Home";
    },
    /*掲示板のページに飛ぶ関数*/
    thred: function() {
      location.href = "thred";
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
img {
  width: 300px;
  height: 120px;
}

button {
  font-family: "ヒラギノ丸ゴシック";
  display: inline-block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  margin: 12px;
  padding: 1px;

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
