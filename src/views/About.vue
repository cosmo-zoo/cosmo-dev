// 入力用タブ
<template>
  <div id="CommentForm">
    <div class="LessonClass">
      科目種別:
      <select v-model="selectClass">
        <option disabled value="">科目種別を選択</option>
        <option>専門科目</option>
        <option>教養科目</option>
        <option>高年次教養科目</option>
        <option>その他</option>
      </select>
    </div>
    <div class="LessonSeason">
      開講時期:
      <select v-model="season">
        <option disabled value="">開講時期を選択</option>
        <option>前期</option>
        <option>後期</option>
        <option>前期集中</option>
        <option>後期集中</option>
        <option>前期不定期</option>
        <option>後期不定期</option>
      </select>
    </div>
    <div class="LessonName">
      教科名:
      <input type="text" v-model="lesson" />
    </div>
    <!-- <span>Selected: {{ selectClass }}</span> -->
    <!-- <input type="" v-model="inputComment" /> -->
    <div class="LessonDifficulty">
      取得難易度:
      <select v-model="Difficulty">
        <option disabled value="">取得難易度を選択</option>
        <option>★★★★★(難)</option>
        <option>★★★★☆</option>
        <option>★★★☆☆</option>
        <option>★★☆☆☆</option>
        <option>★☆☆☆☆(易)</option>
      </select>
    </div>
    <div class="LessonProf">
      担当教員:
      <input type="text" v-model="prof" />
    </div>
    <div class="Points">
      <input type="checkbox" v-model="test" />テスト
      <input type="checkbox" v-model="report" />レポート
      <input type="checkbox" v-model="admission" />出席
      <input type="checkbox" v-model="sonota" />
      その他:
      <input type="text" v-model="kijun" />
    </div>
    <div class="LessonComment">
      コメント:
      <input type="text" v-model="coment" />
    </div>
    <button v-on:click="addcomment">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputComment: "",

      lessons: [
        {
          selectClass: "",
          tytle: "線形代数",
          Difficulty: "",
          test: true,
          report: false,
          admisson: false,
          sonota: "",
        },
      ],
    }
  },
  methods: {
    addcomment() {
      if (this.inputComment !== "") {
        const lessons = [
          {
            selectClass: "",
            Difficulty: "",
            prof: "",
            test: "",
            report: "",
            admisson: "",
            sonota: "",
            kijun: "",
          },
        ]
        lessons.push(this.inputComment)
      }
    },
  },
  DeleteComment(index) {
    this.todos.splice(index, 1)
  },
}
</script>

<style></style>
