function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}

// création du bouton
const btn = createMarkup("button", "Ajouter un paragraphe", document.body);

// Affectation d'un gestionnaire d'événement onclick sur le bouton
btn.onclick = function () {
  createMarkup(
    "p",
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur minima doloremque voluptate voluptatum odit mollitia culpa in consectetur magnam reprehenderit eos accusamus ex adipisci, molestias architecto voluptates. Quis, sequi nostrum. ",
    document.body
  );
};
