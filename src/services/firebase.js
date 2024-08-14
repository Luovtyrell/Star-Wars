// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_RFLEby1z1XY5-DoT9vNAvOCDYO7WjAc",
  authDomain: "star-wars-luovtyrell-backend.firebaseapp.com",
  projectId: "star-wars-luovtyrell-backend",
  storageBucket: "star-wars-luovtyrell-backend.appspot.com",
  messagingSenderId: "471312562729",
  appId: "1:471312562729:web:6ec1019c8e21273bd87a38",
  measurementId: "G-KXXS0G5ZX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

