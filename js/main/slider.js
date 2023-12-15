document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
    let autoSlideInterval;
  
    function showSlides() {
      slideIndex = (slideIndex + 1) % slides.length;
  
      if (slideIndex === 0) {
        const clonedSlide = slides[0].cloneNode(true);
        slidesContainer.appendChild(clonedSlide);
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(-100%)`;
        slidesContainer.offsetWidth;
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = 'translateX(-200%)';
  
        setTimeout(() => {
          slidesContainer.removeChild(clonedSlide);
          slidesContainer.style.transition = 'none';
          slidesContainer.style.transform = 'translateX(0)';
          slidesContainer.offsetWidth;
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        }, 500);
      } else {
        slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
      }
    }
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(showSlides, 2000);
    }
  
    startAutoSlide();
  });
  