import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6Ezcq9u8BxcuQPPDnGJwESp-eRx9yqbU",
  authDomain: "chatting-app-1f237.firebaseapp.com",
  projectId: "chatting-app-1f237",
  storageBucket: "chatting-app-1f237.appspot.com",
  messagingSenderId: "700458603064",
  appId: "1:700458603064:web:53dff5c8ec8c2da7f9cccd",
  measurementId: "G-RXVCVXGT7G"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
