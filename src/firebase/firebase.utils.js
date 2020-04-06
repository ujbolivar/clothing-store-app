import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.AWS_API_KEY,
  authDomain: "crown-clothing-6bc82.firebaseapp.com",
  databaseURL: "https://crown-clothing-6bc82.firebaseio.com",
  projectId: "crown-clothing-6bc82",
  storageBucket: "crown-clothing-6bc82.appspot.com",
  messagingSenderId: "699070757168",
  appId: "1:699070757168:web:3923559fbad5587a06b0f5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;