function updateRatingValue() {
    document.getElementById('ratingValue').innerText = document.getElementById('page_rating').value;
}

function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}