document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(carousel.children);
  
  // Clone items to create an illusion of infinity
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone); // Append clones to the end
  });

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.insertBefore(clone, items[0]); // Prepend clones to the beginning
  });

});
