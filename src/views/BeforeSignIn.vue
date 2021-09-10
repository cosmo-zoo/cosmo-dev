<!-- <template>
 <div class="signin">
    <h1>サインイン</h1>
    <input type="text" placeholder="ユーザ名" v-model="username" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button>サインイン</button>
    <p>
      アカウント登録はしましたか? <br />
      <router-link to="/signup"
        >ここをクリックしてアカウント登録をしてください</router-link
      >
    </p>
  </div> 
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};

</script>
--->

// ここからコピペ

<template>
  <div>
    <p>名前を入力してね</p>
    {{ user.displayName }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.currentUser;
    },
  },
};
</script>
