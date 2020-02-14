import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAttEkaYiyd2lJp6eWhYG_5FufZUAufJwo",
    authDomain: "shop-db-f65e7.firebaseapp.com",
    databaseURL: "https://shop-db-f65e7.firebaseio.com",
    projectId: "shop-db-f65e7",
    storageBucket: "shop-db-f65e7.appspot.com",
    messagingSenderId: "531285445297",
    appId: "1:531285445297:web:245ef77d6f130f1ce37090"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;