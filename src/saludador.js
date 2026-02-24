function obtenerSaludoPorHora(hora, idioma) {
  if (idioma === "EN") {
    if (hora >= 5 && hora <= 11) return "Good morning";
    if (hora >= 12 && hora <= 18) return "Good afternoon";
    return "Good evening";
  }

  if (hora >= 5 && hora <= 11) return "Buenos días";
  if (hora >= 12 && hora <= 18) return "Buenas tardes";
  return "Buenas noches";
}

function obtenerTratamiento(genero, edad, idioma) {
  if (edad > 30) {
    if (idioma === "EN") {
      if (genero === "M") return "Mr.";
      if (genero === "F") return "Mrs.";
    } else {
      if (genero === "M") return "Sr.";
      if (genero === "F") return "Sra.";
    }
  }
  return "";
}

function saludar(nombre, genero, edad, idioma) {
  const hora = new Date().getHours();
  const saludoHora = obtenerSaludoPorHora(hora, idioma);

  const tratamiento = obtenerTratamiento(genero, edad, idioma);

  if (tratamiento === "") {
    return saludoHora + ", " + nombre;
  }

  return saludoHora + ", " + tratamiento + " " + nombre;
}

export default saludar;