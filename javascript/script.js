$(function() {
  $('#menu').click(showMenu);

  function showMenu() {
    event.stopPropagation();
    $(event.target).toggle();
    $('.header-wrapper').slideToggle();
    $('html').on('click', hideMenu);
  }

  function hideMenu() {
    $('html').off('click', hideMenu);
    var $icon = $('#menu');
    var $wrapper = $('.header-wrapper');
    setTimeout(function() {
      $icon.toggle();
    }, 450);
    $wrapper.slideToggle();
  }

  function word() {
    console.log('thing');
  }
});