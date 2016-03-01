'use strict';

describe('Controller: StepsCtrl', function () {

  // load the controller's module
  beforeEach(module('harryAppLandingApp'));

  var StepsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StepsCtrl = $controller('StepsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
