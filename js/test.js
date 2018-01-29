
function sbSwitch() {
  if($('.sidebar').is(':visible')) {
    $('.sbSwitch a span').text(' ON');
    $('.sidebar').animate({'width':'0', 'opacity': '0',}, 400, function(){
      $('.sidebar').hide();
    });
    $('.main').animate({'width':'100%'}, 400,);
  }
  else {
    $('.sbSwitch a span').text(' OFF');
    $('.sidebar').show();
    $('.sidebar').animate({'width':'30%', 'opacity': '1',}, 400, function(){
      $('.sidebar').removeAttr('style');
    });
    $('.main').animate({'width':'70%'}, 400, function(){
      $('.main').removeAttr('style');
    });
  }
}

$(document).ready(function() {

  $('html').removeClass('no-js');

  $('.sbSwitch a').on('click', function(){
    sbSwitch();
    return false;
  });

});