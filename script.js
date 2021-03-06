let counter = 0;
const gallerySize = document.querySelectorAll('.image').length;
document.querySelector('.counter').innerHTML = (counter + 1) + " / " + gallerySize

function changeVisibleImage() {
  const imgList = document.querySelectorAll('.image');
  for (let i = 0; i < imgList.length; i++) {
    if (i === counter) {
      imgList[i].setAttribute("class", "image");
    } else {
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
  changeVisibleImage()
})

btnPrev.addEventListener('click', () => {
  if (counter === 0) {
    counter = gallerySize - 1;
  } else {
    counter -= 1
  }
  changeVisibleImage()
})

function toggleResponsiveMenu() {
  const nav = document.getElementById('topnav');
  if (nav.className === "navbar") {
    nav.className += " responsive"
  } else {
    nav.className = "navbar"
  }
}

function closeResponsiveMenu() {
  const nav = document.getElementById('topnav');
  if (nav.className === "navbar responsive") {
    nav.className = "navbar"
  }
}

const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelectorAll('.nav-item');

menuIcon.addEventListener('click', () => toggleResponsiveMenu());
menuItems.forEach(el => el.addEventListener('click', () => closeResponsiveMenu()))