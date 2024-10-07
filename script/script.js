// JavaScript code for the slideshow functionality

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slideshow-image");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/*<!-- <button class="button1" onclick="plusSlides(-1)">Previous</button>
<button class="button2" onclick="plusSlides(1)">Next</button>
Optional: Add navigation buttons if desired --> */
/* <!--java script for the slide show--> */

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
