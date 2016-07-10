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
    +'&endtime'+endtime.toLocaleTimeString()
    +'&startdate='+startdate.toLocaleDateString()
    +'&enddate='+enddate.toLocaleDateString()
    +'&detail='+ detail
    +'&title='+ title
  ).success(function () {
    alert('公告创建成功');
  });
}

  });
