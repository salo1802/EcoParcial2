
import { getDatabase, ref, push, set, onValue, update } from 'firebase/database';


export class libroT{
    constructor(libro,userid,id){
    this.libro = libro
    this.userid = userid
    this.id = id;
    console.log("entro el constructor")}

    
    render(){
        
   
            
       console.log("userID prueba: "+this.userid);
        console.log("nombre test: "+ this.libro.nombre);
        console.log("puntaje test: "+this.libro.puntaje);

        let card = document.createElement("div");
        card.className = "contenedores";

        
        let title = document.createElement("p");
        title.className = "titulo";
        title.innerHTML = this.libro.nombre;

       
        let promedio = document.createElement("p");
        promedio.className = "promedio";
        promedio.innerHTML = this.libro.puntaje;

      
        let addReview = document.createElement("input");
        addReview.className = "review";
        addReview.placeholder = "Mi review"

        let votarBtn = document.createElement("button");
        votarBtn.className = "Btn";
        votarBtn.innerHTML = "Votar";

       
        votarBtn.addEventListener("click", (e, ev)=>{
            if(parseFloat(addReview.value) >= 0 && parseFloat(addReview.value) <= 5){
                var user = this.userid
                const review = parseFloat(addReview.value);

                
                const db = getDatabase();
                const newReview = ref(db, 'Libros/' + this.id + '/Reviews/'+this.userid);
                update(newReview, {'review':review});

                this.cacularPromedio(promedio);
                
            } else {
                alert("Solo se admiten valores entre 0 y 5");
            }
        })

        card.appendChild(title);
        card.appendChild(promedio);
        card.appendChild(addReview);
        card.appendChild(votarBtn);

        return card;
    }

    cacularPromedio(promedio){
        let suma = 0;
        const db = getDatabase();
       
        
        const reviews = ref(db, 'Libros/' + this.id + '/Reviews');
            onValue(reviews, (snapshot)=>{
                const reviews = snapshot.val();
               
                    
            
                Object.keys(reviews).forEach((k,i)=>{
                    const reviewActual = ref(db, 'Libros/' + this.id + '/Reviews/'+k);
                    onValue(reviewActual,(snapshot)=>{
                      const  num = snapshot.val();
                        suma += num.review;
                    });
                    
                    
                });

              
                let newPromedio = suma/4;
                let libroPromedio = newPromedio.toFixed(1);
                promedio.innerHTML = libroPromedio;
                const librosRef = ref(db, 'Libros/'+this.id);
                update(librosRef, {"puntaje": libroPromedio});
            });
    }

}
