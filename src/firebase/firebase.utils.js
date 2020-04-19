import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYfBzy64xGj1R1yfuzkjddV5Jki9KL-Uk",
  authDomain: "crown-clothing-6bc82.firebaseapp.com",
  databaseURL: "https://crown-clothing-6bc82.firebaseio.com",
  projectId: "crown-clothing-6bc82",
  storageBucket: "crown-clothing-6bc82.appspot.com",
  messagingSenderId: "699070757168",
  appId: "1:699070757168:web:3923559fbad5587a06b0f5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
