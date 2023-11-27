// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMQtKavAV7MLO0woVMyXGwSAP5XStnX7I",
  authDomain: "admin-template-cadastro.firebaseapp.com",
  projectId: "admin-template-cadastro",
  storageBucket: "admin-template-cadastro.appspot.com",
  messagingSenderId: "270674380739",
  appId: "1:270674380739:web:da603e5e690aeb3cb01f76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)