'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'md.time.picker', 'app.svc', 'filter.ftr'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['appSvc', '$mdSidenav', function(appSvc, $mdSidenav) {
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

    this.toggleLeft = buildDelayedToggler('left');

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(navID) {
      return debounce(function() {
      	console.log('HERE')
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
            console.log('HERE');
          });
      }, 200);
    }

	console.log(data);
}]);