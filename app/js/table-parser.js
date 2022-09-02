
const pColl = document.getElementsByTagName("p");
const resDiv = document.querySelector(".res");
const resArr = [];


function pFilter() {
   for (let i = 0; i < pColl.length; i++) {
      const element = pColl[i];
      if (element.innerText.length > 7) {
         let t = element.innerText;
         resArr.push(t);
      }
   }
}

pFilter();

function resRender(arr) {
   for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      const element = `"${i+1}" : "${e}",</br>`;

      resDiv.innerHTML += element;
      
   }
}

resRender(resArr);
