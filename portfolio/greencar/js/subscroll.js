$(function(){
  $(window).scroll(function(){
    let scrollLocation = $(this).scrollTop();
    let slideHigh = $(this).height();

    $(".section.ani-sec").each(function(){
      let thisOffset = $(this).offset();
      if ( scrollLocation > thisOffset.top && scrollLocation < thisOffset.top+slideHigh*2) {
        $(".content.con2").addClass("anim");
      }
    });
  });
});
