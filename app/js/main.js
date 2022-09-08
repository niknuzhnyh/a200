//sections
const startScreen = document.querySelector(".startScreen");
const questionItem = document.querySelector(".card_item");

//checking for a started test
let userOld = JSON.parse(localStorage.getItem("userInfo"));
let answersOld = JSON.parse(localStorage.getItem("answers"));

//Curent Section
let curentSectionClassName = 'descriptionScreen';


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

//answers object
let answers = {};

//card elements
let questionCount = 1;
const cardTitle = document.querySelector(".card-title");

// проверка на неоконченый тест
if (answersOld) {
   const continueMesage = 'У вас не закінчений тест';
   const continueMesageinfo = `ПІБ : ${userOld.last_name} ${userOld.first_name} ${userOld.second_name} .<br> Бажаете продовжити ?`;
   
   curentSectionClassName = 'interview';
   cardTitle.innerHTML = `${continueMesage}<br> ${continueMesageinfo}`;

}


//get Curent Section
function getCurentSection(className) {
   const currentScreen = document.querySelector(`.${className}`);
   return currentScreen;
}

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
   if (answersOld) {
      answerContinueHandler("animate__backOutLeft", true)
   }
   answerHandler("animate__backOutLeft", true);
});
noBtn.addEventListener("click", () => {
   if (answersOld) {
      answerContinueHandler("animate__backOutDown", false)
   }
   answerHandler("animate__backOutDown", false);
});

function answerHandler(newClass, answer) {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add(newClass);
   answers[questionCount] = answer;
   questionCount++;
   setTimeout(() => {
      cardRender();
   }, 200);
   setTimeout(() => {
      questionItem.classList.remove(newClass);
      questionItem.classList.add("animate__backInRight");
   }, 400);
   localStorage.setItem("answers", JSON.stringify(answers));
}

function answerContinueHandler(newClass, answer) {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add(newClass);
   if (answer) {
      setTimeout(() => {
         questionCount = Object.keys(answersOld).length;
         questionCount++;
         console.log(answersOld);
         answers = answersOld;
         answersOld = false;
         cardRender();
      }, 200);
      setTimeout(() => {
         questionItem.classList.remove(newClass);
         questionItem.classList.add("animate__backInRight");
      }, 400);
      return;
   }
}


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
function cardRender() {
   cardTitle.innerHTML = `${questionCount}. ${questions[questionCount]}`
}


//preloader
function hidePreloader() {
   setTimeout(() => {
      startScreen.classList.add("hidd");
      getCurentSection(curentSectionClassName).classList.remove("hidd");
   }, 1000);
}

hidePreloader();

// for (const key in questions) {
//    if (Object.hasOwnProperty.call(questions, key)) {
//       const element = questions[key];

//       console.table(key, element);
      
//    }
// }
