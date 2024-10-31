const onesBtn = document.getElementById("onesBtn");
const twosBtn = document.getElementById("twosBtn");
const threesBtn = document.getElementById("threesBtn");
const foursBtn = document.getElementById("foursBtn");
const mySubmits = document.getElementById("mySubmits");
const secondresult = document.getElementById("secondresult");



mySubmits.onclick = function(){
    
    if (onesBtn.checked || twosBtn.checked || threesBtn.checked || foursBtn.checked) {
    if (twosBtn.checked) {
        secondresult.textContent = "Правильно. Так как 'Кот' является мужским родом => нужно было глагол 'уронил' ставить в мужском роде - 'уронил'"
    }
    else if (onesBtn.checked){
        secondresult.textContent = "Неправильно. Так как 'Девочка' является женским родом => нужно было глагол 'играл' ставить в женском роде - 'играла'"
    }
    else if (threesBtn.checked){
        secondresult.textContent = "Неправильно. Так как 'Мальчик' является мужским родом => нужно было глагол 'ударилась' ставить в мужском роде - 'ударился'"
    }
    else if (foursBtn.checked){
        secondresult.textContent = "Неправильно. Так как 'Дети' являются множественным числом => нужно было глагол 'играл' ставить во множественном числе - 'играли'"
    }
} else {
    secondresult.textContent = "Пожалуйста, выберите один из вариантов ответа."
}
}
