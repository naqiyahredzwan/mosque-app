(function() {
    'use strict';

	angular
		.module('filter.ftr', [])
	    .filter('filterFtr', filterFtr);

	    function filterFtr() {
	        return function(_list, _ctrl) {
	        	// console.log(_ctrl);

	        	var filterData = [];

    			var classes = _ctrl.data.classes;
    			var groupBy = _ctrl.data.groupBy;

    			for(var i in _list) {
    				if(angular.isUndefined(_list[i].id)) { 
    					continue; 
    				}

    				var id = _list[i].id;

    				if(angular.isUndefined(groupBy[id])) { 
    					continue; 
    				}

    				if(!validateSearch(_ctrl, _list[i])) {
					 	continue;
					}

					filterData.push(_list[i]);
    			}


	    // 		for(var i in _list) {
	    // // 			if(_list[i].trustyou.score.overall < _ctrl.reviewSliderObj.min || _list[i].trustyou.score.overall > _ctrl.reviewSliderObj.max) {
					// // 	continue;
					// // }
	    //     	}

	            return filterData;
	        };
    	};

    	function validateSearch(_ctrl, _item) {
    		if(_ctrl.criteria && _ctrl.criteria.filter){
				if(_ctrl.criteria.filter.search) {
					var search = angular.isObject(_ctrl.criteria.filter.search) ? _ctrl.criteria.filter.search.name : _ctrl.criteria.filter.search;
					if(_item.name.toLowerCase().indexOf(search.toLowerCase()) < 0) {
						return false;
					}
				}

				if(_ctrl.criteria.filter.group && !angular.equals({}, _ctrl.criteria.filter.group)) {
					var id = _ctrl.data.groupBy[_item.id].group_id;

					if(!_ctrl.criteria.filter.group[id]) {
						return false;
					}
				}

				if(_ctrl.criteria.filter.district && !angular.equals({}, _ctrl.criteria.filter.district)) {
					if(!_ctrl.criteria.filter.district[_item.district]) {
						return false;
					}
				}

				if(_ctrl.criteria.filter.language && !angular.equals({}, _ctrl.criteria.filter.language)) {
					var id = _ctrl.data.groupBy[_item.id].language_id;

					if(!_ctrl.criteria.filter.language[id]) {
						return false;
					}
				}
			}
			return true;
    	};
})();