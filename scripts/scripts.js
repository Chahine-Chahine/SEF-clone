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

// Programs
document.addEventListener('DOMContentLoaded', function () {
  const programButtons = document.querySelectorAll('.tabs-head')

  // Define an array of sections, each with its own set of properties
  const sections = [
    {
      image: './assets/images/fcs-tab.png',
      explanation: '// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.',
      title1: '> FCS:',
      title2: ' Foundations of Computer Science',
      color: '#FFC635'
    },
    
    {
      image: './assets/images/fsw-tab.png',
      explanation: '// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become software engineers.They will learn essential concepts such as Version Control, OOP, Database Management Systems, MVC Design Patterns, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.',
      title1: '> FSW:',
      title2: "Full-Stack Web Development",
      color: '#28EEA7', 
    },
    
    {
      image: './assets/images/fsd-tab.png',
      explanation:'// SE Factorys 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.',
      title1: '> FSD:',
      title2: 'Full-Stack Data',
      color: '#9864DA'
    },
    {
      image: './assets/images/uix-tab.png',
      explanation: '// SE Factorys 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.',
      title1: '> UIX:',
      title2: 'UI/UX Design Bootcamp',
      color: '#fb508e'
    }
  ]

 
  programButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      
      programButtons.forEach(function (btn) {  // Remove 'defualt' class from all buttons
        btn.classList.remove('defualt')
        btn.style.color = ''
      })

      // Add 'defualt' class to the clicked button
      button.classList.add('defualt')
      button.style.color = sections[index].color
      
      // Update image source according to the button clicked
      const programImage = document.querySelector('.program-img')
      programImage.innerHTML = `<img src="${sections[index].image}"  alt="design-10" class="program-image-decoration">`

      // Update program explanation text
      const programExplanation = document.querySelector('.program-explanation')
      programExplanation.textContent = sections[index].explanation

      // Update program explanation title
      const titleAbbr = document.querySelector('#tab-1')
      titleAbbr.textContent = sections[index].title1

       const titleExplanation = document.querySelector('#tab-2')
       titleExplanation.textContent = sections[index].title2
      
       //change the color for all elements with the class "toggle-color"
       const differentColorSpans = document.querySelectorAll('.toggle-color')
       differentColorSpans.forEach(function(span) {
         span.style.color = sections[index].color
       })
      
      // Update color of the background
      const sectionColor = document.querySelector('.overlay-defualt')
      sectionColor.style.backgroundColor = sections[index].color
        
    })
  
  })
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
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}