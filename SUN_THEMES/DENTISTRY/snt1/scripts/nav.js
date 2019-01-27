var windowWidth = $(window).width();

$( "nav ul li" ).has( "ul" ).children("a").append(" +");

if (windowWidth > 576) {

	$("nav ul li").hover (function () {			
		//$(this).children("ul").css("display", "block");
		$(this).children("ul").animate({
		opacity: 1,
		top: "46",
		}, 125, function() {
		//Animation complete
		});
		return false;

	}, function () {			
		$(this).children("ul").animate({
		opacity: 0,
		top: "100"
		}, 125, function() {
		//Animation complete
		});
	});

	$("nav ul ul li").hover (function () {			
		$(this).children("ul").css("display", "block");
		$(this).children("ul").animate({
		opacity: 1,
		top: "0"
		}, 125, function() {
		//Animation complete
		});
		return false;

	}, function () {			
		$(this).children("ul").animate({
		opacity: 0,
		top: "100"
		});
	});

}

else if (windowWidth < 576) {

	$("nav ul li").click (function () {
		$(this).children("ul").slideToggle("fast");
		return false;
	});
	
}

$(".nav-toggle").on("click", function() {
	$("nav > ul").slideToggle();
	return false;
});