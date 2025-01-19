document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  function showNextImage() {
      index = (index + 1) % images.length;
      carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function showPreviousImage() {
      index = (index - 1 + images.length) % images.length;
      carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector(".next").addEventListener("click", showNextImage);
  document.querySelector(".prev").addEventListener("click", showPreviousImage);
});