import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDNulACEx4MvSgktviyKgNNflKO5BgKUi0",
    authDomain: "photo-gallery-b6b93.firebaseapp.com",
    projectId: "photo-gallery-b6b93",
    storageBucket: "photo-gallery-b6b93.appspot.com",
    messagingSenderId: "190028715390",
    appId: "1:190028715390:web:51b7844cf48c15697acf2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firebaseFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { firebaseFirestore, firebaseStorage, timestamp };