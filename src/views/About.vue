<template>
  <div class="about">
    <div class="ui header">
      <div class="content">授業を検索する</div>
      <div class="sub header">
        講義情報が得られない時は、掲示板などで質問してみましょう。
      </div>
    </div>
    <label class="label1">講義名・教師名から探す</label>
    <form method="get" action="http://www.google.co.jp/search" target="_blank">
      <input type="text" name="q" size="31" maxlength="255" value="" />
      <input type="submit" name="btng" value="検索" />
      <input type="hidden" name="hl" value="ja" />
      <div>
        <label class="label1">条件検索</label>
        <div class="field2">
          <label>科目区分</label>
          <div>
            <select required>
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
          <div>
            <select required>
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
        <button type="submit">送信</button>
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
</style>
