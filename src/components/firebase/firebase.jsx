import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBCm7e6j_RK3-XnujY0tpydpwF7RzMQdeM",
    authDomain: "pathology-app-ce326.firebaseapp.com",
    projectId: "pathology-app-ce326",
    storageBucket: "pathology-app-ce326.firebasestorage.app",
    messagingSenderId: "208812859701",
    appId: "1:208812859701:web:d9bbc33543483b8ef02c7c",
    databaseURL: "https://pathology-app-ce326-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig)