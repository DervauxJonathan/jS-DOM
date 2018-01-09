

/*    sélectionne tous les éléments de type 'pre'

    avec la propriété style change la couleur de texte

    avec la propriété style change la couleur de fond grâce à backgroundColor

    avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )

    avec la propriété style ajouter un border-bottom de 3px solid red

    sélectionne le premier élément de type 'h3'

    ramplacer son contenu HTML en <em>Itelic title ! yeah !</em>

    sélectionne le premier élément de type 'h2'

    ramplacer son contenu texte par en <strong>HTML doens't work !</strong> */

var a = document.querySelector("pre");
a.style.color ="red";
a.style.backgroundColor ="black";
a.style.borderTop = "3px solid red";
a.style.borderBottom = "3px solid red";

var b = document.querySelector("h3");
b.innerHTML = "<em>Itelic title ! yeah !</em>";

var c = document.querySelector("h2");
c.innerText = "<strong>HTML doens't work !</strong>";
