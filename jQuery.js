$(document).ready(function () {
  $('.question').click(function () {
    $(this).next('.answer').slideToggle(500);
    $(this).find('i').toggleClass('rotate');
  });
});
