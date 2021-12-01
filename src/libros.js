
import { getDatabase, ref, push, set, onValue } from 'firebase/database';


export class libroT{
    constructor(libro,userid){
    this.libro = libro
    this.userid = userid}

    
    render(){
        
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
        votarBtn.className = "votoBtn";
        votarBtn.innerHTML = "Votar";

        //Functions for when the button is pressed
        //let suma = 0;
        votarBtn.addEventListener("click", (e, ev)=>{
            if(parseFloat(addReview.value) >= 0 && parseFloat(addReview.value) <= 5){
                //Create score object
                const review = {
                    userid : parseFloat(addReview.value)
                }

                //Add score to database
                const db = getDatabase();
                const newReview = push(ref(db, 'Libros/' + this.libro.id + '/Reviews'));
                set(newReview, review);

            
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
       
        
        const reviews = ref(db, 'Libros/' + this.libro.id + '/Reviews');
            onValue(reviews, (snapshot)=>{
                const reviews = snapshot.val();
               
                    
                //Go through data and add all scores for that book
                Object.keys(reviews).forEach((k,i)=>{
                    suma += reviews[k].score;
                });

                //Create average and show changes
                let newPromedio = suma/4;
                let libroPromedio = newPromedio.toFixed(1);
                promedio.innerHTML = libroPromedio;
                const librosRef = ref(db, 'Libros/' + this.book.id);
                update(librosRef, {"puntaje": libroPromedio});
            });
    }

}
