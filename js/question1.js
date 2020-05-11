const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateFirstName);

function validateFirstName(event) {
	event.preventDefault();

	const errorMessage = document.querySelector("#firstNameError");
	const firstName = document.querySelector("#firstName");

	const firstNameValue = firstName.value;

	if (validateLength(firstNameValue) === true) {
		errorMessage.style.display = "none";
	} else {
		errorMessage.style.display = "block";
	}
}

function validateLength(firstNameValue) {
	const trimmedFirstName = firstNameValue.trim();

	if (trimmedFirstName.length >= 2) {
		return true;
	} else {
		return false;
	}
}
