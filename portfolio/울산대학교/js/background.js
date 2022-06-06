$(function(){
  $(".main-gnb li").each(function(){
    $(".menu_a1",this).mouseenter(function(){
      $(this).addClass("over");
      $(".header").addClass("over");
    }).mouseleave(function(){
      $(this).removeClass("over");
      $(".header").removeClass("over");
    });
  });
  $(".sub-sub-submenu li").each(function(){
    $(".menu_a3",this).mouseenter(function(){
      $(this).addClass("over");
    }).mouseleave(function(){
      $(this).removeClass("over");
    });
  });
});
