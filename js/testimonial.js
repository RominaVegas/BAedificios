
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;
const duration = 8000;


function showNextTestimonial() {

  testimonials[index].classList.remove('active');


  index = (index + 1) % testimonials.length;

  testimonials[index].classList.add('active');
}


testimonials[index].classList.add('active');


setInterval(showNextTestimonial, duration);
