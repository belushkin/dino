import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBLyp93c7ovRxx4MVxJAustoUA9xzHhMZY',
  authDomain: 'dino-2ada6.firebaseapp.com',
  projectId: 'dino-2ada6',
  storageBucket: 'dino-2ada6.appspot.com',
  messagingSenderId: '889357838211',
  appId: '1:889357838211:web:964136f29cf5f9eca878b6',
  measurementId: 'G-6DDHFNWV4T',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();

// Using emulators if it localhost
if (location.hostname === "0.0.0.0") {
  db.useEmulator("0.0.0.0", 8080);
}

export default firebase;
