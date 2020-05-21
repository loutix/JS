const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function alreadyRented(array){
  for (i=0; i<array.length-1;i++){
    if (array[i].rented === 0){
      console.log("Tous les livres n'ont pas été empruntés au moins une fois.");
    }else{
      console.log("Tous les livres ont été empruntés au moins une fois.");
    }
  }
}

function mostRentedBook(array){
  let mostRented = [0, ""];
  for (i=0; i<array.length-1;i++){
    if (array[i].rented > mostRented[0]){
      mostRented[0] = array[i].rented;
      mostRented[1] = array[i].title;
    }
  }
  console.log("Le livre le plus emprunté est : " + mostRented[1])
}

function lessRentedBook(array){
  let lessRented = [99999, ""];
  for (i=0; i<array.length-1;i++){
    if (array[i].rented < lessRented[0]){
      lessRented[0] = array[i].rented;
      lessRented[1] = array[i].title;
    }
  }
  console.log("Le livre le plus emprunté est : " + lessRented[1]);
}

function findBookByID(array, ID){
  for (i=0; i<array.length-1;i++){
    if (array[i].id === ID){
      console.log("Le livre avec l'id " + ID + " est : " + array[i].title );
    }
  }
}

function deleteBookByID(array, ID){
  for (i=0; i<array.length-1;i++){
    if (array[i].id === ID){
      array.splice(i, i+1);
      console.log("Le livre avec l'id " + ID + " a été supprimé.");
      console.log(array);
    }
  }
}

function sortBook(array){
  let sortArray = [];
  for (i=0; i<array.length-1;i++){
    sortArray.push(array[i].title);
  }
  console.log(sortArray.sort());
}

alreadyRented(books);
mostRentedBook(books);
lessRentedBook(books);
findBookByID(books, 873495);
deleteBookByID(books, 133712);
sortBook(books);