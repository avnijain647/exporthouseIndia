$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  console.log(pixels)

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
// var windowWidth = $(window).width()
var logowidth = (20 / 100)* windowHeight
var logoheight =(23 / 100)* windowHeight
var logowidth2 = (6 / 100)* windowHeight
var logoheight2 = (7 / 100)* windowHeight
//   var difference = documentHeight - windowHeight
//   var percentage = 100 * pixels / difference
//   var bardiff =  windowWidth - 200
// var barpercentage = percentage * bardiff/100

if (pixels <= 200){
   $('.logo').css('width', logowidth - pixels/8)
   $('.logo').css('height', logoheight - pixels/8)
   $('.bar').css('opacity',  pixels/400)
   $('.section-logo').css('top', 2.5 + 'vw' )
   $('.logo-condensed').css('opacity', pixels/400)
}
else
{
  $('.bar').css('opacity',  1)
$('.logo').css('width', logowidth2 )
   $('.logo').css('height', logoheight2 )
    $('.section-logo').css('top', 2 + 'vh' )
    $('.logo-condensed').css('opacity', 1)
}
// console.log(logowidth2)
console.log(documentHeight)

})

$('.menumobile').on('click', function() {
$('.menusplash').addClass('show' )
$('.menuclose').addClass('show' )
})


$('.menuclose').on('click', function() {
$('.menusplash').removeClass('show' )
$('.menuclose').removeClass('show' )
})
