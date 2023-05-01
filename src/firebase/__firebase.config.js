// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTh0amokzTPuo4lbvuoc8aiBTjxLOcng8",
  authDomain: "the-travel-guru-project.firebaseapp.com",
  projectId: "the-travel-guru-project",
  storageBucket: "the-travel-guru-project.appspot.com",
  messagingSenderId: "371546576414",
  appId: "1:371546576414:web:819fe83ed5cf97a5f1800f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;