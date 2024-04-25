import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA3j9iErQ360kF6Lh2z67YX3cTb-iEz03Y",
  authDomain: "olx-clone-f7de6.firebaseapp.com",
  projectId: "olx-clone-f7de6",
  storageBucket: "olx-clone-f7de6.appspot.com",
  messagingSenderId: "105407658961",
  appId: "1:105407658961:web:409bc01d4a4fd8a07dfef0",
  measurementId: "G-4MNNQ3971T"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;



  