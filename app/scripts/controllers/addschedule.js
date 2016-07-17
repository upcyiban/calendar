'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:AddscheduleCtrl
 * @description
 * # AddscheduleCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('AddscheduleCtrl', function ($scope,$http) {


    function update() {
      $http.get('http://localhost:8087/calendar/showall').success(function (data) {
        $scope.pages = data;
      });
    }





    function clear() {
      $scope.starttime = "";
      $scope.endtime = "";
      $scope.begindate = "";
      $scope.enddate = "";
      $scope.detail = "";
      $scope.schoolschedule = "";

    }




    /*学期显示*/
    update();

    /*学期创建*/
    $scope.click = function () {
      var begindate = $scope.begindate;
      var enddate = $scope.enddate;
      var schoolschedule = $scope.schoolschedule;
      if(begindate&&schoolschedule&&enddate){
        alert("yes");
        $http.post('http://localhost:8087/calendar/create?schoolschedule='
          + schoolschedule
          +'&begindate='+begindate.toLocaleDateString()
          +'&enddate='+enddate.toLocaleDateString()
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

    /*学期删除*/
    $scope.delete = function (id) {
      $http.post('http://localhost:8087/calendar/delete?id='+id).success(function (backData) {
        if(backData.code==1){
          update();
          alert(backData.message);
        }else{
          alert("删除失败...")
        }

      });
    }
    /*学期编辑*/
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

        var begindate = $scope.begindateEdit;
        var enddate = $scope.enddateEdit;
        var schoolschedule = $scope.schoolscheduleEdit;
        if(begindate&&schoolschedule&&enddate){
          $http.post('http://localhost:8087/calendar/update?id='
            +id
            +'&schoolschedule='+ schoolschedule
            +'&begindate='+begindate.toLocaleDateString()
            +'&enddate='+enddate.toLocaleDateString()

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
