const modeButton = document.querySelector('#darkMode');
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const mainTitle1 = document.querySelector(".mainTitle1");
const mainTitle2 = document.querySelector(".mainTitle2");
const links = document.querySelectorAll('.externalLink');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
        header.style.background= 'black';
        header.style.color='white';
        body.style.background = 'black';
        hamButton.style.color='white';
        footer.style.background ='black';
        footer.style.color = 'white';
        card1.style.background='black';
        card1.style.borderColor="white";
        card2.style.background='black';
        card2.style.borderColor = 'white';
        mainTitle1.style.color='black';
        mainTitle2.style.color='black';
        links.forEach(function(elemento) {
            elemento.style.color = 'white'; 
        });

        
	} else {
		main.style.background = "#C6DDF0";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
        header.style.background= 'white';
        header.style.color='black';
        body.style.background = '#C6DDF0';
        hamButton.style.color='black';
        footer.style.background ='white';
        footer.style.color ='black';
        card1.style.background='#C6DDF0';
        card1.style.borderColor="white";
        card2.style.background='#C6DDF0';
        card2.style.borderColor="white";
        mainTitle1.style.color='black';
        mainTitle2.style.color='black';
        links.forEach(function(elemento) {
            elemento.style.color = 'black'; 
        });
        
	}
});