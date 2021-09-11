import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./firebase.js"
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

// const initialUserState = {
//   uid: "",
//   displayName: "",
//   photoURL: "",
// };
// const $auth = Vue.observable({
//   currentUser: { ...initialUserState },
// });
// firebase.auth().onAuthStateChanged((user) => {
//   let state;
//   if (user) {
//     const { uid, displayName, photoURL } = user;
//     state = {
//       uid,
//       displayName,
//       photoURL,
//     };
//   } else {
//     state = initialUserState;
//   }
//   Object.assign($auth.currentUser, state);
// });
// Vue.prototype.$auth = $auth;

//いるかいらんか分からんからとりあえずコメントアウト！//いるっぽくて草
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
