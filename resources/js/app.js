function clickMenu() {
    var menuBar = document.querySelector('#menu');
    var menuButton = document.querySelector('#menuButton');
    menuBar.classList.toggle('d-inline-block');
    if(menuButton.classList.contains( "ion-ios-menu")) {
        menuButton.classList.remove('ion-ios-menu');
        menuButton.classList.add('ion-ios-close');
    } else {
        menuButton.classList.remove('ion-ios-close');
        menuButton.classList.add('ion-ios-menu');
    }
}

function play(event) {
    var video = document.querySelector('#myVideo');
    var playButton = document.querySelector('#play');
    event.preventDefault();
    playButton.style.display = "none";
    video.play();
}


const desktopMenulinks = document.querySelectorAll('.sidebar div a');
const mobileMenuLinks = document.querySelectorAll('#product-mobile-menu li')
const sections = document.querySelectorAll('section');

function changeLinkState() {
  for(let index = 0; index< sections.length;index++ ) {
      if( sections[index].offsetTop <= window.scrollY) {
        desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
        desktopMenulinks[index].classList.add('sidebar-link-active');
        mobileMenuLinks.forEach((link) => link.classList.remove('active'));
        mobileMenuLinks[index].classList.add('active');
      }
  }
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);


function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const sliderImages = document.querySelectorAll('.slide');
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) + sliderImage.offsetHeight;
    console.log(slideInAt);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop + sliderImage.offsetHeight;
    const isNotScrolledPast = window.scrollY < imageBottom;
    const textOverlay = document.querySelector('.text-overlay');
    if (isHalfShown) {
        let overlay = sliderImage.querySelector('.animation-overlay');
        console.log(overlay);
      overlay.style.cssText = "left: 100%;width: 0;";
      textOverlay.style.cssText = "transform: translateX(0) rotate(-90deg);opacity: 1;"
    } 
  });
}
window.addEventListener('scroll', debounce(checkSlide));