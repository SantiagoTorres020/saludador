const saludoP = document.querySelector("#saludo");

const nombre = prompt("¿Cómo te llamas?");
saludoP.innerHTML = "Hola, " + nombre;
