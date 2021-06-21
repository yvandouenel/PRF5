// fonction construteur
class Pokemon {
  constructor(name) {
    // this.name est une propriété
    this.name = name;
  }
  // cette méthode est mise en commun dans le prototype
  // du constructeur de Pokemon pour toutes les instances
  introduceHisSelf() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// tadmorv est instance de Pokemon
const tadmorv = new Pokemon("Tadmorv"); // passage d'un argument

// appel de la méthode depuis une instance d'objet
tadmorv.introduceHisSelf();
console.log(`tadmorv : `, tadmorv);

// tadmorv est instance de Pokemon
const miaouss = new Pokemon("miaouss"); // passage d'un argument

// appel de la méthode depuis une instance d'objet
miaouss.introduceHisSelf();
console.log(`miaouss : `, miaouss);
