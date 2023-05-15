/*
 All Rights Reserved
 This software is property information of AKUREY S.A.
 Contact us at contact@akurey.com
 @summary Task 3 java script code
*/

let readAll__textTag = document.querySelector(".readAll__text");
let readAll__image = document.querySelector(".readAll__image");
let sinopsis__paragraph__hidden = document.querySelector(".sinopsis__paragraph__hidden");
let bigLogoContainer = document.querySelector(".bigLogoContainer");
let sinopsisBlock = document.querySelector(".sinopsis");
let mistObjects = document.querySelector(".mistObjects");
let menuLogo = document.querySelector(".menu");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let whiteFade = document.querySelector(".whiteFade");
let header = document.querySelector(".header");
let general = document.querySelector(".general");


const readAllClick = () => {
    const displaySinopsisHidden = sinopsis__paragraph__hidden.style.display;
    if (displaySinopsisHidden === "flex") {
        sinopsis__paragraph__hidden.style.display = "none";
        readAll__image.src= "Assets/ReadAllVector.png";
        readAll__textTag.innerHTML = "Read All";
        bigLogoContainer.style.display = "none";
        sinopsisBlock.classList.toggle("sinopsis__moreMarginTop");
        mistObjects.classList.toggle("mistObject__moreMarginBottom");
        whiteFade.classList.toggle("whiteFade__moreGradient");
    } else {
        sinopsis__paragraph__hidden.style.display = "flex";
        readAll__image.src = "Assets/ReadLessVector.png";
        readAll__textTag.innerHTML = "Read Less";
        bigLogoContainer.style.display = "flex";
        sinopsisBlock.classList.toggle("sinopsis__moreMarginTop");
        mistObjects.classList.toggle("mistObject__moreMarginBottom");
        whiteFade.classList.toggle("whiteFade__moreGradient");
    }
};

const menuLogoClick = () => {
    const displayHamburgerMenu = hamburgerMenu.style.display;
    if (displayHamburgerMenu === "flex") {
        hamburgerMenu.style.display = "none";
        menuLogo.src = "Assets/Menu.png";
        menuLogo.classList.toggle("menu__open");
    } else {
        hamburgerMenu.style.display = "flex";
        menuLogo.src = "Assets/MenuOpen.png";
        menuLogo.classList.toggle("menu__open");
    }
};

const closeHamburgerMenu = (event) => {
    let targetElement = event.target;
    if (general.contains(targetElement) && !hamburgerMenu.contains(targetElement) & !header.contains(targetElement))
    {
        hamburgerMenu.style.display = "none";
        menuLogo.src = "Assets/Menu.png";
        menuLogo.classList.toggle("menu__open");
    }
} 
document.addEventListener('click', closeHamburgerMenu);
readAll__image.addEventListener("click", readAllClick); 
menuLogo.addEventListener("click", menuLogoClick);
