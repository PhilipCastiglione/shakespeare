$(function() {
  $('#menu').click(showMenu);

  function showMenu() {
    event.stopPropagation();
    $(event.target).toggle();
    $(event.target).nextAll().slideToggle();
    $('html').on('click', hideMenu);
  }

  function hideMenu() {
    $('html').off('click', hideMenu);
    var $icon = $('#menu');
    setTimeout(function() {
      $icon.toggle();
    }, 450);
    $icon.nextAll().slideToggle();
  }

  function word() {
    console.log('thing');
  }
});