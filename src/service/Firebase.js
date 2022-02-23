import { initializeApp } from "firebase/app";
import {
     collection,
     doc,
     getDocs,
     getFirestore,
     query,
     setDoc,
     updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyC7u7onosp1Z9MxJGo9JUV6CeCDzOM67Mk",
     authDomain: "dashboard-private.firebaseapp.com",
     projectId: "dashboard-private",
     storageBucket: "dashboard-private.appspot.com",
     messagingSenderId: "826138711028",
     appId: "1:826138711028:web:c2be2b631c2672349c5fa1",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const getBackgrounds = () => getDocs(query(collection(db, "backgrounds")));

const authenticate = (email, password) => signInWithEmailAndPassword(auth, email, password);

const addAnimation = (data) => setDoc(doc(collection(db, "backgrounds")), data);

const commitAnimation = (data) => updateDoc(doc(collection(db, "backgrounds"), data.id), data);

export { getBackgrounds, authenticate, addAnimation, commitAnimation };
