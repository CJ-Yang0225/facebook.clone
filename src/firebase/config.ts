import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeM7-5zkWdlv43Idml1HNPXqVQyca_kXA",
  authDomain: "cj-facebook-clone.firebaseapp.com",
  projectId: "cj-facebook-clone",
  storageBucket: "cj-facebook-clone.appspot.com",
  messagingSenderId: "572034412378",
  appId: "1:572034412378:web:96f3066e691e6efda2cd63",
  measurementId: "G-0R6P26K35W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
