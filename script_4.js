const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function bornIn70s(array) {
  let arrayOf70s = [];
  for (let i=0; i<entrepreneurs.length-1; i++){
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980){
      arrayOf70s.push(entrepreneurs[i].first + entrepreneurs[i].last);
    }
  }
  console.log("Les entrepreneurs nés dans les années 70 : " + arrayOf70s.join(" "));
}

function fullNameOfEntrepreneurs(array) {
  let fullName = [];
  for (let i=0; i<entrepreneurs.length-1; i++){
    fullName.push(entrepreneurs[i].first + entrepreneurs[i].last);
  }
  console.log("Prénom et nom des entrepreneurs : " + fullName.join(" "));
}

function agesOfEntrepreneurs(array) {
  let d = new Date();
  let y = d.getFullYear();
  let ages = [];
  for (let i=0; i<entrepreneurs.length-1; i++){
    ages.push(entrepreneurs[i].first + entrepreneurs[i].last + (y - entrepreneurs[i].year))
  }
  console.log("Age des entrepreneurs aujourd'hui : " + ages.join(" "));
}

function sortingOfEntrepreneurs(array) {
  let sortedArray = [];
  for (i=0; i<entrepreneurs.length-1;i++){
    sortedArray.push(entrepreneurs[i].last + entrepreneurs[i].first);
  }
  sortedArray.sort();
  console.log("Tri des entrepreneurs par ordre alphabétique du nom de famille : " + sortedArray.join(" "));
}

bornIn70s(entrepreneurs);
fullNameOfEntrepreneurs(entrepreneurs);
agesOfEntrepreneurs(entrepreneurs);
sortingOfEntrepreneurs(entrepreneurs);