// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeoYysawSDUI53M8YpzsbcV-bA03R-ZBU",
  authDomain: "mixme-ac528.firebaseapp.com",
  projectId: "mixme-ac528",
  storageBucket: "mixme-ac528.appspot.com",
  messagingSenderId: "734899058032",
  appId: "1:734899058032:web:ee2752f2dc3a24bef98bb5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
