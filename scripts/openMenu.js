const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const box = document.querySelector('.herolabel');
hamButton.addEventListener('click', () => {
	//console.log('open!');
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	box.classList.toggle('open');
});