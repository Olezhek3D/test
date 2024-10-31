const onefBtn = document.getElementById("onefBtn");
const twofBtn = document.getElementById("twofBtn");
const threetBtn = document.getElementById("threetBtn");
const fourfBtn = document.getElementById("fourfBtn");
const mySubmit = document.getElementById("mySubmit");
const firstresult = document.getElementById("firstresult");

mySubmit.onclick = function() {
    if (onefBtn.checked || twofBtn.checked || threetBtn.checked || fourfBtn.checked) {
        if (onefBtn.checked) {
            firstresult.textContent = "Правильно.";
        } else {
            firstresult.textContent = "Нет :(";
        }
    } else {
        firstresult.textContent = "Пожалуйста, выберите один из вариантов ответа."; 
    }
};
