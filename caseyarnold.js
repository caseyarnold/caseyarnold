const gp = gsap.timeline({ defaults: { ease: 'power1.out' } })

document.querySelector('#navigation-trigger').addEventListener('click', function () {
  showScreen('#navigation-screen')
})

document.querySelector('#exit-button img').addEventListener('click', function () {
  hideScreen('.hidden')
})

document.querySelector('#about-trigger').addEventListener('click', function () {
  hideScreen('.hidden')
  showScreen('#about-screen')
})

function hideScreen (id) {
  gp.to(id, {
    opacity: 0,
    zIndex: -500,
    duration: 0.5,
    ease: 'easeOut'
  })
}

function showScreen (id) {
  gp.to(id, {
    opacity: 1,
    zIndex: 500,
    duration: 0.5,
    ease: 'easeIn'
  })
}
