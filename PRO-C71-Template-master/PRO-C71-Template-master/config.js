import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyApvhWhUxVGRMxN0JEmWE6gJsBxVCTTqRM",
    authDomain: "project-47499.firebaseapp.com",
    projectId: "project-47499",
    storageBucket: "project-47499.appspot.com",
    messagingSenderId: "189056386225",
    appId: "1:189056386225:web:235852b01835321f8dce90"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
