import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAgIxEQYyqFDUZ566SlrEj9Qm3c3dKum0M",
    authDomain: "whatsapp-clone-fcfb8.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-fcfb8.firebaseio.com",
    projectId: "whatsapp-clone-fcfb8",
    storageBucket: "whatsapp-clone-fcfb8.appspot.com",
    messagingSenderId: "132228214588",
    appId: "1:132228214588:web:0e1bf8d9d71b3081fd3839",
    measurementId: "G-81VQN5XT80"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()

  export default { db} 