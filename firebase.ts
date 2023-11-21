import {getApp , getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4GSvMDZp7EfLhHMMurE0kKmpSA4CvfVs",
  authDomain: "chatgpt-messenger-8aad2.firebaseapp.com",
  projectId: "chatgpt-messenger-8aad2",
  storageBucket: "chatgpt-messenger-8aad2.appspot.com",
  messagingSenderId: "277685471174",
  appId: "1:277685471174:web:71dc2952da5cdf912654c7"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}