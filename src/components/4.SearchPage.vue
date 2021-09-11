<template>
  <!--授業検索-->
  <div class="Home">
    <header>
      <div class="title">Nalak</div>
      <button id="search">検索</button>
      <button id="evaluation">評価</button>
      <button id="login">ログイン</button>
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
<style scoped></style>
