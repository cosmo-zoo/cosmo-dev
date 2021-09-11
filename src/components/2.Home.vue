<template>
  <!--ホーム画面-->
  <div class="Home">
    <header>
      <div class="title">Nalak</div>
      <button id="search">検索</button>
      <button id="evaluation">評価</button>
      <button id="login">ログイン</button>
    </header>
    <body>
      <button v-on:click="Show_Post" id="">授業検索</button>
      <button v-on:click="Show_Evaluation" id="">授業評価</button>
      <div>掲示板</div>
      <div>新着授業評価情報</div>
    </body>
  </div>
</template>

<script>
{
  /*ボタンを押したらそれぞれのページに飛べるようにする*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
