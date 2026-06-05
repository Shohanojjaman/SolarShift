$(document).ready(function () {
  // Mobile Menu
  $('.bars').click(function () {
    $(this).next('.mobile_menu').slideToggle(500);
    // $(this).find('i').toggleClass('rotate');
  });
  // FAQ
  $('.question').click(function () {
    $(this).next('.answer').slideToggle(500);
    $(this).find('i').toggleClass('rotate');
  });
  // Cookies
  $('#decline').click(() => {
    $('.cookies').fadeOut(300);
  });
  $('#accept').click(() => {
    $('.cookies').fadeOut(300);
  });
});
