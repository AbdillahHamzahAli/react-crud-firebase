// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8pEFi2m_6Gi8nVChwgl2eH8a6wjBuaA",
  authDomain: "react-books-mark.firebaseapp.com",
  projectId: "react-books-mark",
  storageBucket: "react-books-mark.appspot.com",
  messagingSenderId: "402457353798",
  appId: "1:402457353798:web:5da5a5c3a510a6d3a37447",
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);
export default fireDb.database().ref();
