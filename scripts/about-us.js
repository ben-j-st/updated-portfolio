//gets the modal
const modalMobile = document.getElementById("modal-mobile");
const modalEmail = document.getElementById("modal-email");

// get the icons to use as buttons
const mobileBtn = document.getElementById("mobile-icon");
const emailBtn = document.getElementById("email-icon");

// get the close spans to use as exit buttons
const closeMobile = document.getElementById("close-mobile");
const closeEmail = document.getElementById("close-email");

// attach click event to display modals
mobileBtn.onclick = function() {
    modalMobile.style.display = "block";
  }
  
  emailBtn.onclick = function() {
      modalEmail.style.display = "block";
  }

// attach on click events to close modals
closeMobile.onclick = function() {
modalMobile.style.display = "none";
}

closeEmail.onclick = function() {
modalEmail.style.display = "none";
};

// event to handle clicking off the modal 
window.onclick = function(event) {
    if (event.target == modalMobile) {
        modalMobile.style.display = "none";
    } else if (event.target == modalEmail) {
        modalEmail.style.display = "none";
    }
}



