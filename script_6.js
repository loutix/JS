function splitARN(ARN){
  let arrayARN = [];
  for (i=0;i<ARN.length-1;i+=3){
    arrayARN.push(ARN[i] + ARN[i+1] + ARN[i+2]);
  }
  return arrayARN;
}

function translateToADN(ARN){

  let arrayARN = splitARN(ARN);
  let arrayADN = [];
  for (i=0;i<arrayARN.length-1;i++){

    if (arrayARN[i] === "UCU" |arrayARN[i] === "UCC" |arrayARN[i] === "UCA" |arrayARN[i] === "UCG" |arrayARN[i] === "AGU" |arrayARN[i] === "AGC" ){
      arrayADN.push("Sérine");
    } else if (arrayARN[i] === "CCU" |arrayARN[i] === "CCC" |arrayARN[i] === "CCA" |arrayARN[i] === "CCG" ) {
      arrayADN.push("Proline");
    } else if (arrayARN[i] === "UUA" |arrayARN[i] === "UUG") {
      arrayADN.push("Leucine");
    } else if (arrayARN[i] === "UUU" |arrayARN[i] === "UUC") {
      arrayADN.push("Phénylalanine");
    } else if (arrayARN[i] === "CGU" |arrayARN[i] === "CGC" |arrayARN[i] === "CGA" |arrayARN[i] === "CGG" |arrayARN[i] === "AGA" |arrayARN[i] === "AGG" ) {
      arrayADN.push("Arginine");
    } else if (arrayARN[i] === "UAU" |arrayARN[i] === "UAC") {
      arrayADN.push("Tyrosine");
    }
  }
  console.log(arrayADN.join("-"));
}

translateToADN("CCGUCGUUGCGCUACAGC");
translateToADN("CCUCGCCGGUACUUCUCG");