"use strict";

var NasaImages = (function(originalNasa){

	originalNasa.getDay = (date) => {
		var startDate = date.getDate();
		switch(true){
			case(startDate<10):
				return "0" + startDate;
			case(startDate>=10):
				return startDate;
		}
	};

	originalNasa.getTheMonth = (date) => {
		var startMonth = date.getMonth() + 1;
		switch(true){
			case(startMonth<10):
				return "0" + startMonth;
			case(startMonth>=10):
				return startMonth;
		}
	};

	return originalNasa;
})(NasaImages || {});
