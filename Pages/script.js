let current = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
  if (current < pages.length) {
    pages[current].style.transform = 'rotateY(-180deg)';
    pages[current].style.zIndex = pages.length - current - 1;
    current++;
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    pages[current].style.transform = 'rotateY(0deg)';
    pages[current].style.zIndex = pages.length - current;
  }
}
