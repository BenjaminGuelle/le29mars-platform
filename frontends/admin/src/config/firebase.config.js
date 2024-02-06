// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcxgIkzUcsE4QUuaE5ZCOYgY863mSsB4c",
    authDomain: "le29mars-7035c.firebaseapp.com",
    projectId: "le29mars-7035c",
    storageBucket: "le29mars-7035c.appspot.com",
    messagingSenderId: "681736144892",
    appId: "1:681736144892:web:657465df58b23e97359479",
    measurementId: "G-DMKNXHD0PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);