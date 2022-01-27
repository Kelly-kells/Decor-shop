

//const navScroll = document.querySelectorAll("#navbar");
//navScroll.forEach((element) => {
  //element.addEventListener("click", (e) => {
   // window.scrollTo(0,1500)
  //});
//});

const navScroll = document.querySelector('#link1');

function homeScroll() {
  window.scrollTo(0,0)
}
navScroll.addEventListener('click', homeScroll)


const barScroll = document.querySelector('#link2');

function aboutScroll() {
  window.scrollTo(0,1000)
}
barScroll.addEventListener('click', aboutScroll)


const thirdScroll = document.querySelector('#link3');

function serviceScroll() {
  window.scrollTo(0,1500)
}
thirdScroll.addEventListener('click', serviceScroll)


const lastScroll = document.querySelector('#link4');

function showroomScroll() {
  window.scrollTo(0,2000)
}
lastScroll.addEventListener('click', showroomScroll)


function menuToggle() {
  var menu=document.getElementById('#menu')
  menu.classList.toggle('heading #menu')
}

