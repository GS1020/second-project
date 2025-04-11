$(document).ready(function(){
    function slide(){
        $(".foodbox").stop().animate({marginLeft:"-34%"},800,function(){
            $(".foodbox div:first").appendTo(".foodbox");
            $(".foodbox").css("margin-left",0);
        });
    }
    setInterval(slide,3000)
});





$(document).ready(function () {
    // 클릭시 기본 이벤트 막기
    $(".arrow1R a, .arrow2L a").on("click", function (e) {
        e.preventDefault();
    });
  
    $(".arrow2L").click(function () {
      $(".slide-track > div:last").prependTo(".slide-track");
      $(".slide-track").css("margin-left", "-1400px");
      $(".slide-track").stop().animate({ marginLeft: "0px" }, 800);
    });
  
    $(".arrow1R").click(function () {
      $(".slide-track").stop().animate({ marginLeft: "-1400px" }, 800, function () {
        $(".slide-track > div:first").appendTo(".slide-track");
        $(".slide-track").css("margin-left", "0px");
      });
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
    $("nav ul li").slideToggle();
  });
 });
  
  


