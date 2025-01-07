document.addEventListener("DOMContentLoaded", function () {
  // Select the container and buttons dynamically based on the current post
  const container = document.querySelector(".container-img-posts");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");

  // Get the images dynamically using a `data-images` attribute from the container
  const images = JSON.parse(container.dataset.images || "[]");
  let currentIndex = 0; // Start with the first image
  const visibleImages = 3; // Number of images to show at once

  // Function to render images
  function renderImages() {
    container.innerHTML = ""; // Clear existing images
    for (let i = 0; i < visibleImages; i++) {
      const img = document.createElement("img");
      img.className = "img-posts";
      img.src = images[(currentIndex + i) % images.length]; // Loop back to the start
      img.alt = `Image ${currentIndex + i + 1}`; // Optional: Add alt text
      container.appendChild(img);
    }
  }

  // Event listeners for buttons
  if (btnLeft) {
    btnLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Move left
      renderImages();
    });
  }

  if (btnRight) {
    btnRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Move right
      renderImages();
    });
  }

  // Initial render
  if (images.length > 0) {
    renderImages();
  } else {
    console.warn("No images found for this post.");
  }
});
