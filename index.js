// ERROR 1) index.js independent functions has a function wakeDog: ReferenceError: wakeDog is not defined

function wakeDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

let action = wakeDog("Xerox", "Border Collie");
console.log(action);