const startSlide = () => {
  const sliderControlsFragment = document.createDocumentFragment();
  const sliderDivs = document.querySelectorAll('.slide');
  const sliderControlsContainer = document.querySelector(
    '.slider-control-container'
  );
  const numberOfSliderDivs = sliderDivs.length;

  // Each time we change a slide, we want to reset others to display none
  const changeSlidesToDisplayNone = () => {
    for (let index = 0; index < sliderDivs.length; index += 1) {
      sliderDivs[index].style.display = 'none';
    }
  };

  // Show corresponding slide for slider control clicked
  const showCorrespondingSlide = (sliderControls, index) => {
    changeSlidesToDisplayNone();

    document.querySelector('.active').classList.remove('active');
    sliderControls[index].classList.add('active');
    sliderDivs[index].style.display = 'block';
  };

  // Create slider controls based on the number of slider divs
  for (let index = 0; index < numberOfSliderDivs; index += 1) {
    const div = document.createElement('div');
    div.classList.add('slider-control');
    sliderControlsFragment.appendChild(div);
  }

  sliderControlsContainer.appendChild(sliderControlsFragment);

  // Generate dynamic CSS width style for each slider control, then add a listener
  const sliderControlsContainerWidth = 60;
  const sliderControlsCount = sliderControlsContainer.childElementCount;
  const sliderControls = document.querySelectorAll('.slider-control');
  const sliderControlWidth = sliderControlsContainerWidth / sliderControlsCount;

  for (let index = 0; index < sliderControlsCount; index += 1) {
    sliderControls[index].style.width = `${sliderControlWidth}%`;

    sliderControls[index].addEventListener('click', () => {
      showCorrespondingSlide(sliderControls, index);
    });
  }

  changeSlidesToDisplayNone();
  sliderDivs[0].style.display = 'block';
  sliderControls[0].classList.add('active');
};

startSlide();
