import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAE4mdWKpkLYWilyJiltSKwEl6H_oA8ias",
    authDomain: "linkedin-clone-db544.firebaseapp.com",
    projectId: "linkedin-clone-db544",
    storageBucket: "linkedin-clone-db544.appspot.com",
    messagingSenderId: "158963912016",
    appId: "1:158963912016:web:5d63d67d2af677397c3055",
    measurementId: "G-0G2SLYXWFT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }