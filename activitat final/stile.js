var menuBtn = document.getElementById("menu-btn");
var menuDesplegable = document.getElementById("menu-desplegable");

menuBtn.addEventListener("click", function() {
  menuDesplegable.classList.toggle("oculto");
});
