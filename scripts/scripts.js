document.addEventListener('DOMContentLoaded', function () {
  const sentences = [
    'SOFTWARE ENGINEER?',
    'DATA ENGINEER?',
    'UI/UX DESIGNER?'
  ];

  // Color list for manipulating the overlay id
  let color_list = ['rgba(40, 238, 167, 0.93)', 'rgba(152, 100, 218, 0.93)', 'rgba(251, 80, 142, 0.93)'];

  let currentIndex = 0;
  let offset = 0;
  const sentenceElement = document.querySelector('.sentence');
  const overlayElement = document.getElementById('overlay'); 
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 120;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentIndex].substring(0, offset);

    // Set background color of the overlay element
    overlayElement.style.backgroundColor = color_list[currentIndex];
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentIndex].length) {
        if (++skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentIndex = (currentIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  setInterval(handleAnimation, speed);
});

// Menue Icon
let menue_icon = document.getElementById("menue-icon");
let close_icon = document.getElementById("close-icon");

menue_icon.addEventListener("click", () => {
  document.getElementById("myNav").style.width = "100%";
  menue_icon.style.display = "none";
  close_icon.style.display = "block";
})

close_icon.addEventListener("click" , () => {
  document.getElementById("myNav").style.width = "0%";
  menue_icon.style.display = "block";
  close_icon.style.display = "none";

})

// carousel
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Function to automatically change slide every 5 seconds
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 5000); // Change slide every 5 seconds (adjust as needed)
}

// Start the automatic slideshow
autoSlide();


// Accordion
