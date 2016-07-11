'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('LoginCtrl', function ($http,$scope,$location) {
    var APPID = "d909b5b12fd5edec";
    var CALLBACK = "http://f.yiban.cn/iapp54315";
    if($location.search()['verify_request']){
      alert($location.search()['verify_request']);
      $http.get('http://localhost:8087/calendar/auth/?vq='+$location.search()['verify_request']);
    }

$scope.test = function () {

  window.location='https://openapi.yiban.cn/oauth/authorize?client_id='+APPID+'&redirect_uri='+CALLBACK+'&display=html';
}

  });
