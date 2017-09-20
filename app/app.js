'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'app.svc',
  'util.svc',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.bootstrap'
])
.run(function($window, appSvc, utilSvc){
	var parseData = utilSvc.isJson($window.mosqueJSON) ? JSON.parse($window.mosqueJSON) : $window.mosqueJSON;
	appSvc.setData(parseData.test);
})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
