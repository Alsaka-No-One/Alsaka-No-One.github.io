let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
console.log(images);

function showImage(index) {
    images.forEach(image => image.classList.remove('active'));

    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Affiche la première image au chargement
showImage(currentIndex);
