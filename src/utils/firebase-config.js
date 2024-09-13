// src/utils/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUQjb5HH9pyDR96qwZq7l23Xcx6mYkJUw",
  authDomain: "recuperacioncarlosburgos.firebaseapp.com",
  projectId: "recuperacioncarlosburgos",
  storageBucket: "recuperacioncarlosburgos.appspot.com",
  messagingSenderId: "736943118487",
  appId: "1:736943118487:web:199ab1713a289c91baf1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
