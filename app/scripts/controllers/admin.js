'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('AdminCtrl', function ($scope,$http) {
    $scope.change = function () {
     console.log($scope.name);
    }
    $scope.click = function () {
      var starttime = $scope.starttime;
      var endtime = $scope.endtime;
      var startdate = $scope.startdate;
      var enddate = $scope.enddate;
      var detail = $scope.detail;
      var title = $scope.title;
  $http.post('http://localhost:8087/event/create?starttime='
    +starttime.toLocaleTimeString()
    +'&endtime='+endtime.toLocaleTimeString()
    +'&startdate='+startdate.toLocaleDateString()
    +'&enddate='+enddate.toLocaleDateString()
    +'&detail='+ detail
    +'&title='+ title
  ).success(function () {
    alert('公告创建成功');
  });
}
    $http.get('http://localhost:8087/event/showall').success(function (data) {
      $scope.pages = data;
    });
    $scope.delete = function (id) {
      $http.post('http://localhost:8087/event/delete?id='+id).success(function (backData) {
        alert(backData.message);
      });
    }

    $scope.edit = function (id) {
      $scope.EditId = id;

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
      }
    $scope.clickEdit = function (id) {
alert(id);
      var starttime = $scope.starttimeEdit;
      var endtime = $scope.endtimeEdit;
      var startdate = $scope.startdateEdit;
      var enddate = $scope.enddateEdit;
      var detail = $scope.detailEdit;
      var title = $scope.titleEdit;
      $http.post('http://localhost:8087/event/update?id='
          +id
        +'&starttime='+starttime.toLocaleTimeString()
        +'&endtime='+endtime.toLocaleTimeString()
        +'&startdate='+startdate.toLocaleDateString()
        +'&enddate='+enddate.toLocaleDateString()
        +'&detail='+ detail
        +'&title='+ title
      ).success(function (mes) {
        if(mes.code==1){
          $('#form').removeClass('alert-active');
          $('#alertAffair').removeClass('alert-active');
          setTimeout(function () {
            $('#form').css('display','none');
            $('#alertAffair').css('display','none');
          },350)
        }
      });
    }
  });


