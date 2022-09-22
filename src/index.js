import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAwvec9U55PrqhSAKr7lOyslS-Wteoh3ro",
    authDomain: "e-commerce-project-48a7a.firebaseapp.com",
    projectId: "e-commerce-project-48a7a",
    storageBucket: "e-commerce-project-48a7a.appspot.com",
    messagingSenderId: "758605454935",
    appId: "1:758605454935:web:b7d6aa5772b18e1d3acd12"
  };
  

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
reportWebVitals();
