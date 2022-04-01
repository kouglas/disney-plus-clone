// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJaVvzy4IvukfbOT0Jc1kZu6Y2QVAOasg",
  authDomain: "disney-plus-clone-8bc57.firebaseapp.com",
  projectId: "disney-plus-clone-8bc57",
  storageBucket: "disney-plus-clone-8bc57.appspot.com",
  messagingSenderId: "989354224242",
  appId: "1:989354224242:web:7ee2cdc9d9bf287eeff0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();