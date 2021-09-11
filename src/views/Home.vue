<template>
  <!--サインイン後のホーム画面-->
  <div class="Home">
    <img v-bind:href="imgPath" src="@/assets/img/logo.png" alt="logo" />

    <div id="container">
      <!-- <button v-on:click="home" id="item">ホーム</button> -->
      <button id="item">授業検索</button>
      <button id="item">授業評価</button>
      <!-- 掲示板を導入する -->
      <button v-on:click="thred" id="item">掲示板</button>
    </div>
    <!-- 優先順位は低いよ -->
    <!--  -->
    <!-- <div>新着授業評価情報</div> -->

    <div class="hyotei">
      <div class="ui-container">
        <div class="ui header">
          <!-- <div class="content">授業を評定する</div> -->
          <div class="sub-header">できる限り正確な情報を記載してください。</div>
        </div>
        <form class="ui form">
          <div class="field0">
            <label class="required">講義名</label>
            <div class="ui icon input">
              <input
                placeholder="例：奈良女子大学入門"
                type="text"
                tabindex="0"
                class="prompt"
                autocomplete="off"
                value=""
                v-model="subject"
                autofocus
                required
              />
            </div>
          </div>
          <div class="field1">
            <label class="no-required">教員名</label>
            <div class="important-point">
              ※教員が複数人担当している場合や、不明な場合は空欄でかまいません。
            </div>
            <div class="ui icon input">
              <input
                v-model="teacher"
                placeholder="例:山田真紀"
                type="text"
                value=""
                autofocus
                class="prompt"
              />
            </div>
          </div>

          <div class="field2">
            <label class="required">科目区分</label>
            <div class="m-form-select">
              <select required v-model="kamoku" autofocus>
                <option value=""></option>
                <option value="全学部">全学共通科目</option>
                <option value="文学部">文学部専門科目</option>
                <option value="理学部">理学部専門科目</option>
                <option value="生活環境学部">生活環境学部専門科目</option>
                <option value="その他">その他・不明</option>
              </select>
            </div>
          </div>
          <div class="year-season">
            <div class="field3">
              <label class="required">年度</label>
              <div class="m-form-select2">
                <select v-model="year" autofocus>
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
              <label class="required">開講時期</label>
              <div class="m-form-select2">
                <select required v-model="season" autofocus>
                  <option value=""></option>
                  <option value="前期">前期</option>
                  <option value="後期">後期</option>
                  <option value="不定期">不定期</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field5">
            <label class="required">採点方法</label>
            <div class="saiten">
              <input
                type="checkbox"
                id="report"
                value="レポート"
                v-model="checkedNames"
                autofocus
              />
              <label for="report">レポート</label>
              <input
                type="checkbox"
                id="attend"
                value="出席"
                v-model="checkedNames"
                autofocus
              />
              <label for="attend">出席</label>
              <input
                type="checkbox"
                id="test"
                value="テスト"
                v-model="checkedNames"
                autofocus
              />
              <label for="test">テスト</label>
              <input
                type="checkbox"
                id="presentation"
                value="プレゼンテーション"
                v-model="checkedNames"
                autofocus
              />
              <label for="presentation">プレゼンテーション</label>
              <input
                type="checkbox"
                id="other"
                value="その他"
                v-model="checkedNames"
                autofocus
              />
              <label for="other">その他</label>
            </div>
          </div>
          <div class="field6">
            <label class="required">単位取得難易度</label>
            <div>
              <input
                type="radio"
                id="so-easy"
                value="とても簡単"
                v-model="picked"
                name="nanido"
                autofocus
              />
              <label for="so-easy">とても簡単</label>
              <input
                type="radio"
                id="easy"
                value="簡単"
                v-model="picked"
                name="nanido"
                autofocus
              />
              <label for="easy">簡単</label>
              <input
                type="radio"
                id="nomal"
                value="普通"
                v-model="picked"
                name="nanido"
                autofocus
              />
              <label for="nomal">普通</label>
              <input
                type="radio"
                id="difficult"
                value="難しい"
                v-model="picked"
                name="nanido"
                autofocus
              />
              <label for="difficult">難しい</label>
              <input
                type="radio"
                id="so-difficult"
                value="とても難しい"
                v-model="picked"
                name="nanido"
                autofocus
              />
              <label for="so-difficult">とても難しい</label>
            </div>
          </div>
          <div class="field7">
            <label class="no-required">コメント</label>
            <div class="important-point">
              名誉毀損や侮辱罪にあたる表現、過度に暴力的な表現、差別的な表現を禁じます。
            </div>
            <div>
              <textarea
                v-model="text"
                placeholder="コメントを入力"
                rows="5"
                autofocus
                class="m-form-textarea"
              ></textarea>
            </div>
          </div>
          <button v-on:click="submit" class="form-submit-button">送信</button>
        </form>
      </div>
      <div class="about">
        <div class="ui header">
          <!-- <div class="content">授業を検索する</div> -->
          <div class="sub header">
            講義情報が得られない時は、掲示板などで質問してみましょう。
          </div>
        </div>
        <form>
          <div class="search">
            <div>
              <label class="label1">講義名・教師名から探す</label>
            </div>
            <input
              type="text"
              name="q"
              size="31"
              maxlength="255"
              value=""
              class="prompt"
              placeholder="キーワード入力"
              v-model="kennsaku"
            />
            <button
              type="submit"
              class="Box-Btn"
              name=""
              v-on:click="kennsaku2"
            >
              検索
            </button>
          </div>
        </form>
        <form>
          <div class="search2">
            <p></p>
            <label class="label2">条件検索</label>
            <div class="field2">
              <label>科目区分</label>
              <div class="m-form-select">
                <select>
                  <option value=""></option>
                  <option value="全学部">
                    全学共通科目&#40;教養科目含む&#41;
                  </option>
                  <option value="文学部">文学部専門科目</option>
                  <option value="理学部">理学部専門科目</option>
                  <option value="生活環境学部">生活環境学部専門科目</option>
                  <option value="その他">その他・不明</option>
                </select>
              </div>
            </div>
            <div class="field4">
              <label>開講時期</label>
              <div class="m-form-select">
                <select>
                  <option value=""></option>
                  <option value="zenki">前期</option>
                  <option value="kouki">後期</option>
                  <option value="kouki">不定期</option>
                </select>
              </div>
            </div>
            <div class="field5">
              <label>採点方法</label>
              <div class="saiten">
                <input
                  type="checkbox"
                  id="report"
                  value="report"
                  v-model="checkedNames"
                />
                <label for="report">レポート</label>
                <input
                  type="checkbox"
                  id="attend"
                  value="attend"
                  v-model="checkedNames"
                />
                <label for="attend">出席</label>
                <input
                  type="checkbox"
                  id="test"
                  value="test"
                  v-model="checkedNames"
                />
                <label for="test">テスト</label>
                <input
                  type="checkbox"
                  id="presentation"
                  value="presentation"
                  v-model="checkedNames"
                />
                <label for="presentation">プレゼンテーション</label>
                <input
                  type="checkbox"
                  id="other"
                  value="other"
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
                  value="so-easy"
                  v-model="picked"
                  name="nanido"
                />
                <label for="so-easy">とても簡単</label>
                <input
                  type="radio"
                  id="easy"
                  value="easy"
                  v-model="picked"
                  name="nanido"
                />
                <label for="easy">簡単</label>
                <input
                  type="radio"
                  id="nomal"
                  value="nomal"
                  v-model="picked"
                  name="nanido"
                />
                <label for="nomal">普通</label>
                <input
                  type="radio"
                  id="difficult"
                  value="difficult"
                  v-model="picked"
                  name="nanido"
                />
                <label for="difficult">難しい</label>
                <input
                  type="radio"
                  id="so-difficult"
                  value="so-difficult"
                  v-model="picked"
                  name="nanido"
                />
                <label for="so-difficult">とても難しい</label>
              </div>
            </div>
            <button type="kennsaku" class="Box-Btn">検索</button>
          </div>
        </form>
      </div>
      <div>
        <!-- <div class="result">新着情報</div>
      <div
        v-for="(information, index) in information"
        :key="index"
        class="informationbox"
      >
        <div>{{ information.subject }}</div>
        <p>
          教員名：{{ information.teacher }}<br />
          科目区分：{{ information.kamoku }}<br />
          年度/開講時期：{{ information.year }}/{{ information.season }}<br />
          採点方法：{{ information.checkedNames }}<br />
          単位取得難易度：{{ information.picked }}<br />
          コメント：{{ information.text }}
        </p>
      </div> -->
      </div>
      <div class="result">検索結果</div>
      <div
        v-for="(information2, index) in information2"
        :key="index"
        class="information2box"
      >
        <div>{{ information2.subject }}</div>
        <p>
          教員名：{{ information2.teacher }}<br />
          科目区分：{{ information2.kamoku }}<br />
          年度/開講時期：{{ information2.year }}/{{ information2.season }}<br />
          採点方法：{{ information2.checkedNames }}<br />
          単位取得難易度：{{ information2.picked }}<br />
          コメント：{{ information2.text }}
        </p>
      </div>
      <footer>
        <p>copyright 2021 cosmo-zoo</p>
      </footer>
    </div>
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
      information2: [],
      kennsaku: "",
    }
  },
  /*ログインボタンの表示の切り替え*/

  /*ボタンを押したらそれぞれのページに飛べるようにする*/
  methods: {
    submit() {
      if (
        this.subject !== "" &&
        this.kamoku !== "" &&
        this.year !== "" &&
        this.season !== "" &&
        this.checkedNames !== [] &&
        this.picked !== []
      ) {
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
      }
    },
    kennsaku2() {
      console.log(this.kennsaku)
      firebase
        .firestore()
        .collection("user")
        .where("subject", "==", this.kennsaku)
        .get()
        .then((docs) => {
          // success
          docs.forEach((doc) => {
            console.log(doc.data())
            this.information2.push(doc.data())
          })
          console.log(docs)
        })
    },
    /*ボタンの色変更*/
    color1: function () {
      document.bgColor = "rgb(7, 17, 17)"
      document.fgColor = "#dee2ce"
    },
    color2: function () {
      document.bgColor = "rgb(7, 17, 17,50)"
      document.fgColor = "#dee2ce"
    },

    /*ホームに飛ぶ関数*/
    home: function () {
      location.href = "Home"
    },
    /*掲示板のページに飛ぶ関数*/
    thred: function () {
      this.$router.push({ path: "/thred" })
    },

    /*新規登録ページに飛ぶ関数*/
    signup: function () {
      location.href = "SignUp"
    },
    /*ログインページに飛ぶ関数*/
    login: function () {
      location.href = "SignIn"
    },
    /*検索ページに飛ぶ関数*/
    // search: function () {
    //   location.href = "About"
    // },
    /*評価ページに飛ぶ関数*/
    // eval: function () {
    //   location.href = "About"
    // },
  },
  created: function () {
    firebase
      .firestore()
      .collection("user")
      .get()
      .then((docs) => {
        //if (this.subject !== "") {
        docs.forEach((doc) => {
          this.information.push(doc.data())
        })
        //}
        console.log(this.information)
      })
    // .catch((error) => {
    //   console.log("Error getting document:", error)
    // })
  },
}
</script>

<style scoped>
.informationbox {
  float: left;
  width: 200px;
}
.prompt {
  height: 2.4rem;
  width: 50%;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.prompt:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.m-form-select {
  position: relative;
}

.m-form-select select {
  height: 2.4em;
  width: relative;
  padding: 0 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  cursor: pointer;
}

.m-form-select select::-ms-expand {
  display: none;
}

.m-form-select select:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.m-form-select2 {
  position: relative;
}

.m-form-select2 select {
  height: 2.4em;
  width: 100%;
  padding: 0 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
}

.m-form-select2 select::-ms-expand {
  display: none;
}

.m-form-select2 select:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.m-form-item-textarea textarea {
  height: 300px;
}

.m-form-textarea {
  display: block;
  width: 50%;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  resize: vertical;
  margin-left: auto;
  margin-right: auto;
}

.m-form-textarea:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.required::after {
  content: "必須";
  color: #ffffff;
  background: #cc0000;
  font-size: 0.8em;
  padding: 0.3em;
  border-radius: 0.5em;
  margin-left: 0.3em;
  font-size: 5px;
}
.no-required::after {
  content: "任意";
  color: #ffffff;
  background: green;
  font-size: 0.8em;
  padding: 0.3em;
  border-radius: 0.5em;
  margin-left: 0.3em;
  font-size: 5px;
}

.content {
  font-size: 10px;
}

.field0 {
  padding: 10px;
}
.field1 {
  padding: 15px;
}
.field2 {
  padding: 15px;
}
.field3 {
  padding: 15px;
}
.field4 {
  padding: 15px;
}
.field5 {
  padding: 15px;
}
.field6 {
  padding: 15px;
}
.field7 {
  padding: 15px;
}
.year-season {
  display: flex;
  justify-content: center;
  width: 100%;
}
.year-season.m-form-select {
  box-sizing: border-box;
  padding: 100px 80px;
}
.important-point {
  font-size: 12px;
  color: dimgray;
}

.ui-container {
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック", "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic" "ＭＳ ゴシック", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* border-left: double 7px #000000;
  border-right: double 7px #000000; */
  background: none;
  border: 1px solid #000000; /* 線の太さ・種類・色 */
  margin: 10px; /* 外側の余白 */
  padding: 20px; /* 内側の余白 */
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 15px;
}
.ui-container:after {
  background: none;
  border: 1px solid #000000; /* 線の太さ・種類・色 */
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 100%;
  height: 100%;
  z-index: -5;
}
.form-submit-button {
  width: 30;
  height: 30;
  height: 2.4rem;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.form-submit-button:hover {
  background: gray; /* 少し濃い緑色 */
  border: solid 4px gray; /* 少し濃い緑色 */
}
.form-submit-button:active {
  background: #2e2e2e; /* 濃い緑色 */
}
.content {
  font-size: 2rem;
}
.label1 {
  font-size: 20px;
}
.label2 {
  font-size: 20px;
}
.field2 {
  padding: 0px 15px 15px 15px;
}
.field3 {
  padding: 15px;
}
.field4 {
  padding: 15px;
}
.field5 {
  padding: 15px;
}
.field6 {
  padding: 15px;
}
.search {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  background: white;
}
.about {
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック", "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic" "ＭＳ ゴシック", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* border-left: double 7px #000000;
  border-right: double 7px #000000; */
  background: none;
  border: 1px solid #000000; /* 線の太さ・種類・色 */
  margin: 10px; /* 外側の余白 */
  padding: 20px; /* 内側の余白 */
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 15px;
}
.about:after {
  background: none;
  border: 1px solid #000000; /* 線の太さ・種類・色 */
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 100%;
  height: 100%;
  z-index: -5;
}
.prompt {
  height: 2.4rem;
  width: 50%;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.prompt:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.m-form-select {
  position: relative;
}

.m-form-select select {
  height: 2.4em;
  width: relative;
  padding: 0 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  cursor: pointer;
}

.m-form-select select::-ms-expand {
  display: none;
}

.m-form-select select:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
.Box-Btn {
  width: 30;
  height: 30;
  height: 2.4rem;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.Box-Btn:hover {
  background: gray; /* 少し濃い緑色 */
  border: solid 4px gray; /* 少し濃い緑色 */
}
.Box-Btn:active {
  background: #2e2e2e; /* 濃い緑色 */
}
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
