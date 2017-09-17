(function() {
    'use strict';

	angular
		.module('util.svc', [])
	    .factory('utilSvc', utilSvc);

		function utilSvc() {
		    var svc = {
		    	isJson: isJson,
		    	getMinMaxValue: getMinMaxValue
		    };
		    return svc;

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// JSON
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function isJson(str) {
	            try {
	                JSON.parse(str);
	            } catch (e) {
	                return false;
	            }
	            return true;
	        }

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Min Max Value
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function getMinMaxValue(_array, _key, _type) {
		    	return Math[_type].apply(Math, _array.map(function(_item){
		    		var path = _key.split('.');

		    		while (path.length > 0) {
						var pathStep = path.shift();
						if (typeof _item[pathStep] === 'undefined') {
							_item[pathStep] = path.length === 0 ? [''] : {};
						}
						_item = _item[pathStep];
					}

		    		return _item;
		    	}));
		    };
		};
})();