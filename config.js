import * as firebase from "firebase";

require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBls7KIJwCwnBC9JQB8MIyDnRTBUbhuwjc",
  authDomain: "codescapes-1.firebaseapp.com",
  projectId: "codescapes-1",
  storageBucket: "codescapes-1.appspot.com",
  messagingSenderId: "436430274782",
  appId: "1:436430274782:web:066745b886856d32d0c24f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
