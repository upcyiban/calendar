
$(document).ready(function () {

  alertError('请选择日期后添加计划哦');
  $('.addButton').click(function () {
    if($(this).hasClass('addButton-active')){
      $(this).removeClass('addButton-active');

    }else{
      $(this).addClass('addButton-active');
    }
  });

  $('.calendar').on('touchstart',function (e) {
    getIndex($(this).index());
    var touch = e.originalEvent.targetTouches[0];
    var x = touch.clientX;
    console.log('left'+$(this).offset().left);
    console.log(x);
    $(this).on('touchend',function (e) {
      var touch = e.originalEvent.changedTouches[0];
      var tmp1 = 0;
      tmp1 = touch.clientX - x;
      console.log('tmp1='+tmp1);
      console.log('change '+tmp1+' '+$(this).index())
      if(tmp1>80){
        last($(this).index());
      }else if(tmp1<-80){
        next($(this).index());
      }else{
        keep($(this).index());
      }

    })
  })
  var x=0;
 if($('.calendar tr p').width()>$('.calendar tr td p').height()){
   x = $('.calendar tr p').height();
 }else{
   x = $('.calendar tr p').width();
 }
  $('.calendar tr p').css({
    'height':x/2+10+'px',
    'width':x+'px',
    'padding-top':x/2-10+'px'
  }
  );
  var T;
function getIndex(t){
  T=t;
}
  function keep(t) {
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  function last(t){
    t--;
    if(t<0){
      t=0;
    }

    $('.data').text('UPC');
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  function next(t){
    t++;
    if(t>5){
      t=5;
    }

    $('.data').text('UPC');

    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  $('.calendar tr .last p').click(function () {
    last(T);
  });
  $('.calendar tr .next p').click(function () {
    next(T);
  });

$('td p').click(function () {

  $('td p').removeClass('p-active');
  $(this).addClass('p-active');
  var infor = $('.calendar').eq(T).find('.month').text()+$(this).text()
  changeToId(infor);
  var date = $(this).text();
  $('.data').text(date);
  $('.reminder').removeClass('reminder-show');
  setTimeout(function () {
    $('.reminder').addClass('reminder-show');
  },350);




  $('.addThings').on('click',function () {
    $('#data').text('');
    inputShow()
  });
  $('#yes').on('click',function () {
    inputHide();
  });
  $('#no').on('click',function () {
    inputHide();
  });


  $('.editButton').on('click',function () {
    $('.inputPlace').text($(this).prev().text());
    inputShow()
  });
  $('#yes').on('click',function () {
    inputHide();
    if($('.inputPlace').val()==''){
      alertError('输入不可为空');
    }
  });
  $('#no').on('click',function () {
    inputHide();
  });

});
function inputShow(){
  $('.inputBorder').addClass('inputBorder-active');
  $('.inputBackgrund').addClass('inputBackgrund-show');
}
  function inputHide(){
    $('.inputBorder').removeClass('inputBorder-active');
    $('.inputBackgrund').removeClass('inputBackgrund-show');
  }
  function alertError(text) {
    $('.alertError').text(text);
    $('.alertError').removeClass('alertError-active');
    $('.alertError').addClass('alertError-active');
    setTimeout(function () {
      $('.alertError').removeClass('alertError-active');
    },1000);

  }
function changeToId(infor) {

}
});
