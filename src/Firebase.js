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
    var errorMessage = null;

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        
    } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = `Email address ${email} already in use.`;
                break;
            case 'auth/invalid-email':
                errorMessage = `Email address ${email} is invalid.`;
                break;
            case 'auth/operation-not-allowed':
                errorMessage = `Error during sign up.`;
                break;
            case 'auth/weak-password':
                errorMessage = 'Password is not strong enough. ' +
                    'Add additional characters including special characters and numbers.';
                break;
            default:
                errorMessage = error.message;
                break;
        }
    }

    if (errorMessage !== null) {
        alert(errorMessage);
    }
    else {
        updateProfile(auth.currentUser, {
            displayName: firstName
        })
    }
}

export const login = async (email, password) => {
    var errorMessage = null;
    var userC = null;

    try {
        userC = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        switch (error.code) {
            case 'auth/invalid-email':
                errorMessage = "Your email address appears to be malformed.";
                break;
            case 'auth/wrong-password':
                errorMessage = "Your password is wrong.";
                break;
            case 'auth/user-not-found':
                errorMessage = "User with this email doesn't exist.";
                break;
            case 'auth/user-disabled':
                errorMessage = "User with this email has been disabled.";
                break;
            case 'auth/too-many-requests':
                errorMessage = "Too many requests. Try again later.";
                break;
            case 'auth/operation-not-allowed':
                errorMessage = "Signing in with Email and Password is not enabled.";
                break;
            default:
                errorMessage = "An undefined Error happened.";
        }
    }

    if (errorMessage !== null) {
        alert(errorMessage);
        return null;
    } 

    return userC;

}
    

export const logout = () => {
    return signOut(auth);
}