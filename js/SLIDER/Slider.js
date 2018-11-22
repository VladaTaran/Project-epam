function Slider() {    
  this.createElements = function(arr) {
    const imgContainer = tagCreator('div', foodSlider, 'class', 'img-container');
    const buttonContainer = tagCreator('div', imgContainer, 'class', 'button-container');
    const showPrev = tagCreator('button', buttonContainer, 'class', 'slider-button prev');
    showPrev.innerHTML ='&#10094;';
    showPrev.setAttribute('onclick', 'return false');
    const showNext = tagCreator('button', buttonContainer, 'class', 'slider-button next');
    showNext.innerHTML = '&#10095';
    showNext.setAttribute('onclick', 'return false');
    
      arr.forEach(function(obj) {      
      const imgLink = tagCreator('a', imgContainer, 'class', 'image-link', 'href', obj.link);
      const slideImage = tagCreator('img', imgLink, 'class', 'food-slider-img', 'src', obj.src);
    });
  } 
};