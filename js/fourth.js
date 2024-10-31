const one4Btn = document.getElementById("one4Btn");
const two4Btn = document.getElementById("two4Btn");
const three4Btn = document.getElementById("three4Btn");
const four4Btn = document.getElementById("four4Btn");
const mySubmit4 = document.getElementById("mySubmit4");
const fourthresult = document.getElementById("fourthresult");

mySubmit4.onclick = function(){
    if (one4Btn.checked || two4Btn.checked || three4Btn.checked || four4Btn.checked) {
    if (one4Btn.checked){
        fourthresult.textContent = "Правильно"
    } else {
        fourthresult.textContent = "Неправильно"
    }
    } else {
        fourthresult.textContent = "Пожалуйста, выберите один из вариантов ответа."; 
    }
}
