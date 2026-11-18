function calculerMoyenne(notes){
    let somme = 0;
    for(let i=0; i < notes.length; i++){
        somme =+ notes[i];
    }

    return somme/notes.length;
}

let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

console.log("le moyennes de groupe A est = ",calculerMoyenne(groupeA));
console.log("le moyennes de groupe B est = ",calculerMoyenne(groupeB));