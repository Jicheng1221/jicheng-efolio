
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8sq5ibZjOv0G3ik1VVSj2QSC0Zy7S8Jg",
    authDomain: "week7-jicheng.firebaseapp.com",
    projectId: "week7-jicheng",
    storageBucket: "week7-jicheng.appspot.com",
    messagingSenderId: "971262461845",
    appId: "1:971262461845:web:455983d33ec89794fd589c"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db