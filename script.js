let counter = 0;
const gallerySize = document.querySelectorAll('.image').length;
document.querySelector('.counter').innerHTML = (counter + 1) + " / " + gallerySize

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
  document.querySelector('.counter').innerHTML = (counter + 1) + " / " + gallerySize
}

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', function () {
  if (counter + 1 === gallerySize) {
    counter = 0;
  } else {
    counter += 1
  }
  changeImage()
})

btnPrev.addEventListener('click', () => {
  if (counter === 0) {
    counter = gallerySize - 1;
  } else {
    counter -= 1
  }
  changeImage()
})

function toggleMenu() {
  const nav = document.getElementById('topnav');
  if (nav.className === "navbar") {
    nav.className += " responsive"
  } else {
    nav.className = "navbar"
  }
}

function closeMenu() {
  const nav = document.getElementById('topnav');
  if (nav.className === "navbar responsive") {
    nav.className = "navbar"
  }
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => toggleMenu());

const menuItems = document.querySelectorAll('.nav-item');
menuItems.forEach(el => el.addEventListener('click', () => closeMenu()))