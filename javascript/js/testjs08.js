const p1 = {
  firstname: "Bob",
  lastname: "Marley",
  vote: function () {
    console.log(`${this.firstname} a voté`);
  },
};
for (property in p1) {
  console.log(`property : `, property);
  console.log(`property value : `, p1[property]);
}
/* // Boucle for avec incrémentation (augmentation de 1)
for (let i = 0; i < 10; i++) {
  console.log(`i : `, i);
}
console.log(`i : `, i); */

console.log(`Prénom de p1 : `, p1["firstname"]);
console.log(`Prénom de p1 : `, p1.firstname);

p1.vote();
p1["vote"]();

var i;
console.log(`i : `, i);
