(function() {
    'use strict';

	angular
		.module('app.svc', [])
	    .factory('appSvc', appSvc);

		function appSvc() {
			var data = {};

		    var svc = {
		    	setData: setData,
		    	getData: getData
		    };
		    return svc;

		    function setData(_data) {
		    	data = _data;
		    }

		    function getData() {
		    	return data;
		    }
		};
})();