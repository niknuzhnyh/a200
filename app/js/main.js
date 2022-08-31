const startScreen = document.querySelector(".startScreen");
const descriptionScreen = document.querySelector(".descriptionScreen");
const nextBtns = document.getElementsByClassName("nextBtn");

const questionItem = document.getElementById("0");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");


// yes/no buttons

yesBtn.addEventListener("click", () => {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add("animate__backOutLeft");
   setTimeout(() => {
      questionItem.classList.remove("animate__backOutLeft");
      questionItem.classList.add("animate__backInRight");
   }, 350);
});
noBtn.addEventListener("click", () => {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add("animate__backOutDown");
   setTimeout(() => {
      questionItem.classList.remove("animate__backOutDown");
      questionItem.classList.add("animate__backInRight");
   }, 350);
});


//next buttons

for (let index = 0; index < nextBtns.length; index++) {
   const element = nextBtns[index];
   const parentSec = element.closest("section");

   element.addEventListener("click", () => {
      window.scroll(0, 0);
      parentSec.classList.add("hidd");
      parentSec.nextElementSibling.classList.remove("hidd");
   });
}






//preloader 

function hidePreloader() {
   setTimeout(() => {
      startScreen.classList.add("hidd");
      startScreen.nextElementSibling.classList.remove("hidd");
   }, 1000);
}

hidePreloader();
