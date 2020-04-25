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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // store in userRef the userAuth.uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // store in snapShot user object from get request
  const snapShot = await userRef.get();

  // if there is no user, creates a new user
  // on the firebase db
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
