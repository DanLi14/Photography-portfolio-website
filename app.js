const backBtn = document.querySelector('.prevBtn');
const forwardBtn = document.querySelector('.nextBtn');
const images = document.querySelectorAll('.images');
const text = document.querySelectorAll('.text');

let imageIndex = 1;
let textIndex = 1;
showImage(imageIndex);
showText(textIndex);

function NextImage(n) {
  showImage((imageIndex += n));
  showText((textIndex += n));
}

function showImage(n) {
  let i;
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[imageIndex - 1].style.display = 'block';
}

function showText(n) {
  let i;
  if (n > text.length) {
    textIndex = 1;
  }
  if (n < 1) {
    textIndex = text.length;
  }
  for (i = 0; i < text.length; i++) {
    text[i].style.display = 'none';
  }
  text[textIndex - 1].style.display = 'block';
}

forwardBtn.addEventListener('click', (n) => NextImage(1));
backBtn.addEventListener('click', (n) => NextImage(-1));
