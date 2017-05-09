"use strict";

var NasaImages = (function(originalNasa){

	let nasaArray = [];

	originalNasa.getData = () => {
		return new Promise( (resolve, reject) => {
			for (var i = 0; i<5; i++){
				var imageDate = new Date(Date.now() - (864e5*i));
				console.log("imageDate", imageDate);
				var imageDay = NasaImages.getDay(imageDate);
				console.log("imageDay", imageDay);
				var imageYear = imageDate.getFullYear();
				console.log("imageYear", imageYear);
				var imageMonth = NasaImages.getTheMonth(imageDate);
				console.log("imageMonth", imageMonth);
				// var changeDate = newDIncrement.getDate();
				// console.log("changeDate", changeDate);
				$.ajax({
					url: `https://api.nasa.gov/planetary/apod?date=${imageYear}-${imageMonth}-${imageDay}&api_key=NASAKEY`
				}).done(originalNasa.sortData);
			}
			resolve(nasaArray);
		});
	};

	originalNasa.sortData = (data) => {
		nasaArray.push(data.url);
		console.log("data sorted", nasaArray);
	};

	originalNasa.getArray = () => {
		console.log("nasaArray", nasaArray);
		return nasaArray;
	};

	return originalNasa;
})(NasaImages || {});
