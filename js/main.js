
const point = document.querySelectorAll('.space')
const stylePoints = document.querySelectorAll('.point')
const images = document.querySelectorAll('.img-slider')


point.forEach((point, index) => {
  point.addEventListener('click', () => {

    images.forEach(image => image.classList.remove('active-img-slider'))
    images[index].classList.add('active-img-slider')

    images.forEach(image => image.classList.remove('active-img-slider'))
    images[index].classList.add('active-img-slider')

    stylePoints.forEach(point => point.classList.remove('active-point'))
    stylePoints[index].classList.add('active-point')
  })
})

point[0].click();

let music = document.querySelector("audio");
music.volume = 0.6;

document.addEventListener('DOMContentLoaded', () => {

  var tl = gsap.timeline()

  tl
    .from('nav div', {
      duration: 2,
      opacity: 0,
      y: -100,
      stagger: { each: 0.2 },
      ease: 'power4.out(1)',
    }, '-=0.5')
    .from('h1', {
      duration: 2,
      opacity: 0,
      y: -50,
      ease: 'power4.out(1.7)',
    }, '-=0.5')
    .from('.spider-hero', {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power4.out',
    }, '-=2')
    .from('.slider-points .space', {
      duration: 2,
      opacity: 0,
      y: 200,
      stagger: { each: 0.2 },
      ease: 'power4.out(1.7)',
    }, '-=1.7')
    .from('.social div', {
      duration: 2,
      opacity: 0,
      y: -200,
      stagger: { each: 0.2 },
      ease: 'power4.out(1.7)',
    }, '-=2.5')
    .from('.cta', {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: 'power4.out(1.7)',
    }, '-=1.7')
    .from('.div-play', {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: 'power4.out(1.7)',
    }, '-=1.5')

    .from('.icons-ps4 img', {
      duration: 2,
      opacity: 0,
      y: 50,
      stagger: { each: 0.4 },
      ease: 'power4.out(1.7)',
    }, '-=1.5')

})