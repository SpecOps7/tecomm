import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4SrSZxU0Kd4RLPI7tikT2MMzEWh0bLVM",
    authDomain: "ecomm-19456.firebaseapp.com",
    databaseURL: "https://ecomm-19456.firebaseio.com",
    projectId: "ecomm-19456", 
    storageBucket: "ecomm-19456.appspot.com",
    messagingSenderId: "31874769991",
    appId: "1:31874769991:web:685d9b6e05009a2af23d62",
    measurementId: "G-K88N935V88"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };