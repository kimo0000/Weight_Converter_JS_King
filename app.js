const container = document.querySelector('.container');
const pound = document.getElementById('pound');
const result = document.getElementById('result');
const popup = document.querySelector('.popup');

let counter = null;

pound.addEventListener('change', (e) => {
    if(pound.value <= 49) {
       popup.innerText = "Please Insert A Valid number!";

       setTimeout(() => {
        popup.innerText = "";
       }, 2000);
    } else {
        const displayResult = (+pound.value / 2 ) - 4.5;
        result.innerText = displayResult + ' KG';

        clearTimeout(counter);

        counter = setTimeout(() => {
          pound.value = "";
          result.innerText = "";
        }, 5000);
    }
})