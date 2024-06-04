$(document).ready(function() {

  //메뉴설정
  $(".nav > ul > li").mouseenter(function(){
    $(".submenu").stop().slideDown(300);
    $(".nav-bg").stop().slideDown(300);
  });
  
  $(".nav > ul > li").mouseleave(function(){
    $(".submenu").stop().slideUp(300);
    $(".nav-bg").stop().slideUp(300);
  });
  //메뉴 설정 끝  
  //슬라이드 설정 시작
    setInterval(function(){
        $('#slide-Wrap').animate({'margin-top':'-300px'}, 600, function(){
            $('.slide-Img:first').appendTo('#slide-Wrap');
            $('#slide-Wrap').css({'margin-top':'0'});
        });
    }, 2500);
  //슬라이드 설정 끝
  //팝업 설정 시작
  $(".cont1 li.on").click(function(){
    $(".layer-pop").show();
    $(".popup").show();
});
$(".popup .butt").click(function(){
    $(".layer-pop").hide();
    $(".popup").hide(); 
});
  //팝업 설정 끝
});