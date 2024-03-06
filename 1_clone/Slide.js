document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".Slide-img");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // 설정한 시간(예: 3000ms)마다 자동으로 다음 슬라이드로 이동
  setInterval(nextSlide, 3000);

  // 초기 슬라이드 표시
  showSlide(currentSlide);
});
