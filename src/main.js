import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./firebase.js"

Vue.config.productionTip = false
// Your web app's Firebase configuration

// Initialize Firebase
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
