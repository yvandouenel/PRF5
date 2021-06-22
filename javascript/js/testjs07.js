class Personne {
  constructor(name, lastname) {
    this.firstname = name;
    this.lastname = lastname;
  }
  introduceMySelf() {
    console.log(`Bonjour, je m'appelle ${this.firstname}`);
  }
}
// Ici p1 a accès au prototype de Personne et d'Object
const p1 = new Personne("Bob", "Dylan");
console.log(`p1 : `, p1);

// Ajout au prototype d'Object
Object.prototype.introduceMySelf = function () {
  console.log(`Hello, my name is ${this.firstname}`);
};
Object.prototype.pikachu = "Jean-Michel";
p1.introduceMySelf();
// Objet Littéral ou syntaxe JSON
// Javascript Object Notation
// p2 n'a accès qu'au prototype d'Object
const p2 = {
  firstname: "Bob",
  lastname: "Dylan",
};
console.log(`p2 : `, p2);
p2.introduceMySelf();
console.log(`pikachu : `, p2.pikachu);
