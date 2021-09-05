import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx",
  measurementId: "xxxxx",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
