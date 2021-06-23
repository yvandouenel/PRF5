function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}
// Récupération de l'élément du dom header
const main_header = document.querySelector("body > header");

// Création de l'élément de navigation (nav)
const nav = createMarkup("nav", "", main_header);

// Création des bouttons
for (let i = 0; i < 4; i++) {
  createMarkup("button", `item ${i + 1}`, nav);
}
// Récupération de l'élément du DOM qui correspond au premier bouton
const button1 = document.querySelector("nav > button:first-of-type");
button1.style.color = "red";
//button1.style.color = "red";
