const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  form.style.visibility = "visible";
  mascara.style.display = "block";
}

function esconderForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  form.style.visibility = "hidden";
  mascara.style.display = "none";
}

