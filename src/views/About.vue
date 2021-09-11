<template>
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
        />
        <button type="submit" class="Box-Btn" name="">検索</button>
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
              <option value="全学部">全学共通科目&#40;教養科目含む&#41;</option>
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
        <button type="submit" class="Box-Btn">検索</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
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
</style>
