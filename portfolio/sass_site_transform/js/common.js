$(function() {
  // console.log($("body .sub-title span").text());
  // console.log(window.location.href);
  // console.log($(location).attr("href"));

  /* 내가 한 부분
  let thisPageName = $("body .sub-title span").text();
  $("#lnb ul li a").each(function(){
    let lnbtitle = $(this).attr("href").split("/");
    lnbtitle = lnbtitle[lnbtitle.length-1].split(".");
    if ( thisPageName.toLowerCase() == lnbtitle[0] ) {
      $(this).addClass("on");
    }
  });
  */

  // 화면이 로드될때 한번만 실행하도록 변수에 할당해줌
  let currentHref = hrefFunc($(location));

  $(".sub-visual-title ul li").each(function() {
    if (hrefFunc($("a", this)) == currentHref) {
      $("a", this).addClass("active");
    }
  });

  function hrefFunc(elem) {
    let commonHref = elem.attr("href").split("/");
    commonHref = commonHref[commonHref.length - 1].split(".");
    commonHref = commonHref[0];
    return commonHref;
  }

  $(window).scroll(function() {
    let scrollLoaction = $(this).scrollTop();
    let headerHeight = parseInt($("#header").css("height"));

    if (scrollLoaction >= headerHeight - 40) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }
  });

  // $(".accosubcontent").css({
  //   "display": "none",
  //   "height": 0,
  //   "opacity": 0
  // });

  /* 아코디언. */


  // $(".accordion .accowrap .accotitle").click(function(){
  //   let thisElem = $(this);
  //   let acco = parseInt($("+.accosubcontent",thisElem).css("height"))+parseInt(thisElem.css("height"));
  //   if ( $("+.accosubcontent",thisElem).css("display") == "none"){
  //     let isAni = $(".accosubcontent").is(":animated");
  //     $(".accosubcontent").each(function(){
  //       if($(this).css("display") == "block" ){
  //         $(this).animate({height: 0},500,function(){
  //           $(this).css("display","none");
  //         });
  //       }
  //     });
  //     $("+.accosubcontent",thisElem).css("display","block").animate({height: acco, opacity: 1 },800);
  //     // if ( !isAni ) {
  //     // };
  //   }
  // });

  /* 아코디언 */

  let target = $('.accordion .accowrap'), isClass = null;
  target.on("click",function(){
    $('.accordion .accowrap').each(function(){
      $(this).find(".accotitle").removeClass("on").next().slideUp();
    });
    let _self = $(".accotitle",this);

        if(!_self.hasClass("on")) {
           _self.addClass('on').next().slideDown();
        };

        isClass = _self.attr('class');
  });
  let headerWidth = parseInt($("#header").css("width"));
  headerWidth = headerWidth - 1320;
  headerWidth = headerWidth / 2;
  $(".header-wrap").css("left", headerWidth);

});
