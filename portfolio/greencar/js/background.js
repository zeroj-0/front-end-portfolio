$(function(){
  // $(".headgroup #gnb li").each(function(){
  //   $("a",this).mouseenter(function(){
  //     $(this).css("border-bottom","2px solid #00be5a");
  //   });
  // });
  $(window).scroll(function(){
    let scrollLocation = $(this).scrollTop();
    let slideHigh = $(this).height();

    $("#mainbanner").each(function(){
      let thisOffset = $(this).offset();
      if ( scrollLocation >= -1 && scrollLocation < thisOffset.top+slideHigh) {
        $("iframe").addClass("on");
      } else {
        $("iframe").removeClass("on");
      }
    });
    $("#fifth").each(function(){
      let thisOffset = $(this).offset();
      if ( scrollLocation > thisOffset.top && scrollLocation < thisOffset.top+slideHigh*2) {
        $(".headgroup").addClass("menufixed");
      } else {
        $(".headgroup").removeClass("menufixed");
      }
    });
  });
});
