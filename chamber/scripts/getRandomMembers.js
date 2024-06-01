async function getRandomMembers(){
    try {
      let data = await fetch("data/members.json");
      let members = await data.json();
      const premiumMembers = members.members.filter( member => member.membershipLevel == 'Gold' || member.membershipLevel == 'Silver');
      let min = 0;
      let max = premiumMembers.length - 1;
      let randomNum1 = 1;
      let randomNum2 = 1;
      while(randomNum1 == randomNum2){
        randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const randomArray = [];
      randomArray.push(premiumMembers[randomNum1]);
      randomArray.push(premiumMembers[randomNum2]);
  
      //Build directory from scratch
      buildRandomArray(randomArray);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  function buildRandomArray (directoryArray) {
    const gridBox = document.querySelector("#spotlights");
    directoryArray.map((directory) => {
      //Create card grid list
      let cardGridDiv = document.createElement("div");
      //Create card list
      let cardListDiv = document.createElement("div");
      //Create elements
      let name = document.createElement("h2");
      name.innerHTML = directory.name;
      let address = document.createElement("p");
      address.innerHTML = directory.spotlight;
      let phoneNumber = document.createElement("p");
      phoneNumber.innerHTML = directory.phoneNumber;
      let websiteURL = document.createElement("a");
      //add url
      websiteURL.setAttribute("href", directory.websiteURL);
      //add text
      websiteURL.textContent = "Web Site URL";
      let iconFileName = document.createElement("img");
      //add url for the img
      iconFileName.setAttribute("src", directory.iconFileName);
      //add text
      iconFileName.setAttribute("alt", directory.name);
      let membershipLevel = document.createElement("h3");
      membershipLevel.innerHTML = directory.membershipLevel;
      let email = document.createElement("p");
      email.innerHTML = directory.email;
      //Add style classes grid
      cardGridDiv.classList.add("grid-card");
      name.classList.add("name-grid");
      address.classList.add("address-grid");
      phoneNumber.classList.add("telephone-grid");
      websiteURL.classList.add("website-grid");
      iconFileName.classList.add("img-grid");
      membershipLevel.classList.add("plan-grid");
      email.classList.add("email-grid");
      //create list elements
      //create elements list
      let nameL = document.createElement("h2");
      nameL.innerHTML = directory.name;
      let addressL = document.createElement("p");
      addressL.innerHTML = directory.address;
      let phoneNumberL = document.createElement("p");
      phoneNumberL.innerHTML = directory.phoneNumber;
      let websiteURLL = document.createElement("a");
      //add url
      websiteURLL.setAttribute("href", directory.websiteURL);
      //add text
      websiteURLL.textContent = "Web Site URL";
  
      //create style for list elements
      cardListDiv.classList.add("list-card");
      nameL.classList.add("name-list");
      addressL.classList.add("address-list");
      phoneNumberL.classList.add("telephone-list");
      websiteURLL.classList.add("website-list");
  
      //build list card
      cardListDiv.appendChild(nameL);
      cardListDiv.appendChild(addressL);
      cardListDiv.appendChild(phoneNumberL);
      cardListDiv.appendChild(websiteURLL);
  
      //build grid card
      cardGridDiv.appendChild(name);
      cardGridDiv.appendChild(membershipLevel);
      cardGridDiv.appendChild(iconFileName);
      cardGridDiv.appendChild(phoneNumber);
      cardGridDiv.appendChild(address);
      cardGridDiv.appendChild(email);
      cardGridDiv.appendChild(websiteURL);
  
      //add card to gridbox
      gridBox.appendChild(cardGridDiv);
    });
  }
  
  getRandomMembers()