import firebase from 'firebase/compat/app';
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkNwYFbwQs92lsD5l4RW-MC1hy12GFWfg",
    authDomain: "blog-app-44e61.firebaseapp.com",
    projectId: "blog-app-44e61",
    storageBucket: "blog-app-44e61.appspot.com",
    messagingSenderId: "126951219828",
    appId: "1:126951219828:web:7e6f0df2eb95822b5fe721",
    measurementId: "G-BDX5LKWGMJ"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const timestamp = firebase.firestore.Timestamp.now().seconds;

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const addNewBlog = async (title, description, image, content) => {
  const user = firebase.auth().currentUser;
  await db.collection("blogs").add({
    user: user.uid,
    created: timestamp,
    author: user.displayName,
    title,
    description,
    image,
    content 
  });
  console.log(timestamp)
}

const userRegistration = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name, 
      authProvide: "local",
      email,
    });
  } catch(err) {
    alert (err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (err) {
    alert(err.message);
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export { auth, db, signInWithGoogle, signInWithEmailAndPassword, userRegistration, resetPassword, logout, addNewBlog };
export default firebase;