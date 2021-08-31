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
import firebase from "firebase"
let threds = [
  {
    ThredId: 0,
    ThredTytle: "",
    time: "",
    FirstComment: "",
    Comments: [...Array(1000)].map((_, i) => ({
      used: false,
      CommentId: i + 1,
      auther: "",
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
          ThredId: 0,
          ThredTitle: "こはくくんかわいい",
          time: 20210829,
          FirstCommenter: "はむちー",
          FirstComment: "こはくくんフィーチャー実装おめでとうございます。",
          Comments: [...Array(1000)].map((_, i) => ({
            CommentId: i + 1,
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
      // 1番目のコメントはスレッド作成と同時に保存
      let request = new XMLHttpRequest()
      let now = new Date(request.getResponseHeader("Date"))
      firebase
        .firestore()
        .collection("threds")
        .add({
          ThredId: threds.length + 1,
          ThredTitle: "",
          time: now,
        })
    },
    OpenThred() {},
    MakeComment() {
      // 2番目以降のコメントを保存
      let request = new XMLHttpRequest()
      let now = new Date(request.getResponseHeader("Date"))
      for (let i = 1; i < 1000; i++) {
        if (threds.Comments[i].used === false) {
          threds.Comments.CommentId = i + 1
          threds.Comments.used = true
          threds.Comments.auther = ""
          threds.Comments.time = now
          threds.Comments.text = ""

          firebase.firestore().collection("Comments").add(threds.Comments[i])
          break
        }
      }
    },
  },
}
</script>

<style scoped></style>
