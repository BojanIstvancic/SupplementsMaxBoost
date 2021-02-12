class UI {
  /* Toggle Nav Bar Function */
  toggleNavBar() {
    const navBar = document.querySelector('#navBar');
    navBar.classList.toggle("toggleNavBar");
  }

  /* Reseset classes of elements in Carousel */
  carouselResetClasses() {
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  }

  /* Carousel Controlls */
  carouselControl() {
    ui.carouselResetClasses();
    clearInterval(intervalF);

    const control = this,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => {
      if (index === dataIndex) {
        item.classList.add('active');
      }
    });
    current = dataIndex;
    intervalF = setInterval(ui.carouselSlidingPictures, interval);
  }

  /* Carousel Animating Images */
  carouselSlidingPictures() {
    ui.carouselResetClasses();
    if (current === items.length - 1) current = -1; 
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
  }
}

