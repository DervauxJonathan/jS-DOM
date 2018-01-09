var e = document.body;
e.classList.remove("bg-aqua");
e.classList.add("bg-olive");
var p = document.getElementById("first-paragraph");
p.classList.remove("bg-lime", "gray");
p.classList.add("aqua");
var x = document.getElementsByClassName("bg-silver");
x[0].classList.add("bg-teal");
x[0].classList.remove("bg-silver");
var block = document.getElementsByTagName("blockquote")
block[0].classList.add("bg-white");
