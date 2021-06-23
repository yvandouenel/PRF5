const getMethods = (obj) => {
  let properties = new Set();
  let currentObj = obj;
  do {
    Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
  } while ((currentObj = Object.getPrototypeOf(currentObj)));
  return [...properties.keys()].filter(
    (item) => typeof obj[item] === "function"
  );
};
//h1.remove();
// Création d'un élément du dom
function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}

const section = createMarkup("section", "Section A", window.document.body, {
  name: "class",
  value: "section",
});
const p = createMarkup("p", "Lorem ipsum qsdf qsdforezakjfo oisz", section, {
  name: "class",
  value: "paragraphe",
});
// suppresion d'un élément du dom
/* const last_article = document.querySelector("main article:last-of-type");
console.log(`last_article : `, last_article);
last_article.remove(); */

// Suppression de plusieurs éléments du dom
const articles = document.querySelectorAll("main article");
console.log(`articles :`, articles);

// Parcours des articles
articles.forEach((article) => {
  // Création d'un bouton que l'on ajoute à la fin de chaque article
  const button = createMarkup("button", "Lire la suite", article);
});
