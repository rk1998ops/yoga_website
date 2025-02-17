// Alert for buttons
function showAlert() {
  alert("Welcome to our Yoga Studio!");
}

// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Process the form data or integrate with a backend service
  alert("Your message has been sent!");
});

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

/* Slideshow Functionality */
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Manual slide control
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Start slideshow and heading animations after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  showSlides();

  let headings = document.querySelectorAll("h2");
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.5 }
  );
  headings.forEach((heading) => observer.observe(heading));
});
