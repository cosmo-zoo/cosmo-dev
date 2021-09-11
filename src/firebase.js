import firebase from "firebase"
import "firebase/firestore"

import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZXWQvko8taTmipnbg43HXKWRWLfpsYeQ",
  authDomain: "cosmo-zoo.firebaseapp.com",
  projectId: "cosmo-zoo",
  storageBucket: "cosmo-zoo.appspot.com",
  messagingSenderId: "428336204309",
  appId: "1:428336204309:web:080e4726ad602780d95c1c",
  measurementId: "G-57XNZSZ74P",
}

firebase.initializeApp(firebaseConfig)
