async function getData() {
  try {
    let data = await fetch("data/members.json");
    let members = await data.json();
    //Build directory from scratch
    buildDirectory(members.members);
  } catch (error) {
    console.log(error);
  }
}
function buildDirectory(directoryArray) {
  console.log("newArray ", directoryArray);
  const gridBox = document.querySelector(".grid-box");
  const listBox = document.querySelector(".list-box");
  directoryArray.map((directory) => {
    //Create card grid list
    let cardGridDiv = document.createElement("div");
    //Create card list
    let cardListDiv = document.createElement("div");
    //Create elements
    let name = document.createElement("h2");
    name.innerHTML = directory.name;
    let address = document.createElement("p");
    address.innerHTML = directory.address;
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
    // build grid card

    //add card to listbox
    listBox.appendChild(cardListDiv);
    //add card to gridbox
    gridBox.appendChild(cardGridDiv);
  });
}
getData();
