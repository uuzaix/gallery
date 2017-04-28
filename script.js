
document.body.onload = addImage;

function addImage() {
  const img = document.querySelector('.image');
  img.setAttribute("src", "http://lorempixel.com/600/350/?1");
  document.querySelector('.image-container').appendChild(img)
  console.log(img.getAttribute("src"))
}