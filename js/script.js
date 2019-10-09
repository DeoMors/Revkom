$(document).ready(function() {
	$(window).scroll(function() {
		$(".bg .text").css({"transform" : "translate(0, " +  $(this).scrollTop() / 2.5 + "%)"});
	});

	$(window).resize(function() {
		setBgTextTop();
	});

	function setBgTextTop()
	{
		$(".bg .text").css("top", $(".bg img").height() / 2.1 + $("nav").height());
	}

	setBgTextTop();
});
