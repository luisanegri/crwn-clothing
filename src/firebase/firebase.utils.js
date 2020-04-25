import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC5DAY7zASfL0crDBeVbmeCl3KCRr_ob4U',
  authDomain: 'crwn-be-db.firebaseapp.com',
  databaseURL: 'https://crwn-be-db.firebaseio.com',
  projectId: 'crwn-be-db',
  storageBucket: 'crwn-be-db.appspot.com',
  messagingSenderId: '726556486264',
  appId: '1:726556486264:web:29242073acefb74d481b8d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
