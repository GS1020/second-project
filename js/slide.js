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
    $(".arrow1 a, .arrow2 a").on("click", function (e) {
        e.preventDefault();
    });
  
    $(".arrow1").click(function () {
      $(".slide-track > div:last").prependTo(".slide-track");
      $(".slide-track").css("margin-left", "-1400px");
      $(".slide-track").stop().animate({ marginLeft: "0px" }, 800);
    });
  
    $(".arrow2").click(function () {
      $(".slide-track").stop().animate({ marginLeft: "-1400px" }, 800, function () {
        $(".slide-track > div:first").appendTo(".slide-track");
        $(".slide-track").css("margin-left", "0px");
      });
    });
  });
  
  
  
  



