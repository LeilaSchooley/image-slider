function initializeGallery() {
  let firstGalleryImage = document.getElementById("image-one");
  firstGalleryImage.classList.add("current");
}
function toggleHiddenClass() {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element) => {
    if (element.className == "gallery hidden") {
      element.classList.remove("hidden");
    }
  });
}

function changeImage(imageIndex) {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element, index) => {
    if (index === imageIndex) {
      element.classList.add("current");
      detectCurrentImage();
    }
  });
}
function detectCurrentImage() {
  let allGalleryImages = document.querySelectorAll(".gallery");
  allGalleryImages.forEach((element) => {
    if (element.className != "gallery current") {
      element.classList.add("hidden");
    }
  });
}

function getNextImage() {
  let nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    getIndexOfCurrentImage();
  });
}

function getIndexOfCurrentImage() {
  let allGalleryImages = document.querySelectorAll(".gallery");
  for (let i = 0; i < allGalleryImages.length; i++) {
    if (allGalleryImages[i].className != "gallery hidden") {
      let newImageIndex = i + parseInt(1);

      toggleHiddenClass();
      changeImage(newImageIndex);
    }
  }
}

initializeGallery();
detectCurrentImage();
getNextImage();
