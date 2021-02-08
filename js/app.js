const ui = new UI();

// Create the event listeners

function eventListeners() {
  // Document Ready 
  // document.addEventListener('DOMContentLoaded')


  const navBarIcons = document.querySelectorAll('#navBar__icon');
  navBarIcons.forEach( navBarIcon => navBarIcon.addEventListener('click', ui.toggleNavBar));
}

eventListeners();
