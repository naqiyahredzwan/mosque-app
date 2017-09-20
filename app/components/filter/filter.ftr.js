(function() {
    'use strict';

	angular
		.module('filter.ftr', [])
	    .filter('filterFtr', filterFtr);

	    function filterFtr() {
	        return function(_data, _ctrl) {
	        	var filterData = [];

	        	// console.log(_ctrl);

	    		for(var i in _data) {
	    // 			if(_data[i].trustyou.score.overall < _ctrl.reviewSliderObj.min || _data[i].trustyou.score.overall > _ctrl.reviewSliderObj.max) {
					// 	continue;
					// }

					if(_ctrl.criteria && _ctrl.criteria.filter){
						if(_ctrl.criteria.filter.search) {
							var search = angular.isObject(_ctrl.criteria.filter.search) ? _ctrl.criteria.filter.search.name : _ctrl.criteria.filter.search;
							if(_data[i].name.toLowerCase().indexOf(search.toLowerCase()) < 0) {
								continue;
							}
						}

					// 	if(_ctrl.criteria.filter.rating && !angular.equals({}, _ctrl.criteria.filter.rating)) {
					// 		if(!_ctrl.criteria.filter.rating[_data[i].rating]) {
					// 			continue;
					// 		}
					// 	}
					}
	    			filterData.push(_data[i]);
	        	}
	            return filterData;
	        };
    	};
})();