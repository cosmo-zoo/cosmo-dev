// 掲示板
<template>
  <div>
    <div>
      <input
        type="text"
        v-model="ThredTitle"
        placeholder="スレッドタイトルをここに入力"
      />
      <div v-on:click="MakeThred()">スレッド作成</div>
    </div>
    <div>
      <div v-on:click="SearchThred()" class="searchThred">
        スレッド検索(将来用)
      </div>
    </div>
    <div>
      <div
        v-for="(threds, thredId) in threds"
        v-bind:key="thredId"
        class="thred"
      >
        <div class="thredId">
          <div>
            ID:
            {{ threds.ThredId }}
            Title:
            {{ threds.ThredTitle }}
            投稿時間:
            {{ threds.time }}
          </div>
          <div>
            コメント:
            {{ threds.FirstComment }}
          </div>
          <div v-on:click="OpenThred()" class="OpenButton">スレッド表示</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let threds = [
  {
    ThredId: 0,
    ThredTytle: "",
    time: "",
    FirstComment: "",
    Comments: [...Array(1000)].map((_, i) => ({
      id: i + 1,
      time: "",
      text: "",
    })),
  },
]
export default {
  data() {
    return {
      threds: [
        // 仮データ
        {
          ThredId: 1,
          ThredTitle: "こはくくんかわいい",
          time: 20210829,
          FirstComment: "こはくくんフィーチャー実装おめでとうございます。",
          Comments: [...Array(1000)].map((_, i) => ({
            id: i + 1,
            auther: "",
            time: "",
            text: "",
          })),
        },
      ],
    }
  },
  methods: {
    MakeThred() {
      let request = new XMLHttpRequest()
      let now = new Date(request.getResponseHeader("Date"))
      firebase
        .firestore()
        .collection("tweets")
        .add({
          ThredId: threds.length + 1,
          ThredTitle: "",
          time: now,
        })
    },
    OpenThred() {},
    MakeComment() {},
  },
}
</script>

<style scoped></style>
