$(function(){
  $(".headgroup").each(function(){
    $(this).mouseenter(function(){
      $(".headgroup").addClass("onfun");
      $(".head-sub-wrap").addClass("onfun");
      $("ul.submenu").css("display","block");
    });
    $(this).mouseleave(function(){
      $(".headgroup").removeClass("onfun");
      $(".head-sub-wrap").removeClass("onfun");
      $("ul.submenu").css("display","none");
    });
  });
  // $("header").load("./header.html .headgroup");
  $("#sixth #footer").load("./footer.html .inner");
  $("#footer").load("./footer.html .inner");
  $(".btn-group a").on({
    mouseover: function(){
      $(this).css("background","#fff").css("color","#15BAB3");
      $(this).find(".right").css("background-position","-275px 0");
    },
    mouseout: function(){
      $(this).css("background","none").css("color","#fff");
      $(this).find(".right").css("background-position","-292px 0");
    }
  });
  $(".btn-group a.apple-btn").on({
    mouseover: function(){
      $(this).css("background","#fff").css("color","#6F60B5");
      $(this).find(".icon").css("background-position","-113px -248px");
    },
    mouseout: function(){
      $(this).css("background","none").css("color","#fff");
      $(this).find(".icon").css("background-position","-76px -248px");
    }
  });
  $(".btn-group a.google-btn").on({
    mouseover: function(){
      $(this).css("background","#fff").css("color","#6F60B5");
      $(this).find(".icon").css("background-position","-38px -248px");
    },
    mouseout: function(){
      $(this).css("background","none").css("color","#fff");
      $(this).find(".icon").css("background-position","0px -248px");
    }
  });
  $(".section4-btn-group li").each(function(){
    $(this).click(function(){
      let thisIndex = $(this).index() + 1;
      $(".section4-btn-group button").removeClass("onclick");
      $("#fourth .inner").removeClass("onclick");
      $(this).find("button").addClass("onclick");
      let thisClass = $("#fourth .inner:nth-child("+thisIndex+")");
      thisClass.addClass("onclick");
      thisClass.css("background-image","url('./img/bg_section040"+thisIndex+".jpg')").css("z-index",thisIndex);
    });

  });
});
