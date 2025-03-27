const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
  form.style.left = "50%"
  form.style.transform = "translatex(-50%)"
  form.style.visibility = "visible"
}

function esconderForm(){
  form.style.left = "-300px"
  form.style.transform = "translatex(0)"
  form.style.visibility = "hidden"
}