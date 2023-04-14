const images = [
  {
    title: 'Amazon echo',
    subtitle: 'The great music device for the amusement',
    src: 'https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg',
  },
  {
    title: 'Nike air jordan shoe',
    subtitle: 'The great sports shoe for the young generation',
    src: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg',
  },

  {
    title: 'adidas german shoe',
    subtitle: 'The best shoe for the young generation',
    src: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/04c1f213-f370-4625-be04-1d1f833eeed4/nike-sb-inside-nike-skateboarding.png',
  },
];

let scrollPosition = 0;
// place images after the body tag
const slider = document.createElement('div');
slider.setAttribute('class', 'slider');
const sliderContainer = document.createElement('div');
sliderContainer.setAttribute('id', 'sliderContainer');
sliderContainer.appendChild(slider);
document.body.insertAdjacentElement('afterbegin', sliderContainer);

// buttons
const prevButton = document.createElement('button');
prevButton.setAttribute('id', 'previous');
prevButton.textContent = '<';
const nextButton = document.createElement('button');
nextButton.setAttribute('id', 'next');
nextButton.textContent = '>';

const slideBtns = document.createElement('div');
sliderContainer.appendChild(slideBtns);

slideBtns.appendChild(prevButton);
slideBtns.appendChild(nextButton);

images.forEach((item, index) => {
  const image = document.createElement('img');
  image.src = item.src;
  image.alt = item.title;
  image.setAttribute('class', 'imgSlide');
  image.setAttribute('data-id', index + 1);
  slider.appendChild(image);
});

if (scrollPosition < slider.offsetWidth) {
  prevButton.disabled = true;
}

prevButton.addEventListener('click', function () {
  scrollPosition -= slider.offsetWidth;
  if (scrollPosition < slider.offsetWidth) {
    prevButton.disabled = true;
  }

  if (scrollPosition <= slider.scrollWidth - slider.offsetWidth) {
    nextButton.disabled = false;
  }

  slider.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: 'smooth',
  });
});

nextButton.addEventListener('click', function () {
  scrollPosition += slider.offsetWidth;

  if (scrollPosition >= slider.scrollWidth - slider.offsetWidth) {
    nextButton.disabled = true;
  }
  if (scrollPosition >= slider.offsetWidth) {
    prevButton.disabled = false;
  }
  slider.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: 'smooth',
  });
});
