<template>
  <div class="ui container">
    <div class="ui header">
      <div class="content">授業を評定する</div>
      <div class="sub header">できる限り正確な情報を記載してください。</div>
    </div>
    <!-- <form class="ui form"> -->
    <div class="field0">
      <label>講義名</label>
      <div class="ui icon input">
        <input
          placeholder="例：奈良女子大学入門"
          type="text"
          tabindex="0"
          class="prompt"
          autocomplete="off"
          value=""
          v-model="subject"
          required
        />
      </div>
    </div>
    <div class="field1">
      <label>教員名</label>
      <div>
        教員が複数人担当している場合や、不明な場合は空欄でかまいません。
      </div>
      <div class="ui icon input">
        <input
          v-model="teacher"
          placeholder="例:山田真紀"
          type="text"
          value=""
          required
        />
      </div>
    </div>
    <div class="field2">
      <label>科目区分</label>
      <div>
        <select required v-model="kamoku">
          <option value=""></option>
          <option value="全学部">全学共通科目&#40;教養科目含む&#41;</option>
          <option value="文学部">文学部専門科目</option>
          <option value="理学部">理学部専門科目</option>
          <option value="生活環境学部">生活環境学部専門科目</option>
          <option value="その他">その他・不明</option>
        </select>
      </div>
    </div>
    <div class="field3">
      <label>年度</label>
      <div>
        <select v-model="year">
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021" selected>2021</option>
        </select>
      </div>
    </div>
    <div class="field4">
      <label>開講時期</label>
      <div>
        <select required v-model="season">
          <option value=""></option>
          <option value="前期">前期</option>
          <option value="後期">後期</option>
          <option value="不定期">不定期</option>
        </select>
      </div>
    </div>
    <div class="field5">
      <label>採点方法</label>
      <div class="saiten">
        <input
          type="checkbox"
          id="report"
          value="レポート"
          v-model="checkedNames"
        />
        <label for="report">レポート</label>
        <input
          type="checkbox"
          id="attend"
          value="出席"
          v-model="checkedNames"
        />
        <label for="attend">出席</label>
        <input
          type="checkbox"
          id="test"
          value="テスト"
          v-model="checkedNames"
        />
        <label for="test">テスト</label>
        <input
          type="checkbox"
          id="presentation"
          value="プレゼンテーション"
          v-model="checkedNames"
        />
        <label for="presentation">プレゼンテーション</label>
        <input
          type="checkbox"
          id="other"
          value="その他"
          v-model="checkedNames"
        />
        <label for="other">その他</label>
      </div>
    </div>
    <div class="field6">
      <label>単位取得難易度</label>
      <div>
        <input
          type="radio"
          id="so-easy"
          value="とても簡単"
          v-model="picked"
          name="nanido"
        />
        <label for="so-easy">とても簡単</label>
        <input
          type="radio"
          id="easy"
          value="簡単"
          v-model="picked"
          name="nanido"
        />
        <label for="easy">簡単</label>
        <input
          type="radio"
          id="nomal"
          value="普通"
          v-model="picked"
          name="nanido"
        />
        <label for="nomal">普通</label>
        <input
          type="radio"
          id="difficult"
          value="難しい"
          v-model="picked"
          name="nanido"
        />
        <label for="difficult">難しい</label>
        <input
          type="radio"
          id="so-difficult"
          value="とても難しい"
          v-model="picked"
          name="nanido"
        />
        <label for="so-difficult">とても難しい</label>
      </div>
    </div>
    <div class="field7">
      <label>コメント</label>
      <div>
        名誉毀損や侮辱罪にあたる表現、過度に暴力的な表現、差別的な表現を禁じます。
      </div>
      <div>
        <textarea
          v-model="text"
          placeholder="コメントを入力"
          rows="5"
        ></textarea>
      </div>
    </div>
    <button v-on:click="submit">送信</button>
    <!-- </form> -->
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      subject: "",
      teacher: "",
      kamoku: "",
      year: "",
      season: "",
      checkedNames: [],
      picked: [],
      text: "",
      information: [],
    }
  },
  methods: {
    submit() {
      firebase.firestore().collection("user").add({
        subject: this.subject,
        teacher: this.teacher,
        kamoku: this.kamoku,
        year: this.year,
        season: this.season,
        checkedNames: this.checkedNames,
        picked: this.picked,
        text: this.text,
      })
    },
  },
  created: function () {
    firebase
      .firestore()
      .collection("user")
      .get()
      .then((docs) => {
        if (docs.exists) {
          docs.fotEach((doc) => {
            this.information.push(doc.data())
          })
        }
        console.log(this.information)
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
  },
}
</script>

<style scoped>
.content {
  font-size: 2rem;
}
</style>
