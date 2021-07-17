import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyASF1P7gbem2uYMktcu58AIwR4mUEuYfL4",
        authDomain: "facebook-messenger-clone-97cd9.firebaseapp.com",
        projectId: "facebook-messenger-clone-97cd9",
        storageBucket: "facebook-messenger-clone-97cd9.appspot.com",
        messagingSenderId: "147360707858",
        appId: "1:147360707858:web:79bd4175ff1800064eefcb",
        measurementId: "G-T12H7TY9VW"
    });

const db = firebaseApp.firestore();

export default db;



