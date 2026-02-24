import saludar from "./saludador.js";

const boton = document.querySelector("#saludar-button");
const saludoP = document.querySelector("#saludo");

const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaSelect = document.querySelector("#idioma");

boton.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoInput.value;
  const edad = Number.parseInt(edadInput.value);
  const idioma = idiomaSelect.value;

  const resultado = saludar(nombre, genero, edad, idioma);
  saludoP.innerHTML = resultado;
});