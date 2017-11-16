$(document).ready(function() {
	$('.slider-inner div').addClass('fade');
	$('.slider-inner div:first').addClass('active');

	var auto = function() {
		var currentDiv = $('.active');
		var nextDiv = $('.active').next();

		if (nextDiv.length == true) {
			currentDiv.removeClass('active');
			nextDiv.addClass('active');
		}
		else {
			currentDiv.removeClass('active');
			$('.slider-inner div:first').addClass('active');
		}
	}
	setInterval(auto, 6000);

	$('.next').on('click', function() {
		var currentDiv = $('.active');
		var nextDiv = $('.active').next();
		clearInterval(auto);

		if (nextDiv.length == true) {
			currentDiv.removeClass('active');
			nextDiv.addClass('active');
		}

		if (nextDiv.length == false) {
			currentDiv.removeClass('active');
			$('.slider-inner div:first').addClass('active');
		}
	});

	$('.prev').on('click', function() {
		var currentDiv = $('.active');
		var prevDiv = $('.active').prev();
		clearInterval(auto);

		if (prevDiv.length == true) {
			currentDiv.removeClass('active');
			prevDiv.addClass('active');
		}

		if (prevDiv.length == false) {
			currentDiv.removeClass('active');
			$('.slider-inner div:last').addClass('active');
		}
	});

	$(".slider-inner div").each(function() {
		$(".bullets_holder").append('<div class="bullets"></div>');
	});

	$("body").on("click", ".bullets", function() {
		var bulletindex = $(this).index();
		$(".slider-inner div").removeClass('active').eq(bulletindex).addClass('active');
		clearInterval(auto);
	});
});