/* scroll */
var scrollTop = 0;
/*вычисляем скролл по вертикали*/
function scrollEvent() {
	if (scrollTop >= 100) {
		$(".fixed").addClass('scrolled');
	} else {
		$(".fixed").removeClass('scrolled');
	}
}

$(document).ready(function() {
	$('.burger').click(function() {
		$(this).toggleClass('active');
		if ($(this).hasClass("active")) {
			$('header nav ul li').css('height', '40px');
		} else {
			$('header nav ul li').css('height', '0px');
		}
	});
	$(document).scroll(function() {
		scrollTop = $(document).scrollTop();
		console.log(scrollTop);
		scrollEvent();
	});
});