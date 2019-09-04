import firebase from "firebase/app";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAygYKAPPbx-nsSTlsYYXEZwuoHWmrmurU",
  authDomain: "real-time-chat-app-8ab0f.firebaseapp.com",
  databaseURL: "https://real-time-chat-app-8ab0f.firebaseio.com",
  projectId: "real-time-chat-app-8ab0f",
  storageBucket: "",
  messagingSenderId: "1003014990116",
  appId: "1:1003014990116:web:c24ad4b2a6212bf4"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
