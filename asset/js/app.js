console.log("Hello World");

const prenom = 'Theo'; // string
let year = 2024; // int
const dob = 2003; //ne plus utiliser
const isAdmin = false; //Boolean
const apprenants = ["Bastien", "Matthéo", "Adrien", "Tom"];  // tableau
const sac = {livre: 'BD Tintin', trousse: 'stylo', skills: ["Bagarre", "Jeux Vidéos"] } // objet
const disque = document.querySelector(".disque");
const btnPause = document.getElementById("btnPause");
const paragraphe = document.querySelector(".div1 p");

setTimeout(() => {
    paragraphe.style.backgroundColor = "blue";
}, 4000);

btnPause.addEventListener("click", ()=> {
    disque.classList.toggle("pause");

    if (disque.classList.contains("pause")){
        btnPause.textContent = "Play";
    }else{
        btnPause.textContent = "Pause";
    }
});

console.log(disque);

console.log(apprenants[2]);
console.log(sac.skills[0]);

apprenants.forEach(  // Boucle sur le tableau
    prenom => {
        console.log(`Bonjour ${prenom}`)
    }
)


console.log(`Bonjour ${prenom}`); //concatenation
// calculeAge();


// fonction à l'ancienne
function calculeAge(){
    const age = year - dob;
    console.log(`Voici ton âge : ${age} ans.`); 
}

// nouvelle fonction => arrow function
const calculeAge2 = ()=>{
    const age = year - dob;

    console.log(`Voici ton âge : ${age} ans.`); 


    age > 18 ? console.log("oui") : console.log("non") // Condition terniaire
}


calculeAge2();