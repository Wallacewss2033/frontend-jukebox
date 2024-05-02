import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA8ASiNuxR6Y36QRWs_VK6zsxva4B422dE",
    authDomain: "login-jukebox.firebaseapp.com",
    projectId: "login-jukebox",
    storageBucket: "login-jukebox.appspot.com",
    messagingSenderId: "144239276036",
    appId: "1:144239276036:web:5f80e829daae2219d48551"
};

const app = initializeApp(firebaseConfig);
export { app };