import { searchMovie } from "../modules/searchMovie.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/movies"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const mainElement = document.getElementById("main");
        showData(data, mainElement);
    })
    .catch(error => console.error("Error al obtener los datos:", error));
    const imageContainer = document.getElementById("image-container");

    imagesData.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.image_url;
        imgElement.alt = image.description;
        imageContainer.appendChild(imgElement);
    });

    const searchValue = document.getElementById("search");

    searchValue.addEventListener("input", (e) => {
        const resultados = searchMovie(e.target.value, movies);
        if (resultados.length > 0) {
            showData(resultados, main);
          } else {
            main.innerHTML = "Su busqueda no generó resultados.";
          }

    })


