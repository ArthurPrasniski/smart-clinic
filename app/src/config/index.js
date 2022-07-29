import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5nMOiAOv20irGDzuvH-O564UBdj4yjKs",
  authDomain: "smart-clinic-2e910.firebaseapp.com",
  projectId: "smart-clinic-2e910",
  storageBucket: "smart-clinic-2e910.appspot.com",
  messagingSenderId: "1015252484181",
  appId: "1:1015252484181:web:dc9b542455d529d50554dc",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
