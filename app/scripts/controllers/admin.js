'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('AdminCtrl', function ($scope,$http,$rootScope) {



    function update() {
      $http.get('http://localhost:8087/event/showall').success(function (data) {
        $scope.pages = data;
      });
    }





function clear() {
  $scope.starttime = "";
  $scope.endtime = "";
  $scope.startdate = "";
  $scope.enddate = "";
  $scope.detail = "";
  $scope.title = "";

}




    /*公告显示*/
    update();

    /*公告创建*/
    $scope.click = function () {
      var starttime = $scope.starttime;
      var endtime = $scope.endtime;
      var startdate = $scope.startdate;
      var enddate = $scope.enddate;
      var detail = $scope.detail;
      var title = $scope.title;
      if(startdate&&starttime&&endtime&&detail&&title&&enddate){
        $http.post('http://localhost:8087/event/create?starttime='
          +starttime.toLocaleTimeString()
          +'&endtime='+endtime.toLocaleTimeString()
          +'&startdate='+startdate.toLocaleDateString()
          +'&enddate='+enddate.toLocaleDateString()
          +'&detail='+ detail
          +'&title='+ title
        ).success(function (backData) {
          if(backData.code==1){

            update();
            clear();
            alert('创建成功');
          }else{
            alert("创建失败...")
          }
        });
      }
}

/*公告删除*/
    $scope.delete = function (id) {
      $http.post('http://localhost:8087/event/delete?id='+id).success(function (backData) {
        if(backData.code==1){
          update();
          alert(backData.message);
        }else{
          alert("删除失败...")
        }

      });
    }
/*公告编辑*/
    $scope.edit = function (id) {
$('input').value = "";

        $('#form').css('display','block');
        $('#alertAffair').css('display','block');
        setTimeout(function () {
          $('#form').addClass('alert-active');
          $('#alertAffair').addClass('alert-active');
        },1)

        $('#alertAffair').on('click',function () {
          $('#form').removeClass('alert-active');
          $('#alertAffair').removeClass('alert-active');
          setTimeout(function () {
            $('#form').css('display','none');
            $('#alertAffair').css('display','none');
          },350)
        })
      $scope.clickEdit = function () {

         var starttime = $scope.starttimeEdit;
         var endtime = $scope.endtimeEdit;
         var startdate = $scope.startdateEdit;
         var enddate = $scope.enddateEdit;
         var detail = $scope.detailEdit;
         var title = $scope.titleEdit;
        if(startdate&&starttime&&endtime&&detail&&title&&enddate){
          $http.post('http://localhost:8087/event/update?id='
            +id
            +'&starttime='+starttime.toLocaleTimeString()
            +'&endtime='+endtime.toLocaleTimeString()
            +'&startdate='+startdate.toLocaleDateString()
            +'&enddate='+enddate.toLocaleDateString()
            +'&detail='+ detail
            +'&title='+ title
          ).success(function (backData) {
            if(backData.code==1){
              $('#form').removeClass('alert-active');
              $('#alertAffair').removeClass('alert-active');
              setTimeout(function () {
                $('#form').css('display','none');
                $('#alertAffair').css('display','none');
              },350);
              update();
              clear();
              alert("更改成功");
            }else{
              alert("更改失败...");
            }

          });
        }

      }
      }






  });


