async function getDataFromJson() {
  try {
      const response = await fetch("data.json");
      const data = await response.json();
      return data; // Esto debería ser un array con los datos de las imágenes
  } catch (error) {
      console.error("Error al obtener los datos desde data.json:", error);
      return []; // Devuelve un array vacío en caso de error
  }
}

