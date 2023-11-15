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

// let burger_menue = document.getElementById("burger-menue");
// burger_menue.addEventListener("click", ()=>{
// document.getElementById("menue-icon").innerHTML =
//   `<img src="./assets/images/close-icon.svg" alt="Menue Icon" class="menue">`
//   document.getElementById("myNav").style.width = "100%";
// })

let burger_menue = document.getElementById("burger-menue");

if (burger_menue.textContent = (`<imgsrc="./assets/images/menu-icon.svg"alt="Menue Icon"class="menue"id="burger-menue"/>`)){
  burger_menue.addEventListener("click", ()=>{
    document.getElementById("menue-icon").innerHTML =
      `<img src="./assets/images/close-icon.svg" alt="Menue Icon" class="menue">`
      document.getElementById("myNav").style.width = "100%";
    })
}else if (burger_menue.textContent = `<img src="./assets/images/close-icon.svg" alt="Menue Icon" class="menue">`) {
  burger_menue.addEventListener("click", ()=>{
    document.getElementById("menue-icon").innerHTML =
      `<img src="./assets/images/menu-icon.svg" alt="Menue Icon" class="menue id="burger-menue"/>`
      document.getElementById("myNav").style.width = "0%";
    })
}