$(document).ready(function(){

  //navigation hover event
  $(".topnav li, .subnav_box").on("mouseenter", function(){
    var i=$(this).index();
    $(".topnav li").removeClass("on");
    $(".topnav li").eq(i).addClass("on");
  });

  $(".topnav li, .subnav_box").on("mouseleave", function(){
    $(".topnav li").removeClass("on");
  });

  $(".menu_ico").hover(function(){
    $(this).toggleClass("active");
  });

  //mega box menu show
  $(".topnav, .hidden_sub").on("mouseenter", function(){
    $(".topnav li a").css({color:"#000"});
    $(".hidden_sub").css({display:"block"});
    $(".hidden_sub").stop().animate({
      height:"485px"
    }, 300);
  });

  $(".topnav, .hidden_sub").on("mouseleave", function(){
    $(".hidden_sub").stop().animate({height:0}, 300, function(){
      $(".topnav li a").css({color:"#fff"});
      $(".hidden_sub").css({display:"none"});
    });
  });

  $(".topnav li").on("mouseenter", function(){
    var i=$(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  //mobile accordian menu
  $(".mobile_tit").click(function(){

    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(".mobile_tit").addClass("rotate").removeClass("rotate");
    } else {
      $(".mobile_tit").addClass("rotate").removeClass("rotate");
      $(this).removeClass("rotate").addClass("rotate");
      $(".mobile_tit").removeClass("active");
      $(this).addClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
    }

  });

  //mobile menu click event show
  $(".menu_ico").click(function(){
    $(".logo").hide();
    $(".mobile_nav").animate({"left":0}, 400);
    $("section").animate({"left":"60%"}, 400);
    $(".overlay").animate({
      "opacity":0.8,
      "left":"60%",
      "width":"100%"
    });
  });

  $(".close_btn, .overlay").click(function(){
    $(".logo").show();
    $(".mobile_nav").animate({"left":"-60%"}, 400);
    $("section").animate({"left":0}, 400);
    $(".overlay").animate({
      "opacity":0,
      "left":0,
      "width":0
    });
  });

  //menu click page move
  $(".menu_btn li").on("click", function(e){
    e.preventDefault();
    var ht=$(window).height();
    var i=$(this).index();
    var nowTop=i*ht;
    $("html,body").stop().animate({"scrollTop":nowTop}, 1200, "easeOutExpo");
  });

  //menu button active when scrolling
  $(window).on("scroll", function(){
    var ht=$(window).height();
    var scroll=$(window).scrollTop();

    for(i=0; i<$("section").length; i++){
      if(scroll >= ht*i && scroll < ht*(i+1)){

        var main_txt=$("section").eq(i).find(".main_txt");
        $("section").eq(i).find(".page_logo").addClass("text_up");

        setTimeout(function(){
          main_txt.addClass("txt");
        }, 500);

        $(".menu_btn li").removeClass("on");
        $(".menu_btn li").eq(i).addClass("on");
      }
    }
  });

  //mouse wheel page move
  $("section").on("mousewheel", function(event, delta){

    if(delta>0){
      var prev=$(this).prev().offset().top;
      $("html,body").stop().animate({"scrollTop":prev}, 1000, "easeOutExpo");
    } else if(delta<0){
      var next=$(this).next().offset().top;
      $("html,body").stop().animate({"scrollTop":next}, 1000, "easeOutExpo");
    }

  });

  //page 4 slide size check function
  function sSize(autoLength){
    var liWidth=$(".slide_li").width() * autoLength;
    var liLength=$(".slide_li").width() * $(".slide_li").length;
    $(".slide_box").width(liWidth);
    $(".slide, .slide_inner").width(liLength);
  }

  function instaWidth(){
    var instaWidth=$(".insta_li").width()*3;
    var instaLen=$(".insta_li").width()*$(".insta_li").length;
    $(".insta_slide_box").width(instaWidth);
    $(".insta_slide, .insta_slide_inner").width(instaLen);
  }

  $(window).resize(function(){
    var winWidth=$(window).width();
    if(winWidth>=800){
      sSize(3);
    } else if(winWidth<800){
      sSize(2);
    }
  });

  if(matchMedia("screen and (min-width:800px)").matches){
    sSize(3);
  } else if(matchMedia("screen and (max-width:799px)").matches){
    sSize(2);
  }

  //page 4 slide EVENT
  function slideInit(){

    var count=0;
    var liWidth=$(".slide_li").width();
    var slideSize=$(".slide_box").width() / $(".slide_li").width();
    var slideLen=$(".slide_li").length-slideSize;

    $(".arr_next").click(function(){
      count++;
      if(count>slideLen){
        count=0;
      }
      $(".slide_inner").stop().animate({"margin-left":count * -liWidth}, 250);
    });

    $(".arr_prev").click(function(){
      count--;
      if(count<0){
        count=slideLen;
      }
      $(".slide_inner").stop().animate({"margin-left":count * -liWidth}, 250);
    });

  }

  function instaSlide(){
    var count=0;
    var liWidth=$(".insta_li").width();
    var slideSize=$(".insta_slide_box").width() / $(".insta_li").width();
    var slideLen=$(".insta_li").length-slideSize;

    $(".insta_next").click(function(){
      count++;
      if(count>slideLen){
        count=0;
      }
      $(".insta_slide_inner").stop().animate({"margin-left":count * -liWidth}, 250);
    });

    $(".insta_prev").click(function(){
      count--;
      if(count<0){
        count=slideLen;
      }
      $(".insta_slide_inner").stop().animate({"margin-left":count * -liWidth}, 250);
    });
  }

  $(window).resize(function(){
    $(".slide_inner").stop().animate({"margin-left":0}, 250);
    $(".insta_slide_inner").stop().animate({"margin-left":0}, 250);
    slideInit();
    instaWidth();
    instaSlide();
  });

  slideInit();
  instaWidth();
  instaSlide();



});
