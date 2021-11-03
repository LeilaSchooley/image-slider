function initializeGallery(imageNumber) {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element, index) => {
    if (index !== imageNumber) {
      element.classList.toggle("hidden");
    }
  });
}
function removeClass() {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element, index) =>
    element.parentNode.removeChild(element)
  );
}

function getNextImage() {
  let nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    getIndexOfCurrentImage();
  });
}

function getIndexOfCurrentImage() {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element, index) => {
    if (element.className != "gallery hidden") {
      let newImageIndex = index + parseInt(1);
      console.log(newImageIndex);
      removeClass();

      initializeGallery(newImageIndex);
    }
  });
}

initializeGallery(1);
getNextImage();
