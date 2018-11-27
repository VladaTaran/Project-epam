function SliderStart () {
  this._slider = new Slider();
  this._slider.createElements(slides);
    
  const images = document.querySelectorAll('.food-slider-img');
  const showPrev = document.querySelector('.prev');
  const showNext = document.querySelector('.next');
  let currentImageIndex = 0;
    
  function displayImage(imageNum) {
    const currentImage = images[imageNum];
    if (currentImage) {
      currentImage.style.opacity = 1;
    }
  };
    
  function hideImage(imageNum) {
    const currentImage = images[imageNum];
    if (currentImage) {
      currentImage.style.opacity = 0;
    }
  };
  
  for (let i=1; i<images.length; i++) {
    hideImage(i);
  };
  
  function onShowPrev() {
    hideImage(currentImageIndex);
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex += images.length;
    };
    displayImage(currentImageIndex);
  };
  
  function onShowNext() {
    hideImage(currentImageIndex);
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex -= images.length;
    };
    displayImage(currentImageIndex);
  };
  
  showPrev.addEventListener('click', onShowPrev);
  showNext.addEventListener('click', onShowNext);
  setInterval(event => onShowNext(event), 2500);
};
  
const mySlider = new SliderStart();