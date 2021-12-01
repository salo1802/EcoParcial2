import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, get } from 'firebase/database';
import { getFirebaseConfig, getFirebaseConfig } from './firebase-config';
import { libroT } from './libros';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const localstorage = window.localStorage;
var userid = localstorage.getItem('id');
const librosdiv = document.getElementById("librosDiv");

function crearLibros(){
    const db = getDatabase();
    const librosRef = ref(db,'Libros');

    onValue(librosRef,(snapshot)=>{
        const datos = snapshot.val();
        li
    });
}

function librosCont(datos){
    if(data){
        librosdiv.innerHTML = "";
        Object.keys(datos).forEach((k,i) => {
            const conteiner = new libroT(datos, userid);
            librosdiv.appendChild(conteiner.render());
        });
    }
}