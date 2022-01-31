// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu7P6IhxFNeuP1oJocDqlXcOKCk5qBO7Q",
    authDomain: "auditech-4d4f3.firebaseapp.com",
    projectId: "auditech-4d4f3",
    storageBucket: "auditech-4d4f3.appspot.com",
    messagingSenderId: "952636147402",
    appId: "1:952636147402:web:6fe6e45c133f19e2b7d633",
    measurementId: "G-2195P7GJRL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = async (email, password, firstName) => {
    await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
        displayName: firstName
    })
}

export const login = async (email, password) => {
    // TODO: error handling
    const userC = await signInWithEmailAndPassword(auth, email, password);
    return userC;
}