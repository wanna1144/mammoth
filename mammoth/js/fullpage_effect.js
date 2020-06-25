$(document).ready(function(){

  $('#fullpage').fullpage({

    verticalCentered: false,
    navigation:true,
    navigationPosition:'right',
    fixedElements: '#header',
    responsiveWidth: 730,
    anchors:['1st', '2st', '3st', '4st', '5st', '6st'],
    afterLoad:function(anchorLink, index){
      if(anchorLink == '2st'){
        $(".main_txt_2").addClass("txt");
        $(".page_logo_2").addClass("text_up");
      }
      if(anchorLink == '3st'){
        $(".main_txt_3").addClass("txt");
        $(".page_logo_3").addClass("text_up");
      }
      if(anchorLink == '4st'){
        $(".slide_title").addClass("slide_up_1");
        $(".slide_sub_title").addClass("slide_up_2");
        $(".slides").addClass("slide_up_3");
      }

      if(anchorLink == '5st'){
        $(".insta_title").addClass("slide_up_1");
        $(".insta_sub_title").addClass("slide_up_2");
        $(".insta_slide").addClass("slide_up_3");
        $(".mobile_insta_slide").addClass("slide_up_3");
      }

      if(anchorLink == '4st' || anchorLink == '5st' || anchorLink == '6st'){
        $(".topnav li a").css({"color":"#000"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#000"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      } else {
        $(".topnav li a").css({"color":"#fff"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#fff"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      }
    }

  });

});

















//---
