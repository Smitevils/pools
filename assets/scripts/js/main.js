$(document).ready(function() {
	$('.burger').click(function() {
		$(this).toggleClass('active');
		if ($(this).hasClass("active")) {
			$('header nav ul li').css('height', '30px');
		} else {
			$('header nav ul li').css('height', '0px');
		}
	});
});