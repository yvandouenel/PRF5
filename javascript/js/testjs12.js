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

const select_region = createMarkup("select", "", document.body, [
  { name: "id", value: "regions" },
]);
const select_department = createMarkup("select", "", document.body, [
  { name: "id", value: "departments" },
]);
fetch("https://geo.api.gouv.fr/regions")
  .then((data) => {
    return data.json(data);
  })
  .then((data) => {
    console.log("Region : ", data);
    data.forEach((region) => {
      const option = createMarkup("option", region.nom, select_region, [
        { name: "id", value: region.code },
      ]);
      console.log(`option : `, option);

      option.onclick = function () {
        console.log(`click sur une option`);
        /* fetch("https://geo.api.gouv.fr/regions/76/departements")
          .then((data) => {
            return data.json(data);
          })
          .then((data) => {
            console.log("departements d'occitanie : ", data);
          })
          .catch((error) => {
            console.error(`Erreur attrapée`, error.message);
          }); */
      };
    });
  })
  .catch((error) => {
    console.error(`Erreur attrapée`, error.message);
  });
