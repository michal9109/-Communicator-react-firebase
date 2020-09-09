import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "communicator-4bce1.firebaseapp.com",
  databaseURL: "https://communicator-4bce1.firebaseio.com",
  projectId: "communicator-4bce1",
  storageBucket: "communicator-4bce1.appspot.com",
  messagingSenderId: "371728329315",
  appId: "1:371728329315:web:86df782cee8c4446366656",
  measurementId: "G-7DS6T90HD7",
});

const db = firebaseApp.firestore();

export default db;
