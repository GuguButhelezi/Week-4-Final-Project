const movieWrapper = document.querySelector('.movie-list');
const searchKey = localStorage.getItem("searchWord");

async function main(search){
	const movies = await fetch(`https://www.omdbapi.com/?apikey=87763a8c&s=${search}`);
	const moviesInfo = await movies.json();

	if(moviesInfo.Response === 'False'){
		movieWrapper.innerHTML = scanErrorHTML(search);
	}
	else {
		movieWrapper.innerHTML = moviesInfo.Search.map((movie) => movieHTML(movie)).join("");
	}

}

function scan(event){
	event.preventDefault();
	const searchWord = event.target.search.value;
	main(searchWord);
}

function movieHTML(movie) {
	
	return `
	<div class="movie">
				<figure class="movie__img--wrapper">
					<img class="movie__img" src="${movie.Poster}" alt="Poster not found">
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

function scanErrorHTML(search){
	return `
			
			<div class="scan__empty">
				<figure class="scan__img--wrapper">
					<img src="./assets/undraw_sorting_thoughts_re_fgli.svg" class="scan__img">
				</figure>

				<h1 class="scan__text">"${search}" was not found.</h1>
			</div>
	`
}

main(searchKey);
