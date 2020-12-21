const gp = gsap.timeline({ defaults: { ease: 'power1.out' } })

document.querySelector('#navigation-trigger').addEventListener('click', function () {
  gp.to('#navigation-screen', {
    opacity: 1,
    zIndex: 500,
    duration: 0.5,
    ease: 'easeIn'
  })
})

document.querySelector('#exit-button img').addEventListener('click', function () {
  gp.to('#navigation-screen', {
    opacity: 0,
    zIndex: -500,
    duration: 0.5,
    ease: 'easeOut'
  })
})
