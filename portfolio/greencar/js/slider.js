$(function(){
  let mainbannerHeight = parseInt($("#mainbanner").css("height"));
  let sectionHeight = parseInt($("section").css("height"));
  let direc = 0; // 방향 전환을 위한 변수 설정
  let maxDirec = $("#container section").length + 1;
  let wheelAction = false;
  wheelMove();
  $(window).on('wheel' , function(event){
    let eventDelta = event.originalEvent.wheelDelta;
    if ( eventDelta > 0 && wheelAction == false ) {
      // 스크롤 위로 했을때
      if ( direc <= 0 ) {
        direc = 0;
      } else {
        direc-- ;
        wheelMove();
      }
    } else if (eventDelta < 0 && wheelAction == false ){
      // 스크롤 아래로 했을때
      // direc = direc -1;
      if ( direc >= maxDirec ) {
        direc = maxDirec;
      } else {
        direc++ ;
        wheelMove();
      }
    }
  });

  function wheelMove(){
    if (direc == 0 ) {
      $("html").animate({scrollTop: direc*mainbannerHeight},{
        duration: 1000,
        start: function(){
          wheelAction = true;
        },
        complete: function(){
          wheelAction = false;
        }
      });
    } else if ( direc == 1 || direc == 2 || direc == 3 ) {
      $("html").animate({scrollTop: direc*(sectionHeight - 80)},{
        duration: 1000,
        start: function(){
          wheelAction = true;
        },
        complete: function(){
          wheelAction = false;
        }
      });
    } else if ( direc == 4 || direc == 5 ){
      $("html").animate({scrollTop: direc*(sectionHeight-30)},{
        duration: 1000,
        start: function(){
          wheelAction = true;
        },
        complete: function(){
          wheelAction = false;
        }
      });
    } else {
      $("html").animate({scrollTop: direc*(sectionHeight-60)},{
        duration: 1000,
        start: function(){
          wheelAction = true;
        },
        complete: function(){
          wheelAction = false;
        }
      });
    }
  };
});
