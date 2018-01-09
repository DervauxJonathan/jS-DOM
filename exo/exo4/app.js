

/*    sélectioner le premier 'ul'

    crée un élément de type 'li'

    ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'

    ajouter ce 'li' l'élément dans le ul

    sélectionner le premier lien dans le 'li' précedement crée

    avec la propriété style change la couleur de texte de ce lien */


var a = document.querySelector("ul");
var node = document.createElement("li");
var textnode = document.createTextNode("Mon meilleur ami est ");
node.appendChild(textnode);

b = document.createElement('a');
b.href = 'http://www.google.com';
b.innerHTML = "google";
node.appendChild(b);
document.querySelector("ul").appendChild(node);
b.style.color = "red";
