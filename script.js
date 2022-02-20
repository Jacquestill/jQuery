'use strict';

// ---------- Manipulating Styles with jQuery ----------
// ----- Changing CSS using jQuery, not prefered
// $('h1').css('color', 'green');
// $('button').css('background-color', 'purple');


// ----- Adding classes to elements using jquery
// $('h1').addClass('big-title margin-50');
// $('h1').removeClass('big-title');
// console.log($('h1').hasClass('margin-50'));


// ---------- Manipulating Text with jQuery ----------
// $('h1').text('Bye Bye');
// $('button').text('Cancel');
// $('h1').html('<em>Hello</em>');


// ---------- Manipulating Attributes with jQuery ----------
// $('a').attr('href', 'https://www.jacquestill.com');
// console.log($('h1').attr('class'));


// ---------- Adding Event Listeners with jQuery ----------

// $('h1').click(function() {
//   $('h1').css('color', 'purple');
// });
//
// $('button').click(function() {
//   $('h1').css('color', 'green');
// });
//
// $(document).keydown(function(e) {
//   console.log(e.key);
// })

// $(document).keypress(function(e) {
//   $('h1').text(e.key);
// });

// $('h1').on('mouseover', function() {
//   $('h1').css('color', 'purple');
// });
//
// $('h1').on('mouseout', function() {
//   $('h1').css('color', 'yellow');
// });


// ---------- Adding and Removing Elements with jQuery ----------

// $('h1').before('<button>New!</button>');
// $('h1').after('<button>New!</button>');
// $('h1').prepend('<button>New!</button>');
// $('h1').append('<button>New!</button>');
//
// $('button').remove();


// ---------- Website Animations with jQuery ----------

// $('button').on('click', function() {
//   $('h1').toggle();
// });

// $('button').on('click', function() {
//   $('h1').fadeToggle();
// });

// $('button').on('click', function() {
//   $('h1').slideToggle();
// });

<<<<<<< HEAD
// $('button').on('mouseover', function() {
//   $('h1').animate({opacity:0.5});
// });
// $('button').on('mouseout', function() {
//   $('h1').animate({opacity:1});
// });
=======
$('button').on('mouseover', function() {
  $('h1').animate({opacity:0.5});
});
$('button').on('mouseout', function() {
  $('h1').animate({opacity:1});
});
>>>>>>> 06479ea77142aa02b6760f23ed12c62519d80a1d

// $('button').on('click', function() {
//   $('h1').slideUp().slideDown().animate({opacity:0.5});
// });
