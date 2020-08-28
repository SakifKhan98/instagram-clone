import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXGKtYFTqvFTMqeqqDkPc_udw1xmIFZag",
  authDomain: "instagram-clone-1a26e.firebaseapp.com",
  databaseURL: "https://instagram-clone-1a26e.firebaseio.com",
  projectId: "instagram-clone-1a26e",
  storageBucket: "instagram-clone-1a26e.appspot.com",
  messagingSenderId: "559323578507",
  appId: "1:559323578507:web:35a2fec2f337b41017948e",
  measurementId: "G-SGF23X76Y9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
