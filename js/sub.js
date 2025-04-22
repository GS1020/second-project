$(window).scroll(function(){
    var ws=$(this).scrollTop();

    var slider=$('.mainslider').offset().top;
    if (ws>slider -700){
      $('.mainslider').css('transform','translateY(0px)').css('opacity','1');
    }

    var fantastic=$('.fantastic').offset().top;
    if (ws > fantastic -700){
      $('.fantastic').css('transform','translateY(0px)').css('opacity','1');
    }

    var sleep=$('.sleep').offset().top;
    if (ws>sleep -700){
      $('.sleep').css('transform','translateY(0px)').css('opacity','1');
    }

    
    var yankee=$('.yankee').offset().top;
    if (ws > yankee -700){
      $('.yankee').css('transform','translateY(0px)').css('opacity','1');
    }

    var macys=$('.macys').offset().top;
    if (ws > macys -700){
      $('.macys').css('transform','translateY(0px)').css('opacity','1');
    }

    var macys=$('.macys').offset().top;
    if (ws > macys -700){
      $('.macys').css('transform','translateY(0px)').css('opacity','1');
    }

    var thanks=$('.thanks').offset().top;
    if (ws > thanks -700){
      $('.thanks').css('transform','translateY(0px)').css('opacity','1');
    }

    var input=$('.input').offset().top;
    if (ws > input -700){
      $('.input').css('transform','translateY(0px)').css('opacity','1');
    }

    var footer=$(".footerbox").offset().top;
    if(ws>footer -700){
      $(".footerbox").css("transform","translateY(0px)").css("opacity","1");
    };
  });

 




    function slider(){
    $('.sliderbox').stop().animate({marginTop:0},800,function(){
      $('.sliderbox img:last-child').prependTo('.sliderbox');
      $('.sliderbox').css({marginTop:-500});

    });
  };
  
  setInterval(slider,3000);

  // function slide1(){
  //   $('.thanksimg').stop().animate({marginLeft:"-50%"},800,function(){
  //     $('.thanksimg img:first').appendTo('.thanksimg');
  //     $('.thanksimg').css({marginLeft:0});
  //   });
  // }
  // setInterval(slide1,3000);
  let i=0
  function slide1(){
    i++
    if (i> $('.thanksimg > div:last ').index()){
      i=0;
    }
    $('.thanksimg > div').eq(i).stop().fadeIn(1000);
    $('.thanksimg > div').eq(i-1).stop().fadeOut();
  }
  setInterval(slide1,3000);
  



    function clear1(){
      document.getElementById('message').value = "";
      document.getElementById('email').value = "";

    }

    function video1(){
      document.getElementById('youtube').style.opacity='1'
    }