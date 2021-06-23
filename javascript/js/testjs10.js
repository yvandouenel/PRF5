// déclaration et affectation de la variable btn1 .
// On affecte l'élément du dom qui correspond à
// l'id btn1

const btn1 = document.getElementById("btn1");

// Affectation d'une fonction gestionnaire d'événement à la propriété onclick
btn1.onclick = function () {
  // ! signifie "inverse", le texte va se cacher ou s'afficher
  document.querySelector("p").hidden = !document.querySelector("p").hidden;
};
