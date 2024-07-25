import { searchMovie } from "../modules/searchMovie.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/movies"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const mainElement = document.getElementById("main");
        showData(data, mainElement);
    })
   

    const searchValue = document.getElementById("search");

    searchValue.addEventListener("input", (e) => {
        const resultados = searchMovie(e.target.value, movies);
        if (resultados.length > 0) {
            showData(resultados, main);
          } else {
            main.innerHTML = "Su busqueda no generó resultados.";
          }

    })


