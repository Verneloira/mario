const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
  document.querySelector(".formulario-fale-conosco").style.left = "50px";
  document.querySelector(".mascara-formulario").style.display = "block";
  document.querySelector(".mascara-formulario").style.visibility = "visible";
}

function esconderForm() {
  document.querySelector(".formulario-fale-conosco").style.left = "-300px";
  document.querySelector(".mascara-formulario").style.visibility = "hidden";
  document.querySelector(".mascara-formulario").style.display = "none";
}
