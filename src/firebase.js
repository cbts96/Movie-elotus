// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfZj4EQb8NPsov8EciYfzr5iiTYsTZFQY",
  authDomain: "test-elotus.firebaseapp.com",
  projectId: "test-elotus",
  storageBucket: "test-elotus.appspot.com",
  messagingSenderId: "548706714012",
  appId: "1:548706714012:web:1eb7ad53b47ba9bf684859"
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();








