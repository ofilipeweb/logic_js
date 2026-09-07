//Legal age — Ask for the person's age and state whether they are of legal age (18+).
 
let age = 17;

function legalAge(age){
    if(age >= 18) return "Legal Age" 
    else return "under age"
};

console.log(legalAge(age));