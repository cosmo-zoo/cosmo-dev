<!---<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>--->

<template>
  <!--授業検索-->
  <div class="Search">
    <header>
      <div class="title">Nalak</div>
      <div id="container">
        <button v-on:click="home" id="item">ホーム</button>
        <button v-on:click="search" id="item">授業検索</button>
        <button v-on:click="eval" id="item">授業評価</button>
        <!-- 掲示板を導入する -->
        <button>掲示板</button>
      </div>
      <!-- <button id="search">検索</button>
      <button id="evaluation">評価</button>
      <button id="login">ログイン</button> -->
    </header>
    <body>
      <button v-on:click="Show_Post" id="">授業検索</button>
      <div>条件検索</div>
      <button v-on:click="Show_Evaluation" id="">開講時期</button>
      <button v-on:click="Show_Evaluation" id="">科目</button>
    </body>
  </div>
</template>

<script>
{
  /*ボタンを押したらそれぞれのページに飛べるようにする*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
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
button:hover {
  color: beige;
}
</style>
