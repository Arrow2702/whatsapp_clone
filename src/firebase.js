import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFGG_M__TXC3lf4xtk-IaV1ie7yTw31rY",
  authDomain: "whatsapp-clone-c9fc4.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c9fc4.firebaseio.com",
  projectId: "whatsapp-clone-c9fc4",
  storageBucket: "whatsapp-clone-c9fc4.appspot.com",
  messagingSenderId: "695291802056",
  appId: "1:695291802056:web:19ea3b27838c213f8050fd",
  measurementId: "G-HMJEM3JD87"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;