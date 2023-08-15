
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.btn');

let currentSlide = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      buttons[i].classList.add('active');
    } else {
      slide.classList.remove('active');
      buttons[i].classList.remove('active');
    }
  });
}


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 9000);
  
  