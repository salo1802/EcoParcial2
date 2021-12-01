import {getFirebaseConfig} from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

const user= document.getElementById('username');
const password = document.getElementById('password');
const logBtn = document.getElementById('loginBtn');
const userID;
const localstorage = window.localStorage;

logBtn.addEventListener("click",function(){
    signInWithEmailAndPassword(auth, user.value, password.value)
    .then((userCredentials)=>{
        if(user.value=="salo1802@hotmail.com"){userID= "user1"}
        if(user.value=="davidm@gmail.com"){userID= "user2"}
        if(user.value=="pepito123@gmail.com"){userID= "user3"}
        if(user.value=="usuarigenerico@gmail.com"){userID="user4"}
        localstorage.setItem('id', userID);
        window.location.href="index.html";
    })
    .catch((error)=>{
        console.log(error.message);

    });

    
 
});