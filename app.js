const backBtn = document.querySelector('.prevBtn');
const forwardBtn = document.querySelector('.nextBtn');
const images = document.querySelectorAll('.images');
const text = document.querySelectorAll('.text');
const playBtn = document.querySelector('.playBtn');
const slideShowText = document.querySelector('.slideshow');

let imageIndex = 1;
let textIndex = 1;
let p = false;
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

function slideShow(p = true) {
  if (imageIndex > images.length) {
    imageIndex = 1;
    textIndex = 1;
    showImage();
    showText();
    slideShowText.classList.remove('active');
    p = false;
    playBtn.disabled = false;
  }
  if (p) {
    slideShowText.classList.add('active');
    showImage();
    showText();
    imageIndex++;
    textIndex++;
    playBtn.disabled = true;
    setTimeout(slideShow, 10000);
  } else {
    return;
  }
}

forwardBtn.addEventListener('click', (n) => NextImage(1));
backBtn.addEventListener('click', (n) => NextImage(-1));
playBtn.addEventListener('click', (p) => slideShow((p = true)));
