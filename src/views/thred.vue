// 掲示板
<template>
  <div>
    <!-- ここからたぬきが乱入 -->
    <div id="container">
      <button v-on:click="home" id="item">ホーム</button>
      <button v-on:click="search" id="item">授業検索</button>
      <button v-on:click="eval" id="item">授業評価</button>
      <!-- 掲示板を導入する -->
      <button v-on:click="thred" id="item">掲示板</button>
    </div>
    <!-- ここまでたぬきが乱入 -->
    <div class="header">
      <div>ひとの わるぐちは かかないでね</div>
      <div>こじんが とくてい される ような ことは かかないでね</div>
    </div>
    <div class="Make">
      <div class="title-auther">
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
      </div>
      <textarea
        type="text"
        class="inComment"
        v-model="Comment"
        placeholder="おたより"
      />
    </div>
    <button v-on:click="MakeComment()" class="MakeComment">
      これでおっけー！
    </button>

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
import firebase from "firebase";
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
    };
  },
  methods: {
    // ここからたぬきが乱入
    /*ホームに飛ぶ関数*/
    home: function() {
      location.href = "Home";
    },
    /*掲示板のページに飛ぶ関数*/
    thred: function() {
      location.href = "thred";
    },

    /*新規登録ページに飛ぶ関数*/
    signup: function() {
      location.href = "SignUp";
    },
    /*ログインページに飛ぶ関数*/
    login: function() {
      location.href = "SignIn";
    },
    /*検索ページに飛ぶ関数*/
    search: function() {
      location.href = "About";
    },
    /*評価ページに飛ぶ関数*/
    eval: function() {
      location.href = "About";
    },
    //ここまでたぬきが乱入

    MakeComment() {
      // OKなら移動
      const now = firebase.firestore.Timestamp.now();
      const Time = `${now.getFullYear()}/${now.getMonth() +
        1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      const id = this.comments.length;
      const number = String(id);
      const res = confirm("投稿しても大丈夫？");
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
            alert("コメントできました！");
            this.Title = "";
            this.auther = "";
            this.Comment = "";
            // success
          })
          .catch((error) => {
            console.log("Error", error);
            // error
          });
      } else {
        alert("コメントしませんでした！");
      }
    },
  },
  SearchComment() {
    // Declare variables
    let c = 0;

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < this.comments.length; i++) {
      let key = this.comments.Comment;
      let n = key.indexOf(this.keyword);
      if (n !== -1) {
        this.result[c] = this.comments[i];
        c = c + 1;
      }
    }
  },
  created: function() {
    firebase
      .firestore()
      .collection("comments")
      .get()
      .then((docs) => {
        // success
        // if (docs.exists) {
        console.log(docs);
        docs.forEach((doc) => {
          this.comments.push(doc.data());
          console.log(doc.data());
        });
        // }
        console.log(this.comments);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        // error
      });
  },
};
</script>

<style scoped>
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

.Make {
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
  background: rgba(7, 17, 17, 0.295); /*背景色*/
}

.title-auther {
  display: flex;
  justify-content: center;
}

.inTitle {
  color: rgb(7, 17, 17);
  margin: 25px;
  margin-left: 20%;
  height: 30px;
  width: 100%;
}
.inAuther {
  color: rgb(7, 17, 17);
  margin: 25px;
  margin-right: 20%;
  height: 30px;
  width: 100%;
}
.inComment {
  justify-content: center;
  color: rgb(7, 17, 17);
  margin: 25px;
  height: 300px;
  width: 70%;
}

.inWord {
  margin: 25px;
  height: 30px;
  width: 300px;
}

.searchComment {
  color: #dee2ce;
  margin-top: 50px;
  width: 300px;
}

.MakeComment {
  color: #dee2ce;
  margin-top: 50px;
  width: 300px;
}
.CommentBox {
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5%;
  margin-left: 100px;
  margin-right: 100px;
  background: rgba(7, 17, 17, 0.295);
}
.CommentBox .info {
  color: rgb(7, 17, 17);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  width: 80%;
  padding: 5%;
  background-color: whitesmoke;
}
.CommentBox .Comment {
  color: rgb(7, 17, 17);
  font-family: "ヒラギノ丸ゴシック";
  margin: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 5%;
  width: 80%;
  background-color: whitesmoke;
}
.CommentBox .info .id {
  font-family: "ヒラギノ丸ゴシック";
  margin: 0;
  display: inline-block;
  text-align: left;
  width: 10%;
}
.CommentBox .info .Title {
  font-family: "ヒラギノ丸ゴシック";
  margin: 0;
  display: inline-block;
  text-align: center;
  width: 70%;
}
.CommentBox .info .auther {
  font-family: "ヒラギノ丸ゴシック";
  margin: 0%;
  text-align: center;
  width: 80%;
}
.CommentBox .info .time {
  font-family: "ヒラギノ丸ゴシック";
  margin: 0%;
  text-align: left;
  width: 80%;
}
</style>
