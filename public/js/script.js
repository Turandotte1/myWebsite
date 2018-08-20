var colors = ['rgb(99, 205, 218)', 'rgb(243, 166, 131)', 'rgb(44, 58, 71)',
'rgb(37, 247, 79)'];

var bckgColors = ['rgb(252, 66, 123)', 'rgb(6, 82, 221)', 'rgb(255, 242, 0)'];

$('#landing > a').hover(function() {
    $(this).css('background-color', bckgColors[Math.floor(Math.random() * bckgColors.length)]);
    $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
}, function () {
  $(this).css('background-color', 'rgb(11, 232, 129)');
  $(this).css('color', '#000');
});

$('#navbar > a:nth-child(-n+4):not(.logo)').hover(function() {
  $(this).css('background-color', bckgColors[Math.floor(Math.random() * bckgColors.length)]);
  $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
}, function () {
  $(this).css('background-color', 'transparent');
  $(this).css('color', '#fff');
});

$('.description > a').hover(function() {
  $(this).css('background-color', bckgColors[Math.floor(Math.random() * bckgColors.length)]);
  $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
}, function () {
  $(this).css('background-color', '#000');
  $(this).css('color', 'rgb(11, 232, 129)');
});
