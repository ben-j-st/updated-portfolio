// // Get the modal
let modal = document.getElementById("modal-mobile");
let modal2 = document.getElementById("modal-email");

const modalProject = document.getElementById("modal-project");
const modalOld = document.getElementById("modal-old");
const modalWork = document.getElementById("modal-work");
const modalPass = document.getElementById("modal-pass");
const modalFloat = document.getElementById("modal-float");
const modalWeather = document.getElementById("modal-weather");
const modalBurger = document.getElementById("modal-burger")

// // Get the button that opens the modal
const mobileBtn = document.getElementById("mobile-icon");
const emailBtn = document.getElementById("email-icon");

const projectImg = document.getElementById("img-project");
const oldImg = document.getElementById("img-old");
const workImg = document.getElementById("img-work");
const passImg = document.getElementById("img-pass");
const floatImg = document.getElementById("img-float");
const weatherImg = document.getElementById("img-weather");
const burgerImg = document.getElementById("img-burger");

// // Get the <span> element that closes the modal
let span = document.getElementById("close-mobile");
let span2 = document.getElementById("close-email");

const closeProject = document.getElementById("close-project");
const closeOld = document.getElementById("close-old");
const closeWork = document.getElementById("close-work");
const closePass = document.getElementById("close-pass");
const closeFloat = document.getElementById("close-float");
const closeWeather = document.getElementById("close-weather");
const closeBurger = document.getElementById("close-burger");


// When the user clicks on the button, open the modal
mobileBtn.onclick = function() {
  modal.style.display = "block";
}

emailBtn.onclick = function() {
    modal2.style.display = "block";
}

// when the user clicks on the image open the modal
projectImg.onclick = function() {
    modalProject.style.display = "block";
}

oldImg.onclick = function() {
    modalOld.style.display = "block";
}

workImg.onclick = function() {
    modalWork.style.display = "block";
}

passImg.onclick = function() {
    modalPass.style.display = "block";
}

floatImg.onclick = function() {
    modalFloat.style.display = "block";
}

weatherImg.onclick = function() {
    modalWeather.style.display = "block";
}

burgerImg.onclick = function() {
    modalBurger.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

// close (spans) click event
closeProject.onclick = function() {
    modalProject.style.display = "none";
}

closeOld.onclick = function() {
    modalOld.style.display = "none";
}

closeWork.onclick = function() {
    modalWork.style.display = "none";
}

closePass.onclick = function() {
    modalPass.style.display = "none";
}

closeFloat.onclick = function() {
    modalFloat.style.display = "none";
}

closeWeather.onclick = function() {
    modalWeather.style.display = "none";
}

closeBurger.onclick = function() {
    modalBurger.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }   else if (event.target == modal2) {
        modal2.style.display = "none";
    }   else if (event.target == modalProject) {
        modalProject.style.display = "none";
    }   else if (event.target == modalOld) {
        modalOld.style.display = "none";    
    }   else if (event.target == modalWork) {
        modalWork.style.display = "none";
    }   else if (event.target == modalPass) {
        modalPass.style.display = "none";
    }   else if (event.target == modalFloat) {
        modalFloat.style.display = "none";
    }   else if (event.target == modalWeather) {
        modalWeather.style.display = "none";
    }else if (event.target == modalWeather) {
        modalWeather.style.display = "none";
    } else if (event.target == modalBurger) {
        modalBurger.style.display = "none";
    }
}   


