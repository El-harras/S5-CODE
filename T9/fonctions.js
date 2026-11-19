//additionne tous les éléments du tableau.
function calculerSomme(tableau){
    let somme = 0;
    for(let i=0; i < tableau.length; i++){
        somme =+ tableau[i];
    }

    return somme;
}

//calcule la moyenne en appelant directement calculerSomme(tableau) en interne.
function calculerMoyenne(tableau){
    let somme = calculerSomme(tableau);
    return somme/tableau.length;
}

function trouverMaximum(tableau){}

let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

console.log("le moyennes de groupe A est = ",calculerMoyenne(groupeA));
console.log("le moyennes de groupe B est = ",calculerMoyenne(groupeB));