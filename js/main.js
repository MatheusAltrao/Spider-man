
const point = document.querySelectorAll('.space')
const stylePoints = document.querySelectorAll('.point')
const images = document.querySelectorAll('.img-slider')


point.forEach((item, index) => {
  item.addEventListener('click', () => {

    images[0].style.opacity = '0'
    images[1].style.opacity = '0'
    images[2].style.opacity = '0'
    images[3].style.opacity = '0'

    images[index].style.opacity = '1'

    stylePoints[0].classList.remove('active-point')
    stylePoints[1].classList.remove('active-point')
    stylePoints[2].classList.remove('active-point')
    stylePoints[3].classList.remove('active-point')

    stylePoints[index].classList.add('active-point')

  })
})


let music = document.querySelector("audio");
music.volume = 0.6;

document.addEventListener('DOMContentLoaded', () => {

  var tl = gsap.timeline()

  tl
    .from('.bg-slider', {
      duration: 1,
      opacity: 0,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    }, '-=1.0')
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