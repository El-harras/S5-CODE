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

//recherche et renvoie la plus grande note.
function trouverMaximum(tableau){
    let max = tableau[0];
    for(let i=1; i < tableau.length; i++){
        if(max < tableau[i])
            max = tableau[i];
    }
    return max;
}

let notes = [15, 12, 18, 11];

console.log("le moyennes de la notes est : = ",calculerMoyenne(notes));
console.log("la note maximale est : = ",trouverMaximum(notes));