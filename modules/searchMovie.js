export const searchMovie = (texto, data) => {
    const result = data.filter((movie)) = movie.movies.filter((heroe) => heroe.superhero.toLowerCase().includes(texto.toLowerCase()))
    return result
}
