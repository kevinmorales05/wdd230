const baseUrl = "https://kevinmorales05.github.io/wdd230/";
const weeks = [];
const localData = {
    "weeks": [
        {
            "week": "Week 01",
            "links": [
                {
                    "url": "week01/holygrail.html",
                    "title": "Holy Grail"
                },
                {
                    "url": "week01/javascript.html",
                    "title": "Javascript"
                },
                {
                    "url": "week01/media-query.html",
                    "title": "Responsive Design: CSS Media Queries"
                }
            ]
        },
        {
            "week": "Week 02",
            "links": [
                {
                    "url": "week02/design.html",
                    "title": "Web Design Principles"
                },
                {
                    "url": "week02/resposive.html",
                    "title": "Responsive Navigation"
                },
                {
                    "url": "week02/dom.html",
                    "title": "DOM Manipulation"
                }
            ]
        },
        {
            "week": "Week 03",
            "links": [
                {
                    "url": "week03/webp.html",
                    "title": "WebP"
                },
                {
                    "url": "week03/lazyload.html",
                    "title": "Lazyload"
                },
                {
                    "url": "week03/resposiveImg.html",
                    "title": "Responsive Images: srcset"
                },
                {
                    "url": "week03/webstorage.html",
                    "title": "Web Storage API- localStorage"
                }
            ]
        },
        {
            "week": "Week 04",
            "links": [
                {
                    "url": "week04/pseudoclass.html",
                    "title": "CSS PSeudo-classes"
                },
                {
                    "url": "week04/combinations.html",
                    "title": "CSS Combinations"
                },
                {
                    "url": "week04/table.html",
                    "title": "Table Build"
                }
                ,
                {
                    "url": "week04/forms.html",
                    "title": "HTML Forms"
                }
                ,
                {
                    "url": "week04/team.html",
                    "title": "Team Activity - Forum"
                }
            ]
        },
        {
            "week": "Week 05",
            "links": [
                {
                    "url": "week05/pseudoelement.html",
                    "title": "PSeudo-element"
                },
                {
                    "url": "week05/json.html",
                    "title": "JSON"
                },
                {
                    "url": "week05/fetch.html",
                    "title": "The Fetch API"
                }
                ,
                {
                    "url": "week05/weather.html",
                    "title": "Consuming a Weather API"
                }
            ]
        }
    ]
};

async function getData() {
    try {
        const infoData = await fetch("/data/links.json");
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
        console.log(error);
        localData.weeks.map((week) => {
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

    }
  
}

getData();

