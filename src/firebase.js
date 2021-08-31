import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  // ...
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCZXWQvko8taTmipnbg43HXKWRWLfpsYeQ",
  authDomain: "cosmo-zoo.firebaseapp.com",
  projectId: "cosmo-zoo",
  storageBucket: "cosmo-zoo.appspot.com",
  messagingSenderId: "428336204309",
  appId: "1:428336204309:web:080e4726ad602780d95c1c",
  measurementId: "G-57XNZSZ74P",
}

firebase.initializeApp(firebaseConfig)
