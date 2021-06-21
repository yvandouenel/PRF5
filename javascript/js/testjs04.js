// Fonction constructeur de Pokemon
function Pokemon(name, type, weight, height, attack) {
  // paramètres
  // affectation des propriétés de chaque instance d'objet
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.height = height;
  this.attack = attack;
}
Pokemon.prototype.fight = function (opponent) {
  Pokemon.prototype.introduceHisSelf = function () {
    console.log(`Bonjour, je m'appelle ${this.name}, je suis de type 
  ${this.type}, je pèse ${this.weight}kg et je mesure ${this.height}cm`);
  };
  // Force pour ce combat pour le pokemon appelant
  const my_strength = this.attack * Math.random() * 1.2;

  // Force pour ce combat pour le pokemon opposé
  const opponent_strength = opponent.attack * Math.random();
  console.log(`Force de l'appelant : ${my_strength}`);
  console.log(`Force de l'opposant : ${opponent_strength}`);

  if (my_strength > opponent_strength) {
    console.log(this.name + " a gagné");
  } else console.log(opponent.name + " a gagné");
};

class Pokemon2021 extends Pokemon {
  fight(opponent) {
    super.fight(opponent);
    console.log(`Ce combat était initié par un Pokemon2021`);
  }
}

// Instanciation (new avec des arguments) et affectation à la variable dialga
const dialga = new Pokemon("Dialga", "Acier", 683, 540, 120);
console.log(`dialga`, dialga);
const palkia = new Pokemon("Palkia", "Eau", 336, 420, 200);

dialga.fight(palkia);

// Instanciation d'un pokemon 2021
const groudon = new Pokemon2021("Groudon", "Sol", 950, 350, 200);

groudon.fight(palkia);
console.log(`groudon`, groudon);
// groudon se présente
groudon.introduceHisSelf();
