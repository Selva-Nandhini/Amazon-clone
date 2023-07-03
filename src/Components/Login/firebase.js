import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAlzp8BywkSz21gAYrb8a3SGZSw2gYIGSA",
    authDomain: "clone-921f4.firebaseapp.com",
    projectId: "clone-921f4",
    storageBucket: "clone-921f4.appspot.com",
    messagingSenderId: "71004297447",
    appId: "1:71004297447:web:635e6f7c4d73763c6b2a42",
    measurementId: "G-6RP89Z0H0M"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth 