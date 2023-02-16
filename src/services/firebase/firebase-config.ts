// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from '../../../firebase';
//import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const realtimeDatabase = getDatabase(app);
export const storageDatabase = getStorage(app, firebaseConfig.fileBucket);

