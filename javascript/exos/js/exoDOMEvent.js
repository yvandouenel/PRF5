/**
 * Fonction qui crée une instance d'élément du DOM
 * @param {string} markup_name
 * @param {string} text
 * @param {Objet} parent DOM element
 * @param {Objet} attribute
 * @return {0bject} element du DOM
 */
function createMarkup(markup_name, text, parent, attribute) {
  // la variable markup stocke le retour de la fonction
  // createElement. Ce retour a pour type "object". Cet objet est
  // un élément du DOM. markup pointe donc (ou stocke) vers  un élément du dom
  const markup = document.createElement(markup_name);

  // Ajout de texte à l'élément du dom markup
  markup.textContent = text;

  // Positionnement de markup en tant que dernier fils de l'élément
  // du dom "parent"
  parent.appendChild(markup);

  // Si attribute est défini et qu'il a bien la propriété name,
  // alors on ajoute à markup l'attribut qui a pour nom
  // attribute.nom et pour valeur attribute.value
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }

  // La fonction renvoie l'élément du DOM markup
  return markup;
}
