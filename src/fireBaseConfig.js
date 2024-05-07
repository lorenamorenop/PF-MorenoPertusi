import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnfTZWM6ZXq1CX9glPhPcGQhgutjxpUyg",
  authDomain: "reactjs-lorenamoreno.firebaseapp.com",
  projectId: "reactjs-lorenamoreno",
  storageBucket: "reactjs-lorenamoreno.appspot.com",
  messagingSenderId: "1005265596224",
  appId: "1:1005265596224:web:301ac16833e734a76d94a5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
