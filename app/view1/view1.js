'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ui.bootstrap', 'rzModule', 'md.time.picker', 'app.svc'])

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
	console.log(data);

	var ctrl = this;
	  this.search = null;
	  this.showPreSearchBar = function() {
	    return this.search == null;
	  };
	  this.initiateSearch = function() {
	    ctrl.search = '';
	  };
	  this.showSearchBar = function() {
	    return this.search != null
	  };
	  this.endSearch = function() {
	    return this.search = null;
	  };
	  this.submit = function() {
	    console.error('Search function not yet implemented');
	  }

	  // // to focus on input element after it appears
	  // $scope.$watch(function() {
	  //   return document.querySelector('#search-bar:not(.ng-hide)');
	  // }, function(){
	  //     document.getElementById('search-input').focus();
	  // });
}]);