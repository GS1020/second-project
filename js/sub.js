$(window).scroll(function(){
    var ws=$(this).scrollTop();


    var footer=$(".footerbox").offset().top;
    if(ws>footer -700){
      $(".footerbox").css("transform","translateX(0px)").css("opacity","1");
    };
  });

 
    function slider(){
    $('.sliderbox').stop().animate({marginTop:0},800,function(){
      $('.sliderbox img:last-child').prependTo('.sliderbox');
      $('.sliderbox').css({marginTop:-500});

    });
  };
  
  setInterval(slider,3000);

  function slide1(){
    $('.thanksimg').stop().animate({marginLeft:"-50%"},800,function(){
      $('.thanksimg img:first').appendTo('.thanksimg');
      $('.thanksimg').css({marginLeft:0});
    });
  }
  setInterval(slide1,3000);