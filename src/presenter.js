const saludoP = document.querySelector("#saludo");

const nombre = prompt("¿Cómo te llamas?");

const hora = new Date().getHours();
let saludo = "";

if (hora >= 5 && hora <= 11) {
  saludo = "Buenos días";
} else if (hora >= 12 && hora <= 18) {
  saludo = "Buenas tardes";
} else {
  saludo = "Buenas noches";
}

saludoP.innerHTML = saludo + ", " + nombre;
