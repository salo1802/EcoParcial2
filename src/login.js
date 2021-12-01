//contraseña para todos es 123456 y pues los usuarios estan ahí abajito
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {  getFirebaseConfig } from './firebase-config';

const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

var user= document.getElementById('username');
var password = document.getElementById('password');
const logBtn = document.getElementById('loginBtn');
var userID = 0;
const localstorage = window.localStorage;

logBtn.addEventListener("click",function(){
    signInWithEmailAndPassword(auth, user.value, password.value)
    .then((userCredentials)=>{
        if(user.value=="salo1802@hotmail.com"){userID= "user1"}
        if(user.value=="davidm@gmail.com"){userID= "user2"}
        if(user.value=="pepito123@gmail.com"){userID= "user3"}
        if(user.value=="usuariogenerico@gmail.com"){userID="user4"}
        localstorage.setItem('id', userID);
       window.location.href="index.html";
    })
    .catch((error)=>{
        console.log(error.message);
        alert("correo o contraseña invalidos")

    });
 
});
/*
onAuthStateChanged(auth, (user_account)=>{
    if(user_account){
        window.location.href="index.html";   
    }
});*/