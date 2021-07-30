// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Here using firebase for user authentication
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBaMxBiEO0xqwJTjoaD00igmLEL2NbMnFI",
    authDomain: "clone-15051.firebaseapp.com",
    projectId: "clone-15051",
    storageBucket: "clone-15051.appspot.com",
    messagingSenderId: "913363517595",
    appId: "1:913363517595:web:ff73a75249a07fef1a463e",
    measurementId: "G-M78YWGZBSW"
  };

  // first initialise firebase 
  const firebaseApp = firebase.initializeApp( firebaseConfig );

  // second initialise database firestore is the real-time db in firebase
  const db = firebaseApp.firestore();

  // initialise authentication
  const auth = firebase.auth();

  // export allows us to use db and auth outside this file
export { db, auth }; 