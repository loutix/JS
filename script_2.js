 let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorielle(nb) {
  let result = nb;
  for (let nb=number; nb > 1; nb --) {
    result = result * ( nb - 1 );
  }
  return result;
}

console.log("Le résultat est : " + factorielle(number));

