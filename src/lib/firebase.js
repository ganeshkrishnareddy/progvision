import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBroj67QDr2GTKovO0CVTd-KsXdMK1xV_8",
    authDomain: "progvisionlive.firebaseapp.com",
    projectId: "progvisionlive",
    storageBucket: "progvisionlive.firebasestorage.app",
    messagingSenderId: "1091213731972",
    appId: "1:1091213731972:web:3d4ffc454e9a02b57dbad1",
    measurementId: "G-50KZG8NYE5"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
