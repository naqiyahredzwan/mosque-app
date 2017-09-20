'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ui.bootstrap', 'rzModule', 'md.time.picker', 'app.svc', 'filter.ftr'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['appSvc', function(appSvc) {
	var data = appSvc.getData();
	this.data = data;

	this.criteria = {
		filter: {},
		sort: {}
	};

	console.log(data);
}]);