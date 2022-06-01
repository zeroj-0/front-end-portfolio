$(function(){
  let currentHref = hrefFunc($(location));

  $(".sub-visual-title ul li").each(function(){
    if ( hrefFunc($("a", this)) == currentHref ) {
      $("a", this).addClass("active");
    }
  });

  function hrefFunc(elem){
    let commonHref = elem.attr("href").split("/");
    commonHref = commonHref[commonHref.length-1].split(".");
    commonHref = commonHref[0];
    return commonHref;
  }

  $(window).scroll(function(){
    let scrollLoaction = $(this).scrollTop();
    let headerHeight = parseInt($("#header").css("height"));

    if ( scrollLoaction >= headerHeight - 50 ) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }

    $("section").each(function(){
      let scrollIntroduceOffset = $(this).offset();
      let scrollIntroduceHeight = parseInt($(this).css("height"));
      if ( scrollLoaction >= scrollIntroduceOffset.top - 164 && scrollLoaction < scrollIntroduceOffset.top + scrollIntroduceHeight  ) {
        $(this).css("opacity","1").css("transform","translateY(0)").css("transition",".6s");
      };
    });
  });

  $("a.market").click(function(){
    alert(" (ง˙∇˙)ว 준비중입니당 (ว˙∇˙)ง");
  });
  $(".container.main p, .container.main .display-4").css("animation-name","ani").css("animation-duration","1s");

});
