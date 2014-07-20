'use strict';

describe('Controller: WinnerModalCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var WinnerModalCtrl,
    scope,
    modalInstance;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    modalInstance = { dismiss: jasmine.createSpy('modalInstance.dismiss') };

    WinnerModalCtrl = $controller('WinnerModalCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      winner: {}
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
  it('is javascript', function () {
    expect(true).toBe(true);
  });
});
