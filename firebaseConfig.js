// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAShizUccdM8EjrW1OwEfFmHYEeu9YrEiA",
  authDomain: "nart-portfolio.firebaseapp.com",
  projectId: "nart-portfolio",
  storageBucket: "nart-portfolio.appspot.com",
  messagingSenderId: "266216173999",
  appId: "1:266216173999:web:ed21a2e1ff28ed4ca47f5a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
