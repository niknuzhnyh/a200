let startScreen = document.querySelector(".startScreen");
let descriptionScreen = document.querySelector(".descriptionScreen");
let nextBtns = document.getElementsByClassName("nextBtn");




for (let index = 0; index < nextBtns.length; index++) {
   const element = nextBtns[index];
   const parentSec = element.closest('section');

   element.addEventListener("click", () => {
      parentSec.classList.add('hidd')
      parentSec.nextElementSibling.classList.remove('hidd')
   });
}

function hidePreloader() {
   setTimeout(() => {
      startScreen.classList.add("hidd");
      descriptionScreen.classList.remove("hidd");
   }, 1000);
}

hidePreloader();


