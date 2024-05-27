const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const gridContainer = document.querySelector('#grid-section');
const listContainer = document.querySelector('#list-section');

function showList() {
	gridContainer.classList.add('hidden');
	listContainer.classList.remove('hidden');
    listbutton.style.backgroundColor="#c1272d";
    gridbutton.style.backgroundColor="#31a8df";
}
function showGrid() {
	gridContainer.classList.remove('hidden');
	listContainer.classList.add('hidden');
    gridbutton.style.backgroundColor="#c1272d";
    listbutton.style.backgroundColor="#31a8df";

}

listbutton.addEventListener("click", showList);
gridbutton.addEventListener("click", showGrid);