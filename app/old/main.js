const questionItem = document.getElementById("0");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");



yesBtn.addEventListener('click',() => {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add("animate__backOutLeft");
   setTimeout(() => {
      questionItem.classList.remove("animate__backOutLeft");
      questionItem.classList.add("animate__backInRight");
   }, 350);
})
noBtn.addEventListener('click',() => {
   questionItem.classList.remove("animate__backInRight");
   questionItem.classList.add("animate__backOutDown");
   setTimeout(() => {
      questionItem.classList.remove("animate__backOutDown");
      questionItem.classList.add("animate__backInRight");
   }, 350);
})