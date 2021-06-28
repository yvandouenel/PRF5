// récupération de l'élément du DOM H1
//const h1 = document.getElementById("title1");
const h1 = document.querySelector("body #title1");
h1.style.color = "red";

function createDOMElement(markup_name, text, parent, attributes) {
  // Création d'élément du dom
  const element = document.createElement(markup_name);

  // Ajout de texte à un élément du dom
  element.textContent = text;

  // Positionner un élément dans le DOM
  parent.appendChild(element);

  // Ajout d'attributs
  attributes.forEach((attribute) => {
    element.setAttribute(attribute.name, attribute.value);
  });

  return element;
}

const p = createDOMElement("p", "Texte ici ", document.body, [
  { name: "class", value: "danger" },
]);

// Attribution d'un gestionnaire d'événement
// event Handle
p.onclick = function () {
  document.getElementById("title1").hidden = !document.getElementById("title1")
    .hidden;
};

const a = createDOMElement("a", "Ceci est un lien", document.body, [
  { name: "href", value: "https://coopernet.fr" },
]);

a.onclick = function (event) {
  // suppression des comportements par défaut (ici le changement de page)
  event.preventDefault();
};
