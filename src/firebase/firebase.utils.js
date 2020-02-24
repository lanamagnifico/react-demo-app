import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5jfUbtmFuD62Jq25NG72tJ7vjemCpH2A",
    authDomain: "react-demo-app-48a12.firebaseapp.com",
    databaseURL: "https://react-demo-app-48a12.firebaseio.com",
    projectId: "react-demo-app-48a12",
    storageBucket: "react-demo-app-48a12.appspot.com",
    messagingSenderId: "2518842806",
    appId: "1:2518842806:web:ba293e035cfa5220b05517"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
