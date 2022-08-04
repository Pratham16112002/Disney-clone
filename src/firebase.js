import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBlv1C7huQ2LoHZHF5F3qBVBgXPCcfI3cE",
    authDomain: "disney-clone-5832a.firebaseapp.com",
    projectId: "disney-clone-5832a",
    storageBucket: "disney-clone-5832a.appspot.com",
    messagingSenderId: "605858488232",
    appId: "1:605858488232:web:424147c3efd036cedf879d",
    measurementId: "G-M33Q7HQ3N0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth , provider , storage};
export default db;