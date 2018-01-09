var a = document.querySelector("#my-table");
a.classList.add("bg-purple");

var b = document.querySelectorAll(".container p");
for ( var i = 0; i < b.length; i++) {
  b[i].classList.add("shadow");
}
