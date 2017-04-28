
document.body.onload = addImage;

let counter = 1;
const gallerySize = 5;

function addImage() {
  const img = document.querySelector('.image');
  const counterDiv = document.querySelector('.counter');
  img.setAttribute("src", "http://lorempixel.com/600/350/?" + counter);
  document.querySelector('.image-container').appendChild(img);
  counterDiv.innerHTML = counter + " / " + gallerySize
  console.log(img.getAttribute("src"))
}

function changeImage() {
  const img = document.querySelector('.image');
  const counterDiv = document.querySelector('.counter');
  img.setAttribute("src", "http://lorempixel.com/600/350/?" + counter);
  counterDiv.innerHTML = counter + " / " + gallerySize
  console.log(img.getAttribute("src"))
}

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', function () {
  if (counter === gallerySize) {
    counter = 1;
  } else {
    counter += 1
  }
  changeImage()
})
btnPrev.addEventListener('click', () => {
  if (counter === 1) {
    counter = gallerySize;
  } else {
    counter -= 1
  }
  changeImage()
})