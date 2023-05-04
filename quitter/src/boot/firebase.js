import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDq3EGOEusVksYjl5hy-ac44e9-pSg3ol4",
  authDomain: "quitter-48fea.firebaseapp.com",
  projectId: "quitter-48fea",
  storageBucket: "quitter-48fea.appspot.com",
  messagingSenderId: "1033171674852",
  appId: "1:1033171674852:web:331d1cda31301e745faef1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db

