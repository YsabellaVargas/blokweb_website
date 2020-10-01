// JavaScript Document
// JavaScript Document

var hamburger = document.querySelector('nav ul:nth-of-type(2) li button');
console.log(hamburger)
var hamburgerClose = document.querySelector('nav ul:first-of-type li:last-of-type button');

console.log(hamburgerClose)


function toonHamburger() {
    document.body.classList.toggle('toonHamburger')
}

hamburger.addEventListener('click', toonHamburger);
hamburgerClose.addEventListener('click', toonHamburger)
