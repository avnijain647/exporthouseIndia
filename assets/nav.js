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
   // $('.menunav').css('color',  '#fff')
   // $('.menunav').css('border-bottom',  '#ffffff')
}
else
{
  $('.bar').css('opacity',  1)
$('.logo').css('width', logowidth2 )
   $('.logo').css('height', logoheight2 )
       $('.section-logo').css('top', 2 + 'vh' )

    $('.logo-condensed').css('opacity', 1)
      // $('.menunav').css('color',  '#534741')
      // $('.menunav').css('border-bottom',  '#534741')
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


$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')
  console.log(filter)
  $('.all').hide()
  $(filter).show()
    $('.filters-list a').removeClass('category1')
  $(this).addClass('category1')
  // var boxsize = $(this).attr('data-size')
  // $(filter).removeClass('small large')
  // $(filter).addClass(boxsize)
  return true
})
