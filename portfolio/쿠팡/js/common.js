'use strict'
$(function(){
  $(".language").mouseenter(function(){
    $(".select-language").css("display","block").css("transition","1s");
  }).mouseleave(function(){
    $(".select-language").css("display","none");
  });
  $(window).scroll(function(){
    let scrollLoaction = $(this).scrollTop();
    let mainSectionHeight = parseInt($("#main-section").css("height"));
    let mainSectionOffset = $("#main-section").offset();

    if ( scrollLoaction < mainSectionHeight ) {
      $("#header").removeClass("fixedHeader").removeClass("slidedown");
    } else if ( scrollLoaction >= mainSectionHeight ) {
      $("#header").addClass("fixedHeader").addClass("slidedown");
    };

    $(".subscroll-txt-wrap div").each(function(){
      let subscrolltxtOffset = $(this).offset();
      let subscrolltxtHeight = parseInt($(".subscroll-txt").css("height"));
      if ( scrollLoaction >= subscrolltxtOffset.top - 110 && scrollLoaction < subscrolltxtOffset.top + subscrolltxtHeight  ) {
        let subscrolltxtIndex = $(this).index() + 1;
        $(".subscroll-bg div img").css("opacity","0");
        $(".subscroll-bg div:nth-child("+subscrolltxtIndex+") img").css("opacity","1").css("transition",".5s");

        $("p").removeClass("active");
        $("p",this).addClass("active");
      };
    });
    $("#sub-scroll-introduce").each(function(){
      let scrollIntroduceOffset = $(this).offset();
      let scrollIntroduceHeight = parseInt($("#sub-scroll-introduce").css("height"));
      if ( scrollLoaction >= scrollIntroduceOffset.top - 220 && scrollLoaction < scrollIntroduceOffset.top + scrollIntroduceHeight  ) {
        $(".fixed-txt",this).css("opacity","1").css("transform","translateY(20px)").css("transition",".3s");
      };
    });
    $("#sub-scroll-introduce .business-item").each(function(){
      let businessItemOffset = $(this).offset();
      let businessItemHeight = parseInt($(this).css("height"));
      if ( scrollLoaction >= businessItemOffset.top - businessItemHeight && scrollLoaction < businessItemOffset.top + businessItemHeight  ) {
        let businessItemIndex = $(this).index() + 1;
        $("#sub-scroll-introduce .business-item:nth-child("+businessItemIndex+")").css("opacity","1").css("transform","translateY(-20px)").css("transition",".4s").css("transition-timing-function", "ease-in-out");
      };
    });
  });
  let windWid = $(window).width();
  let introduceWid = parseInt($("#sub-scroll-introduce").css("width"));
  let imgMarginRight = (windWid - introduceWid)/2;
  $(".subscroll-summary ul li:first-child").css("margin-right", -imgMarginRight );

  $(".gallery-slide").on(function(){

  });
  // console.log($(".gallery-slide"));

});
