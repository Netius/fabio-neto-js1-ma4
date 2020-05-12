const url = "https://api.rawg.io/api/games/4200";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;

async function fetchGamesDetails() {
	try {
		const response = await fetch(corsUrl);
		const gamesDetails = await response.json();
		createGamesDetails(gamesDetails);
	} catch (error) {
		console.log(error);
	}
}
fetchGamesDetails();

function createGamesDetails(gamesDetails) {
	console.log(gamesDetails);
	const gamesName = document.querySelector(".container h1");
	const gamesImage = document.querySelector(".container .image");
	const gamesDescription = document.querySelector(".container .description");

	gamesName.innerHTML = gamesDetails.name;
	gamesImage.style.backgroundImage = `url(${gamesDetails.background_image_additional})`;
	gamesDescription.innerHTML = gamesDetails.description;
}
