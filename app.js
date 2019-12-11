"use strict"
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
  
/*!-- Buy content -->*/
 
let modal = document.getElementById("myModal");

let buttons = document.querySelectorAll('.btn-buy'),
    index, button;

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
    
}

function clickHandler(event) {
    modal.style.display = "block";
    event.preventDefault();
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






/*!-- Buy content -->*/
 
let modal2 = document.getElementById("myModalCart");

let btn2 = document.querySelector("#cart");
console.log(btn2);

let span2 = document.getElementsByClassName("close-cart")[0];

btn2.addEventListener ("click",function() {
  modal2.style.display = "block";
} );

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



