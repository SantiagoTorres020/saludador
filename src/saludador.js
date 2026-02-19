function obtenerSaludoPorHora(hora, idioma) {
  const esIngles = idioma === "EN";

  if (esIngles) {
    if (hora >= 5 && hora <= 11) return "Good morning";
    if (hora >= 12 && hora <= 18) return "Good afternoon";
    return "Good evening";
  } else {
    if (hora >= 5 && hora <= 11) return "Buenos días";
    if (hora >= 12 && hora <= 18) return "Buenas tardes";
    return "Buenas noches";
  }
}

function obtenerTratamiento(genero, edad, idioma) {
  const esIngles = idioma === "EN";

  if (edad > 30) {
    if (esIngles) {
      if (genero === "M") return "Mr.";
      if (genero === "F") return "Mrs.";
    } else {
      if (genero === "M") return "Sr.";
      if (genero === "F") return "Sra.";
    }
  }

  return "";
}

function normalizarIdioma(idioma) {
  if (!idioma) return "ES";
  const limpio = idioma.trim().toUpperCase();
  if (limpio === "EN") return "EN";
  return "ES";
}

function saludar(nombre, genero, edad, idioma) {
  const idiomaFinal = normalizarIdioma(idioma);

  const hora = new Date().getHours();
  const saludoHora = obtenerSaludoPorHora(hora, idiomaFinal);

  const tratamiento = obtenerTratamiento(genero, edad, idiomaFinal);

  if (tratamiento === "") {
    return saludoHora + ", " + nombre;
  }

  return saludoHora + ", " + tratamiento + " " + nombre;
}

export default saludar;
