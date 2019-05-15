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