const one3Btn = document.getElementById("one3Btn");
const two3Btn = document.getElementById("two3Btn");
const three3Btn = document.getElementById("three3Btn");
const four3Btn = document.getElementById("four3Btn");
const mySubmit3 = document.getElementById("mySubmit3");
const thirdresult = document.getElementById("thirdresult");

mySubmit3.onclick = function() {
    if (one3Btn.checked || two3Btn.checked || three3Btn.checked || four3Btn.checked) { 
        thirdresult.textContent = "Правильно! "; 
    } else {
        thirdresult.textContent = "Пожалуйста, выберите один из вариантов ответа."; 
    }
};
