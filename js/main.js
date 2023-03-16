"use strict";


/*form*/
const formEl = document.querySelector('form');
const formControlEls = formEl.querySelectorAll('input, select');
formEl.addEventListener('submit', event => {
    formControlEls.forEach(formControlEl => {
        if (formControlEl.value === '') {
            formControlEl.classList.add('error');
            event.preventDefault();
        }
    });
});
formEl.addEventListener('input', event => {
    if (!event.target.classList.contains('form-control')) {
        return;
    }
    event.target.value === ''
        ? event.target.classList.add('error')
        : event.target.classList.remove('error');
});
/*form password*/
const check = function () {
    if (document.getElementById('password').value != '' && document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'пароли совпали';
        document.getElementById('password').classList.add('pass');
        document.getElementById('confirm_password').classList.add('pass');
        document.getElementById('password').classList.remove('error');
        document.getElementById('confirm_password').classList.remove('error');
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'пароли не совпадают';
        document.getElementById('password').classList.add('error');
        document.getElementById('confirm_password').classList.add('error');
        document.getElementById('password').classList.remove('pass');
        document.getElementById('confirm_password').classList.remove('pass');
    }
}
/*starrate*/
const ratingStars = [...document.getElementsByClassName("rating__star")];
function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);