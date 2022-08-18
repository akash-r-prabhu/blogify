import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmYPUNqtwGIaViJnNqqb7xuhgoSnmCF3c",
  authDomain: "blogify-70853.firebaseapp.com",
  projectId: "blogify-70853",
  storageBucket: "blogify-70853.appspot.com",
  messagingSenderId: "1029281486542",
  appId: "1:1029281486542:web:17e2a501c6e5b9f7e5229f",
  measurementId: "G-VNN8SFY3GC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export const serverStamp = firebase.firestore.Timestamp;
export default db;
