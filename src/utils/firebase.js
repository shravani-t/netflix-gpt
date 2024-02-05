// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChDiPKuNjRQcVDcJzn-KDBaVX75d5iBDI",
  authDomain: "netflixgpt-48a92.firebaseapp.com",
  projectId: "netflixgpt-48a92",
  storageBucket: "netflixgpt-48a92.appspot.com",
  messagingSenderId: "820994362697",
  appId: "1:820994362697:web:2c46eaafb18950c2e09e98",
  measurementId: "G-7CSYXEW6VF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
