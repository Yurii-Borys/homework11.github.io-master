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
let btn2 = document.querySelector("#cart");
let cartNumber = document.querySelector("#cartNumber");
let contin=document.querySelector("#contin");
let continueCart=document.querySelector("#continueCart");
let buttons = document.querySelectorAll('.btn-buy');
let cartProduct=document.querySelector('.modal-body-cart');

 buttons.forEach( btn=> btn.addEventListener('click', (e)=>clickHandler(e,btn)));



function clickHandler(event,btn) {
    modal.style.display = "block";
    let valueDataset=JSON.parse(localStorage.getItem('valueDataset'));
    if (valueDataset) {
      valueDataset.push({
        name:btn.dataset.name,
        price:+btn.dataset.price,
        id:btn.dataset.id
      });
    } else {
      valueDataset= [{
        name:btn.dataset.name,
        price:+btn.dataset.price,
        id:btn.dataset.id}];
    }

    localStorage.setItem('valueDataset', JSON.stringify(valueDataset));
  
    event.preventDefault();
    let parseObj=JSON.parse(localStorage.getItem('valueDataset'));
    let [one]=parseObj;
    console.log(one.id);
    cartNumber.innerHTML=' '+parseObj.length;    
    cartProduct.innerHTML=parseObj.map(product =>`<div>${product.id}</div><div>${product.name}</div><div>${product.price}</div>`);
}

//continue buy
contin.onclick = function(){
    modal.style.display = "none";
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

//continue => got to cart
continueCart.onclick=function() {
  modal.style.display="none";
  modal2.style.display="block";
}

