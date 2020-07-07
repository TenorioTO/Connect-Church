import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClZogVzOKajl8Rb9a91MEIvWPR-NB6YSs",
    authDomain: "connect-website-ffa35.firebaseapp.com",
    databaseURL: "https://connect-website-ffa35.firebaseio.com",
    projectId: "connect-website-ffa35",
    storageBucket: "connect-website-ffa35.appspot.com",
    messagingSenderId: "377740138296",
    appId: "1:377740138296:web:4f350885f1da3916b653cd",
    measurementId: "G-YV3EJSXZBE"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;