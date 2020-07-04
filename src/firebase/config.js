import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDvQSGrOYQcPXNWYouTDEofIfLUlh7U9g",
    authDomain: "clone-ec90c.firebaseapp.com",
    databaseURL: "https://clone-ec90c.firebaseio.com",
    projectId: "clone-ec90c",
    storageBucket: "clone-ec90c.appspot.com",
    messagingSenderId: "139748718758",
    appId: "1:139748718758:web:e62c3751435a15dae99c67",
    measurementId: "G-Y2E9E73Q1T"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export { firebase };


