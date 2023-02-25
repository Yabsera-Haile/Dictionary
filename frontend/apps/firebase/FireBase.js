import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVxvCAQQ9uekREC7lfNwNYMzPMq4EA4Vc",
    authDomain: "mcpproject-fe164.firebaseapp.com",
    projectId: "mcpproject-fe164",
    storageBucket: "mcpproject-fe164.appspot.com",
    messagingSenderId: "942927367525",
    appId: "1:942927367525:web:bcdf815d859153a364e58c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;