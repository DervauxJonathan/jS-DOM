

/*    sélectionner le premier élément 'ol'

    faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children

    supprimer chaque enfant de 'ol' grâce à removeChild()

    déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]

    faire une boucle sur tous les enfants du tableau précédement crée

    pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()

    ajouter à chaque 'li' la valeur courrante tableau

    ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné */
var a = document.querySelector("ol");
while(a.firstChild){
  a.removeChild(a.firstChild);
}

var b = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (var i = 0; i < b.length;i++){
  var lil = document.createElement("li");
  var litxt = document.createTextNode(b[i]);
  lil.appendChild(litxt);
  a.appendChild(lil);
}
//console.log(i);
//console.log(b.length);
