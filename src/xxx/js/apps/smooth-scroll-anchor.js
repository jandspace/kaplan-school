// - - - Smooth Scroll: Add class="scroll" - - - - - - - - - - - - - - - - - - - - - //
$(".scroll").click(function(event) {
	event.preventDefault();
	//calculate destination place
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	//go to destination
	$('html,body').animate({ scrollTop: dest - 80 }, 500, 'swing');
	// Trigger by viewport
	if ($(window).width() < 991) {
		$('html,body').animate({ scrollTop: dest - 54 }, 500, 'swing');
	}
});