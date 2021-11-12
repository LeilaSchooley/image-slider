let current = 0;
let galleryImages = document.querySelectorAll(".gallery");

function initializeGallery() {
  resetAllImages();
  let firstGalleryImage = document.getElementById("image-one");
  firstGalleryImage.style.display = "block";
}

function resetAllImages() {
  galleryImages.forEach((element) => (element.style.display = "none"));
}

let previousButton = document.getElementById("previous");
previousButton.addEventListener("click", () => {
  resetAllImages();

  if (current === 0) {
    current = galleryImages.length;
  }

  galleryImages[current - 1].style.display = "block";

  current--;
});

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  resetAllImages();
  if (current == galleryImages.length - 1) {
    current = -1;
  }
  galleryImages[current + 1].style.display = "block";
  current++;
});

initializeGallery();
