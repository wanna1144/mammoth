$(document).ready(function(){

  var dot=$(".dot");

  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var historyTop=$(".history_con").offset().top;
    var coloredLine=$(".line>span");
    var coloredLineTop=coloredLine.offset().top;
    $(".text").text(scroll-$(window).height()/2);

    $(".line>span").css({height:scroll-historyTop+$(window).height()/2});

    for(var i=0; i<$(".dot").length; i++){

      if(coloredLineTop+coloredLine.height() >= $(".dot").eq(i).offset().top){
        $(".left").eq(i).addClass("fadeleft");
        $(".right").eq(i).addClass("faderight");
      }

    }

    if(scroll>0){
      $(".header").css({"background":"rgba(0, 0, 0, 0.5)"});
    } else {
      $(".header").css({"background":"transparent"});
    }

    //console.log(coloredLineTop);
  });

});
