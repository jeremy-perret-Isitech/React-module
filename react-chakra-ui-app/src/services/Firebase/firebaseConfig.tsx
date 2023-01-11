import { initializeApp } from "firebase/app";

export const firebaseApp = () => 
{
  return initializeApp(
  {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "red-equinox-304717.firebaseapp.com",
    projectId: "red-equinox-304717",
    storageBucket: "red-equinox-304717.appspot.com",
    messagingSenderId: "1086683057257",
    appId: "1:1086683057257:web:99b6572a7b4bd7059fa6f8"
  });
}