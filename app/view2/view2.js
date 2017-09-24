'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

  $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
}])

.controller('View2Ctrl', [function() {

}]);