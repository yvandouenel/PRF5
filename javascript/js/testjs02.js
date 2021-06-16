// Une fonction est un bloc de code {} que l'on va appeler
// quand on en a besoin

function sePresenter(firstname, lastname) { // paramètres
    console.log('Hello, je m\'appelle ', firstname, lastname);

    // Pour qu'une fonction renvoie quelque chose, il faut utiliser
    // le mot clé "return"
    return firstname + " " + lastname; // concaténation (assembler des chaînes de caractères )
}
let introduce_boby = sePresenter("Boby", "La Pointe");// arguments
sePresenter("José", "Bové");// arguments
sePresenter("Simone", "Veil");// arguments

console.log('introduce_boby : ', introduce_boby);

let moyenne = (x,y) => (x + y) / 2;

// déclaration d'une variable globale
let j = 55;
function test() {
    // déclaration d'une variable locale à la fonction test
    let j = 78;
    console.log('j : ', j);
}
test();
function test2() {
    // déclaration d'une variable locale à la fonction test2
    let z = 22;
    console.log('z : ', z);
    console.log('j : ', j);
}
test2();
// affiche dans la console la valeur de la variable globale j
console.log('j : ', j);

