import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDQQXYnSAmTAbVoGhkxQOs8br3oG3nDCC8",
    authDomain: "prossign-f8d82.firebaseapp.com",
    databaseURL: "https://prossign-f8d82.firebaseio.com",
    projectId: "prossign-f8d82",
    storageBucket: "prossign-f8d82.appspot.com",
    messagingSenderId: "18176979518",
    appId: "1:18176979518:web:1969e1e2679adc7bde976f",
    measurementId: "G-HCFSHFPKMT"
})

export { firebaseConfig as firebase };