$('#navigation').click(function () {
  $(this).hide()
  $('#navigation-screen').fadeIn('slow', function () {})
  $('#exit-button').show()
})

$('#exit-button').click(function () {
  hideWindows()
})

$('#about-trigger').click(function () {
  hideWindows()
  $('#about-screen').fadeIn('slow', function () {})
  $('#navigation').show(function () {})
})

$('#main-blurb').click(function () {
  // show portfolio page
  alert('Eventually will show portfolio page')
})

function hideWindows () {
  $('#exit-button').hide()
  $('.hidden').fadeOut()
  $('#navigation').show()
}

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

new ScrollMagic.Scene({triggerElement: "#first-section"})
  .setTween("#first-section > div", {y: "80%", ease: Linear.easeNone})
  .addIndicators()
  .addTo(controller)
