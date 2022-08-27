/*
const array = ["Cristian", "Lucia", "Amy", "Gorgio"];

function secondMatchesAmy(array) {
  if (array[2] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(array));

 */

function secondMatchesAmy(array) {
  if (array[2]=='Amy') {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(["Cristian", "Lucia", "Amy", "Gorgio"]));




const array = ["Cristian", "Lucia", "Amy", "Gorgio"];

function secondMatchesAmy(array) {
  if (array[2].includes('Amy')) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(array));







