// firebase/config.js (adaptado para navegador)
const firebaseConfig = {
    apiKey: "AIzaSyC-bVAv88dT9G4mG1SsN6PMMOjJ7qDMStA",
    authDomain: "via-bcp-44060.firebaseapp.com",
    projectId: "via-bcp-44060",
    storageBucket: "via-bcp-44060.firebasestorage.app",
    messagingSenderId: "496971370965",
    appId: "1:496971370965:web:f97c23c245cb80b2b8ed5c",
    measurementId: "G-2QYKFBYJ9X"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta la base de datos
const db = firebase.firestore();
