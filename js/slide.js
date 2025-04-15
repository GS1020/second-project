
$(document).ready(function(){
  function slide() {
    let windowWidth = $(window).width();  // 현재 화면 너비

    // 768px 이상 1099px 이하일 때
    if (windowWidth >= 768 && windowWidth <= 1099) {
      $(".foodbox").stop().animate({marginLeft:"-51%"}, 800, function(){
        $(".foodbox > div:first").appendTo(".foodbox");
        $(".foodbox").css("margin-left", 0);
      });
    } 
    // 1100px 이상일 때
    else if (windowWidth > 1099) {
      $(".foodbox").stop().animate({marginLeft:"-34%"}, 800, function(){
        $(".foodbox > div:first").appendTo(".foodbox");
        $(".foodbox").css("margin-left", 0);
      });
    }
    // 768px 이하일 때
    else {
      $(".foodbox").stop().animate({marginLeft:"-50%"}, 800, function(){
        $(".foodbox > div:first").appendTo(".foodbox");
        $(".foodbox").css("margin-left", 0);
      });
    }
  }

  setInterval(slide, 3000);
});

  // $(document).ready(function(){
  //   function slide(){
  //     $(".foodbox").stop().animate({marginLeft:"-33.8%"},800, function(){
  //       $(".foodbox > div:first").appendTo(".foodbox");
  //       $(".foodbox").css("margin-left",0);
  //     });
  //   }
  //   setInterval(slide,3000);
  // });

$(document).ready(function() {

    // 오른쪽 슬라이드
    $(".arrow2R").click(function(){
      $(".slide-track").stop().animate({marginLeft:"-100%"}, 800, function() {
        $(".slide-track > div:first").appendTo(".slide-track");
        $(".slide-track").css("margin-left", "0px");
      });
    });

    // 왼쪽 슬라이드
    $(".arrow1L").click(function(){
      $(".slide-track").css("margin-left", "-100%");
      $(".slide-track > div:last").prependTo(".slide-track");
      $(".slide-track").stop().animate({marginLeft: "0px"}, 800);
    });


});



  
  $(window).scroll(function(){
    var ws=$(this).scrollTop();

    var middlebigbox=$(".middlebigbox").offset().top;
    if(ws>middlebigbox -700){
      $(".middlebigbox").css("transform","translateY(0px)").css("opacity","1");
    };

    
   
    var submiddle=$("#submiddle").offset().top;
    if(ws>submiddle -700){
      $("#submiddle").css("transform","translateY(0px)").css("opacity","1");
    };

    var slidewrap=$(".slidewrap").offset().top;
    if(ws>slidewrap -700){
      $(".slidewrap").css("transform","translateY(0px)").css("opacity","1");
    };

    var blog=$("#blog").offset().top;
    if(ws>blog -700){
      $("#blog").css("transform","translateY(0px)").css("opacity","1");
    };

    var minibar=$("#minibar").offset().top;
    if(ws>minibar -700){
      $("#minibar").css("transform","translateY(0px)").css("opacity","1");
    };

    var footer=$(".footerbox").offset().top;
    if(ws>footer -700){
      $(".footerbox").css("transform","translateX(0px)").css("opacity","1");
    };
  });

 $(document).ready(function(){
  $(".toggle").click(function(){
    $("nav ul li").slideToggle()
  });
 });
  
  
$(document).ready(function(){
   let toggle= $(window).width();
   if (toggle > 1099){}
});

