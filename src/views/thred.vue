// 掲示板
<template>
  <div>
    <div class="header">
      <div>ひとの わるぐちは かかないでね</div>
      <div>こじんが とくてい される ような ことは かかないでね</div>
    </div>
    <div class="Make">
      <input
        type="text"
        class="inTitle"
        v-model="Title"
        placeholder="たいとる"
      />
      <input
        type="text"
        class="inAuther"
        v-model="auther"
        placeholder="かいたひと"
      />
      <textarea
        type="text"
        class="inComment"
        v-model="Comment"
        placeholder="おたより"
      />
      <button v-on:click="MakeComment()" class="MakeComment">
        これでおっけー！
      </button>
    </div>
    <div class="Search">
      <input
        type="text"
        class="inWord"
        v-model="keyword"
        placeholder="キーワード"
      />
      <button v-on:click="SearchComment()" class="searchComment">
        おたよりをさがす(将来用)
      </button>
      <div v-for="(result, index) in results" :key="index" class="CommentBox">
        <div class="info">
          <div class="id">
            {{ result.CommentId }}
          </div>
          <div class="Title">{{ result.Title }}</div>
          <div class="time">じかん:{{ result.time }}</div>
          <div class="auther">{{ result.auther }} さんより</div>
        </div>
        <div class="result">{{ result.Comment }}</div>
      </div>
    </div>
    <div v-for="(comment, index) in comments" :key="index" class="CommentBox">
      <div class="info">
        <div class="id">
          {{ comment.CommentId }}
        </div>
        <div class="Title">{{ comment.Title }}</div>
        <div class="time">じかん:{{ comment.time }}</div>
        <div class="auther">{{ comment.auther }} さんより</div>
      </div>
      <div class="Comment">{{ comment.Comment }}</div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      comments: [],
      result: [],
      CommentId: "",
      Title: "",
      auther: "",
      time: "",
      Comment: "",
    }
  },
  methods: {
    MakeComment() {
      // OKなら移動
      const now = firebase.firestore.Timestamp.now()
      const Time = `${now.getFullYear()}/${
        now.getMonth() + 1
      }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      const id = this.comments.length
      const number = String(id)
      const res = confirm("投稿しても大丈夫？")
      if (res === true) {
        firebase
          .firestore()
          .collection("comments")
          .doc(id)
          .set({
            CommentId: number,
            Title: this.Title,
            auther: this.auther,
            time: Time,
            Comment: this.Comment,
          })
          .then(() => {
            alert("コメントできました！")
            this.Title = ""
            this.auther = ""
            this.Comment = ""
            // success
          })
          .catch((error) => {
            console.log("Error", error)
            // error
          })
      } else {
        alert("コメントしませんでした！")
      }
    },
  },
  SearchComment() {
    // Declare variables
    let c = 0

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < this.comments.length; i++) {
      let key = this.comments.Comment
      let n = key.indexOf(this.keyword)
      if (n !== -1) {
        this.result[c] = this.comments[i]
        c = c + 1
      }
    }
  },
  created: function () {
    firebase
      .firestore()
      .collection("comments")
      .get()
      .then((docs) => {
        // success
        // if (docs.exists) {
        console.log(docs)
        docs.forEach((doc) => {
          this.comments.push(doc.data())
          console.log(doc.data())
        })
        // }
        console.log(this.comments)
      })
      .catch((error) => {
        console.log("Error getting document:", error)
        // error
      })
  },
}
</script>

<style scoped>
.Make {
  padding: 0.5em 1em;
  margin: 10% 10%;
  width: 80%;
  background: pink; /*背景色*/
}
.Make p {
  margin: 0;
  padding: 0;
}
.inTitle {
  margin: 1%;
  width: 50%;
}
.inAuther {
  margin: 1%;
  width: 50%;
}
.inComment {
  margin: 1%;
  width: 50%;
}
.MakeComment {
  margin: 1%;
  width: 50%;
}
.CommentBox {
  margin: 10%;
  width: 80%;
  background: #223a70;
  box-shadow: 0 2% 4% black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.CommentBox .info {
  color: #223a70;
  margin: 0;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 0%;
  width: 80%;
  padding: 5%;
  background: rgb(252, 244, 234);
}
.CommentBox .Comment {
  color: #223a70;
  margin: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 5%;
  width: 80%;
  background: rgb(252, 244, 234);
}
.CommentBox .info .id {
  margin: 0;
  display: inline-block;
  text-align: left;
  width: 10%;
}
.CommentBox .info .Title {
  margin: 0;
  display: inline-block;
  text-align: center;
  width: 70%;
}
.CommentBox .info .auther {
  margin: 0%;
  text-align: center;
  width: 80%;
}
.CommentBox .info .time {
  margin: 0%;
  text-align: left;
  width: 80%;
}
</style>
