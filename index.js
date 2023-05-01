// api data = http://www.omdbapi.com/?apikey=87763a8c& 

const movieWrapper = document.querySelector('.movie-list');
const spinner = document.querySelector('.loading');

async function main(){
	const movies = await fetch(`https://www.omdbapi.com/?apikey=87763a8c&s=harry&plot=full`);
	const moviesData = await movies.json();

	movieWrapper.innerHTML = moviesData.Search.slice(0,6).map((movie) => movieHTML(movie)).join("");
    spinner.classList+= ' hidden'
}

function landing__scan(event){
	localStorage.setItem("searchWord", event.target.search.value);
}

function movieHTML(movie) {
	return `
	<div class="movie">
				<figure class="movie__img--wrapper">
					<img class="movie__img" src="${movie.Poster}" alt="">
				</figure>
				<div class="movie__title">
					${movie.Title}
				</div>
				<div class="movie__year">
					${movie.Year}
				</div>
	</div>
	`;
}



main();