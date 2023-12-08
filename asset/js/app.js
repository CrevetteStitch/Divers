console.log("Hello World");

const prenom = 'Theo';
let year = 2024;
var dob = 2003; // Ne plus utiliser


console.log(`Bonjour ${prenom}`);

function calculAge(){
    const age = year - dob;
    console.log(`Voici ton age : ${age} ans`);
}

const calculAge2 = ()=>{
    const age = year - dob;
    console.log(`Voici ton age : ${age} ans`);

    if(age > 18){
        console.log("OUI");
    }else
        console.log("NON");

        age > 18 ? console.log("Oui") : console.log("Non");
}

calculAge2();

// nouvelle fonction => arrow function

