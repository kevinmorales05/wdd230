function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    console.log('params ', params);
    return {
        username: params.get('username'),
        email: params.get('email'),
        page_rating: params.get('page_rating')
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const params = getQueryParams();
    document.getElementById('username').innerText = params.username;
    document.getElementById('email').innerText = params.email;
    document.getElementById('page_rating').innerText = params.page_rating || 'Not provided';
});