//sections
const startScreen = document.querySelector(".startScreen");
const descriptionScreen = document.querySelector(".descriptionScreen");
const questionItem = document.querySelector(".card_item");

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

//card elements
let questionCount = 1;
const cardTitle = document.querySelector(".card-title");



//validation
for (let index = 0; index < genderGroup.length; index++) {
   const element = genderGroup[index];
   element.addEventListener("change", () => {
      userInfo.gender = element.value;
   });
}

for (let index = 0; index < inputsCollection.length; index++) {
   const element = inputsCollection[index];
   element.addEventListener("change", () => {
      if (
         first_name.value &&
         second_name.value &&
         last_name.value &&
         birthdate.value &&
         userInfo.gender
      ) {
         formBtn.disabled = false;
      }
      else {
         formBtn.disabled = true;
      }
   });
}


//form submit
formBtn.addEventListener("click", (evt) => {
   evt.preventDefault();

   userInfo.first_name = first_name.value;
   userInfo.second_name = second_name.value;
   userInfo.last_name = last_name.value;
   userInfo.birthdate = birthdate.value;

   localStorage.setItem("userInfo", JSON.stringify(userInfo));


});


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


// card render
cardTitle.innerHTML = `${questionCount}. ${questions[questionCount]}`


//preloader
function hidePreloader() {
   setTimeout(() => {
      startScreen.classList.add("hidd");
      startScreen.nextElementSibling.classList.remove("hidd");
   }, 1000);
}

hidePreloader();

// for (const key in questions) {
//    if (Object.hasOwnProperty.call(questions, key)) {
//       const element = questions[key];

//       console.table(key, element);
      
//    }
// }
