let counter = 0;
const gallerySize = 4;

function changeImage() {
  const imgList = document.querySelectorAll('.image');
  console.log(imgList)
  for (let i = 0; i < imgList.length; i++) {
    if (i === counter) {
      console.log("visible", i)
      imgList[i].setAttribute("class", "image");
    } else {
      console.log("invisible", i)
      imgList[i].setAttribute("class", "image image-invisible");
    }
  }
  document.querySelector('.counter').innerHTML = (counter + 1) + " / " + (gallerySize + 1)
}

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', function () {
  if (counter === gallerySize) {
    counter = 0;
  } else {
    counter += 1
  }
  changeImage()
})
btnPrev.addEventListener('click', () => {
  if (counter === 0) {
    counter = gallerySize;
  } else {
    counter -= 1
  }
  changeImage()
})