$(document).ready(function() {
	$('.slider-inner img').addClass('fade');
	$('.slider-inner img:first').addClass('active');		

	$('.next').on('click', function() {
		var currentImg = $('.active');
		var nextImg = $('.active').next();		

		if (nextImg.length == true) {
			currentImg.removeClass('active')	;
			nextImg.addClass('active');
		}

		if (nextImg.length == false) {
			currentImg.removeClass('active')	;
			$('.slider-inner img:first').addClass('active');
		}
	});

	$('.prev').on('click', function() {
		var currentImg = $('.active');
		var prevImg = $('.active').prev();

		if (prevImg.length == true) {
			currentImg.removeClass('active')	;
			prevImg.addClass('active');
		}

		if (prevImg.length == false) {
			currentImg.removeClass('active')	;
			$('.slider-inner img:last').addClass('active');
		}		
	});

	var auto = function() {
		var currentImg = $('.active');
		var nextImg = $('.active').next();

		if (nextImg.length == true) {
			currentImg.removeClass('active')	;
			nextImg.addClass('active');
		}
		else {
			currentImg.removeClass('active')	;
			$('.slider-inner img:first').addClass('active');
		}
	}
	setInterval(auto, 6000);

	$(".slider-inner img").each(function() {
		$(".bullets_holder").append('<div class="bullets"></div>');
	});

	$("body").on("click", ".bullets", function() {
		var bulletindex = $(this).index();		
		$(".slider-inner img").removeClass('active').eq(bulletindex).addClass('active');
	});


});