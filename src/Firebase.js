import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";;

const firebaseConfig = {
  apiKey: "AIzaSyDETFWTqISJDzS2qbrHx6rmxp7UN6y2ohM",
  authDomain: "pragma-app.firebaseapp.com",
  projectId: "pragma-app",
  storageBucket: "pragma-app.appspot.com",
  messagingSenderId: "1012542085887",
  appId: "1:1012542085887:web:209adf71e0528a38988aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
