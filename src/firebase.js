// connected firebase to the backend
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDivJnRddJ7fJB1InFCTzWuDsAgtcGYZL8",
    authDomain: "twitter-clone-c10d8.firebaseapp.com",
    databaseURL: "https://twitter-clone-c10d8.firebaseio.com",
    projectId: "twitter-clone-c10d8",
    storageBucket: "twitter-clone-c10d8.appspot.com",
    messagingSenderId: "859246602381",
    appId: "1:859246602381:web:56ffd129b83be971a71ac4",
    measurementId: "G-2P2PFTEPGF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // database variable
  // access to the db
  const db = firebaseApp.firestore();
  export default db;
