// JavaScript Document

//hamburgermenu
var hamburger = document.querySelector('nav ul:nth-of-type(2) li button');
console.log(hamburger)
var hamburgerClose = document.querySelector('nav ul:first-of-type li:last-of-type button');

console.log(hamburgerClose)

function toonHamburger() {
  document.body.classList.toggle('toonHamburger')
}

hamburger.addEventListener('click', toonHamburger);
hamburgerClose.addEventListener('click', toonHamburger)

//Automatische slider
var slider = document.querySelectorAll(".article-slider article"); //hiermee pak ik alle articles
console.log(slider)

var counter = 1; //maak een teller aan

function moveArticle() {

  console.log(counter)
  slider.forEach(element => { //voor elk article in de slider iets doen
    element.style.transform = "translateX(-" + counter * 2 + "00%)"; //transform het element
  });
  counter++ //teller omhoog

  if (counter == slider.length / 2) {
    counter = 0;
  } //als de teller hetzelfde is als de helft van de slider elementen wordt er terug gereset naar 0

  console.log("fire")
}

window.setInterval(moveArticle, 8000); //roept de functie elke 8 seconden aan

moveArticle()

//uitklapbare footer
var footerFirst = document.querySelector('footer section:nth-of-type(3) button')

console.log(footerFirst)

function toonFooter() {
  document.body.classList.toggle('toonFooter');
}

footerFirst.addEventListener('click', toonFooter)


var footerSecond = document.querySelector('footer section:nth-of-type(4) button')

console.log(footerSecond)

function toonFooter2() {
  document.body.classList.toggle('toonFooter2');
}

footerSecond.addEventListener('click', toonFooter2)


var footerThird = document.querySelector('footer section:nth-of-type(5) button')

console.log(footerThird)

function toonFooter3() {
  document.body.classList.toggle('toonFooter3');
}

footerThird.addEventListener('click', toonFooter3)
