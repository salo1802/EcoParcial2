import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import {  getFirebaseConfig } from './firebase-config';
import { libroT } from './libros';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();
const localstorage = window.localStorage;
var userid = localstorage.getItem('id');
const librosdiv = document.getElementById("librosDiv");

function crearLibros(){
    
    const librosRef = ref(db,'Libros/');
    console.log(userid);
 
    onValue(librosRef,(snapshot)=>{
        console.log("entro al onvalue");
        const datos = snapshot.val();
        
        
        librosCont(datos);
    });
}

function librosCont(datos){
    if(datos){
        librosdiv.innerHTML = "";
        Object.keys(datos).forEach((k,i) => {
            const Lref = ref(db,'Libros/'+k);
          
            onValue(Lref,(snapshot)=>{
                const libro = snapshot.val();
                const conteiner = new libroT(libro, userid,k);
            console.log(libro.nombre);
            librosdiv.appendChild(conteiner.render());
            })
           
        });
    }
}

crearLibros();