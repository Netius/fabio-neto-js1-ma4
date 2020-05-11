const gamesUrl = "https://api.rawg.io/api/games";
const corsEnableUrl = "https://noroffcors.herokuapp.com/" + gamesUrl;

async function fetchGames() {
	try {
		const response = await fetch(corsEnableUrl);
		const games = await response.json();
		createGames(games);
	} catch (error) {
		console.log(error);
	}
}
fetchGames();

function createGames(games) {
	const resultsGames = document.querySelector(".results");
	const gamesResults = games.results;
	let gamesHtml = "";

	for (let i = 0; i < gamesResults.length; i++) {
		gamesHtml += `<div class="game">
        <h2>${gamesResults[i].name}</h2>
        <img src="${gamesResults[i].background_image}" alt="${gamesResults[i].name}" />
         </div>`;
	}

	resultsGames.innerHTML = gamesHtml;
}
