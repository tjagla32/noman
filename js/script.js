$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true
  });
  
  $('.pictures > div').mouseover(function(){
    $(this).find(".image-overlay").css({
      'opacity':'1'
    });
  });
  //-----------------------------------------
  $('.pictures > div').mouseout(function(){
    $(this).find(".image-overlay").css({
      'opacity':'0'
    });
  });
  
  $('a[href^="#"]').click(function(e){
    
    var target = $(this).attr('href');
    var strip = target.slice(1);
                                  
    var anchor = $("section[id='" + strip + "']");
    
    e.preventDefault(); //zapobiega przeładowaniu
    
   var ost = anchor.offset().top-$('.navbar-default').height();
    
    $('html, body').animate({
      
      scrollTop: ost
      
    }, 'slow');
    
  });
  
});