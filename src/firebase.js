import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaekywmUydCxWMNA3AKv2sdJXcCcEnpqk",
    authDomain: "twitter-clone-5368f.firebaseapp.com",
    projectId: "twitter-clone-5368f",
    storageBucket: "twitter-clone-5368f.appspot.com",
    messagingSenderId: "244360189437",
    appId: "1:244360189437:web:72565b7c8c9a7c35773594",
    measurementId: "G-MFPDY956G6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;