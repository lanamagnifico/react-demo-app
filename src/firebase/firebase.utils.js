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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(snapShot, displayName, additionalData)

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
