const saludoP = document.querySelector("#saludo");

const nombre = prompt("¿Cómo te llamas?");
const genero = prompt("Género (M/F):");

const hora = new Date().getHours();
let saludo = "";

if (hora >= 5 && hora <= 11) {
  saludo = "Buenos días";
} else if (hora >= 12 && hora <= 18) {
  saludo = "Buenas tardes";
} else {
  saludo = "Buenas noches";
}

let tratamiento = "";
if (genero === "M") {
  tratamiento = "Señor";
} else if (genero === "F") {
  tratamiento = "Señora";
}

if (tratamiento === "") {
  saludoP.innerHTML = saludo + ", " + nombre;
} else {
  saludoP.innerHTML = saludo + ", " + tratamiento + " " + nombre;
}
