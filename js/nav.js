$(document).ready (function () {

	$("nav ul li").children("ul").parent("li").children("a").addClass("plus_icon");

	var windowWidth = $(window).width();
	if (windowWidth > 480) {

		$("nav ul li").hover (function () {
			$(this).children("ul").fadeIn("fast");
			return false;
		}, function () {
			$(this).children("ul").fadeOut("fast");
		});

	}

	else if (windowWidth < 480) {

		$("nav ul li").click (function () {
			$(this).children("ul").slideToggle("slow");
			return false;
		});
		
	}

	$("#menu-trigger").on("click", function() {
    	$("nav > ul").slideToggle();
    	return false;
	});

	$(".toggle-button").on("click", function() {
		$(this).toggleClass("button-open");
  	});

});