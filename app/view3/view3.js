'use strict';

angular.module('myApp.view3', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'materialCalendar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function($filter, $http, $q) {

	this.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    this.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    this.selectedDate = [];

    this.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    this.setDirection = function(direction) {
      this.direction = direction;
      this.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    this.dayClick = function(date) {
      this.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    this.prevMonth = function(data) {
      this.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    this.nextMonth = function(data) {
      this.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    this.tooltips = true;
    this.setDayContent = function(date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve("<p></p>");
        }, 1000);
        return deferred.promise;

    };

}]);