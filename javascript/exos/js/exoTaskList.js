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

// Création d'ajout de la tâche

// Création du formulaire
const form = createMarkup("form", "", document.body);
const label = createMarkup("label", "Tâche : ", form);
const input = createMarkup("input", "", form, { name: "type", value: "text" });
const btn_create_task = createMarkup("button", "Créer une tâche", form, {
  name: "style",
  value: "margin: 20px auto;",
});

// Création du wrapper des taches
const wrapper_task = createMarkup("section", "", document.body);

// Gestion des événements

form.onsubmit = function (e) {
  e.preventDefault();

  const section = createMarkup("section", "", wrapper_task, {
    name: "style",
    value:
      "display: flex; justify-content: space-between; border: 1px solid grey; margin: 20px 0; padding:10px; ",
  });

  const text = createMarkup("span", form.querySelector("input").value, section);
  input.value = "";

  const wrapper_button = createMarkup("div", "", section, {
    name: "style",
    value: "margin-right: 20px;",
  });
  const button_validate = createMarkup(
    "button",
    "Valider la tâche",
    wrapper_button,
    { name: "style", value: "margin-right: 20px;" }
  );
  const button_unvalidate = createMarkup(
    "button",
    "Invalider la tâche",
    wrapper_button,
    { name: "style", value: "margin-right: 20px;" }
  );
  button_unvalidate.hidden = true;
  const button_delete = createMarkup("button", "Supprimer", wrapper_button);

  button_validate.onclick = function () {
    console.log(`clic sur button validate`);
    text.setAttribute("style", "text-decoration: line-through;");
    document.body.appendChild(section);
    button_unvalidate.hidden = false;
    button_validate.hidden = true;
  };
  button_unvalidate.onclick = function () {
    console.log(`clic sur button unvalidate`);
    text.setAttribute("style", "text-decoration: none;");
    wrapper_task.prepend(section);
    button_unvalidate.hidden = true;
    button_validate.hidden = false;
  };
  button_delete.onclick = function () {
    console.log(`clic sur button delete`);
    if (confirm("Etes vous sûr.e de vouloir supprimer cette tâche ?")) {
      section.remove();
    }
  };
};
