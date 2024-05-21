const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	console.log('open!');
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});