// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcpPjEQgt9ZutbCkCrfNgknD9pcOnCv-c",
  authDomain: "anskeytech.firebaseapp.com",
  projectId: "anskeytech",
  storageBucket: "anskeytech.appspot.com",
  messagingSenderId: "94127344825",
  appId: "1:94127344825:web:b4b8dce0f9a848f1b31f68",
  measurementId: "G-75EXL1QB2Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app