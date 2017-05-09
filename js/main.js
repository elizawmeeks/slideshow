"use strict";
let photoArray = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpeg"];
let captionArray = ["cat1", "cat2", "cat3", "cat4"];
var i = 0;
let photoList = `<div class="slideshow" id="${i}">
					<img src="${photoArray[i]}">
					<p class="caption">${captionArray[i]}</p>
				</div>`;

for (let j = 1; j < photoArray.length; j++){
	photoList += `<div class="slideshow hidden" id="${j}">
					<img src="${photoArray[j]}">
					<p>${captionArray[j]}</p>
				</div>`;
}

$("#stickItHere").html(photoList);
let slides = $(".slideshow");
console.log("slides", slides);


var displayNext = () => {
	console.log("clicky");
	i = i + 1;
	if (i < photoArray.length){
		console.log("i", i);
		$(`#${i}`).show("slow");
		$(`#${i-1}`).hide("slow");
	} else {
		i = 0;
		$(`#${i}`).show("slow");
		$(`#${i+ photoArray.length - 1}`).hide("slow");
	}
};

var displayBack = () => {
	console.log("clicky");
	i = i;
	console.log("original i", i);
	if (i > 0){
		i = i-1;
		console.log("i", i);
		$(`#${i}`).show("slow");
		$(`#${i+1}`).hide("slow");
	} else if (i === 0) {
		i = photoArray.length - 1;
		$(`#${i}`).show("slow");
		$(`#${0}`).hide("slow");
	}
};

let captionIn = () => {
	$(".caption").show("fast");
};

let captionOut = () => {
	$(".caption").hide("fast");
};

$("#nextArrow").click(displayNext);
$("#backArrow").click(displayBack);
$(".slideshow").mouseover(captionIn);
$(".slideshow").mouseout(captionOut);


// let getPics = NasaImages.getData()
// .then(
// 	(resolve) => {
// 		var photoArray = resolve;
// 		console.log("images", photoArray);
// 		console.log("images[0]", photoArray[0]);
// 		$("#stickItHere").html = photoArray[0];
// 	});



// e8EzLh15KXeGQVzv6ttoLUgBRoOD5xa5Av8H1IbU
