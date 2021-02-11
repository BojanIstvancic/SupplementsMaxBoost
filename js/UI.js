class UI {
  /* Toggle Nav Bar Function */
  toggleNavBar() {
    const navBar = document.querySelector('#navBar');
    navBar.classList.toggle("toggleNavBar");
  }

  /* Reseset classes of elements in Carousel */
  resetCarouselClasses() {
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  }

  /* Carousel Controlls */
  carouselControll() {
    ui.resetCarouselClasses();
    clearInterval(intervalF);

    const control = this,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => {
      if (index === dataIndex) {// Add active class to corresponding slide
        item.classList.add('active');
      }
    });
    current = dataIndex; // Update current slide
    intervalF = setInterval(ui.carouselSlidingPictures, interval); // Fire that bad boi back up
  }

  carouselSlidingPictures() {
    ui.resetCarouselClasses();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
  }
}

