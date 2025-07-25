document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value;
  alert('You searched for: ' + query);
});

// Mobile menu toggle functionality
const mobileMenu = document.getElementById('mobile-menu');
const navContainer = document.querySelector('.nav-container');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navContainer.classList.toggle('active');
    
    // Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    if(navContainer.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        bars[0].style.transform = 'rotate(0) translate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0) translate(0)';
    }
});

// Replace these with your image paths
const images = [
  "images/image4.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image5.jpg",
];

let index = 0;
const carouselImage = document.getElementById("carouselImage");

// Initialize with first image
carouselImage.src = images[index];

setInterval(() => {
  index = (index + 1) % images.length;
  carouselImage.src = images[index];
}, 1500);


   const container = document.getElementById("categoryContainer");
    let isInteracting = false;

    // Auto-scroll unless user is dragging
    function autoScroll() {
      if (!isInteracting) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      requestAnimationFrame(autoScroll);
    }

    // Pause on touch or pointer hold
    container.addEventListener("pointerdown", () => isInteracting = true);
    container.addEventListener("pointerup", () => isInteracting = false);
    container.addEventListener("mouseleave", () => isInteracting = false);

    autoScroll();