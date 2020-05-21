nbFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(nb) {

  for (let i=nb; i>0; i--){
    console.log(" ".repeat(i-1) + "#".repeat(nb-(i-1)));
  }

}

pyramid(nbFloors);