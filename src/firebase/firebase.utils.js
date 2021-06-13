import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJePQEtzrb-JIF8I3hmX4Wx_z5SD3c6qA",
  authDomain: "crwn-db-a0d13.firebaseapp.com",
  projectId: "crwn-db-a0d13",
  storageBucket: "crwn-db-a0d13.appspot.com",
  messagingSenderId: "875804324216",
  appId: "1:875804324216:web:ebeafd667a3bd947ef988d",
  measurementId: "G-DV6DZGH4KQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
