// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXgo9Lh6YfR7tRBSRX1cnLkdLETjwhuVM",
  authDomain: "blood-donation-f7ec4.firebaseapp.com",
  projectId: "blood-donation-f7ec4",
  storageBucket: "blood-donation-f7ec4.appspot.com",
  messagingSenderId: "246627399634",
  appId: "1:246627399634:web:3d6b42e29950b12402fa0b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

