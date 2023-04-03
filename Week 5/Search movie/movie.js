const apiKey = "b4cdfba7";

async function getMovieData(title) {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    const data = await response.json();
    return data;
}

function displayMovieData(movieData) {
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    const poster = document.createElement("img");
    poster.src = movieData.Poster;
    resultDiv.appendChild(poster);

    const title = document.createElement("h2");
    title.textContent = movieData.Title;
    resultDiv.appendChild(title);

    const director = document.createElement("p");
    director.textContent = `Director: ${movieData.Director}`;
    resultDiv.appendChild(director);

    const year = document.createElement("p");
    year.textContent = `Year: ${movieData.Year}`;
    resultDiv.appendChild(year);

    const imdbRating = document.createElement("p");
    imdbRating.textContent = `IMDB Rating: ${movieData.imdbRating}`;
    resultDiv.appendChild(imdbRating);
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", async () => {
    const titleInput = document.getElementById("title");
    const title = titleInput.value.trim();
    if (title) {
        const movieData = await getMovieData(title);
        displayMovieData(movieData);
    }
});