// Tableau à index
const fruits = ["Banane", "Cerise", "Pomme"];

/* console.log("fruits", fruits);
console.log("Taille du tableau fruits", fruits.length); */

// Parcours du tableau fruits
fruits.forEach(function (fruit, index, tab) {
  /*  console.log(`fruit : `, fruit);
  console.log(`index : `, index);
  console.log(`tableau : `, tab); */
});
let new_length = 0;
// Ajout d'un élément en fin de tableau
fruits.push("Fraise", "Poire", "Kiwi");
console.log(`Fruits : `, fruits);

// Suppression ou remplacement à l'intérieur du tableau
// Le premier argument indique le début du changement du tableau
// Le deuxième argument indique combien d'éléments sont supprimés
// Le troisième argument indique les éléments ajoutés
// La méthode renvoie le tableau des éléments supprimés
let remove_fruits = fruits.splice(3, 3, "Papaye", "Orange", "Mangue");
console.log(`Fruits : `, fruits);
console.log(`Fruits supprimés : `, remove_fruits);

// Transformation d'un tableau via ma méthode map
const fruits_li = fruits.map((fruit) => `<li>${fruit}</li>`);

console.log(`fruits après le map : `, fruits_li);
