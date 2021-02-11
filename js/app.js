const ui = new UI(),
  items = document.querySelectorAll('.carouselItem'),
  controls = document.querySelectorAll('.control'),
  interval = 2000;

let current = 0;

let intervalF = setInterval(ui.carouselSlidingPictures, interval);

// Create the event listeners

function eventListeners() {
  // Document Ready 
  // document.addEventListener('DOMContentLoaded')

  const navBarIcons = document.querySelectorAll('#navBar__icon');
  navBarIcons.forEach(navBarIcon => navBarIcon.addEventListener('click', ui.toggleNavBar));

  controls.forEach(control => control.addEventListener('click',  ui.carouselControll))
}

eventListeners();

