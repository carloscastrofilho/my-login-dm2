import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,  
  appId: process.env.EXPO_PUBLIC_APPID,
  databaseURL: process.env.EXPO_PUBLIC_DATABASEURL
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
});

export const db = getDatabase(app);

export {auth};  


