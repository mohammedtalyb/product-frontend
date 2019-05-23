function clickMenu() {
  var menuBar = document.querySelector('#menu');
  var menuButton = document.querySelector('#menuButton');
  menuBar.classList.toggle('d-inline-block');
  if (menuButton.classList.contains("ion-ios-menu")) {
    menuButton.classList.remove('ion-ios-menu');
    menuButton.classList.add('ion-ios-close');
    // menuBar.style.height = '100%';
  } else {
    menuButton.classList.remove('ion-ios-close');
    menuButton.classList.add('ion-ios-menu');
  }
}


function starmark(item) {
  var count;
  count = item.id;
  for (var i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById((i + 1)).style.color = "#ffdd00";
    }
    else {
      document.getElementById((i + 1)).style.color = "#e3e3e3a2";
    }
  }
}
var items = 1;
function addQuantity() {
  // var addButton = document.getElementById('add-quantiy');
  var noOfItems = document.getElementById('no-of-items');
  items++;
  noOfItems.innerText = items;
}

function deleteQuantity() {
  var noOfItems = document.getElementById('no-of-items');
  if (items > 1) {
    items--;
  }
  noOfItems.innerText = items;
}


function addToCart() {
  var cartElements = document.querySelectorAll('.cart-size span');
  cartElements.forEach(cartElement => {
    let cartValue = +cartElement.innerText;
    cartElement.innerText = cartValue + items;
    cartElement.style.display = "block";
  });
}

function play(event) {
  var video = document.querySelector('#myVideo');
  var videoOverlay = document.querySelector('.video-overlay');
  var playButton = document.querySelector('#play');
  event.preventDefault();
  playButton.style.display = "none";
  videoOverlay.style.backgroundColor = "transparent";
  video.play();
}


const desktopMenulinks = document.querySelectorAll('.sidebar div a');
const mobileMenuLinks = document.querySelectorAll('#product-mobile-menu li')
const sections = document.querySelectorAll('section');

function changeLinkState() {
  for (let index = 0; index < sections.length; index++) {
    if (sections[index].offsetTop <= window.scrollY) {
      desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
      desktopMenulinks[index].classList.add('sidebar-link-active');
      mobileMenuLinks.forEach((link) => link.classList.remove('active'));
      mobileMenuLinks[index].classList.add('active');
    }
  }
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);


// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function () {
//     var context = this, args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };
const sectionsToSlide = document.querySelectorAll('.slide');
function checkSlide() {
  sectionsToSlide.forEach(sectionToSlide => {
    const slideInAt = (window.scrollY + window.innerHeight) - sectionToSlide.offsetHeight;
    const showSection = slideInAt > sectionToSlide.offsetTop;
    const textOverlay = document.querySelector('.text-overlay');
    const playButton = document.querySelector('.play-button-overlay');
    if (showSection) {
      let overlay = sectionToSlide.querySelector('.animation-overlay');
      // let downloadButton = document.querySelector('.download-pdf');
      overlay.style.cssText = "left: 100%;width: 0;";
      textOverlay.style.cssText = "transform: translateX(0) rotate(-90deg);opacity: 1;"
      playButton.style.opacity = '1';
      // downloadButton.classList.add = "left: 75%;"
    }
  });
}
window.addEventListener('scroll', checkSlide);