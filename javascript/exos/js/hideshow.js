// on stocke tous les éléments du dom qui ont pour nom
// de balise h1 dans la variable titles
const titles = document.querySelectorAll("h1");

// On "boucle" sur le tableau titles et pour chaque
// title, on va chercher l'élément frère suivant pour
// le cacher ou l'afficher
titles.forEach((title) => {
  title.onclick = function () {
    // On ne cache l'élément suivant que si c'est bien un paragraphe
    console.log(`element suivant : `, title.nextElementSibling.tagName);
    if (title.nextElementSibling.tagName != "H1")
      title.nextElementSibling.hidden = !title.nextElementSibling.hidden;
  };
});
