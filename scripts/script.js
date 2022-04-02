"use strict"

// form-search
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

document.documentElement.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem === searchIcon || elem === searchInput) {
        searchIcon.style.display = "none";
        searchInput.style.display = "block";
        searchInput.focus();
    } else {
        searchIcon.style.display = "block";
        searchInput.style.display = "none";
    }
});


// modal window
const statement = document.getElementById('statement');
const modalForm = document.getElementById('modal-form');
const closeModalForm = document.getElementById('close-modal-form');

statement.addEventListener('click', (e) => {
    e.preventDefault();
    modalForm.classList.remove('d-none');
    document.documentElement.style.overflow = 'hidden';
});

closeModalForm.addEventListener('click', () => {
    modalForm.classList.add('d-none');
    document.documentElement.style.overflow = 'auto';
});


// Динамическое добавление контента при скроллинге.
const parent = document.querySelectorAll('.parent');
const elem = document.querySelectorAll('.parent>.elem');

function isVisible(element) {
    let coords = element.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible && bottomVisible;
}

function showVisible() {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].style.display = 'flex';
        }
    }
}

window.addEventListener('scroll', showVisible);


// кнопка 'наверх'
const arrowTop = document.getElementById('arrowTop');

arrowTop.onclick = () => window.scrollTo(pageXOffset, 0);

window.addEventListener('scroll', () => {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});


// Плавная прокрутка к якорю.

const menu = document.getElementById('menu');

menu.addEventListener('click', (e) => {
    if (e.target !== statement && e.target.tagName === 'A') {
        showElem();
    }
})

function showElem() {
    elem.forEach(item => item.style.display = 'flex');
}