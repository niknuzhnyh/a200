//sections
const startScreen = document.querySelector(".startScreen");
const descriptionScreen = document.querySelector(".descriptionScreen");
const questionItem = document.getElementById("0");

//form elements
const first_name = document.getElementById("first_name");
const second_name = document.getElementById("second_name");
const last_name = document.getElementById("last_name");
const genderGroup = document.getElementsByName("genderGroup");
const birthdate = document.getElementById("birthdate");
const inputsCollection = document.getElementsByTagName("input");
const formBtn = document.getElementById("formBtn");


//btns
const nextBtns = document.getElementsByClassName("nextBtn");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

//user object
const userInfo = {};

//validation
for (let index = 0; index < genderGroup.length; index++) {
   const element = genderGroup[index];
   element.addEventListener("change" ,() => {
      userInfo.gender = element.value;
   })
}

for (let index = 0; index < inputsCollection.length; index++) {
   const element = inputsCollection[index];
   if (element.type == "text" || element.type == "date") {
      element.addEventListener("change" ,()=> {
         if (first_name.value && second_name.value && last_name.value && birthdate.value && userInfo.gender) {
            formBtn.disabled = false;
         }
      })
   }
}

formBtn.addEventListener("click", (evt) => {
   evt.preventDefault();
})











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
