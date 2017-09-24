'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'md.time.picker', 'app.svc', 'filter.ftr'])

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
		filter: null,
		sort: null
	};

	this.sortingList = setupSortingList();

	function setupSortingList() {
    	return [{
            key: 'name',
            reverse: false,
            name: 'Name',
            icon: 'glyphicon glyphicon-sort-by-alphabet'
        // }, {
        //     key: 'name',
        //     reverse: true,
        //     name: 'Name',
        //     icon: 'glyphicon glyphicon-sort-by-alphabet-alt'
        }];
    };

	// this.selected = [1];
	// this.toggle = function (item, list) {
	// 	var idx = list.indexOf(item);
	// 	if (idx > -1) {
	// 	  list.splice(idx, 1);
	// 	}
	// 	else {
	// 	  list.push(item);
	// 	}
	// };

	// this.exists = function (item, list) {
	// 	return list.indexOf(item) > -1;
	// };

	// this.isIndeterminate = function() {
	// 	return (this.selected.length !== 0 &&
	//     	this.selected.length !== this.items.length);
	// };

	// this.isChecked = function() {
	// 	return this.selected.length === this.items.length;
	// };

	// this.toggleAll = function() {
	// 	if (this.selected.length === this.items.length) {
	// 	  this.selected = [];
	// 	} else if (this.selected.length === 0 || this.selected.length > 0) {
	// 	  this.selected = this.items.slice(0);
	// 	}
	// };

	console.log(data);
}]);