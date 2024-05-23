const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const message = document.querySelector("#errorMessage");

confirmPassword.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== confirmPassword.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		confirmPassword.style.backgroundColor = "#fff0f3";
		confirmPassword.value = "";
		confirmPassword.focus();
	} else {
		message.style.display = "none";
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.style.color = "#000";
	}
}
