$(document).ready(function(){
  let dashboards   = $("#dashboards");
  let agrupamentos = $("#agrupamentos");
  let alertas      = $("#alertas");
  let monitorar    = $("#monitorar");
  let paineladmin  = $("#paineladmin");
  let sair         = $("#sair");

  $('.menu .ui.checkbox').checkbox({
    onChecked: function() {
     $(this).parents('.item').addClass('activeSubMenu');
   },
   onUnchecked: function() {
     $(this).parents('.item').removeClass('activeSubMenu');
   }
  });

  $('.item').closest('.menu').find('.submenu').slideUp();
});

let toggleSubMenu = (elem, classSubMenu) => {
  if(elem.hasClass('active')){
    elem.removeClass('active');
    elem.closest('.menu').find('.'+classSubMenu).slideUp();
  } else {

    $('.item').closest('.menu').find('.submenu').slideUp();
    $('.vertical .item').removeClass('active');
    elem.addClass('active');
    elem.closest('.menu').find('.'+classSubMenu).slideDown();
  }
}
