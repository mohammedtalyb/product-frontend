/**
 * this function toggles between visibility of menu items and close logo
 */
function clickMenu() {
  var menuBar = document.querySelector('#menu');
  var menuButton = document.querySelector('#menuButton');
  menuBar.classList.toggle('d-inline-block');
  if (menuButton.classList.contains("ion-ios-menu")) {
    menuButton.classList.remove('ion-ios-menu');
    menuButton.classList.add('ion-ios-close');
  } else {
    menuButton.classList.remove('ion-ios-close');
    menuButton.classList.add('ion-ios-menu');
  }
}

/**
 * this function highlights the star for ratings
 * @param {object} item - contains the element on which mouseOver event takes place 
 */
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

/**
 * it add a tick to selected color
 * @param {object} item -contains the element on which click event takes place 
 */
function selectColor(item) {
  const productColorsElement = document.querySelectorAll('.product-color li i');
  productColorsElement.forEach(element => element.classList.remove('ion-ios-checkmark'));
  item.children[0].classList.add('ion-ios-checkmark');

}
var items = 1;
/**
 * it increases the quanity of items by one
 */
function addQuantity() {
  var noOfItems = document.getElementById('no-of-items');
  items++;
  noOfItems.innerText = items;
}

/**
 * it decreases the quanity of items by one
 */
function deleteQuantity() {
  var noOfItems = document.getElementById('no-of-items');
  if (items > 1) {
    items--;
  }
  noOfItems.innerText = items;
}

/**
 * it adds number of items to cart
 */
function addToCart() {
  var cartElements = document.querySelectorAll('.cart-size span');
  cartElements.forEach(cartElement => {
    let cartValue = +cartElement.innerText;
    cartElement.innerText = cartValue + items;
    cartElement.style.display = "block";
  });
}

/**
 * it plays the video and hides the play button
 * @param {object} event - details of event occured by clicking 
 */
function play(event) {
  var video = document.querySelector('#myVideo');
  var videoOverlay = document.querySelector('.video-overlay');
  var playButton = document.querySelector('#play');
  event.preventDefault();
  playButton.style.display = "none";
  videoOverlay.style.backgroundColor = "transparent";
  video.play();
}

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', changeLinkState);
/**
 * it changes the active link and link overlay text when particular section shows up on view on scroll
 */
function changeLinkState() {
  const desktopMenulinks = document.querySelectorAll('.sidebar div a');
  const mobileMenuLinks = document.querySelectorAll('#product-mobile-menu li')
  const menuItemOverlay = document.querySelector('#menu-options-overlay h3');

  for (let index = sections.length - 1; index >= 0; index--) {
    if (sections[index].offsetTop < window.scrollY) {
      desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
      desktopMenulinks[index].classList.add('sidebar-link-active');
      menuItemOverlay.innerText = sections[index].getAttribute('data-menu-item');
      mobileMenuLinks.forEach((link) => link.classList.remove('active'));
      mobileMenuLinks[index].classList.add('active');
      break;
    }
  }
}

const sectionsToSlide = document.querySelectorAll('.slide');
window.addEventListener('scroll', checkSlide);

/**
 * it will run an animation when particular section shows up on view on scroll
 */
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

// function changeLink() {
//   const tp1 = document.querySelector('#menu-options-overlay h3');
//   const sectionDetails = document.getElementById('details');
//   const sectionDescription = document.getElementById('description');
//   const sectionTestimonials = document.getElementById('testimonials');
//   const sectionRelatedProducts = document.getElementById('related-products');
//   const isDetails = sectionDetails.offsetTop < window.scrollY;
//   const isDescription = sectionDescription.offsetTop < window.scrollY;
//   const isTestimonials = sectionTestimonials.offsetTop < window.scrollY;
//   const isRelatedProducts = sectionRelatedProducts.offsetTop < window.scrollY;
//   switch (true) {
//     case isRelatedProducts:
//         desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
//         desktopMenulinks[3].classList.add('sidebar-link-active');
//       break;
//     case isTestimonials:
//         desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
//         desktopMenulinks[2].classList.add('sidebar-link-active');
//       break;
//     case isDescription:
//         desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
//         desktopMenulinks[1].classList.add('sidebar-link-active');
//         tp1.innerText = 'description';
//       break;
//     case isDetails:
//         desktopMenulinks.forEach((link) => link.classList.remove('sidebar-link-active'));
//         desktopMenulinks[0].classList.add('sidebar-link-active');
//       break;
//   }
// }
// window.addEventListener('scroll', changeLink);
