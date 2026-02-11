const slider = document.getElementById("slider");
const button = document.getElementById("main-button");

// Comprobación visual
console.log("JS cargado");

// Valor inicial
button.textContent = slider.value;

// Evento
slider.addEventListener("input", () => {
  console.log("Valor:", slider.value);
  button.textContent = slider.value;
});
