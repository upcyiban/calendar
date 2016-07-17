'use strict';

describe('Controller: AddscheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var AddscheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddscheduleCtrl = $controller('AddscheduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddscheduleCtrl.awesomeThings.length).toBe(3);
  });
});
