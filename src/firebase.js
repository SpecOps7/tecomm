import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0kx2k0jxBXGSR4twtoUTdmkpy6IrIx5U",
    authDomain: "cyber-t.firebaseapp.com",
    databaseURL: "https://cyber-t.firebaseio.com",
    projectId: "cyber-t",
    storageBucket: "cyber-t.appspot.com",
    messagingSenderId: "504886341853",
    appId: "1:504886341853:web:c27154ab3041f791daab34",
    measurementId: "G-KWPND7MNYM"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };