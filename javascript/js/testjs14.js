/**
 * Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name
 * @param {string} text
 * @param {Objet} parent DOM element
 * @param {array} attributes tableau d'objets
 * @return {0bject} element du DOM
 */
function createMarkup(markup_name, text, parent, attributes) {
  // la variable markup stocke le retour de la fonction
  // createElement. Ce retour a pour type "object". Cet objet est
  // un élément du DOM. markup pointe donc (ou stocke) vers  un élément du dom
  const markup = document.createElement(markup_name);

  // Ajout de texte à l'élément du dom markup
  markup.textContent = text;

  // Positionnement de markup en tant que dernier fils de l'élément
  // du dom "parent"
  parent.appendChild(markup);

  // Si attribute est défini et que c'est bien un tableau qui a au moins un élément alors on parcourt le tableau d'objets. Pour chaque objet, on fait appel à setAttribute pour ajouter l'attribut qui correspond au nom (name) et à la valeur (value)
  if (attributes && Array.isArray(attributes) && attributes.length > 0) {
    // parcours du tableau attributes
    attributes.forEach((element) => {
      markup.setAttribute(element.name, element.value);
    });
  }

  // La fonction renvoie l'élément du DOM markup
  return markup;
}

// Création des éléments du dom pour créer une liste déroulante
const select = createMarkup("select", "", document.body);

// Récupération des données
fetch("https://geo.api.gouv.fr/regions")
  .then((data) => {
    // data est de type Response
    console.log(`data : `, data);
    // Je vérifie si la données est bien du json
    // via la fonction json qui renvoie
    return data.json();
  })
  .then(function (data) {
    // Data est de type tableau d'objets
    data = data.sort();
    console.log(`data : `, data);
    data.forEach((region) => {
      createMarkup("option", region.nom, select);
    });
  })
  .catch((error) => {
    console.error(`erreur : `, error.message);
  });
