import saludar from "./saludador.js";

const saludoP = document.querySelector("#saludo");

function normalizarIdioma(idioma) {
  if (!idioma) return "ES";
  const limpio = idioma.trim().toUpperCase();
  if (limpio === "EN") return "EN";
  return "ES";
}

const idiomaIngresado = prompt("Language? ES or EN");
const idioma = normalizarIdioma(idiomaIngresado);

let nombre = "";
let genero = "";
let edad = 0;

if (idioma === "EN") {
  nombre = prompt("What's your name?");
  genero = prompt("Gender (M/F):");
  edad = Number.parseInt(prompt("Age:"));
} else {
  nombre = prompt("¿Cómo te llamas?");
  genero = prompt("Género (M/F):");
  edad = Number.parseInt(prompt("Edad:"));
}

const saludoFinal = saludar(nombre, genero, edad, idioma);
saludoP.innerHTML = saludoFinal;
