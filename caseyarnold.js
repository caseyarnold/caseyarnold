$('#navigation').click(function () {
  $(this).hide()
  $("#navigation-screen").fadeIn("slow", function () {})
  $("#exit-button").show()
})

$('#exit-button').click(function () {
  hideWindows()
})

$("#about-trigger").click(function () {
  hideWindows()
  $("#about-screen").fadeIn("slow", function () {})
  $("#navigation").show(function() { alert(5) })
})

function hideWindows () {
  $('#exit-button').hide()
  $(".hidden").fadeOut()
  $("#navigation").show()
}
