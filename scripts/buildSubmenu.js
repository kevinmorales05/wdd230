const baseUrl = "https://kevinmorales05.github.io/wdd230/";
const weeks = [];

async function getData() {
    try {
        const infoData = await fetch("../data/links.json");
  const data = await infoData.json();
  //console.log("URLS data", data);
  data.weeks.map((week) => {
    weeks.push(week);
  });
  //console.log("new Array ", weeks);


  let uncrambleList = document.querySelector("#links-ul");

  weeks.map((element) => {
    const listElement = document.createElement("li");
    listElement.textContent = element.week + ": ";
    element.links.map((link) => {
        //console.log(link)
      const hyperkink = document.createElement("a");
      hyperkink.href = baseUrl + link.url;
      hyperkink.textContent = link.title + " | ";
      listElement.appendChild(hyperkink);
    });
    uncrambleList.appendChild(listElement);
  });
    } catch (error) {
        console.log(errror);
    }
  
}

getData();

