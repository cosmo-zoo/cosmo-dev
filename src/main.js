import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZXWQvko8taTmipnbg43HXKWRWLfpsYeQ",
  authDomain: "cosmo-zoo.firebaseapp.com",
  projectId: "cosmo-zoo",
  storageBucket: "cosmo-zoo.appspot.com",
  messagingSenderId: "428336204309",
  appId: "1:428336204309:web:080e4726ad602780d95c1c",
  measurementId: "G-57XNZSZ74P",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
