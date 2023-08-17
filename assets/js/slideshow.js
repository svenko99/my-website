const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.slider-nav a');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');

slider.addEventListener('scroll', () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const currentIndex = Math.round(slider.scrollLeft / slideWidth);
  
  updateActiveDot(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', (event) => {
    event.preventDefault();
    const slideWidth = slides[0].getBoundingClientRect().width;
    slider.scrollLeft = index * slideWidth;
    updateActiveDot(index);
  });
});

leftArrow.addEventListener('click', () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const currentIndex = Math.round(slider.scrollLeft / slideWidth);
  const nextIndex = currentIndex - 1;
  
  if (nextIndex >= 0) {
    slider.scrollLeft = nextIndex * slideWidth;
    updateActiveDot(nextIndex);
  }
});

rightArrow.addEventListener('click', () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const currentIndex = Math.round(slider.scrollLeft / slideWidth);
  const nextIndex = currentIndex + 1;
  
  if (nextIndex < slides.length) {
    slider.scrollLeft = nextIndex * slideWidth;
    updateActiveDot(nextIndex);
  }
});

function updateActiveDot(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
