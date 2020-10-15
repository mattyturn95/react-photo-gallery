import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbaUmHkoCKYfSxP2bMTW_EdjA78bXbEAI",
    authDomain: "fir-gallery-react.firebaseapp.com",
    databaseURL: "https://fir-gallery-react.firebaseio.com",
    projectId: "fir-gallery-react",
    storageBucket: "fir-gallery-react.appspot.com",
    messagingSenderId: "776393349871",
    appId: "1:776393349871:web:feab90383284940ce4d91a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };