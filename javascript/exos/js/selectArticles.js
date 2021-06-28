console.log(`Dans selectArticles`);

// Gestion de l'événement click sur les boutons
const buttons = document.querySelectorAll(".btn");
console.log(`buttons : `, buttons);

// Parcours des boutons
buttons.forEach((button) => {
  button.onclick = function () {
    console.log(
      `click sur un bouton dont le texte est : `,
      button.textContent.toLowerCase()
    );
    const articles = document.querySelectorAll("article");
    articles.forEach((article) => {
      // On affiche l'article par défaut
      article.hidden = false;

      // Si on a pas cliqué sur le bouton "tous" et
      // si le titre du bouton est différent de la class de l'article,
      // alors on cache le bouton
      if (
        button.textContent != "Tous" &&
        button.textContent.toLowerCase() != article.getAttribute("class")
      ) {
        article.hidden = true;
      }
    });
  };
});
