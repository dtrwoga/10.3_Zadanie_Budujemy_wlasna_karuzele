$(function(){

	var carouselList = $("#js-carousel ul"),
		carouselSlide = $("#js-carousel ul li")

	setInterval(changeSlide, 3000);
	
	function changeSlide(){
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	};

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};


});


