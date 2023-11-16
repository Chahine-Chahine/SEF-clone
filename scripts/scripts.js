document.addEventListener('DOMContentLoaded', function () {
  const sentences = [
    'SOFTWARE ENGINEER?',
    'DATA ENGINEER?',
    'UI/UX DESIGNER?'
  ];

  // Corrected the rgba function and added missing 'rgba' prefix
  let color_list = ['rgba(40, 238, 167, 0.93)', 'rgba(152, 100, 218, 0.93)', 'rgba(251, 80, 142, 0.93)'];

  let currentIndex = 0;
  let offset = 0;
  const sentenceElement = document.querySelector('.sentence');
  const overlayElement = document.getElementById('overlay'); // Added overlay element reference
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


let burger_menue = document.getElementById("burger-menue");

if (burger_menue.innerHTML = (`<imgsrc="./assets/images/menu-icon.svg"alt="Menue Icon"class="menue"id="burger-menue"/>`)){
  burger_menue.addEventListener("click", ()=>{
    document.getElementById("menue-icon").innerHTML =
      `<img src="./assets/images/close-icon.svg" alt="Menue Icon" class="menue">`
      document.getElementById("myNav").style.width = "100%";
    })
}else if (burger_menue.innerHTML = `<img src="./assets/images/close-icon.svg" alt="Menue Icon" class="menue">`) {
  burger_menue.addEventListener("click", ()=>{
    document.getElementById("menue-icon").innerHTML =
      `<img src="./assets/images/menu-icon.svg" alt="Menue Icon" class="menue id="burger-menue"/>`
      document.getElementById("myNav").style.width = "0%";
    })
}

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
