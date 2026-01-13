let current = 0;
const pages = document.querySelectorAll('.page');

// Set initial z-index dynamically
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

function nextPage() {
  if (current < pages.length - 1) {
    pages[current].style.transform = 'rotateY(-180deg)';
    current++;
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    pages[current].style.transform = 'rotateY(0deg)';
  }
}
